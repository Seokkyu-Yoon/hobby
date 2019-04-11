/* eslint-disable camelcase */
/**
 * This function is called when trucks across the bridge
 * @param {Number} bridge_length
 * @param {Number} weight
 * @param {Array<Number>} truck_weights
 * @return {Number} Delayed time
 */
function solution(bridge_length, weight, truck_weights) {
  const trucks = Array(bridge_length).fill(0);

  const getTime = (truck_index, time) => {
    if (truck_index === truck_weights.length) return time + bridge_length;

    const truck = truck_weights[truck_index];
    if (truck <= weight) {
      weight += trucks.shift();
      trucks.push(truck);
      weight -= truck;
      return getTime(truck_index + 1, time + 1);
    }
    while (truck > weight) {
      weight += trucks.shift();
      trucks.push(0);
      time++;
    }
    trucks[bridge_length - 1] = truck;
    weight -= truck;
    return getTime(truck_index + 1, time);
  };

  return getTime(0, 0);
}

const testCase = [];
testCase.push({
  bridge_length: 2,
  weight: 10,
  truck_weights: [7, 4, 5, 6],
});
testCase.push({
  bridge_length: 100,
  weight: 100,
  truck_weights: [10],
});
testCase.push({
  bridge_length: 100,
  weight: 100,
  truck_weights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
});

const runner = () => testCase
    .forEach(({bridge_length, weight, truck_weights}) => {
      console.log(solution(bridge_length, weight, truck_weights));
    });

module.exports = runner;

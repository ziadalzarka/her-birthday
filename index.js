const calculateCost = (
  objectsCount,
  objectsAverageSize,
  WCU,
  costPerWCU = 0.00081
) => {
  const wcuPerObject = objectsAverageSize / 1024;
  const totalWCUNeeded = wcuPerObject * objectsCount;
  const timeInSeconds = totalWCUNeeded / WCU;
  const timeInHours = timeInSeconds / (60 * 60);
  const cost = costPerWCU * WCU * timeInHours;
  return { wcuPerObject, timeInHours, cost };
};

console.log(calculateCost(50000000, 512, 200));

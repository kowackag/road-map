export const calculator = (dist, price) => {
  const limitDist = 800;
  const limitPrice = 1000;
  
  const countTotalPrice = (dist, price) => {
    return (Number(price) * Number(dist) * 1.1).toFixed(2);
  };
  const totalPrice = countTotalPrice(dist, price);

  const timeCountedByDistance = Math.ceil(Number(dist) / limitDist);
  const timeCountedByPrice = Math.ceil(
    (Number(price) * Number(dist)).toFixed(2) / limitPrice
  );
  const totalTime =
    timeCountedByDistance > timeCountedByPrice
      ? timeCountedByDistance
      : timeCountedByPrice;

  return { totalPrice, totalTime };
};

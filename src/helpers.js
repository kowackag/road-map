// -----------version 1-------------------

export const calculator = (dist, price) => {
  const limitDist = 800;
  const pricePerDay = 1000;

  const totalTime = Math.ceil(Number(dist) / limitDist);

  const totalPrice = (
    (Number(price) * Number(dist) + totalTime * pricePerDay) *
    1.1
  ).toFixed(2);

  return { totalPrice, totalTime };
};

// -----------version 2-------------------

// export const calculator = (dist, price) => {
//   const limitDist = 800;
//   const limitPrice = 1000;

//   const countTotalPrice = (dist, price) => {
//     return (Number(price) * Number(dist) * 1.1).toFixed(2);
//   };
//   const totalPrice = countTotalPrice(dist, price);

//   const timeCountedByDistance = Math.ceil(Number(dist) / limitDist);
//   const timeCountedByPrice = Math.ceil(
//     (Number(price) * Number(dist)).toFixed(2) / limitPrice
//   );

//   const totalTime =
//     timeCountedByDistance > timeCountedByPrice
//       ? timeCountedByDistance
//       : timeCountedByPrice;

//   return { totalPrice, totalTime };
// };

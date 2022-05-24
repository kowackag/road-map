export const countTime = (dist) => {
  const limit = 800;
  const time = Math.ceil(Number(dist) / limit);
  return time;
};

export const validateData = ({ pointA, pointB }) => {
  let errors = {};
  if (!pointA) {
    const copyErrors = { pointA: 'Choose start point' };
    errors = { ...errors, ...copyErrors };
  } else if (!pointA.lat || !pointA.lng) {
    const copyErrors = { pointA: 'Invalid address (choose from list)' };
    errors = { ...errors, ...copyErrors };
  }

  if (!pointB) {
    const copyErrors = { pointB: 'Choose destination' };
    errors = { ...errors, ...copyErrors };
  } else if (!pointB.lat || !pointB.lng) {
    const copyErrors = { pointB: 'Invalid address (choose from list)' };
    errors = { ...errors, ...copyErrors };
  }
  return errors;
};

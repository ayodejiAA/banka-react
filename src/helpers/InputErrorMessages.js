export default (error) => {
  const validationErrors = {};
  const errorDetails = error.details;
  const errorsLength = errorDetails.length;

  for (let i = errorsLength - 1; i >= 0; i -= 1) {
    const errorDetail = errorDetails[i];
    const input = errorDetail.path[0];
    validationErrors[input] = errorDetail.message;
  }

  return validationErrors;
};

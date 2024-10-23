export const createError = (status, message) => {
  const err = new Error(message || "Something went wrong");
  err.status = status;
  return err;
};

export const IsValid = () => {
  const isValid = localStorage.getItem("Authenticate") === "true";
  return isValid;
};

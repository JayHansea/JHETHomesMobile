export const formatPrice = (price) => {
  // Remove dollar sign and commas, convert to float, and round to 2 decimal places
  return parseFloat(price.replace(/[$,]/g, "")).toFixed(2);
};

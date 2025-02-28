export const formatPrice = (amount: number): string => {
  return Intl.NumberFormat('in-ID', {}).format(amount);
};

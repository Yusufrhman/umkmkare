const formatRupiah = (amount: number): string => {
const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0, // Menghilangkan desimal
  maximumFractionDigits: 0, // Menghilangkan desimal
});
  return formatter.format(amount);
};

export default formatRupiah;

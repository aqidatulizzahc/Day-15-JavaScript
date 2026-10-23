const subtotalBelanja = 120000;
let ongkir = 0;

if (subtotalBelanja >= 100000) {
  console.log("Gratis ongkir!");
  ongkir = 0;
} else {
  console.log("Ongkir Rp 15000");
  ongkir = 15000;
}

const subtotal = 300000;
let discountPercent = 0;
if (subtotal >= 500000) {
  discountPercent = 15;
} else if (subtotal >= 200000) {
  discountPercent = 10;
} else {
  discountPercent = 0;
}

// Hitung total bayar
const hargaPotonganDiscount = subtotal * (discount / 100);
const totalBayar = subtotal - hargaPotonganDiscount;
console.log("Diskon" + discountPercent + "%");
console.log("totalBayar: Rp" + totalPay);

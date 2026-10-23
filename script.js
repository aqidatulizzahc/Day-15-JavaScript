const form = document.querySelector("#productForm");
const priceElement = document.querySelector("#price");
const variantInput = document.querySelector("#variant");
const quantityInput = document.querySelector("#quantity");
const summary = document.querySelector("#summary");
const unitList = document.querySelector("#unitList");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Cegah refresh halaman
  unitList.textContent = ""; // Kosongkan daftar unit sebelumnya
  // Ambil nilai dari input
  const price = Number(priceElement.dataset.price);
  const quantity = Number(quantityInput.value);
  const variant = variantInput.value;

  console.log("Price:", price, "Quantity:", quantity, "Variant:", variant);

  // Kode Langkah 3-5 akan dimasukkan di sini
});
let availableStock;

switch (variant) {
  case "S":
    availableStock = 5;
    break;
  case "M":
    availableStock = 3;
    break;
  case "L":
    availableStock = 0;
    break;
  default:
    summary.textContent = "Varian tidak valid.";
    return; // Hentikan proses
}

console.log("Available stock:", availableStock);
if (!Number.isInteger(quantity) || quantity <= 0) {
  summary.textContent = "Jumlah harus bilangan bulat positif.";
  return;
} else if (!Number.isFinite(price) || price <= 0) {
  summary.textContent = "Harga product belum tersedia.";
  return;
} else if (availableStock === 0) {
  summary.textContent = "Varian sedang habis.";
  return;
} else if (quantity > availableStock) {
  summary.textContent = "Jumlah melebihi stok varian.";
  return;
} else {
  // VALIDASI BERHASIL - lanjut ke step 3
  const subtotal = price * quantity;
  summary.textContent =
    "Varian " + variant + " | Jumlah " + quantity + " | Subtotal Rp" + subtotal;
}
for (let unit = 1; unit <= quantity; unit++) {
  const item = document.createElement("li");
  item.textContent = "Unit " + unit + " | Varian " + variant;
  unitList.appendChild(item);
}

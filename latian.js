// ========================================
// TOKO BAJU: LOGIC BERTINGKAT
// ========================================

// INPUT: kondisi pembelian
const hasKaos = true;
const hasCelana = true;
const hasKemeja = false;
const isMember = false;
const isSale = false;

// KONSTANTA: harga produk
const HARGA_KAOS = 150000;
const HARGA_CELANA = 250000;
const HARGA_KEMEJA = 200000;

// HITUNG SUBTOTAL
let subtotal = 0;

if (hasKaos) subtotal += HARGA_KAOS;
if (hasCelana) subtotal += HARGA_CELANA;
if (hasKemeja) subtotal += HARGA_KEMEJA;

// HITUNG JUMLAH ITEM
let jumlahItem = 0;

if (hasKaos) jumlahItem++;
if (hasCelana) jumlahItem++;
if (hasKemeja) jumlahItem++;

// CEK BUNDLE: item >= 3 DAN bukan sale
const bundleAvailable = jumlahItem >= 3 && !isSale;

// CEK BIG SPENDER: subtotal >= 400000 DAN member
const isBigSpender = subtotal >= 400000 && isMember;

// CEK ELIGIBLE: bundle ATAU big spender
const isEligible = bundleAvailable || isBigSpender;

// CETAK HASIL
console.log("=== HASIL TOKO BAJU ===");
console.log("Subtotal: Rp" + subtotal);
console.log("Jumlah item: " + jumlahItem);
console.log("Bundle tersedia: " + bundleAvailable);
console.log("Big spender: " + isBigSpender);
console.log("Eligible: " + isEligible);

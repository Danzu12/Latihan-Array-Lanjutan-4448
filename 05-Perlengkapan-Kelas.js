const daftarBarang = [
    "Buku Tulis",
    "Pensil",
    "Penghapus",
    "Spidol"
];
/*const daftarBarang = [];*/

const barangBaru = "Pulpen"; // Nilai Pengujian ""
const barangDicari = "Penghapus" // Nilai Pengujian "Laptop"
const barangDihapus = "Spidol"; // Nilai Pengujian "Monitor"

console.log("=== PENGELOLAAN PERLENGKAPAN KELAS ===");

//Tahap 1 - Menampilkan Data awal
console.log("Jumlah barang awal:", daftarBarang.length);

//Tahap 2 - Menambahkan Barang
console.log("\n[Tambah Barang]");
if (barangBaru !== "") {
    daftarBarang.push(barangBaru);
    console.log(barangBaru, "Berhasil ditambahkan.");
} else {
    console.log("Penambahan ditolak");
}

//Tahap 3 - Mencari Barang
console.log("\n[Pencarian Barang]");

if (daftarBarang.includes(barangDicari)) {
    const indeksBarang = daftarBarang.indexOf(barangDicari);
    console.log(barangDicari, "ditemukan pada indeks", indeksBarang);
} else {
    console.log("Barang tidak ditemukan");
}

//Tahap 4 - Menghapus Barang
console.log("\n[Hapus Barang]");

const indeksBarang = daftarBarang.indexOf(barangDihapus);

if (indeksBarang !== 0) {
    daftarBarang.splice(indeksBarang, 1)
    console.log(barangDihapus, "Berhasil dihapus.");
}
else {
    console.log("Penghapusan ditolak");
}

//Tahap 5 - Menampilkan hasil akhir
console.log("\n=== DAFTAR BARANG TERBARU ===");

if (daftarBarang.length === 0) {
    console.log("Daftar barang kosong");
} else {
    for (let indeks = 0; indeks < daftarBarang.length; indeks++) {
        console.log((indeks + 1) + ". " + daftarBarang[indeks]);
    }
}

console.log("\nTotal barang:", daftarBarang.length);
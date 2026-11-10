const daftarBuku = [
"Html Dasar",
"Css Dasar",
"JavaScript Dasar",
"PHP Dasar"
];

//No 1
console.log(daftarBuku);

//No 2
console.log("Indeks dari Css Dasar: " , daftarBuku.indexOf("Css Dasar"));

//No 3
const dataLama = daftarBuku.splice(1, 1, "Css Modern");
console.log("Daftar buku setelah diubah: " , daftarBuku);

//No 4
const dataBaru = daftarBuku.splice(3, 0, "git Dasar");
console.log("Daftar buku setelah menambahkan data baru: " , daftarBuku);

//No 5
const dataDihapus = daftarBuku.splice(4, 1);
console.log("Daftar buku setelah menghapus data: " , daftarBuku);

//No 6
console.log(daftarBuku);

//No 7
console.log("jumlah buku: " , daftarBuku.length);
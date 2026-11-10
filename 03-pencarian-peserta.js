const pesertaLomba = [
"Alya" ,
"Bintang" ,
"Citra" ,
"Daffa" ,
"Nabila"
];

const namaDicari = "Citra"; // Ganti dengan nama Raka untuk pengujian nama yang tidak terdaftar

console.log("=== Pencarian Peserta Lomba ===");

if (pesertaLomba.includes(namaDicari)) {
    const indeksPeserta = pesertaLomba.indexOf(namaDicari);

    console.log("Nama:" , namaDicari);
    console.log("Status: Terdaftar");
    console.log("Indeks:" , indeksPeserta);
    console.log("Nomor Urut:" , indeksPeserta + 1);
} else {
    console.log("Nama:" , namaDicari);
    console.log("Status: Tidak Terdaftar");
    console.log("Data peserta tidak ditemukan");
}
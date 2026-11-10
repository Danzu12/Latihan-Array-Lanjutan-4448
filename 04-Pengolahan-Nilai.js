const nilaiUlangan = [78, 60, 95, 72, 88, 75];
const batasNilai = 75;

let jumlahTuntas = 0;
let jumlahTidakTuntas = 0;

console.log("=== Daftar Nilai Ulangan ===");

for (let indeks = 0; indeks < nilaiUlangan.length; indeks++) {
    console.log(`Siswa ${indeks + 1}: ${nilaiUlangan[indeks]}`);
}

for (const nilai of nilaiUlangan) {
    if (nilai >= batasNilai) {
        jumlahTuntas++;
    } else {
        jumlahTidakTuntas++;
    }
}

console.log("=== REKAPITULASI ===")
console.log("Jumlah Siswa:", nilaiUlangan.length);
console.log("Jumlah Tuntas:", jumlahTuntas);
console.log("Jumlah Tidak Tuntas:", jumlahTidakTuntas);
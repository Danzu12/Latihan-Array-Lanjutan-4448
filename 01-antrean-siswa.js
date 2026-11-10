const antreanSiswa = ["Andi", "Budi", "Citra"];

//No 1
console.log(antreanSiswa);
console.log("jumlah siswa: " , antreanSiswa.length);

//No 2
antreanSiswa.push("Deni");
console.log(antreanSiswa);

//No 3
antreanSiswa.unshift("Eka");
console.log(antreanSiswa);

//No 4
const siswaDihapus = antreanSiswa.shift();
console.log("Siswa yang dihapus: " , siswaDihapus);

//No 5
const siswaDihapus2 = antreanSiswa.pop();
console.log("Siswa yang dihapus: " , siswaDihapus2);

//No 6
console.log(antreanSiswa);
console.log("jumlah siswa yang tersisa: " , antreanSiswa.length);
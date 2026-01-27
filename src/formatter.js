const { BULAN_INDO, HARI_INDO } = require('./constants');

/**
 * Validasi apakah input adalah tanggal yang benar
 */
function isValidDate(date) {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d);
}

/**
 * Output: "Senin, 27 Januari 2026"
 */
function formatLengkap(date) {
  if (!isValidDate(date)) return "Tanggal tidak valid";
  
  const d = new Date(date);
  const hari = HARI_INDO[d.getDay()];
  const tanggal = d.getDate();
  const bulan = BULAN_INDO[d.getMonth()];
  const tahun = d.getFullYear();

  return `${hari}, ${tanggal} ${bulan} ${tahun}`;
}

/**
 * Output: "27/01/2026"
 */
function formatPendek(date) {
  if (!isValidDate(date)) return "Tanggal tidak valid";

  const d = new Date(date);
  const tgl = String(d.getDate()).padStart(2, '0');
  const bln = String(d.getMonth() + 1).padStart(2, '0');
  const thn = d.getFullYear();

  return `${tgl}/${bln}/${thn}`;
}

/**
 * Output: "5 menit yang lalu", "Baru saja", dsb.
 */
function formatRelatif(date) {
  if (!isValidDate(date)) return "Tanggal tidak valid";

  const sekarang = new Date();
  const waktuInput = new Date(date);
  const selisihDetik = Math.floor((sekarang - waktuInput) / 1000);

  if (selisihDetik < 60) return "Baru saja";

  const selisihMenit = Math.floor(selisihDetik / 60);
  if (selisihMenit < 60) return `${selisihMenit} menit yang lalu`;

  const selisihJam = Math.floor(selisihMenit / 60);
  if (selisihJam < 24) return `${selisihJam} jam yang lalu`;

  const selisihHari = Math.floor(selisihJam / 24);
  if (selisihHari < 30) return `${selisihHari} hari yang lalu`;

  return formatLengkap(date);
}

module.exports = { formatLengkap, formatPendek, formatRelatif };
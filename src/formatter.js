const { BULAN_INDO, HARI_INDO } = require('./constants');

/**
 * Mengubah tanggal menjadi format: "Senin, 27 Januari 2026"
 */
function formatLengkap(date) {
  const d = new Date(date);
  const hari = HARI_INDO[d.getDay()];
  const tanggal = d.getDate();
  const bulan = BULAN_INDO[d.getMonth()];
  const tahun = d.getFullYear();

  return `${hari}, ${tanggal} ${bulan} ${tahun}`;
}

/**
 * Mengubah tanggal menjadi format pendek: "27/01/2026"
 */
function formatPendek(date) {
  const d = new Date(date);
  const tgl = String(d.getDate()).padStart(2, '0');
  const bln = String(d.getMonth() + 1).padStart(2, '0');
  const thn = d.getFullYear();

  return `${tgl}/${bln}/${thn}`;
}

module.exports = { formatLengkap, formatPendek };
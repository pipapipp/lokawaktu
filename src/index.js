const formatter = require('./formatter');

module.exports = {
  formatLengkap: formatter.formatLengkap,
  formatPendek: formatter.formatPendek
};

// Contoh penggunaan untuk ngetes (bisa dihapus nanti)
console.log("Format Lengkap:", formatter.formatLengkap(new Date()));
console.log("Format Pendek :", formatter.formatPendek(new Date()));
const formatter = require('./formatter');

const LokaWaktu = {
  formatLengkap: formatter.formatLengkap,
  formatPendek: formatter.formatPendek,
  formatRelatif: formatter.formatRelatif,
  
  /**
   * Mendapatkan waktu saat ini dalam format lengkap Indonesia
   */
  sekarang: () => formatter.formatLengkap(new Date())
};

module.exports = LokaWaktu;

// --- TESTING AREA (Hapus atau beri komentar jika ingin di-publish) ---
console.log("=== TEST LOKAWAKTU ===");
console.log("Sekarang       :", LokaWaktu.sekarang());
console.log("Format Pendek  :", LokaWaktu.formatPendek(new Date()));
console.log("Waktu Relatif  :", LokaWaktu.formatRelatif(new Date(Date.now() - 3600000))); // 1 jam lalu
const formatter = require('./formatter');

const LokaWaktu = {
  formatFull: formatter.formatFull,
  formatShort: formatter.formatShort,
  formatRelative: formatter.formatRelative,
  
  /**
   * Gets current date in full Indonesian format
   */
  now: () => formatter.formatFull(new Date())
};

module.exports = LokaWaktu;

// --- TESTING AREA ---
console.log("=== LOKAWAKTU TEST ===");
console.log("Current Time    :", LokaWaktu.now());
console.log("Short Format    :", LokaWaktu.formatShort(new Date()));
console.log("Relative Time   :", LokaWaktu.formatRelative(new Date(Date.now() - 3600000)));
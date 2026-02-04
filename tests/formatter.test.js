const LokaWaktu = require('../src/index');

describe('LokaWaktu Utility Tests', () => {
  
  test('should format date to full Indonesian string', () => {
    const date = new Date('2026-01-27');
    // Hasilnya mungkin berbeda tergantung zona waktu, tapi kita tes bulannya
    expect(LokaWaktu.formatFull(date)).toContain('Januari');
    expect(LokaWaktu.formatFull(date)).toContain('2026');
  });

  test('should format date to short numeric string', () => {
    const date = new Date('2026-01-27');
    expect(LokaWaktu.formatShort(date)).toBe('27/01/2026');
  });

  test('should return "Baru saja" for current time', () => {
    expect(LokaWaktu.formatRelative(new Date())).toBe('Baru saja');
  });

  test('should handle invalid date input', () => {
    expect(LokaWaktu.formatFull('wrong-date')).toBe('Invalid Date');
  });

});
const { INDO_MONTHS, INDO_DAYS } = require('./constants');

/**
 * Validates if the input is a valid date object
 */
function isValidDate(date) {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d);
}

/**
 * Output: "Senin, 27 Januari 2026"
 */
function formatFull(date) {
  if (!isValidDate(date)) return "Invalid Date";
  
  const d = new Date(date);
  const day = INDO_DAYS[d.getDay()];
  const dayDate = d.getDate();
  const month = INDO_MONTHS[d.getMonth()];
  const year = d.getFullYear();

  return `${day}, ${dayDate} ${month} ${year}`;
}

/**
 * Output: "27/01/2026"
 */
function formatShort(date) {
  if (!isValidDate(date)) return "Invalid Date";

  const d = new Date(date);
  const dayDate = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return `${dayDate}/${month}/${year}`;
}

/**
 * Output: "5 menit yang lalu", "Baru saja", etc.
 */
function formatRelative(date) {
  if (!isValidDate(date)) return "Invalid Date";

  const now = new Date();
  const inputTime = new Date(date);
  const secondsDiff = Math.floor((now - inputTime) / 1000);

  if (secondsDiff < 60) return "Baru saja";

  const minutesDiff = Math.floor(secondsDiff / 60);
  if (minutesDiff < 60) return `${minutesDiff} menit yang lalu`;

  const hoursDiff = Math.floor(minutesDiff / 60);
  if (hoursDiff < 24) return `${hoursDiff} jam yang lalu`;

  const daysDiff = Math.floor(hoursDiff / 24);
  if (daysDiff < 30) return `${daysDiff} hari yang lalu`;

  return formatFull(date);
}

module.exports = { formatFull, formatShort, formatRelative };
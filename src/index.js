module.exports = function reverse(n) {
  const reversed = Array.from(Math.abs(n).toString()).reverse().join('');
  return Number(reversed);
};

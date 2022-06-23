module.exports = function reverse (n) {

    const mod_number = Math.abs(n);
  
    return mod_number.toString().split('').reverse().join('');
}

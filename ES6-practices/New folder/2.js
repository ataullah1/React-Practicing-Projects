const digits = (digt) => {
  const dgt = parseInt(digt);
  if (typeof dgt === 'number' && !isNaN(dgt)) {
    let sum = 0;
    const numArr = [];
    const num = dgt.toString();
    const digit = num.split('');
    for (const d of digit) {
      numArr.push(parseInt(d));
    }
    for (const num of numArr) {
      sum += num;
    }
    return sum;
  }
  return 'Please Input a valid Number';
};

console.log(digits(437));
console.log(digits('437'));
console.log(digits(224354));
console.log(digits('sadf'));
console.log(2 + 3 + '7');

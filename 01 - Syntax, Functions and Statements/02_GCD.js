function gcd(num1, num2) {
  const divisors = [];
  const biggerNum = Math.max(num1, num2);
  for (let i = 1; i < biggerNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisors.push(i);
    }
  }
  console.log(Math.max(...divisors));
}

gcd(15, 5);
gcd(2154, 458);

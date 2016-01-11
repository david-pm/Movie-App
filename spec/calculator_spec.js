describe('calculator', function() {

  it('gives the sum of two numbers', function() {
    var sum = calculator.add(2,3);
    expect(sum).toEqual(5);
  });

  it('gives the difference of two numbers', function() {
    var difference = calculator.subtract(5,3);
    expect(difference).toEqual(2);
  });

  it('gives the product of two numbers', function() {
    var product = calculator.multiply(5,3);
    expect(product).toEqual(15);
  });

  it('gives the quotient of two numbers', function() {
    var quotient = calculator.divide(10, 2);
    expect(quotient).toEqual(5);
  });

  it('gives the sum of n numbers', function() {
    var sum = calculator.add(2, 1, 2);
    expect(sum).toEqual(5);
  });

  it('gives the product of n numbers', function() {
    var prod1 = calculator.multiply(2, 1, 2, 2);
    expect(prod1).toEqual(8);
  });

  it('gives zero when multiplying by zero', function() {
    var prod2 = calculator.multiply(2, 1, 2, 2, 0);
    expect(prod2).toEqual(0);
  });

  it('gives the difference of n numbers', function() {
    var difference = calculator.subtract(5,3,2,1);
    expect(difference).toEqual(-1);
  });

  it('gives the quotient of n numbers', function() {
    var quotient = calculator.divide(10, 5, 1);
    expect(quotient).toEqual(2);
  });

  it('gives Infinity when dividing by zero', function() {
    var quotient2 = calculator.divide(10, 0);
    expect(quotient2).toEqual(Infinity);
  });

  it('gives zero when diving zero by n', function() {
    var quotient3 = calculator.divide(0, 100);
    expect(quotient3).toEqual(0);
  });

});

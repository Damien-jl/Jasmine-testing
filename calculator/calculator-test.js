
it('should calculate the monthly rate correctly', function () {
  let vals = {
    amount: 10000,
    years: 5,
    rate: 5
  }
  expect(calculateMonthlyPayment(vals)).toBe('188.71');
}); 


it("should return a result with 2 decimal places", function() {
  let vals = {
    amount: 30500.58,
    years: 6,
    rate: 7
  }
  expect(calculateMonthlyPayment(vals)).toBe('520.00')
});

it('should return impressively low interest rates', function () {
  let vals = {
    amount: 10000,
    years: 10,
    rate: 0.40
  }
  expect(calculateMonthlyPayment(vals)).toBe('85.02')
})

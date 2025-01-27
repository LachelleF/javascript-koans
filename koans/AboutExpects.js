describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {
    expect(true).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;
    expect(actualValue === expectedValue).toBeTruthy();
  });

  //******* */ Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;
    expect(2).to.equal.(2);
  });

  // toEqual() compares using common sense equality.
  it('actual should equal expected value' , function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();
    expect(actualValue === expectedValue).toBe(true)
  });

  // toBe() will always use === to compare.
  it ('actual should deeply equal expected', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;
    expect(actualValue === expectedValue).toBe(true);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(2);
  });
});

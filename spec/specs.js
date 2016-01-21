describe('testZero', function () {
  it("determines that countBy and countTo are greater than zero", function () {
    expect(testZero(-1,-1)).to.equal(false)
  })
});

describe('countUpTest', function () {
  it("is true that 'countBy' <= 'countTo'", function () {
      expect(countUpTest(31,30)).to.equal(false)
  })
});

describe('countUp', function () {
  it("iterates upward from one in blocks of 1 until reaching 'countTo'", function () {
    expect(countUp(3,19)).to.eql([3,6,9,12,15,18])
  })
});



//
// describe('countUp')

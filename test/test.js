const assert = require("assert");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it("1+1 = 2", () => {
      assert.equal(1 + 1, 2);
    });

    it("async - setTimeout & done", function (done) {
      setTimeout(() => {
        let a = "setTimeout";
        assert.equal(a, "setTimeout");
        done();
      }, 1000);
    });
  });
});

//////////////// 여기까지 자체 테스트
// 여기부터 외부 import해보기

const mochaTest = require("../src/mocha.js");

describe("mochaTest", () => {
  it('mochaTest sholud String "mochaTest"', () => {
    assert.equal(mochaTest, "mochaTest");
  });
});

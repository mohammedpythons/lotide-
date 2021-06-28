const assert = require("chai").assert;
const tail = require("../tail")


describe("#tail", function() {
    it("it should return [2, 3, 4] when [1, 2, 3, 4]", () => {
        assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
    })
})



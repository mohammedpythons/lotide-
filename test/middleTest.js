const assert = require("chai").assert;
const middle = require("../middle")




describe("#middle", function() {
    it("should return [6,8] when [3,5, 7,6, 8, 7, 8,9] is given", function() {
        assert.deepEqual(middle([3,5, 7,6, 8, 7, 8,9]), [6,8])
    })
    it("should return [6] when [3,5, 7,6, 8, 7, 8] is given", function() {
        assert.deepEqual(middle([3,5, 7,6, 8, 7, 8]), [6])
    })
})











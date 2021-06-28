const assert = require("chai").assert;
const head = require("../head");


describe("#head", function() {
    it("return 1 for [1, 2, 3]", function() {
        assert.strictEqual(head([1, 2, 3]), 1);
    })
    it("returns 5 for [5]", () => {
        assert.strictEqual(head([5]), 5);
    })
    it("should return 'Hello' when we pass ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
    })
})



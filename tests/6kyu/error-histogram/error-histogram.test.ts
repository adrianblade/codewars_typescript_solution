import solution = require('../../../src/6kyu/error-histogram/error-histogram');
import {assert} from "chai";

function testing(s: string, exp: string) {
    console.log("Testing:\n", s)
    let ans = solution.hist(s)
    console.log("Actual:\n", ans)
    console.log("Expect:\n", exp)
    assert.equal(ans, exp)
}

describe("hist", function() {
    it("Basic tests", function() {
        testing("tpwaemuqxdmwqbqrjbeosjnejqorxdozsxnrgpgqkeihqwybzyymqeazfkyiucesxwutgszbenzvgxibxrlvmzihcb",
            "u  3     ***\rw  4     ****\rx  6     ******\rz  6     ******")
        testing("aaifzlnderpeurcuqjqeywdq", "u  2     **\rw  1     *\rz  1     *")
        var s = "uuaaaxbbbbyyhwawiwjjjwwxymzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
        var sol = "u  2     **\rw  5     *****\rx  2     **\rz  31    *******************************";
        testing(s, sol);
    })
});
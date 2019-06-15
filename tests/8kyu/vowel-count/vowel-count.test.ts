import solution = require('../../../src/8kyu/vowel-count/vowel-count');
import {assert} from "chai";

describe("getCount", function(){
    it ("should pass a sample test", function(){
        assert.strictEqual(solution.Kata.getCount("abracadabra"), 5)
    });
});

describe("countHome", function(){
    it ("should pass a sample test", function(){
        assert.strictEqual(solution.Kata.getCount("Home"), 2)
    });
});

describe("getEmpty", function(){
    it ("should pass a sample test", function(){
        assert.strictEqual(solution.Kata.getCount(""), 0)
    });
});

describe("getACount", function(){
    it ("should pass a sample test", function(){
        assert.strictEqual(solution.Kata.getCount("aaa"), 3)
    });
});

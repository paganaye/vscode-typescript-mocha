import { assert, expect } from "chai"
import { Dog } from "../src/Dog";
import { Cat } from "../src/Cat";

describe('test1', function() {
  it('The dog should bark', function() {
    let dog = new Dog();
    assert.equal("woof", dog.sound());
    expect(1).to.equal(1)
  });
});

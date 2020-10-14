const { assert } = require("chai");
const { expect } = require("chai");
const FileManipulator = require("../fileManipulator.js");
const Contact = require("../contact.js");

describe("File FileManipulator tests", () => {
  const filer = new FileManipulator("Mike");

  //Creates FileManipulator instance
  it("creates FileManipulator instance", () => {
    expect(filer).to.be.an.instanceof(FileManipulator);
  });
  //Creates only one FileManipulator instance
  it("creates only one FileManipulator instance", () => {
    expect(new FileManipulator()).to.deep.equal(filer);
  });
  // Writes only data of type contact
  it("writes data to file", () => {
    expect(filer.write(new Contact("Tom", "1234"))).equal(undefined);
  });
  // Read returns data of type contact
  it("Read returns data of type contact", () => {
    assert.isObject(filer.read());
  });
});

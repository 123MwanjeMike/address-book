// const { assert } = require("chai");
const { expect } = require("chai");
// const sinon = require("sinon");
const phb = require("../app");
// const Contact = phb.Contact;

describe("Phonebook unit tests working with array of contacts", () => {
  const phonebook = phb.phonebook;

  //Check that gets contacts
  it("gets phonebook details", () => {
    expect(phonebook.all).to.have.lengthOf(0);
  });
  //Check that adds contacts
  it("adds contacts", () => {
    phonebook.add({ name: "Tom", telephone: "1234" });
    expect(phonebook.all).to.have.lengthOf(1);
  });
  //Check that searches contacts
  it("searches contacts", () => {
    expect(phonebook.search("Tom")).to.equal("Tom: 1234");
  });
  //Check that updates contacts
  it("updates contacts", () => {
    phonebook.update('Tom','12345');
    expect(phonebook.search("Tom")).to.equal("Tom: 12345");
  });
  //Check that deletes contacts
  it("deletes contacts", () => {
    phonebook.delete("Tom");
    expect(phonebook.all).to.have.lengthOf(0);
  });
});

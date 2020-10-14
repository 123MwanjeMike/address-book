const { assert } = require("chai");
const { expect } = require("chai");
const Contact = require("../contact.js");

describe("Contact type tests", () => {
  const contact = new Contact("Mike","12345");

  //Creates contact instance
  it("creates FileManipulator instance", () => {
    expect(contact).to.be.an.instanceof(Contact);
  });
  // Gets contact details
  it("gets contact details", () => {
    expect(contact.details).to.deep.equal("Mike: 12345");
  });
  // Sets contact details
  it("sets contact telephone", () => {
    contact.tel = '1234'
    expect(contact.details).to.deep.equal("Mike: 1234");
  });
});

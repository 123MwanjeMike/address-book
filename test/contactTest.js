const { expect } = require("chai");
const Contact = require("../app.js").Contact;

describe("Contact type tests", () => {
  let contact = new Contact("Mike","12345");

  //Creates contact instance
  it("creates FileManipulator instance", () => {
    expect(contact).to.be.an.instanceof(Contact);
  });
});

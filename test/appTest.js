// const { assert } = require("chai");
// const { expect } = require("chai");
// const sinon = require("sinon");
// const FileManipulator = require("../app.js").FileManipulator;
// const Contact = require("../app.js").Contact;
// const Phonebook = require("../app.js").Phonebook;

// describe("Contact type tests", () => {
//   let contact = new Contact("Mike", "12345");

//   //Creates contact instance
//   it("creates FileManipulator instance", () => {
//     expect(contact).to.be.an.instanceof(Contact);
//   });
// });

// describe("FileManipulator tests", () => {
//   let filer = new FileManipulator();

//   //Creates FileManipulator instance
//   it("creates FileManipulator instance", () => {
//     expect(filer).to.be.an.instanceof(FileManipulator);
//   });
//   //Creates only one FileManipulator instance
//   it("creates only one FileManipulator instance", () => {
//     expect(new FileManipulator()).to.deep.equal(filer);
//   });
//   // Writes data to file
//   it("writes data to file", () => {
//     expect(filer.write(new Contact("Tom", "1234"))).equal(undefined);
//   });
//   // Read returns data from file
//   it("Read returns from file", () => {
//     assert.isObject(filer.read());
//   });
// });

// describe("Phonebook tests", () => {
//   let phonebook = new Phonebook();

//   //Creates Phonebook instance
//   it("creates Phonebook instance", () => {
//     expect(phonebook).to.be.an.instanceof(Phonebook);
//   });
//   //Creates only one Phonebook instance
//   it("creates only one Phonebook instance", () => {
//     expect(new Phonebook()).to.deep.equal(phonebook);
//   });

//   // Contact stub
//   let stub = sinon.stub(phonebook, "contacts").value([
//     { name: "Mike", telephone: "4444" },
//     { name: "Richard", telephone: "5555" },
//   ]);

//   //Check that gets contacts
//   it("gets phonebook details", () => {
//     expect(phonebook.all).to.have.lengthOf(2);
//   });
//   //Check that adds contacts
//   it("adds contacts", () => {
//     phonebook.add("Tom", "1234");
//     phonebook.all
//     expect(phonebook.all).to.have.lengthOf(3);
//   });
//   //Check that find works fine
//   it("find throws error", () => {
//     assert.throws(() => phonebook.find(true), "Contact not found");
//   });
//   it("find returns index of contact", () => {
//     assert.equal(phonebook.find("Mike"), "0");
//   });
//   //Check that searches contacts
//   it("searches contacts", () => {
//     expect(phonebook.search("Mike")).to.equal("Mike: 4444");
//   });
//   //Check that updates contacts
//   it("updates contacts", () => {
//     phonebook.update("Mike", "7777");
//     expect(phonebook.search("Mike")).to.equal("Mike: 7777");
//   });
//   //Check that deletes contacts
//   it("deletes contacts", () => {
//     phonebook.delete("Richard");
//     expect(phonebook.all).to.have.lengthOf(2);
//   });
// });

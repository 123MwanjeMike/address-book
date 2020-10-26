const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const {
  deleteContact,
  updateContact,
  viewContacts,
  searchContact,
  addContact,
  fileManipulator,
} = require('../crud');

describe('crud tests', () => {
  const readStub = sinon.stub(fileManipulator, 'read');
  const error1 = new Error('Error reading empty file');
  readStub.throws(error1);

  it('addContact() calls functions in its definition', () => {
    expect(addContact).to.throw('Error reading empty file');
  });
  it('searchContact() calls functions in its definition', () => {
    expect(searchContact).to.throw('Error reading empty file');
  });
  it('viewContacts() calls functions in its definition', () => {
    expect(viewContacts).to.throw('Error reading empty file');
  });
  it('updateContact() calls functions in its definition', () => {
    expect(updateContact).to.throw('Contact not found');
  });
  it('deleteContact() calls functions in its definition', () => {
    expect(deleteContact).to.throw('Contact not found');
  });
});

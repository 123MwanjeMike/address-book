const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const { Phonebook } = require('../app.js');

describe('Phonebook tests', () => {
  const phonebook = new Phonebook();

  // Creates Phonebook instance
  it('creates Phonebook instance', () => {
    expect(phonebook).to.be.an.instanceof(Phonebook);
  });
  // Creates only one Phonebook instance
  it('creates only one Phonebook instance', () => {
    expect(new Phonebook()).to.deep.equal(phonebook);
  });

  // Contact stub
  sinon.stub(phonebook, 'contacts').value([
    { name: 'Mike', telephone: '4444' },
    { name: 'Richard', telephone: '5555' },
  ]);

  // Check that gets contacts
  it('gets phonebook details', () => {
    expect(phonebook.all).to.have.lengthOf(2);
  });
  // Check that adds contacts
  it('adds contacts', () => {
    phonebook.add('Tom', '1234');
    expect(phonebook.all).to.have.lengthOf(3);
  });
  // Check that find works fine
  it('find throws error', () => {
    assert.throws(() => phonebook.find(true), 'Contact not found');
  });
  it('find returns index of contact', () => {
    assert.equal(phonebook.find('Mike'), '0');
  });
  // Check that searches contacts
  it('searches contacts', () => {
    expect(phonebook.search('Mike')).to.equal('Mike: 4444');
  });
  // Check that updates contacts
  it('updates contacts', () => {
    phonebook.update('Mike', '7777');
    expect(phonebook.search('Mike')).to.equal('Mike: 7777');
  });
  // Check that deletes contacts
  it('deletes contacts', () => {
    phonebook.delete('Richard');
    expect(phonebook.all).to.have.lengthOf(2);
  });
});

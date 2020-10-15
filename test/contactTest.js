const { expect } = require('chai');
const { describe } = require('mocha');
const { it } = require('mocha');
const { Contact } = require('../app.js');

describe('Contact type tests', () => {
  const contact = new Contact('Mike', '12345');

  // Creates contact instance
  it('creates FileManipulator instance', () => {
    expect(contact).to.be.an.instanceof(Contact);
  });
});

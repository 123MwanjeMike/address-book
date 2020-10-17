const { expect } = require('chai');
const { describe, it } = require('mocha');
const { Contact } = require('../classes');

describe('Contact type tests', () => {
  const contact = new Contact('Mike', '12345');

  // Creates contact instance
  it('creates FileManipulator instance', () => {
    expect(contact).to.be.an.instanceof(Contact);
  });
});

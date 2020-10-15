const { assert } = require('chai');
const { expect } = require('chai');
const { describe } = require('mocha');
const { it } = require('mocha');
const sinon = require('sinon');
const fs = require('fs');
const { FileManipulator } = require('../app.js');
const { Contact } = require('../app.js');

describe('FileManipulator tests', () => {
  const filer = new FileManipulator();
  const WriteStub = sinon.stub(fs, 'writeFileSync');
  WriteStub.returns(1);
  const createStub = sinon.stub(fs, 'writeFile');
  createStub.onCall(0).returns(1);

  // Creates FileManipulator instance
  it('creates FileManipulator instance file', () => {
    expect(filer).to.be.an.instanceof(FileManipulator);
  });
  // Creates only one FileManipulator instance
  it('creates only one FileManipulator instance file', () => {
    expect(new FileManipulator()).to.deep.equal(filer);
  });
  // Writes data to file
  it('writes data to file', () => {
    expect(filer.write(new Contact('Tom', '1234'))).equal(1);
  });
  // Read returns data from file
  it('Read returns from file', () => {
    const readStub = sinon.stub(fs, 'readFileSync');
    const error = new Error('Error reading empty file');
    readStub.throws(error);
    assert.throws(() => filer.read(true), 'Error reading empty file');
  });
});

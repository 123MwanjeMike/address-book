const { assert } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const inquirer = require('../inquirer');

describe('app.js tests', () => {
  const menuStub = sinon.stub(inquirer, 'menu');
  const nameStub = sinon.stub(inquirer, 'name');
  const telephoneStub = sinon.stub(inquirer, 'telephone');
  const navigateStub = sinon.stub(inquirer, 'navigate');

  it('inquirer.menu calls menu()', async () => {
    inquirer.menu();
    assert.isTrue(menuStub.called);
  });
  it('inquirer.name calls name()', async () => {
    inquirer.name();
    assert.isTrue(nameStub.called);
  });
  it('inquirer.telephone calls telephone()', async () => {
    inquirer.telephone();
    assert.isTrue(telephoneStub.called);
  });
  it('inquirer.navigate calls navigate()', async () => {
    inquirer.navigate();
    assert.isTrue(navigateStub.called);
  });
});

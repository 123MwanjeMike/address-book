const { expect } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const inquirer = require('../inquirer');

describe('inquirer.js tests', () => {
  const menuStub = sinon.stub(inquirer, 'menu');
  const nameStub = sinon.stub(inquirer, 'name');
  const telephoneStub = sinon.stub(inquirer, 'telephone');
  const navigateStub = sinon.stub(inquirer, 'navigate');

  it('inquirer.menu calls menu()', async () => {
    menuStub.onCall(0).returns({ option: 'Add contact' });
    expect(inquirer.menu()).to.deep.equal({ option: 'Add contact' });
  });
  it('inquirer.name calls name()', async () => {
    nameStub.onCall(0).returns({ name: 'Mike' });
    expect(inquirer.name()).to.deep.equal({ name: 'Mike' });
  });
  it('inquirer.telephone calls telephone()', async () => {
    telephoneStub.onCall(0).returns({ telephone: '07777777777' });
    expect(inquirer.telephone()).to.deep.equal({ telephone: '07777777777' });
  });
  it('inquirer.navigate calls navigate()', async () => {
    navigateStub.onCall(0).returns({ navigate: 'Yes' });
    expect(inquirer.navigate()).to.deep.equal({ navigate: 'Yes' });
  });
});

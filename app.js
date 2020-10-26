const chalk = require('chalk');
const clear = require('clear');
const inquirer = require('./inquirer');
const {
  deleteContact,
  updateContact,
  viewContacts,
  searchContact,
  addContact,
} = require('./crud');

const back = async () => {
  const params = await inquirer.navigate();
  const { navigate } = params;
  if (navigate === 'Menu') main();
  if (navigate === 'Exit') process.exit();
};

const main = async () => {
  clear();
  const params = await inquirer.menu();
  const { option } = params;
  if (option === 'Exit') process.exit();
  if (option === 'View contacts') {
    const contacts = viewContacts();
    console.table(contacts);
    console.log(`Number of contacts: ${chalk.green(contacts.length)}`);
    back();
  }
  if (option === 'Search contact') {
    const { name } = await inquirer.name();
    console.log(chalk.green(searchContact(name)));
    back();
  }
  if (option === 'Delete contact') {
    const { name } = await inquirer.name();
    deleteContact(name);
    back();
  }
  if (option === 'Add contact') {
    const { name } = await inquirer.name();
    const { telephone } = await inquirer.telephone();
    addContact(name, telephone);
    back();
  }
  if (option === 'Update contact') {
    const { name } = await inquirer.name();
    const { telephone } = await inquirer.telephone();
    updateContact(name, telephone);
    back();
  }
};

main();

const inquirer = require('inquirer');

module.exports = {
  menu: () => {
    const question = [
      {
        type: 'rawlist',
        name: 'option',
        message: 'Select an option',
        choices: [
          'Add contact',
          'Search contact',
          'View contacts',
          'Update contact',
          'Delete contact',
          'Exit',
        ],
      },
    ];
    return inquirer.prompt(question);
  },
  navigate: () => {
    const question = [
      {
        type: 'rawlist',
        name: 'navigate',
        message: 'Do you want to continue',
        choices: [
          'Yes',
          'No',
        ],
      },
    ];
    return inquirer.prompt(question);
  },
  name: () => {
    const question = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter Name: ',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Please enter a name.';
        },
      },
    ];
    return inquirer.prompt(question);
  },
  telephone: () => {
    const question = [
      {
        name: 'telephone',
        type: 'input',
        message: 'Enter telephone: ',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Please enter telephone.';
        },
      },
    ];
    return inquirer.prompt(question);
  },
};

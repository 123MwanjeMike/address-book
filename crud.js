const { FileManipulator, Phonebook } = require('./exporter');

const phonebook = new Phonebook();
const fileManipulator = new FileManipulator();

const addContact = (name, telephone) => {
  phonebook.contacts = fileManipulator.read();
  phonebook.add(name, telephone);
  fileManipulator.write(phonebook.all);
};

const searchContact = (name) => {
  phonebook.contacts = fileManipulator.read();
  return phonebook.search(name);
};

const viewContacts = () => fileManipulator.read();

const updateContact = (name, telephone) => {
  phonebook.update(name, telephone);
  fileManipulator.write(phonebook.all);
};

const deleteContact = (name) => {
  phonebook.delete(name);
  fileManipulator.write(phonebook.all);
};

module.exports = {
  deleteContact,
  updateContact,
  viewContacts,
  searchContact,
  addContact,
  fileManipulator,
};

import Contact from "./contact";
import Phonebook from "./phonebook";
import FileManipulator from "./fileManipulator";

let phonebook = new Phonebook();
let fileManipulator = new FileManipulator();

const addContact = (name: string, telephone: string) => {
    phonebook.add(name,telephone)
    fileManipulator.write(phonebook.all)
}

const searchContact = (name: string) => {
    phonebook.contacts = fileManipulator.read();
    return phonebook.search(name)
}

const viewContacts = () => {
   return fileManipulator.read();
}

const updateContact = (name: string, telephone: string) => {
    phonebook.update(name,telephone)
    fileManipulator.write(phonebook.all)
}

const deleteContact = (name: string) => {
    phonebook.delete(name)
    fileManipulator.write(phonebook.all)
}

// Adding contacts
addContact('Mike', '111111')
addContact('Mikel', '4545445')
addContact('Tommy', '145')
addContact('Richard', '445455')
addContact('Banks', '12345')
addContact('Isaac', '4545445')
addContact('Peter', '145')
addContact('Job', '445455')
addContact('Paul', '12345')
addContact('Josh', '4545445')
addContact('Rex', '145')
addContact('Rinah', '445455')
addContact('Jane', '12345')
addContact('Pauline', '111111')
addContact('Maryr', '145')
addContact('Scovi1', '445455')

// Search contacts
console.log(searchContact('Rex'))

// Viewing contacts
console.log(viewContacts())

// Updating contacts
updateContact('Jane', '00000000')
console.log('After updating Jane to 00000000')
console.log(viewContacts())

// Updating contacts
deleteContact('Maryr')
console.log('After deleting Maryr')
console.log(viewContacts())

module.exports = {
  Contact,
  FileManipulator,
  Phonebook,
};

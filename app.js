var contact_1 = require("./contact");
var phonebook_1 = require("./phonebook");
var fileManipulator_1 = require("./fileManipulator");
var phonebook = new phonebook_1["default"]();
var fileManipulator = new fileManipulator_1["default"]();
var addContact = function (name, telephone) {
    phonebook.add(name, telephone);
    fileManipulator.write(phonebook.all);
};
var searchContact = function (name) {
    phonebook.contacts = fileManipulator.read();
    return phonebook.search(name);
};
var viewContacts = function () {
    return fileManipulator.read();
};
var updateContact = function (name, telephone) {
    phonebook.update(name, telephone);
    fileManipulator.write(phonebook.all);
};
var deleteContact = function (name) {
    phonebook.delete(name);
    fileManipulator.write(phonebook.all);
};
// Adding contacts
addContact('Mike', '111111');
addContact('Mikel', '4545445');
addContact('Tommy', '145');
addContact('Richard', '445455');
addContact('Banks', '12345');
addContact('Isaac', '4545445');
addContact('Peter', '145');
addContact('Job', '445455');
addContact('Paul', '12345');
addContact('Josh', '4545445');
addContact('Rex', '145');
addContact('Rinah', '445455');
addContact('Jane', '12345');
addContact('Pauline', '111111');
addContact('Maryr', '145');
addContact('Scovi1', '445455');
// Search contacts
console.log(searchContact('Rex'));
// Viewing contacts
console.log(viewContacts());
// Updating contacts
updateContact('Jane', '00000000');
console.log('After updating Jane to 00000000');
console.log(viewContacts());
// Updating contacts
deleteContact('Maryr');
console.log('After deleting Maryr');
console.log(viewContacts());
module.exports = {
    Contact: contact_1["default"],
    FileManipulator: fileManipulator_1["default"],
    Phonebook: phonebook_1["default"]
};

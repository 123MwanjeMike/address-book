var contact_1 = require("./contact");
var Phonebook = (function () {
    function Phonebook() {
        if (Phonebook.instances !== 0) {
            return Phonebook.current;
        }
        else {
            Phonebook.instances = 1;
            Phonebook.current = this;
            this.contacts = [];
        }
    }
    // Finder
    Phonebook.prototype.find = function (name) {
        var contact = this.contacts.find(function (contact) { return contact.name === name; });
        var index = this.contacts.indexOf(contact);
        // Incase contact is not found
        if (index < 0) {
            throw new Error("Contact not found");
        }
        return index;
    };
    // Create
    Phonebook.prototype.add = function (name, telephone) {
        var contact = new contact_1["default"](name, telephone);
        this.contacts.push(contact);
    };
    // Read one
    Phonebook.prototype.search = function (name) {
        return this.contacts[this.find(name)].name + ": " + this.contacts[this.find(name)].telephone;
    };
    Object.defineProperty(Phonebook.prototype, "all", {
        // Read all
        get: function () {
            return this.contacts;
        },
        enumerable: true,
        configurable: true
    });
    // Update
    Phonebook.prototype.update = function (name, telephone) {
        this.contacts[this.find(name)].telephone = telephone;
    };
    // Delete
    Phonebook.prototype.delete = function (name) {
        this.contacts.splice(this.find(name), 1);
    };
    Phonebook.instances = 0;
    return Phonebook;
})();
exports["default"] = Phonebook;

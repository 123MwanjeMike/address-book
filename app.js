var Contact = (function () {
    function Contact(name, telephone) {
        this.name = name;
        this.telephone = telephone;
    }
    Object.defineProperty(Contact.prototype, "tel", {
        set: function (telephone) {
            this.telephone = telephone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "details", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
})();
var Phonebook = (function () {
    function Phonebook() {
        this.contacts = [];
    }
    // Create
    Phonebook.prototype.add = function (contact) {
        this.contacts.push(contact);
    };
    // Read one
    Phonebook.prototype.search = function (name) {
        var contact = this.contacts.find(function (contact) { return contact.name === name; });
        var index = this.contacts.indexOf(contact);
        if (index > -1) {
            return this.contacts[index].name + ": " + this.contacts[index].telephone;
        }
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
        var contact = this.contacts.find(function (contact) { return contact.name === name; });
        var index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts[index].telephone = telephone;
        }
    };
    // Delete
    Phonebook.prototype.delete = function (name) {
        var contact = this.contacts.find(function (contact) { return contact.name === name; });
        var index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts.splice(index, 1);
        }
    };
    return Phonebook;
})();
var phonebook = new Phonebook();
module.exports = {
    Contact: Contact,
    phonebook: phonebook
};

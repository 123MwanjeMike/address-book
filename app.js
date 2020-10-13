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
            return this.name + ": " + this.telephone;
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
    // Finder
    Phonebook.prototype.find = function (name) {
        var contact = this.contacts.find(function (contact) { return contact.name === name; });
        var index = this.contacts.indexOf(contact);
        if (index < 0) {
            throw new Error("Contact not found");
        }
        return index;
    };
    // Create
    Phonebook.prototype.add = function (name, telephone) {
        var contact = new Contact(name, telephone);
        this.contacts.push(contact);
    };
    // Read one
    Phonebook.prototype.search = function (name) {
        return "" + this.contacts[this.find(name)].details;
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
        this.contacts[this.find(name)].tel = telephone;
    };
    // Delete
    Phonebook.prototype.delete = function (name) {
        this.contacts.splice(this.find(name), 1);
    };
    return Phonebook;
})();
var phonebook = new Phonebook();
module.exports = {
    Contact: Contact,
    phonebook: phonebook
};

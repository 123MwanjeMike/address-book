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
exports["default"] = Contact;
module.exports = Contact;

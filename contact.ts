export default class Contact {
    name: string;
    telephone: string;

    constructor(name: string, telephone: string) {
        this.name = name;
        this.telephone = telephone;
    }
    set tel(telephone: string) {
        this.telephone = telephone;
    }
    get details() {
        return `${this.name}: ${this.telephone}`;
    }
}

module.exports = Contact;
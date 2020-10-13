class Contact {
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

class Phonebook {
  private contacts: Contact[] = [];

  // Finder
  find(name: string) {
    let contact = this.contacts.find((contact) => contact.name === name);
    const index = this.contacts.indexOf(contact);
    
    // Incase contact is not found
    if (index < 0) {
      throw new Error("Contact not found");
    }

    return index;
  }
  // Create
  add(name: string, telephone: string) {
    let contact = new Contact(name, telephone);
    this.contacts.push(contact);
  }
  // Read one
  search(name: string) {
    return `${this.contacts[this.find(name)].details}`;
  }
  // Read all
  get all() {
    return this.contacts;
  }
  // Update
  update(name: string, telephone: string) {
    this.contacts[this.find(name)].tel = telephone;
  }
  // Delete
  delete(name: string) {
    this.contacts.splice(this.find(name), 1);
  }
}

let phonebook = new Phonebook();

module.exports = {
  Contact,
  phonebook,
};

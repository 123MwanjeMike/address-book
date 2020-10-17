import Contact from "./contact";

export default class Phonebook {
  contacts: Contact[];
  static current: Phonebook;
  static instances: number = 0;

  constructor() {
    if (Phonebook.instances !== 0) {
      return Phonebook.current;
    } else {
        Phonebook.instances = 1;
        Phonebook.current = this;
        this.contacts = [];
    }
  }
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
    return `${this.contacts[this.find(name)].name}: ${this.contacts[this.find(name)].telephone}`;
  }
  // Read all
  get all() {
    return this.contacts;
  }
  // Update
  update(name: string, telephone: string) {
    this.contacts[this.find(name)].telephone = telephone;
  }
  // Delete
  delete(name: string) {
    this.contacts.splice(this.find(name), 1);
  }
}
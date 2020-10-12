class Contact {
    name: string;
    telephone: string

    constructor(name: string, telephone: string){
        this.name = name;
        this.telephone = telephone;
    }
    // set tel(telephone: string){
    //     this.telephone = telephone
    // }
    // get details(){
    //     return 
    // }
}

class Phonebook {
    private contacts: Contact[] = [];

    // Create
    add(contact){
        this.contacts.push(contact);
    }
    // Read one
    search(name: string){
        let contact = this.contacts.find(contact => contact.name === name)
        const index = this.contacts.indexOf(contact);
        if (index > -1) {
            return `${this.contacts[index].name}: ${this.contacts[index].telephone}`;
        }        
    }
    // Read all
    get all(){
        return this.contacts;
    }
    // Update
    update(name: string, telephone: string){
        let contact = this.contacts.find(contact => contact.name === name)
        const index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts[index].telephone = telephone;
        }
    }
    // Delete
    delete (name: string){
        let contact = this.contacts.find(contact => contact.name === name)
        const index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts.splice(index, 1);
        }
    }
}

let phonebook = new Phonebook()

module.exports = {
    Contact,
    phonebook,
};
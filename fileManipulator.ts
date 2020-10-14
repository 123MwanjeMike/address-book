export default class FileManipulator {
  fileName: string;
  fs = require("fs");
  // for singleton
  static current: FileManipulator;
  static instances: number = 0;

  constructor(name: string = "myContactlist") {
    if (FileManipulator.instances !== 0) {
      return FileManipulator.current;
    } else {
      FileManipulator.instances = 1;
      FileManipulator.current = this;
      this.fileName = `${name}'s_contacts.json`;
      this.fs.writeFile(this.fileName, "", (error) => {
        if (error) throw error;
      });
    }
  }
  // Write to phonebook
  write(contacts) {
    let data = JSON.stringify(contacts);
    return this.fs.appendFileSync(this.fileName, data);
  }
  // Read phonebook
  read() {
    return JSON.parse(this.fs.readFileSync(this.fileName));
  }
}

module.exports = FileManipulator;
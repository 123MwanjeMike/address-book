const fs = require("fs");

export default class FileManipulator {
  fileName: string = 'myContactlist.json';
  static current: FileManipulator;
  static instances: number = 0;

  constructor() {
    if (FileManipulator.instances !== 0) {
      return FileManipulator.current;
    } else {
      FileManipulator.instances = 1;
      FileManipulator.current = this;
      this.write('');
    }
  }
  // Write to phonebook
  write(contacts) {
    let data = JSON.stringify(contacts);
    return fs.writeFileSync(this.fileName, data);
  }
  // Read phonebook
  read() {
      let data = fs.readFileSync(this.fileName);
    return JSON.parse(data);
  }
}
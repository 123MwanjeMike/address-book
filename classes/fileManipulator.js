var fs = require("fs");
var FileManipulator = (function () {
    function FileManipulator() {
        this.fileName = 'address-book.json';
        if (FileManipulator.instances !== 0) {
            return FileManipulator.current;
        }
        else {
            FileManipulator.instances = 1;
            FileManipulator.current = this;
        }
    }
    // Write to phonebook
    FileManipulator.prototype.write = function (contacts) {
        var data = JSON.stringify(contacts);
        return fs.writeFileSync(this.fileName, data);
    };
    // Read phonebook
    FileManipulator.prototype.read = function () {
        var data = fs.readFileSync(this.fileName);
        return JSON.parse(data);
    };
    FileManipulator.instances = 0;
    return FileManipulator;
})();
exports["default"] = FileManipulator;

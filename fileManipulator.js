var FileManipulator = (function () {
    function FileManipulator(name) {
        if (name === void 0) { name = "myContactlist"; }
        this.fs = require("fs");
        if (FileManipulator.instances !== 0) {
            return FileManipulator.current;
        }
        else {
            FileManipulator.instances = 1;
            FileManipulator.current = this;
            this.fileName = name + "'s_contacts.json";
            this.fs.writeFile(this.fileName, "", function (error) {
                if (error)
                    throw error;
            });
        }
    }
    // Write to phonebook
    FileManipulator.prototype.write = function (contacts) {
        var data = JSON.stringify(contacts);
        return this.fs.appendFileSync(this.fileName, data);
    };
    // Read phonebook
    FileManipulator.prototype.read = function () {
        return JSON.parse(this.fs.readFileSync(this.fileName));
    };
    FileManipulator.instances = 0;
    return FileManipulator;
})();
exports["default"] = FileManipulator;
module.exports = FileManipulator;

var Letter = function (letter) {
    this.letter = letter;
    this.show = false;
    this.letterDisplay = function () {
        if (this.letter == ' ') {
            this.show = true;
            return '  ';
        } if (this.show === false) {
            return ' _ ';
        } else {
            return this.letter;
        }

    };
};


module.exports = Letter;

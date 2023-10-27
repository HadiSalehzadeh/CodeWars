/*
Create a method to see whether the string is ALL CAPS.
*/

if (!String.prototype.isUpperCase) {
    String.prototype.isUpperCase = function () {
      return this.toUpperCase() === String(this);
    };
}
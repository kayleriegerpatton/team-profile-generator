// imports
const fs = require("fs");

const validateInput = (input) => {
  if (!input) {
    return "Field is required.";
  }
  return true;
};

// exports
module.exports = { validateInput };

/**
 *  return false : Correct format
 *  return error : Wrong format
 */

let Validator = require('validatorjs');
let validator = (data, rules) => {
    let validation = new Validator(data, rules);
    if (validation.passes())
        return false;
    else {
        return validation.errors.errors;
    }
};
module.exports = validator;
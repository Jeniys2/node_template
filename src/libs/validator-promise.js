let Validator = require('validatorjs');
// let validator = (data, rules) => {
//     return new Promise((resolve, reject) => {
//         let validation = new Validator(data, rules);
//         if (validation.passes())
//             resolve(true);
//         else {
//             reject(validation.errors.errors);
//         }
//     });
// };
let validator = (data, rules) => {
    let validation = new Validator(data, rules);
    if (validation.passes())
        return false;
    else {
        return validation.errors.errors;
    }
};
module.exports = validator;
const mysql = require('mysql');
class MySQL{
    constructor(options){
        this.connect = mysql.createPool(options);
    }
}
module.exports = MySQL;
// Import the 'connection' from 'connection.js'
const connection = require('./connection');

// Define a class "DB"
class DB {
    constructor(connection) {
        this.connection = connection;
    }

// Implement SQL queries methods
getAllDepartments() {
    return this.connection.query('SELECT * FROM department');
}

} // Implement other methods

module.exports = new DB(connection);
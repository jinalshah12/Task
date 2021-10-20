const db = require('../util/database');

module.exports = class User {
  constructor(name, email, username, password, contact) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.contact = contact;
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name, email, username, password, contact) VALUES (?, ?, ?, ?, ?)',
      [user.name, user.email, user.username, user.password, user.contact]
    );
  }
};
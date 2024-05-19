const bcrypt = require("bcryptjs");

const comparePassword= (password, hashedPasword) =>{
    return bcrypt.compare(password, hashedPasword);
}

module.exports = comparePassword;
import bcrypt from 'bcryptjs'

export default class encryptPassword {

// hash user's password before storing in database
static async encrypt(password) {
    const saltRounds = 10;
    let newPassword
    try {
    const salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);
    
    
    } catch (e) {
    console.log(e)
    }
    return hash; 
}
}

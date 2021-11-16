import bcrypt from 'bcryptjs'

// verify that user entered password matches password in DB
export default class verifyPassword {

    static async checkMatch(passwordInput, passwordDB) {
   
    let match = await bcrypt.compare(passwordInput, passwordDB);

    if (match) {
        return true;
    }
    else {
        return false;
    }
}
}
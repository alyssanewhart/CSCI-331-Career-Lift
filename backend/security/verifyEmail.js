export default class verifyEmail {

    // hash user's password before storing in database
    static async verify(email) {

        // match student email
        let studentRegex = "^[a-zA-Z0-9]+.[a-zA-Z0-9]+@student.montana.edu$"

        let professorRegex = "^[a-zA-Z0-9]+.[a-zA-Z0-9]+@montana.edu$"
        if (email.match(studentRegex) ||  email.match(professorRegex)) {
            return true
        }

        else {
            return false
        }
         
    }
    }
    
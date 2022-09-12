const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"email1@gmail.com",
        pass:"this is he best password"
    }
})
let details = {
    from: "email1@gmail.com",
    to: "email2@gmail.com",
    subject: "testing our nodemailer",
    text: "testing our first sender"
}
mailTransporter.sendMail( details, (err) => {
    if(err){
        console.log('it has an error', err)
    }
} )
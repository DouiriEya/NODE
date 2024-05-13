// 5- installing the nodemailer package using npm and send myself mails 
const nodemailer = require('nodemailer') ;     // kima ay module we need to require it bch najmou ne5dmou bih 
const nodemailer = require('nodemailer');
console.log(nodemailer) ;      // this instance of module has 3 fcs createTransport help

// Create a transporter object with the necessary configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yvbjhvjhvhj@gmail.com',
        pass: 'vhjbhjbn'
    }
});

// Define the email options
const mailOptions = {
    from: 'nknjk@gmail.com',
    to: 'bhjbjknj@example.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js using nodemailer.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
const nodemailer = require('nodemailer');

module.exports.sendMail = async function (user, callback) {
    //create a reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, //true for 465, false for other ports
        auth: {
            user: 'thata.arlekina@gmail.com',
            pass: 'jzulmxtbhztnygjf'
        }
    });

    let mailOptions = {
        from: '"Arcanum Oculltus" <thata.arlekina@gmail.com>', //sender address
        to: user.email, //list of receivers
        subject: user.subject, //subject line
        html: user.message
    };

    //send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    callback(info);
}
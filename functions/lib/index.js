"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const gmailEmail = 'yanivnoema@gmail.com';
const gmailPassword = encodeURIComponent('0509163333');
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
exports.contactUs = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', "*");
    response.set('Access-Control-Allow-Methods', 'GET, POST');
    const mailOptions = {
        to: 'y.noema@easy-send.net',
        subject: `Information Request from`,
        html: JSON.stringify(request.body)
    };
    mailTransport.sendMail(mailOptions).then(() => { console.log(`send mail to ${mailOptions.to}`); });
    response.status(200).send('ok');
});
//# sourceMappingURL=index.js.map
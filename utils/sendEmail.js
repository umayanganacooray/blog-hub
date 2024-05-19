const nodemail = require("nodemailer");

const sendEmail = async ({emailTo, subject, code, content}) =>{
    const trasnporter = nodemail.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "ume.cooray@gmail.com",
            pass: "nsct qvcv xuwv zels",
        },
    });

    const message = {
        to: emailTo,
        subject,
        html: `
            <div>
                <h3>Use this bellow code to ${content}</h3>
                <p><strong>Code: </strong>${code}</p>
            </div>
        `,
    };

    await trasnporter.sendMail(message);
};

module.exports = sendEmail;
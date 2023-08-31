const express =require('express');
const nodemailer = require('nodemailer');
const app =express();
const PORT =8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.listen(
  PORT,
  () => {
    console.log(`its alive in port:${PORT}`);
  }  
    )


app.post('/apimail', async (req,res)=>{


    // const name = req.body.name;
    // const email = req.body.email;
    // const phone = req.body.phone; 
    // const msg = req.body.msg; 
//     contentHTML = `
//     <h1>User Information</h1>
//     <ul>
//         <li>Username: ${name}</li>
//         <li>User Email: ${email}</li>
//         <li>PhoneNumber: ${phone}</li>
//     </ul>
//     <p>${msg}</p>
// `;

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: '10laragurmendi@gmail.com',
        pass: 'eolevknfpqtbxcfd'
    },
    tls: {
        rejectUnauthorized: false
    }
});

let info = await transporter.sendMail({
    from: '"Victor Server" <10laragurmendi@gmail.com>', // sender address,
    to: 'victorlara.cod@gmail.com',
    subject: 'Website Contact Form',
    text: 'Hello World'
    // html: contentHTML
})

console.log('Message sent: %s', info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



    res.send({message:'funciono Post'})


})
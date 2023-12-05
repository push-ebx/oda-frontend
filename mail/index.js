const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// http://localhost:3003/send?email=nikita.keyn@yandex.ru&phone=71299219&name=Nikita
app.get('/send', (req, res) => {
  const {email, phone, name} = req.query;

  (async () => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'oda.test@cursor.agency',
        pass: '9UsbUEtCME47TKXdkvNm',
      },
    });

    let result = await transporter.sendMail({
      from: '"Заявка" <oda.test@cursor.agency>',
      to: email,
      subject: 'Новая заявка',
      html: `<h3 style="text-align: center;">Телефон: ${phone}</h3><h3 style="text-align: center;">Имя: ${name}</h3>`,
    });

    console.log(result);
  })();

  res.send('ok')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
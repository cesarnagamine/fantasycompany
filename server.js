const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors');
const path = require('path');

//Changed from 3001 to 5000 for DEPLOYMENT:
const port = process.env.PORT || 5000;

//Middlewares:
//Ejecuta este código automáticamente con la aplicación.
app.use(express.json());
app.use(cors());


//ADDED FOR DEPLOYMENT:
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build'))
})



//Routes:
//Importa archivo 'posts' desde el folder 'routes'
//Usa las rutas del archivo 'posts' para el endpoint '/posts'
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

//Post request to send emails authomatically using nodemailer
//Triggerd from the 'Form' component handleSubmit() function:
app.post('/api/form', (req, res) => {
    console.log(req.body);

    //Set transporter, in this case Google Gmail account created by you:
    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'nagamine.soft.dev@gmail.com',
            pass: 'codingpath2020'
        }
    }));

    //Get the data from the 'handleSubmit()' function from the Form component:
    const mailOptions = {
        from: req.body.user.name,
        to: [req.body.user.email, 'nagamine.soft.dev@gmail.com'],
        subject: req.body.user.subject,
        text: req.body.user.message
    };

    //Use transporter to send 'mailOptions' data, if there's an error
    //print it in the console, otherwise print the 'mailOptions' data:
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

});


//Database Connection:
//Usa en método 'connect' del objeto 'mongoose' para conectarse
//a la base de datos (1er argumento: Date Base URL, 
//2do argumento: prefixes requeridos). Después de conectar pintar en 
//consola string. Si hay algun error, pintarlo en consola.
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.error('Error!', err)
});

//Added for DEPLOYMENT:
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port);
console.log(`Listening to ${port}`);
const express = require('express');
const routes = require("./src/routes")
const app = express();
const port = process.env.PORT || 5555;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(morgan('dev'));  // apenas dados simples

app.use(routes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})

app.listen(port, (err) => {
    if (err) return console.log(`Não startou ${err}`)
    console.log('Runing on port ', port)
})
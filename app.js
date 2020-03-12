const express = require("express");
const morgan = require("morgan");
const mainLayout = require('./views/main')
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')


const app = express();

const models = require('./models');



app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.redirect('/wiki');
  })

app.use('/wiki', wikiRouter)

const init = async () => {

    await models.db.sync({force: true})

    const PORT = 3000;

    app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
    });
}

init()
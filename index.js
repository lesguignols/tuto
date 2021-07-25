const express = require('express');
const cors = require('cors');
const app = express();
const mongoDBClient = require('./mongoClient');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./server/schema/index');
const port = 4000;

app.use(cors());
app.get("/", (req, res) => {
    res.send("Prêt à casser des mères?")
})

//API Rest
/**const Price = require('./models/price');
app.get('/prices', async(req, res) => {
    const prices = await Price.find({})
    try {
        res.send(prices)
    } catch (e) {
        res.status(500).send(err);
    }
})

app.get('/prices/:_id', async(req, res) => {
    const _id = req.params._id
    const prices = await Price.find({ _id: _id })
    try {
        res.send(prices)
    } catch (e) {
        res.status(500).send(err);
    }
})*/

//GraphQL UI
app.use(
    '/',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);



app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
    mongoDBClient.init();
})
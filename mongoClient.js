const mongoose = require('mongoose');
const connection = require('./connection');


const URI = `mongodb+srv://${connection.getUser}:${connection.getPassword}@bdd-sphimx.zesm5.mongodb.net/${connection.getDatabase}?retryWrites=true&w=majority`;

const MongoDBClient = {
    init: () => {
        try {
            const client = mongoose.connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            client.then(() => console.log("Bien connecté à MongoDB Atlas"));
        } catch (e) {
            throw console.log("Problème de connexion!");
        }
    }
}

module.exports = MongoDBClient
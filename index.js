const express = require('express');
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Prêt à casser des mères?")
})

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
})
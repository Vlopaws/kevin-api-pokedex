const express = require('express')

// Appel de la fonction express() pour creer une instance de notre application 
// la variable app represente notre serveur web
const app = express()

// indique sur quel port le serveur ecoute les requetes envoye par les clients
const port = 3000


app.get('/', (req, res) => {
    // le corps de la fonction
    // Renvoie une chaine de caractere au navigateur
    res.send('Hello, Express')
})

// demarre le serveur
app.listen(port,() => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
})
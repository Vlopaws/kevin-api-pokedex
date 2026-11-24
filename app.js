const express = require('express')

// Appel de la fonction express() pour creer une instance de notre application 
// la variable app represente notre serveur web
const app = express()

// indique sur quel port le serveur ecoute les requetes envoye par les clients
const port = 3000

const pokemons = [
    {id: 1, nom: 'Bulbizzare', type: 'plante'},
    {id: 4, nom: 'Salameche', type: 'feu'},
    {id: 7, nom: 'Carapuce', type: 'eau'},
    {id: 25, nom: 'pikachu', type: 'electrik'},
    {id: 37, nom: 'goupix', type: 'feu'}
]



app.get('/', (req, res) => {
    // le corps de la fonction
    // Renvoie une chaine de caractere au navigateur
    res.send('bienvenue sur mon API')
})

app.get('/api/version', (req,res) => {
    res.send('1.0.0')
})

app.get('/api/status', (req,res) => {
    res.send('API opérationnelle')
})

//renvoie la list des pokemons
app.get('/api/pokemons', (req,res) => {
    res.json(pokemons)
})

// renvoie un pokemon a partir de son id
app.get('/api/pokemons/:id', (req, res) => {
    const id = Number(req.params.id)
    const pokemon = pokemons.find(p => p.id === id)
    res.json(pokemon)
})

// demarre le serveur
app.listen(port,() => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
})
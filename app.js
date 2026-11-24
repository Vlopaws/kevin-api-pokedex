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

const dresseurs = [
    { id: 1, nom: 'Sacha', ville: 'bourg-palette' },
    { id: 2, nom: 'Ondine', ville: 'azuria' },
    { id: 3, nom: 'Pierre', ville: 'argenta' },
    { id: 4, nom: 'Régis', ville: 'bourg-palette' }
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
    const type = req.query.type

    if (type) {
        const resultat = pokemons.filter(p => p.type === type)
        return res.json(resultat)
    }

    res.json(pokemons)
})

// renvoie un pokemon a partir de son id
app.get('/api/pokemons/:id', (req, res) => {
    const id = Number(req.params.id)

    if (Number.isNaN(id)) {
        return res.status(400).json({message: "L'identifiant doit etre un nombre"})
    }
    const pokemon = pokemons.find(p => p.id === id)

    if(!pokemon) {
        return res.status(404).json({message: 'Pokemon introuvable'})
    }
    res.json(pokemon)
})


app.get('/api/dresseurs', (req,res) => {
    res.json(dresseurs)
})

app.get('/api/dresseurs/:id', (req,res) => {
    const id = Number(req.params.id)


    if (Number.isNaN(id)) {
        return res.status(400).json({message: "L'identifiant doit etre un nombre"})
    }
    const dresseurs = dresseurs.find(d => d.id === id)
    
    if(!dresseurs) {
        return res.status(404).json({message: 'Dresseurs introuvable'})
    }

    res.json(dresseurs)
})

// demarre le serveur
app.listen(port,() => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
})
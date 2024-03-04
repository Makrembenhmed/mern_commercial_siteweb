const produitcontrollers = require("../controllers/produit.controller")

console.log(produitcontrollers)

module.exports = (app)=>{
    app.get('/api/produit',produitcontrollers.findAllProds)
    app.post('/api/produit',produitcontrollers.createNewProduit)
    app.get('/api/produit/:pid',produitcontrollers.getOneProduit)
    app.put('/api/produit/:pid',produitcontrollers.updateOneProduit)
    app.delete('/api/produit/:pid',produitcontrollers.deleteOneProduit)
    app.get('/api/search', produitcontrollers.findbyprice)
    app.get('/api/recherchecriter', produitcontrollers.findbystring)
}
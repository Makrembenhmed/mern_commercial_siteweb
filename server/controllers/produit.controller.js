

const  produit  = require("../models/produit.model")

module.exports.test = (req, res) => {

    res.json("the server Says hello MERN Stack Ninjas")
}



//! -----------------CRUD

//? READ ALL

module.exports.findAllProds = (req, res) => {

    produit.find()
        .then(Allprods => {
            console.log(Allprods)
            res.json(Allprods)
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}
//? CREATE


module.exports.createNewProduit = (req, res) => {

    produit.create(req.body)
        .then(Allprods => {
            console.log(Allprods)
            res.json(Allprods)
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}
// find one

module.exports.getOneProduit = (req, res) => {

    produit.findOne({_id:req.params.pid})
        .then(Oneprod => {
            console.log(Oneprod)
            res.json(Oneprod)
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}



// update

module.exports.updateOneProduit = (req, res) => {

    produit.findOneAndUpdate({_id:req.params.pid}, 
        req.body,
        {new:true,runValidators:true})
        .then(Updatedprod => {
            console.log(Updatedprod)
            res.json(Updatedprod)
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

// delete one produit

module.exports.deleteOneProduit = (req, res) => {

    produit.deleteOne({_id:req.params.pid}) 
        
        
        .then(Deletedprod => {
            console.log(Deletedprod)
            res.json(Deletedprod)
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

// Utilisation de la méthode statique `findByPriceRange`
module.exports.findbyprice = (req, res) => {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
produit.findByPriceRange(minPrice, maxPrice)
    .then(products => {
        console.log(products);
        res.json(products)
    })
    .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })
}
// Utilisation de la méthode statique `search`
module.exports.findbystring = (req, res) => {
    const keyword = req.query.recherche
produit.search(keyword)
    .then(products => {
        console.log(products);
        res.json(products)
    })
    .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })
}
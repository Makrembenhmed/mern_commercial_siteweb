const mongoose = require("mongoose")



const produit = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required"]
    },
    price: {
        type: Number,
        required: [true, "price is Required"],
        
    },
    description: {
        type: String,
        required: [true, "description is Required"],
        minLength: [3, "min length must be greater than 3"]
    },
    photo: {
        type: String,  // Assuming the photo is represented by an URL
        
    }
}, { timestamps: true })

// Définir la méthode statique `findByPriceRange`
produit.statics.findByPriceRange = function(minPrice, maxPrice) {
    return this.find({ price: { $gte: minPrice, $lte: maxPrice } });
};

// Définir la méthode statique `search`
produit.statics.search = function(query) {
    return this.find({
        $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
        ]
    });
};


module.exports = mongoose.model("produit", produit)

 
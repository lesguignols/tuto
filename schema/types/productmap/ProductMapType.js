const graphql = require('graphql');
const product = require('../../models/product');
const ProductType = require('../ProductType');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt
} = graphql;

const ProductMapType = new GraphQLObjectType({
    name: 'ProductMap',
    description: "ProductMapType correspond aux objets de type Map_produit.",
    fields: () => ({
        _id: {
            type: GraphQLID,
            description: "Correspond à l'identifiant de la ligne de facture: c'est un identifiant unique."
        },
        product: {
            type: ProductType,
            description: "Correspond à l'identifiant du produit de Map_produit.",
            resolve(parentValue) {
                return product.findById(parentValue.product)
            }
        },
        quantity: {
            type: GraphQLInt,
            description: "Correspond à la quantité de produits de Map_produit."
        }
    })
});

module.exports = ProductMapType;
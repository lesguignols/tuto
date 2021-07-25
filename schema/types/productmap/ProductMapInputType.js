const graphql = require('graphql');

const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLInt
} = graphql;

const ProductMapInputType = new GraphQLInputObjectType({
    name: 'ProductMapInput',
    description: "ProductMapInputType permet de saisir un objet de type Map_produit en paramètre",
    fields: () => ({
        _id: {
            type: GraphQLID,
            description: "Correspond à l'identifiant de la ligne de facture: c'est un identifiant unique."
        },
        product: {
            type: GraphQLID,
            description: "Correspond à l'identifiant du produit de Map_produit.",
        },
        quantity: {
            type: GraphQLInt,
            description: "Correspond à la quantité de produits de Map_produit."
        }
    })
});

module.exports = ProductMapInputType;
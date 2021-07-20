const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        _id: { type: GraphQLID },
        barcode: { type: GraphQLString },
        name: { type: GraphQLString },
        selling_price: { type: GraphQLFloat }
    })
});

module.exports = ProductType;
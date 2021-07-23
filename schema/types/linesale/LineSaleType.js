const graphql = require('graphql');
const product = require('../../models/product');
const ProductType = require('../ProductType');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const LineSaleType = new GraphQLObjectType({
    name: 'LineSale',
    fields: () => ({
        _id: { type: GraphQLID },
        product: {
            type: ProductType,
            resolve(parentValue) {
                return product.findById(parentValue.product)
            }
        },
        quantity: { type: GraphQLInt },
        sum: { type: GraphQLFloat }
    })
});

module.exports = LineSaleType;
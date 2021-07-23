const graphql = require('graphql');
const product = require('../../models/product');
const ProductType = require('../ProductType');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const LineBillType = new GraphQLObjectType({
    name: 'LineBill',
    fields: () => ({
        _id: { type: GraphQLID },
        product: {
            type: ProductType,
            resolve(parentValue) {
                return product.findById(parentValue.product)
            }
        },
        quantity: { type: GraphQLInt },
        price_unit: { type: GraphQLFloat },
        tva: { type: GraphQLFloat },
        price_line: { type: GraphQLFloat }
    })
});

module.exports = LineBillType;
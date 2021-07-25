const graphql = require('graphql');
const product = require('../models/product');
const ProductType = require('./ProductType');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
    GraphQLFloat,
    GraphQLBoolean
} = graphql;

const ReductionType = new GraphQLObjectType({
    name: 'Reduction',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        active: { type: GraphQLBoolean },
        rate: { type: GraphQLFloat },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parentValue) {
                return product.find({ _id: parentValue.products });
            }
        }
    })
});

module.exports = ReductionType;
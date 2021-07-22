const graphql = require('graphql');

const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const LineSaleInputType = new GraphQLInputObjectType({
    name: 'LineSaleInput',
    fields: () => ({
        _id: { type: GraphQLID },
        product: { type: GraphQLID },
        quantity: { type: GraphQLInt },
        sum: { type: GraphQLFloat }
    })
});

module.exports = LineSaleInputType;
const graphql = require('graphql');

const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const LineBillInputType = new GraphQLInputObjectType({
    name: 'LineBillInput',
    fields: () => ({
        _id: { type: GraphQLID },
        product: { type: GraphQLID },
        quantity: { type: GraphQLInt },
        price_unit: { type: GraphQLFloat },
        tva: { type: GraphQLFloat }
    })
});

module.exports = LineBillInputType;
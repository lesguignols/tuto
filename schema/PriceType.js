const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLFloat,
    GraphQLBoolean
} = graphql;

const PriceType = new GraphQLObjectType({
    name: 'Price',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        active: { type: GraphQLBoolean }
    })
});

module.exports = PriceType;
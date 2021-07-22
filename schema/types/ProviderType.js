const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

const ProviderType = new GraphQLObjectType({
    name: 'Provider',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

module.exports = ProviderType;
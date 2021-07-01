const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = graphql;

const TrainingType = new GraphQLObjectType({
    name: 'Training',
    fields: () => ({
        _id: { type: GraphQLID },
        curriculum: { type: GraphQLString },
        wording: { type: GraphQLString },
        year: { type: GraphQLInt }
    })
});

module.exports = TrainingType;
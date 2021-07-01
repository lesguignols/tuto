const graphql = require('graphql');
const Price = require('../models/price');
const PriceType = require('./PriceType');
const Training = require('../models/training');
const TrainingType = require('./TrainingType');
const Provider = require('../models/provider');
const ProviderType = require('./ProviderType');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return 'Hello Express';
            }
        },
        prices: {
            type: new GraphQLList(PriceType),
            resolve(parent, args) {
                return Price.find({})
            }
        },
        prices: {
            type: new GraphQLList(PriceType),
            args: { active: { type: GraphQLBoolean } },
            resolve(parent, args) {
                return Price.find({ active: args.active })
            }
        },
        trainings: {
            type: new GraphQLList(TrainingType),
            resolve(parent, args) {
                return Training.find({})
            }
        },
        trainings: {
            type: new GraphQLList(TrainingType),
            args: { curriculum: { type: GraphQLString } },
            resolve(parent, args) {
                return Training.find({ curriculum: args.curriculum })
            }
        },
        trainings: {
            type: new GraphQLList(TrainingType),
            args: { wording: { type: GraphQLString } },
            resolve(parent, args) {
                return Training.find({ wording: args.wording })
            }
        },
        provider: {
            type: new GraphQLList(ProviderType),
            resolve(parent, args) {
                return Provider.find()
            }
        }
    }
});

var schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = schema;
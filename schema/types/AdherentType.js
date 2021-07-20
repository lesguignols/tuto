const graphql = require('graphql');
const price = require('../models/price');
const PriceType = require('./PriceType');
const training = require('../models/training');
const TrainingType = require('./TrainingType');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLInt
} = graphql;

const AdherentType = new GraphQLObjectType({
    name: 'Adherent',
    fields: () => ({
        _id: { type: GraphQLID },
        card: { type: GraphQLString },
        name: { type: GraphQLString },
        firstName: { type: GraphQLString },
        link_photo: { type: GraphQLString },
        email: { type: GraphQLString },
        price: {
            type: PriceType,
            resolve(parentValue) {
                return price.findById(parentValue.price);
            }
        },
        training: {
            type: TrainingType,
            resolve(parentValue) {
                return training.findById(parentValue.training);
            }
        },
        active: { type: GraphQLBoolean },
        member: { type: GraphQLBoolean },
        code: { type: GraphQLInt },
        secret_code: { type: GraphQLInt },
        administrateur: { type: GraphQLBoolean },
        superAdministrator: { type: GraphQLBoolean }
    })
});

module.exports = AdherentType;
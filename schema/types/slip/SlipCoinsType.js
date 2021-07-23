const graphql = require('graphql');
const Adherent = require('../../models/adherent');
const AdherentType = require('../AdherentType');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt,
    GraphQLString
} = graphql;

const SlipCoinsType = new GraphQLObjectType({
    name: 'SlipCoins',
    fields: () => ({
        _id: {
            type: GraphQLID,
            require: true
        },
        date: { type: GraphQLString },
        member: {
            type: AdherentType,
            require: true,
            resolve(parentValue) {
                return Adherent.findById(parentValue.member);
            }
        },
        total_amount: {
            type: GraphQLFloat,
            default: 0
        },
        num_slip: {
            type: GraphQLString
        },
        two: {
            type: GraphQLInt,
            default: 0
        },
        one: {
            type: GraphQLInt,
            default: 0
        },
        fiftycents: {
            type: GraphQLInt,
            default: 0
        },
        twentycents: {
            type: GraphQLInt,
            default: 0
        },
        tencents: {
            type: GraphQLInt,
            default: 0
        },
        fivecents: {
            type: GraphQLInt,
            default: 0
        },
        twocents: {
            type: GraphQLInt,
            default: 0
        },
        onecents: {
            type: GraphQLInt,
            default: 0
        }
    })
});

module.exports = SlipCoinsType;
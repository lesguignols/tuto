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

const SlipTicketType = new GraphQLObjectType({
    name: 'SlipTicket',
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
        fifty: {
            type: GraphQLInt,
            default: 0
        },
        twenty: {
            type: GraphQLInt,
            default: 0
        },
        ten: {
            type: GraphQLInt,
            default: 0
        },
        five: {
            type: GraphQLInt,
            default: 0
        }
    })
});

module.exports = SlipTicketType;
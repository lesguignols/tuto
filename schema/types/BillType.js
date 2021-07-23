const graphql = require('graphql');
const adherent = require('../models/adherent');
const AdherentType = require('./AdherentType');
const linebill = require('../models/linebill');
const LineBillType = require('./linebill/LineBillType');
const provider = require('../models/provider');
const ProviderType = require('./ProviderType');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} = graphql;

const BillType = new GraphQLObjectType({
    name: 'Bill',
    fields: () => ({
        _id: { type: GraphQLID },
        member: {
            type: AdherentType,
            resolve(parentValue) {
                return adherent.findById(parentValue.member);
            }
        },
        date: { type: GraphQLString },
        provider: {
            type: ProviderType,
            resolve(parentValue) {
                return provider.findById(parentValue.provider);
            }
        },
        products: {
            type: new GraphQLList(LineBillType),
            resolve(parentValue) {
                return linebill.find({ _id: parentValue.products });
            }
        },
        price_tot: { type: GraphQLFloat }
    })
});

module.exports = BillType;
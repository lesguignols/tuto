const graphql = require('graphql');
const adherent = require('../models/adherent');
const linesale = require('../models/linesale');
const AdherentType = require('./AdherentType');
const LineSaleType = require('./linesale/LineSaleType');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} = graphql;

const SaleType = new GraphQLObjectType({
    name: 'Sale',
    fields: () => ({
        _id: { type: GraphQLID },
        seller: {
            type: AdherentType,
            resolve(parentValue) {
                return adherent.findById(parentValue.seller);
            }
        },
        buyer: {
            type: AdherentType,
            resolve(parentValue) {
                return adherent.findById(parentValue.buyer);
            }
        },
        date: { type: GraphQLString },
        products: {
            type: new GraphQLList(LineSaleType),
            resolve(parentValue) {
                return linesale.find({ _id: parentValue.products });
            }
        },
        price_tot: { type: GraphQLFloat }
    })
});

module.exports = SaleType;
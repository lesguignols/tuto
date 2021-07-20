const graphql = require('graphql');
const GraphQLDate = require('graphql-date');

const Price = require('./models/price');
const PriceType = require('./types/PriceType');
const Training = require('./models/training');
const TrainingType = require('./types/TrainingType');
const Provider = require('./models/provider');
const ProviderType = require('./types/ProviderType');
const Product = require('./models/product');
const ProductType = require('./types/ProductType');
const Adherent = require('./models/adherent');
const AdherentType = require('./types/AdherentType');
const CashFund = require('./models/cashfund');
const CashFundType = require('./types/CashFundType');

const {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat
} = graphql;

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return 'Hello Express';
            }
        },
        /**
         * 
         * 
         * Query adherent
         * 
         * 
         */
        adherentById: {
            type: AdherentType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.findById(args._id);
            }
        },
        adherentByCard: {
            type: new GraphQLList(AdherentType),
            args: { card: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ card: args.card });
            }
        },
        adherentByName: {
            type: new GraphQLList(AdherentType),
            args: { name: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ name: args.name });
            }
        },
        adherentByFirstName: {
            type: new GraphQLList(AdherentType),
            args: { firstName: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ firstName: args.firstName });
            }
        },
        adherentByPrice: {
            type: new GraphQLList(AdherentType),
            args: { price: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ price: args.price });
            }
        },
        adherentByTraining: {
            type: new GraphQLList(AdherentType),
            args: { training: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ training: args.training });
            }
        },
        adherentByActive: {
            type: new GraphQLList(AdherentType),
            args: { active: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ active: args.active });
            }
        },
        adherentByMember: {
            type: new GraphQLList(AdherentType),
            args: { member: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ member: args.member });
            }
        },
        adherentByAdmin: {
            type: new GraphQLList(AdherentType),
            args: { administrator: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ administrator: args.administrator });
            }
        },
        adherentBySA: {
            type: new GraphQLList(AdherentType),
            args: { superAdministrator: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ superAdministrator: args.superAdministrator });
            }
        },
        allAdherents: {
            type: new GraphQLList(AdherentType),
            resolve(parent, args) {
                return Adherent.find({});
            }
        },
        /**
         * 
         * 
         * Query cashfund
         * 
         * 
         */
        cashFundById: {
            type: CashFundType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return CashFund.findById(args._id);
            }
        },
        cashFundByPeriod: {
            type: new GraphQLList(CashFundType),
            args: {
                startDate: { type: new GraphQLNonNull(GraphQLString) },
                endDate: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                if (args.endDate != "") {
                    return CashFund.find({ date: { "$gte": args.startDate, "$lte": args.endDate } })
                } else {
                    return CashFund.find({ date: { "$gte": args.startDate, "$lte": args.startDate } })
                }

            }
        },
        cashFundByMember: {
            type: new GraphQLList(CashFundType),
            args: { member: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return CashFund.find({ member: args.member });
            }
        },
        cashFundByPeriodAndMember: {
            type: new GraphQLList(CashFundType),
            args: {
                startDate: { type: new GraphQLNonNull(GraphQLString) },
                endDate: { type: new GraphQLNonNull(GraphQLString) },
                member: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                if (args.endDate != "") {
                    return CashFund.find({ date: { "$gte": args.startDate, "$lte": args.endDate }, member: args.member })
                } else {
                    return CashFund.find({ date: { "$gte": args.startDate, "$lte": args.startDate }, member: args.member })
                }
            }
        },
        cashFundBySumGreater: {
            type: new GraphQLList(CashFundType),
            args: { sum: { type: new GraphQLNonNull(GraphQLFloat) } },
            resolve(parent, args) {
                return CashFund.find({ sum: { "$gte": args.sum } });
            }
        },
        cashFundBySumLess: {
            type: new GraphQLList(CashFundType),
            args: { sum: { type: new GraphQLNonNull(GraphQLFloat) } },
            resolve(parent, args) {
                return CashFund.find({ sum: { "$lte": args.sum } });
            }
        },
        allCashFunds: {
            type: new GraphQLList(CashFundType),
            resolve(parent, args) {
                return CashFund.find({});
            }
        },
        /**
         * 
         * 
         * Query price
         * 
         * 
         */
        priceById: {
            type: PriceType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Price.findById(args._id);
            }
        },
        pricesByActive: {
            type: new GraphQLList(PriceType),
            args: { active: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Price.find({ active: args.active });
            }
        },
        allPrices: {
            type: new GraphQLList(PriceType),
            resolve(parent, args) {
                return Price.find({});
            }
        },
        /**
         * 
         * 
         * Query product
         * 
         * 
         */
        productById: {
            type: ProductType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Product.findById(args._id);
            }
        },
        productsByBarcode: {
            type: new GraphQLList(ProductType),
            args: { barcode: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Product.find({ barcode: args.barcode });
            }
        },
        productsBySellingPrice: {
            type: new GraphQLList(ProductType),
            args: { selling_price: { type: new GraphQLNonNull(GraphQLFloat) } },
            resolve(parent, args) {
                return Product.find({ selling_price: args.selling_price });
            }
        },
        allProducts: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find({});
            }
        },
        /**
         * 
         * 
         * Query provider
         * 
         * 
         */
        providerById: {
            type: ProviderType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Provider.findById(args._id);
            }
        },
        allProviders: {
            type: new GraphQLList(ProviderType),
            resolve(parent, args) {
                return Provider.find({});
            }
        },
        /**
         * 
         * 
         * Query Training
         * 
         * 
         */
        trainingById: {
            type: TrainingType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Training.findById(args._id);
            }
        },
        trainingsByCurriculum: {
            type: new GraphQLList(TrainingType),
            args: { curriculum: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Training.find({ curriculum: args.curriculum });
            }
        },
        trainingsByWording: {
            type: new GraphQLList(TrainingType),
            args: { wording: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Training.find({ wording: args.wording });
            }
        },
        allTrainings: {
            type: new GraphQLList(TrainingType),
            resolve(parent, args) {
                return Training.find({});
            }
        }
    }
});

module.exports = RootQueryType;
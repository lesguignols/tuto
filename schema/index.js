const graphql = require('graphql');
const Price = require('../models/price');
const PriceType = require('./PriceType');
const Training = require('../models/training');
const TrainingType = require('./TrainingType');
const Provider = require('../models/provider');
const ProviderType = require('./ProviderType');
const Product = require('../models/product');
const ProductType = require('./ProductType');
const Adherent = require('../models/adherent');
const AdherentType = require('./AdherentType');

const {
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat
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
        /**
         * Requêtes sur les prix
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
         * Requêtes sur les formations
         */
        trainingById: {
            type: ProviderType,
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
        },
        /**
         * Requêtes sur les fournisseurs
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
         * Requêtes sur les produits
         */
        productById: {
            type: ProviderType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Product.findById(args._id);
            }
        },
        productsByBarcode: {
            type: ProductType,
            args: { barcode: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Product.find({ barcode: barcode });
            }
        },
        productsBySellingPrice: {
            type: new GraphQLList(ProductType),
            args: { selling_price: { type: new GraphQLNonNull(GraphQLFloat) } },
            resolve(parent, args) {
                return Product.find({ selling_price: selling_price });
            }
        },
        allProducts: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find({});
            }
        },
        /**
         * Requêtes sur les adhérents
         */
        adherentById: {
            type: AdherentType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.findById(args._id);
            }
        },
        adherentByName: {
            type: new GraphQLList(AdherentType),
            args: { name: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ name: args.name });;
            }
        },
        adherentByFirstName: {
            type: new GraphQLList(AdherentType),
            args: { firstName: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ firstName: args.firstName });;
            }
        },
        adherentByPrice: {
            type: new GraphQLList(AdherentType),
            args: { price: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ price: args.price });;
            }
        },
        adherentByTraining: {
            type: new GraphQLList(AdherentType),
            args: { training: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return Adherent.find({ training: args.training });;
            }
        },
        adherentByActive: {
            type: new GraphQLList(AdherentType),
            args: { active: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ active: args.active });;
            }
        },
        adherentByMember: {
            type: new GraphQLList(AdherentType),
            args: { member: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ member: args.member });;
            }
        },
        adherentByAdmin: {
            type: new GraphQLList(AdherentType),
            args: { admin: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ admin: args.admin });;
            }
        },
        adherentBySA: {
            type: new GraphQLList(AdherentType),
            args: { superAdmin: { type: new GraphQLNonNull(GraphQLBoolean) } },
            resolve(parent, args) {
                return Adherent.find({ superAdmin: args.superAdmin });;
            }
        },
        allAdherents: {
            type: new GraphQLList(AdherentType),
            resolve(parent, args) {
                return Adherent.find({});
            }
        }
    }
});

var schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = schema;
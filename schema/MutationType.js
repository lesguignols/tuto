const graphql = require('graphql');
const mongoose = require('mongoose');

const Adherent = require('./models/adherent');
const AdherentType = require('./types/AdherentType');
const CashFund = require('./models/cashfund');
const CashFundType = require('./types/CashFundType');
const Price = require('./models/price');
const PriceType = require('./types/PriceType');
const Product = require('./models/product');
const ProductType = require('./types/ProductType');
const Provider = require('./models/provider');
const ProviderType = require('./types/ProviderType');
const Sale = require('./models/sale');
const SaleType = require('./types/SaleType');
const Training = require('./models/training');
const TrainingType = require('./types/TrainingType');
const LineSaleType = require('./types/LineSaleType');

const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLInt,
    GraphQLID
} = graphql;

const MutationType = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        /**
         * 
         * 
         * Mutation adherent
         * 
         * 
         */
        addAdherent: {
            type: AdherentType,
            args: {
                card: { type: GraphQLString },
                name: { type: GraphQLString },
                firstName: { type: GraphQLString },
                email: { type: GraphQLString },
                price: { type: GraphQLID },
                training: { type: GraphQLID }
            },
            resolve(parent, args) {
                let adherent = new Adherent({
                    _id: mongoose.Types.ObjectId(),
                    card: args.card,
                    name: args.name,
                    firstName: args.firstName,
                    link_photo: args.card + ".png",
                    email: args.email,
                    price: args.price,
                    training: args.training,
                    active: false,
                    member: false,
                    code: null,
                    secret_code: null,
                    administrator: false,
                    superAdministrator: false
                })
                return adherent.save()
            }
        },
        updateCardAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                card: { type: GraphQLString }
            },
            resolve(parent, args) {
                if (args.card != "") {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "card": args.card } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateNameAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                if (args.name != "") {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "name": args.name } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateFirstNameAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: GraphQLString }
            },
            resolve(parent, args) {
                if (args.firstName != "") {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "firstName": args.firstName } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateLink_photoAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                link_photo: { type: GraphQLString }
            },
            resolve(parent, args) {
                if (args.link_photo != "") {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "link_photo": args.link_photo + ".png" } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateEmailAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLString }
            },
            resolve(parent, args) {
                if (args.email != "") {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "email": args.email } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updatePriceAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: GraphQLID }
            },
            resolve(parent, args) {
                if (args.price != "") {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "price": args.price } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateTrainingAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                training: { type: GraphQLID }
            },
            resolve(parent, args) {
                if (args.training != "") {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "training": args.training } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateActiveAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                active: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                if (args.active != null) {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "active": args.active } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateMemberAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                member: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                if (args.member != null) {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "member": args.member } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateCodeAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                code: { type: GraphQLInt }
            },
            resolve(parent, args) {
                if (args.code != null) {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "code": args.code } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateSecret_codeAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                secret_code: { type: GraphQLInt }
            },
            resolve(parent, args) {
                if (args.secret_code != null) {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "secret_code": args.secret_code } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateAdministrateurAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                administrateur: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                if (args.administrateur != null) {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "administrateur": args.administrateur } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        updateSuperAdministratorAdherent: {
            type: AdherentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                superAdministrator: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                if (args.superAdministrator != null) {
                    return Adherent.findByIdAndUpdate(args._id, { $set: { "superAdministrator": args.superAdministrator } }, { new: true, useFindAndModify: false });
                } else {
                    return Adherent.findById(args._id);
                }
            }
        },
        /**
         * 
         * 
         * Mutation cashfund
         * 
         * 
         */
        addCashFund: {
            type: CashFundType,
            args: {
                date: { type: GraphQLString },
                member: { type: GraphQLID },
                fifty: { type: GraphQLFloat },
                twenty: { type: GraphQLFloat },
                ten: { type: GraphQLFloat },
                five: { type: GraphQLFloat },
                two: { type: GraphQLFloat },
                one: { type: GraphQLFloat },
                fiftycents: { type: GraphQLFloat },
                twentycents: { type: GraphQLFloat },
                tencents: { type: GraphQLFloat },
                fivecents: { type: GraphQLFloat },
                twocents: { type: GraphQLFloat },
                onecents: { type: GraphQLFloat }
            },
            resolve(parent, args) {
                var sum = args.fifty * 50 + args.twenty * 20 + args.ten * 10 + args.five * 5 + args.two * 2 + args.one * 1 + args.fiftycents * 0.5 + args.twentycents * 0.2 +
                    args.tencents * 0.1 + args.fivecents * 0.05 + args.twocents * 0.02 + args.onecents * 0.01;
                sum = Number.parseFloat(sum).toFixed(2);
                let cashfund = new CashFund({
                    _id: mongoose.Types.ObjectId(),
                    date: args.date,
                    member: args.member,
                    sum: sum,
                    fifty: args.fifty,
                    twenty: args.twenty,
                    ten: args.ten,
                    five: args.five,
                    two: args.two,
                    one: args.one,
                    fiftycents: args.fiftycents,
                    twentycents: args.twentycents,
                    tencents: args.tencents,
                    fivecents: args.fivecents,
                    twocents: args.twocents,
                    onecents: args.onecents
                })
                return cashfund.save()
            }
        },
        /**
         * 
         * 
         * Mutation price
         * 
         * 
         */
        addPrice: {
            type: PriceType,
            args: {
                name: { type: GraphQLString },
                price: { type: GraphQLFloat },
                active: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                let price = new Price({
                    _id: mongoose.Types.ObjectId(),
                    name: args.name,
                    price: args.price,
                    active: args.active
                })
                return price.save()
            }
        },
        updateNamePrice: {
            type: PriceType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Price.findByIdAndUpdate(args._id, { $set: { "name": args.name } }, { new: true, useFindAndModify: false });
            }
        },
        updatePricePrice: {
            type: PriceType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                price: { type: new GraphQLNonNull(GraphQLFloat) }
            },
            resolve(parent, args) {
                return Price.findByIdAndUpdate(args._id, { $set: { "price": args.price } }, { new: true, useFindAndModify: false });
            }
        },
        updateActivePrice: {
            type: PriceType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                active: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve(parent, args) {
                return Price.findByIdAndUpdate(args._id, { $set: { "active": args.active } }, { new: true, useFindAndModify: false });
            }
        },
        removePrice: {
            type: PriceType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Price.findByIdAndRemove({ _id: args._id });
            }
        },
        /**
         * 
         * 
         * Mutation product
         * 
         * 
         */
        addProduct: {
            type: ProductType,
            args: {
                barcode: { type: GraphQLString },
                name: { type: GraphQLString },
                selling_price: { type: GraphQLFloat }
            },
            resolve(parent, args) {
                let product = new Product({
                    _id: mongoose.Types.ObjectId(),
                    barcode: args.barcode,
                    name: args.name,
                    selling_price: args.selling_price
                })
                return product.save()
            }
        },
        updateBarcodeProduct: {
            type: ProductType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                barcode: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Product.findByIdAndUpdate(args._id, { "barcode": args.barcode }, { new: true, useFindAndModify: false });
            }
        },
        updateNameProduct: {
            type: ProductType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Product.findByIdAndUpdate(args._id, { $set: { "name": args.name } }, { new: true, useFindAndModify: false });
            }
        },
        updateSelling_priceProduct: {
            type: ProductType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                selling_price: { type: new GraphQLNonNull(GraphQLFloat) }
            },
            resolve(parent, args) {
                return Product.findByIdAndUpdate(args._id, { $set: { "selling_price": args.selling_price } }, { new: true, useFindAndModify: false });
            }
        },
        removeProduct: {
            type: ProductType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Product.findByIdAndRemove({ _id: args._id });
            }
        },
        /**
         * 
         * 
         * Mutation provider
         * 
         * 
         */
        addProvider: {
            type: ProviderType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            resolve(parent, args) {
                let provider = new Provider({
                    _id: mongoose.Types.ObjectId(),
                    name: args.name,
                    address: args.address,
                    phone: args.phone,
                    email: args.email
                })
                return provider.save()
            }
        },
        updateNameProvider: {
            type: ProviderType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Provider.findByIdAndUpdate(args._id, { $set: { "name": args.name } }, { new: true, useFindAndModify: false });
            }
        },
        updateAddressProvider: {
            type: ProviderType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Provider.findByIdAndUpdate(args._id, { $set: { "address": args.address } }, { new: true, useFindAndModify: false });
            }
        },
        updatePhoneProvider: {
            type: ProviderType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Provider.findByIdAndUpdate(args._id, { $set: { "phone": args.phone } }, { new: true, useFindAndModify: false });
            }
        },
        updateEmailProvider: {
            type: ProviderType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Provider.findByIdAndUpdate(args._id, { $set: { "email": args.email } }, { new: true, useFindAndModify: false });
            }
        },
        removeProvider: {
            type: ProviderType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Provider.findByIdAndRemove({ _id: args._id });
            }
        },
        /**
         * 
         * 
         * Mutation sale && lineSale
         * 
         * 
         */
        addSale: {
            type: SaleType,
            args: {
                seller: { type: GraphQLID },
                buyer: { type: GraphQLID },
                products: { type: new GraphQLList(LineSaleType) },
                price_tot: { type: GraphQLFloat }
            },
            resolve(parent, args) {
                let sale = new Sale({
                    _id: mongoose.Types.ObjectId(),
                    seller: args.seller,
                    buyer: args.buyer,
                    products: args.products,
                    price_tot: args.price_tot
                })
                return sale.save()
            }
        },
        /*addLineSale: {
            type: LineSaleType,
            args: {
                product: { type: GraphQLID },
                quantity: { type: GraphQLInt }
            },
            resolve(parent, args) {
                var lineSale = new LineSale(Product.findById(args.product).exec(function(err, lineSale) {
                    if (err) {
                        return handleError(err);
                    } else {
                        var sum_tot = lineSale.selling_price * args.quantity;
                        lineSale = new LineSale({
                            _id: mongoose.Types.ObjectId(),
                            product: args.product,
                            quantity: args.quantity,
                            sum: sum_tot
                        });
                        return lineSale.save();
                    }
                }))
                return lineSale;
                return LineSale.findById(lineSale._id);
                /**Product.findById(args.product, function(err, product) {
                    console.log(product)
                    var sum_tot = product.selling_price * args.quantity;
                    console.log(sum_tot)
                    let lineSale = new LineSale({
                        _id: mongoose.Types.ObjectId(),
                        product: args.product,
                        quantity: args.quantity,
                        sum: sum_tot
                    })
                    return lineSale.save()
                });
            }
        },*/
        /**
         * 
         * 
         * Mutation training
         * 
         * 
         */
        addTraining: {
            type: TrainingType,
            args: {
                curriculum: { type: GraphQLString },
                wording: { type: GraphQLString },
                year: { type: GraphQLInt }
            },
            resolve(parent, args) {
                let training = new Training({
                    _id: mongoose.Types.ObjectId(),
                    curriculum: args.curriculum,
                    wording: args.wording,
                    year: args.year
                })
                return training.save()
            }
        },
        updateCurriculumTraining: {
            type: TrainingType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                curriculum: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Training.findByIdAndUpdate(args._id, { $set: { "curriculum": args.curriculum } }, { new: true, useFindAndModify: false });
            }
        },
        updateWordingTraining: {
            type: TrainingType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                wording: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Training.findByIdAndUpdate(args._id, { $set: { "wording": args.wording } }, { new: true, useFindAndModify: false });
            }
        },
        updateYearTraining: {
            type: TrainingType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                year: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                return Training.findByIdAndUpdate(args._id, { $set: { "year": args.year } }, { new: true, useFindAndModify: false });
            }
        },
        removeTraining: {
            type: TrainingType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Training.findByIdAndRemove({ _id: args._id });
            }
        }
    }
});

module.exports = MutationType;
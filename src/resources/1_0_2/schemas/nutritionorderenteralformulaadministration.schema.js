const { GraphQLList, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary NutritionOrderenteralFormulaadministration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrderenteralFormulaadministration',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		schedule: {
			type: require('./timing.schema.js'),
			description:
				'The time period and frequency at which the enteral formula should be delivered to the patient.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'The volume of formula to provide to the patient per the specified administration schedule.',
		},
		rateQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.',
		},
		rateRatio: {
			type: require('./ratio.schema.js'),
			description:
				'The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.',
		},
	}),
});

const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLInt,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary VisionPrescriptiondispense Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'VisionPrescriptiondispense_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-product
		product: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'Identifies the type of vision correction product which is required for the patient.',
		},
		_eye: {
			type: require('./element.input.js'),
			description: 'The eye for which the lens applies.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-eye-codes
		eye: {
			type: CodeScalar,
			description: 'The eye for which the lens applies.',
		},
		_sphere: {
			type: require('./element.input.js'),
			description: 'Lens power measured in diopters (0.25 units).',
		},
		sphere: {
			type: GraphQLFloat,
			description: 'Lens power measured in diopters (0.25 units).',
		},
		_cylinder: {
			type: require('./element.input.js'),
			description:
				'Power adjustment for astigmatism measured in diopters (0.25 units).',
		},
		cylinder: {
			type: GraphQLFloat,
			description:
				'Power adjustment for astigmatism measured in diopters (0.25 units).',
		},
		_axis: {
			type: require('./element.input.js'),
			description: 'Adjustment for astigmatism measured in integer degrees.',
		},
		axis: {
			type: GraphQLInt,
			description: 'Adjustment for astigmatism measured in integer degrees.',
		},
		_prism: {
			type: require('./element.input.js'),
			description:
				'Amount of prism to compensate for eye alignment in fractional units.',
		},
		prism: {
			type: GraphQLFloat,
			description:
				'Amount of prism to compensate for eye alignment in fractional units.',
		},
		_base: {
			type: require('./element.input.js'),
			description: 'The relative base, or reference lens edge, for the prism.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/vision-base-codes
		base: {
			type: CodeScalar,
			description: 'The relative base, or reference lens edge, for the prism.',
		},
		_add: {
			type: require('./element.input.js'),
			description:
				'Power adjustment for multifocal lenses measured in diopters (0.25 units).',
		},
		add: {
			type: GraphQLFloat,
			description:
				'Power adjustment for multifocal lenses measured in diopters (0.25 units).',
		},
		_power: {
			type: require('./element.input.js'),
			description: 'Contact lens power measured in diopters (0.25 units).',
		},
		power: {
			type: GraphQLFloat,
			description: 'Contact lens power measured in diopters (0.25 units).',
		},
		_backCurve: {
			type: require('./element.input.js'),
			description: 'Back curvature measured in millimeters.',
		},
		backCurve: {
			type: GraphQLFloat,
			description: 'Back curvature measured in millimeters.',
		},
		_diameter: {
			type: require('./element.input.js'),
			description: 'Contact lens diameter measured in millimeters.',
		},
		diameter: {
			type: GraphQLFloat,
			description: 'Contact lens diameter measured in millimeters.',
		},
		duration: {
			type: require('./quantity.input.js'),
			description: 'The recommended maximum wear period for the lens.',
		},
		_color: {
			type: require('./element.input.js'),
			description: 'Special color or pattern.',
		},
		color: {
			type: GraphQLString,
			description: 'Special color or pattern.',
		},
		_brand: {
			type: require('./element.input.js'),
			description: 'Brand recommendations or restrictions.',
		},
		brand: {
			type: GraphQLString,
			description: 'Brand recommendations or restrictions.',
		},
		_notes: {
			type: require('./element.input.js'),
			description:
				'Notes for special requirements such as coatings and lens materials.',
		},
		notes: {
			type: GraphQLString,
			description:
				'Notes for special requirements such as coatings and lens materials.',
		},
	}),
});

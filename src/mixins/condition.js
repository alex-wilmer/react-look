import mixinTypes from '../utils/mixinTypes'
import splitCondition from '../utils/splitCondition'

/**
 * Condition mixins are shortcuts to check if a prop/state fulfills a given expression
 * Therefore it uses Component which gets provided as part of arguments to validate props/state
 */
export default [{
	key: '>=',
	type: mixinTypes.INCLUDE,
	fn: (key, styles, args) => {
		let evaluation = splitCondition(key, '>=', args.Component)
		return evaluation && evaluation[0] >= evaluation[1] ? styles : false
	}
}, {
	key: '<=',
	type: mixinTypes.INCLUDE,
	fn: (key, styles, args) => {
		let evaluation = splitCondition(key, '<=', args.Component)
		return evaluation && evaluation[0] <= evaluation[1] ? styles : false
	}
}, {
	key: '!=',
	type: mixinTypes.INCLUDE,
	fn: (key, styles, args) => {
		let evaluation = splitCondition(key, '!=', args.Component)
		return evaluation && evaluation[0] != evaluation[1] ? styles : false
	}
}, {
	key: '>',
	type: mixinTypes.INCLUDE,
	fn: (key, styles, args) => {
		let evaluation = splitCondition(key, '>', args.Component)
		return evaluation && evaluation[0] > evaluation[1] ? styles : false
	}
}, {
	key: '<',
	type: mixinTypes.INCLUDE,
	fn: (key, styles, args) => {
		let evaluation = splitCondition(key, '<', args.Component)
		return evaluation && evaluation[0] < evaluation[1] ? styles : false
	}
}, {
	key: '=',
	type: mixinTypes.INCLUDE,
	fn: (key, styles, args) => {
		let evaluation = splitCondition(key, '=', args.Component)
		return evaluation && evaluation[0] == evaluation[1] ? styles : false
	}
}]
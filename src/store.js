import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		boardSize: 500,
		devMode: true,
		dices: {
			active: true,
			first: 1,
			second: 2
		},
		players: []
	},
	getters: {
		devMode(state) {
			return state.devMode
		},
		dices(state) {
			return state.dices
		},
		players(state) {
			return state.players
		}

	},
	mutations: {
		dices(state, { first, second }) {
			state.dices.first = first
			state.dices.second = second
			state.dices.total = first + second
		},
		boardSize(state, size) {
			state.boardSize = size
		},
		addPlayer(state, player) {
			state.players.push(player)
		}
	},
	actions: {
		randomSprite() {
			return new Promise(resolve => {
				const shirtColors = ['Blue', 'Green', 'Grey', 'Navy', 'Pine', 'Red', 'Yellow', 'White']
				const sleveType = ['long', 'short', 'shorter']
				const hairColors = ['Black', 'Blonde', 'Brown 1', 'Brown 2', 'Grey', 'Red', 'Tan', 'White']
				const hairType = [null, 'Man1', 'Man2', 'Man3', 'Man4', 'Man5', 'Man6', 'Man7', 'Man8', 'Woman1', 'Woman2', 'Woman3', 'Woman4', 'Woman5', 'Woman6']
				const eyeColors = ['Black', 'Blue', 'Brown', 'Green', 'Pine']
				const eyeType = ['small', 'large']
				const eyebrowColors = ['black', 'blonde', 'brown1', 'brown2', 'grey', 'red', 'tan', 'white']
				const mouthType = ['glad', 'happy', 'oh', 'sad', 'straight', 'teethLower', 'teethUpper']
				const hairColor = Math.round(Math.random() * 7)

				resolve({
					shirt: {
						color: shirtColors[Math.floor(Math.random() * shirtColors.length)],
						type: Math.round(Math.random() * 7 + 1)
					},
					sleve: {
						type: sleveType[Math.floor(Math.random() * sleveType.length)],
					},
					skin: {
						tint: Math.round(Math.random() * 7 + 1)
					},
					hair: {
						color: hairColors[hairColor],
						type: hairType[Math.floor(Math.random() * hairType.length)],
					},
					eye: {
						color: eyeColors[Math.floor(Math.random() * eyeColors.length)],
						type: eyeType[Math.floor(Math.random() * eyeType.length)],
					},
					eyebrow: {
						color: eyebrowColors[hairColor],
						type: Math.round(Math.random() * 2 + 1),
					},
					nose: {
						type: Math.round(Math.random() * 2 + 1),
					},
					mouth: {
						type: mouthType[Math.floor(Math.random() * mouthType.length)],
					}
				});
			});
		},
	}
});

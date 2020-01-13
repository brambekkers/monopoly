<template>
	<div id="container">
		<button id="throwButton" @click="throwDices()" v-if="throwButton">
			Gooien
		</button>
		<div id="dices" v-if="!throwButton">
			<img class="dice align-right" :src="`img/dice/dice${dices.first}.png`" />
			<img class="dice" :src="`img/dice/dice${dices.second}.png`" />
		</div>
	</div>
</template>

<script>
import { setTimeout } from "timers";
export default {
	name: "Dices",
	data() {
		return {
			firstNum: 1,
			secondNum: 2,
			throwButton: true
		};
	},
	computed: {
		dices() {
			return this.$store.getters.dices;
		}
	},
	methods: {
		async throwDices() {
			this.throwButton = false;
			await this.rollDices();

			setTimeout(() => {
				this.throwButton = true;
			}, 2000);
		},
		rollDices(state, rollTime) {
			return new Promise(resolve => {
				const rollInterval = setInterval(() => {
					this.$store.commit("dices", {
						first: (this.firstNum++ % 6) + 1,
						second: (this.secondNum++ % 6) + 1
					});
				}, 50);
				setTimeout(() => {
					clearInterval(rollInterval);
					this.randomDices();
					resolve();
				}, 2000);
			});
		},
		randomDices() {
			this.$store.commit("dices", {
				first: Math.round(Math.random() * 5 + 1),
				second: Math.round(Math.random() * 5 + 1)
			});
		}
	}
};
</script>

<style>
#container {
	height: 100%;
	width: 100%;

	grid-column: 1 / span 13;
	grid-row: 1 / span 13;
	display: grid;
	align-items: center;
}

#dices {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.dice {
	margin: 2%;
	width: 15%;
}

.align-right {
	justify-self: right;
}

#throwButton {
	padding: 2%;
	width: 20%;
	justify-self: center;
}

#throwButton {
	font-family: "Raleway", sans-serif;
	font-weight: 500;
	color: #009688;
	background: #fff;
	border: 2px solid black;
	border-radius: 2rem;
	font-size: 1rem;
	padding: 1% 2%;
	display: inline-block;
	text-decoration: none;
	min-width: 120px;
}

#throwButton:hover,
#throwButton:active {
	color: #fff;
	background: #009688;
}
</style>

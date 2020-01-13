<template>
	<div id="app">
		<div id="nav" v-if="devMode">
			<router-link to="/landing">Landing</router-link> |
			<router-link to="/game">Game</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
import Board from "./components/Board.vue";
import Players from "./components/Players.vue";

export default {
	name: "app",

	computed: {
		devMode() {
			return this.$store.getters.devMode;
		}
	},
	methods: {
		async createPlayersForDevMode() {
			if (this.devMode) {
				const preset = [
					{
						id: 43523452345,
						name: "Marleen ter Linden",
						pos: 10,
						color: 819200,
						money: 12030
					},
					{
						id: 43526732345,
						name: "Brammieeee",
						pos: 2,
						color: 772902,
						money: 5623
					},
					{
						id: 435311345,
						name: "jan",
						pos: 33,
						color: 820192,
						money: 130
					}
				];

				for (const player of preset) {
					player.sprite = await this.$store.dispatch("randomSprite");
					this.$store.commit("addPlayer", player);
				}
			}
		},
		setSize() {
			const size =
				window.innerWidth >= window.innerHeight
					? window.innerHeight
					: window.innerWidth;
			this.$store.commit("boardSize", size);
		}
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener("resize", this.setSize);

			//Init
			this.setSize();
			this.createPlayersForDevMode();
		});
	}
};
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}

#nav {
	position: absolute;
	z-index: 2000;
	top: 0;
}

#app {
	font-family: "Ubuntu", sans-serif;
	font-weight: 300;
}
</style>

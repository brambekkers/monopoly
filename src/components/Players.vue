<template>
	<div id="players">
		<Player :key="player.id" :data="player" v-for="player of players" />
	</div>
</template>

<script>
import Player from "./player/Player";

export default {
	components: { Player },
	computed: {
		players() {
			return this.$store.getters.players;
		}
	}
};
</script>

<style scoped>
#players {
	position: absolute;
	top: 0;
	right: 0;
	width: 20vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
</style>

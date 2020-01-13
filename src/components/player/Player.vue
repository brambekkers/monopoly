<template>
	<div id="player">
		<h3>{{ data.name }}</h3>

		<div id="playerContainer" :style="playerStyle()">
			<Sprite :data="data.sprite" />
		</div>
	</div>
</template>

<script>
import Sprite from "./Sprite.vue";

export default {
	components: {
		Sprite
	},
	props: ["data"],
	methods: {
		playerStyle() {
			return `background-color: #${this.data.color}`;
		}
	}
};
</script>

<style scoped lang="scss">
#player {
	h3 {
		font-family: "Raleway", sans-serif;
		font-weight: 500;
		margin-top: 0;
	}

	background: white;
	padding: 5px 10px;
	width: 100%;
	height: 8vh;
	border: solid black 0.1vh;
	border-radius: 20px 0px 0px 20px;

	display: flex;

	#playerContainer {
		position: relative;
		overflow: hidden;
		background: white;
		margin-left: auto;
		height: 16vh;
		min-height: 16vh;
		width: 16vh;
		min-width: 16vh;
		border: solid black 0.3vh;
		margin-top: -4vh;
		border-radius: 50%;
		align-self: end;
	}
}
</style>

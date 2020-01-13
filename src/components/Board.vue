<template>
	<div>
		<div id="board" v-bind:style="style">
			<BoardCell :cellData="cell" :key="cell.name" v-for="cell of board" />
			<Dices v-if="dices.active" />
		</div>
	</div>
</template>

<script>
import BoardCell from "./board/BoardCell";
import Board from "../config/board";
import Dices from "./Dices.vue";

export default {
	components: { BoardCell, Dices },
	data() {
		return {
			board: Board,
			style: {
				width: `50px`,
				height: `50px`
			}
		};
	},
	methods: {
		setStyle() {
			this.style.width = `${this.size}px`;
			this.style.height = `${this.size}px`;
		}
	},
	watch: {
		size() {
			this.setStyle();
		}
	},
	computed: {
		size() {
			return this.$store.state.boardSize;
		},
		dices() {
			return this.$store.state.dices;
		}
	},
	mounted() {
		this.setStyle();
	}
};
</script>

<style>
#board {
	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-template-rows: repeat(13, 1fr);
	background-image: url(../assets/img/monopolyboard.jpg);
	background-size: cover;
	margin: auto;
	border: solid black 2px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

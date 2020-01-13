<template>
	<div>
		<Board />
		<Players />
	</div>
</template>

<script>
import Board from "../components/Board.vue";
import Players from "../components/Players.vue";

export default {
	components: {
		Board,
		Players
	}
};
</script>

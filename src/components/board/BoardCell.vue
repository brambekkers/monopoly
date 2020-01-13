<template>
	<div id="cell" v-bind:style="style"></div>
</template>

<script>
export default {
	data() {
		return {
			style: {
				"grid-column": `${this.cellData.pos.colStart} / span ${
					this.cellData.pos.colSize
				} `,
				"grid-row": `${this.cellData.pos.rowStart} / span ${
					this.cellData.pos.rowSize
				} `
			}
		};
	},
	props: ["cellData"]
};
</script>

<style scoped>
#cell {
	word-break: break-all;
	width: 100%;
	height: 100%;
}
</style>

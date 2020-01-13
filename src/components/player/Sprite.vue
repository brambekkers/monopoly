<template>
	<div id="sprite">
		<div id="head-container" class="centerSprite">
			<!-- Head -->
			<img
				id="head"
				:src="
					`img/person/Skin/Tint ${data.skin.tint}/tint${data.skin.tint}_head.png`
				"
			/>
			<!-- Hair -->
			<img
				v-if="data.hair.type"
				id="hair"
				class="item centerX"
				:src="`img/person/Hair/${data.hair.color}/${data.hair.type}.png`"
				:style="hairStyle(data.hair.type)"
			/>
			<!-- Eye -->
			<img
				id="eye1"
				class="item"
				:src="`img/person/Face/Eyes/eye${data.eye.color}_${data.eye.type}.png`"
				:style="eyeStyle(data.eye.type)"
			/>
			<img
				id="eye2"
				class="item mirror"
				:src="`img/person/Face/Eyes/eye${data.eye.color}_${data.eye.type}.png`"
				:style="eyeStyle(data.eye.type)"
			/>
			<!-- Eyebrows -->
			<img
				id="eyebrow1"
				class="item "
				:src="
					`img/person/Face/Eyebrows/${data.eyebrow.color}Brow${data.eyebrow.type}.png`
				"
			/>
			<img
				id="eyebrow2"
				class="item mirror"
				:src="
					`img/person/Face/Eyebrows/${data.eyebrow.color}Brow${data.eyebrow.type}.png`
				"
			/>
			<!-- Mouth -->
			<img
				id="mouth"
				class="item centerX"
				:src="`img/person/Face/Mouth/mouth_${data.mouth.type}.png`"
				:style="mouthStyle(data.mouth.type)"
			/>

			<!-- Nose -->
			<img
				id="nose"
				class="item center"
				:src="
					`img/person/Face/Nose/Tint ${data.skin.tint}/tint${data.skin.tint}Nose${data.nose.type}.png`
				"
			/>
		</div>

		<div id="body-container" class="centerSprite">
			<!-- shirt -->
			<img
				id="shirt"
				class=""
				:src="
					`img/person/Shirts/${data.shirt.color}/Shirt${data.shirt.type}.png`
				"
			/>
			<!-- Neck -->
			<img
				id="neck"
				class="item centerX"
				:src="
					`img/person/Skin/Tint ${data.skin.tint}/tint${data.skin.tint}_neck.png`
				"
			/>
		</div>

		<div id="armLeft-container" class="centerSprite">
			<!-- Arm 1 -->
			<img
				class="arm mirror"
				:src="
					`img/person/Skin/Tint ${data.skin.tint}/tint${data.skin.tint}_arm.png`
				"
			/>
			<!-- Shirt -->
			<img
				class="item sleve mirror"
				:src="
					`img/person/Shirts/${data.shirt.color}/Arm_${data.sleve.type}.png`
				"
				:style="sleveStyle(data.sleve.type, 'left')"
			/>
		</div>
		<div id="armRight-container" class="centerSprite">
			<!-- Arm 1 -->
			<img
				class="arm "
				:src="
					`img/person/Skin/Tint ${data.skin.tint}/tint${data.skin.tint}_arm.png`
				"
			/>
			<!-- Shirt -->
			<img
				class="item sleve"
				:src="
					`img/person/Shirts/${data.shirt.color}/Arm_${data.sleve.type}.png`
				"
				:style="sleveStyle(data.sleve.type, 'right')"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: ["data"],
	methods: {
		hairStyle(style) {
			if (style === "Man1") return "top: -2%; width: 88%; margin-left: 1%;";
			if (style === "Man2") return "top: -15%; width: 88%";
			if (style === "Man3") return "top: -5%; width: 90%";
			if (style === "Man4") return "top: -10%; width: 90%;";
			if (style === "Man5") return "top: -10%; margin-left: 4%;";
			if (style === "Man6") return "width: 88%;";
			if (style === "Man7") return "top: -3%; width: 89%;";
			if (style === "Man8") return "top: 32%;";

			if (style === "Woman1") return "top: -3%; width: 88%";
			if (style === "Woman2") return "top: -5%; width: 88%;";
			if (style === "Woman3") return "top: -5%; width: 88%";
			if (style === "Woman4") return "top: -5%; width: 89%; margin-left: 1%;";
			if (style === "Woman5") return "top: -3%; width: 91%; ";
			if (style === "Woman6") return "width: 91%;";
		},
		eyeStyle(style) {
			if (style === "small") return "width: 8%;";
		},
		mouthStyle(style) {
			if (style === "oh") return "width: 8%;";
			if (style === "glad") return "width: 18%;";
			if (style === "happy") return "width: 25%;";
		},
		sleveStyle(style, side) {
			if (side === "left") {
				if (style === "long") return "left: 2%;";
				if (style === "short") return "	width: 65%; left: 34%; top: 5%;";
				if (style === "shorter") return "width: 35%; left: 62%;  top: 6%;";
			}

			if (side === "right") {
				if (style === "long") return "	left: 4%;";
				if (style === "short") return "	width: 65%; left: 3%; top: 5%;";
				if (style === "shorter") return "width: 35%; left: 2%;  top: 6%;";
			}
		}
	}
};
</script>

<style scoped lang="scss">
#sprite {
	// TEMP
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;

	.item {
		position: absolute;
		display: block;
	}

	#head-container {
		position: absolute;
		z-index: 6;
		width: 43%;
		margin-top: -38%;

		// HEAD
		#head {
			width: 100%;
		}

		#hair {
			z-index: 12;
			top: 0;
			width: 95%;
		}

		#eye1 {
			z-index: 11;
			top: 40%;
			left: 30%;
			width: 12%;
		}
		#eye2 {
			z-index: 11;
			top: 40%;
			right: 30%;
			width: 12%;
		}

		#eyebrow1 {
			z-index: 11;
			top: 30%;
			left: 25%;
			width: 20%;
		}

		#eyebrow2 {
			z-index: 11;
			top: 30%;
			right: 25%;
			width: 20%;
		}

		#mouth {
			z-index: 11;
			bottom: 15%;
			width: 20%;
		}

		#nose {
			top: 63%;
			z-index: 11;
			width: 20%;
		}
	}

	#body-container {
		position: absolute;
		z-index: 5;
		width: 40%;

		// HEAD
		#shirt {
			z-index: 9;
			width: 100%;
			margin-top: 5%;
		}
		// Neck
		#neck {
			z-index: 4;
			top: -0%;
			width: 62%;
		}
	}

	#armLeft-container {
		position: absolute;
		z-index: 4;
		width: 41%;
		margin-top: 2%;
		margin-left: -32%;
	}

	#armRight-container {
		position: absolute;
		z-index: 4;
		width: 41%;
		margin-top: 2%;
		margin-left: 32%;
	}

	// arm
	.arm {
		z-index: 5;
		width: 100%;
		margin-top: 5%;
	}
	// left
	.sleve {
		z-index: 6;
		top: 6%;
		width: 93%;
	}

	.mirror {
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
	}

	.centerX {
		left: 50%;
		transform: translateX(-50%);
	}

	.centerY {
		top: 50%;
		transform: translateY(-50%);
	}

	.center {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -15%);
	}

	.center {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.centerSprite {
		top: 50%;
		left: 50%;
		transform: translate(-50%, 15%);
	}
}
</style>

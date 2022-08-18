<template>
	<div :class="`col-span-${colsSpan}`">
		<button v-if="color === 1" @click="$emit('buttonPressed', {text})" class="t1-btn-bg-orange t1-text-gray">
			{{text}}
		</button>
		<button v-else-if="color === 2" @click="$emit('buttonPressed', {text})" class="t1-btn-bg-blue t1-text-white">
			{{text}}
		</button>
		<button v-else @click="$emit('buttonPressed', {text})" class="t1-btn-bg-red t1-text-white">
			{{text}}
		</button>
	</div>
</template>



<script setup>

const props = defineProps({
	text: String,
	color: Number,
	colsSpan: Number
})

</script>



<style lang="">
	
</style>
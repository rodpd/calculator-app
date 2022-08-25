<template>
	<div :class="`col-span-${colsSpan}`">
		<button v-if="color === 1" @click="$emit('buttonPressed', {text})" ref="btn" class="t1-btn-bg-orange t1-text-gray">
			{{text}}
		</button>
		<button v-else-if="color === 2" @click="$emit('buttonPressed', {text})" ref="btn" class="t1-btn-bg-blue t1-text-white">
			{{text}}
		</button>
		<button v-else @click="$emit('buttonPressed', {text})" ref="btn" class="t1-btn-bg-red t1-text-white">
			{{text}}
		</button>
	</div>
</template>



<script setup>
import { useThemesStore } from '@/stores/themes';
import { ref } from 'vue'

const props = defineProps({
	text: String,
	color: Number,
	colsSpan: Number
})

const store = useThemesStore()
const btn = ref(null)

store.$subscribe(() => {
	updateTheme(store.theme)
})

function updateTheme(newTheme) {
	if ( newTheme == 1 ) {
		btn.value.className = btn.value.className.replaceAll('t2', 't1')
		btn.value.className = btn.value.className.replaceAll('t3', 't1')
	}
	else if ( newTheme == 2 ) {
		btn.value.className = btn.value.className.replaceAll('t1', 't2')
		btn.value.className = btn.value.className.replaceAll('t3', 't2')
	}
	else {
		btn.value.className = btn.value.className.replaceAll('t1', 't3')
		btn.value.className = btn.value.className.replaceAll('t2', 't3')
	}
}

</script>



<style>
</style>
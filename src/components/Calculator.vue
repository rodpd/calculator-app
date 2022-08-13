<template>

<div class="grid grid-cols-4">
	<div class="col-start-1 col-span-1">
		calc
	</div>
	<div class="col-start-3 col-span-1">
		THEME
	</div>
	<div class="col-start-4 col-span-1">
		<input type="range" min="1" max="3" value="1">
	</div>
</div>
<div class="">
	{{num}}
</div>
<div class="grid grid-cols-4 grid-rows-5">
	<div class="col-start-1 col-span-1">
		7
	</div>
	<div class="col-start-2 col-span-1">
		8
	</div>
	<div class="col-start-3 col-span-1">
		9
	</div>
	<div class="col-start-4 col-span-1">
		DEL
	</div>
	<div class="col-start-1 col-span-1">
		4
	</div>
	<div class="col-start-2 col-span-1">
		5
	</div>
	<div class="col-start-3 col-span-1">
		6
	</div>
	<div class="col-start-4 col-span-1">
		+
	</div>
	<div class="col-start-1 col-span-1">
		1
	</div>
	<div class="col-start-2 col-span-1">
		2
	</div>
	<div class="col-start-3 col-span-1">
		3
	</div>
	<div class="col-start-4 col-span-1">
		-
	</div>
	<div class="col-start-1 col-span-1">
		.
	</div>
	<div class="col-start-2 col-span-1">
		0
	</div>
	<div class="col-start-3 col-span-1">
		/
	</div>
	<div class="col-start-4 col-span-1">
		x
	</div>
	<div class="col-start-1 col-span-2">
		RESET
	</div>
	<div class="col-start-3 col-span-2">
		=
	</div>
</div>

</template>

<script setup>
import {ref} from 'vue'

const num = ref(0)

</script>

<style scoped>
</style>

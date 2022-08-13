<template>

<div class="grid grid-cols-4 mb-[4%] row-span-2">
	<div class="col-start-1 col-span-1 row-span-2">
		<p class="pl-2 t1-text-white text-left">
			calc
		</p>
	</div>
	<div class="col-start-3 col-span-1 row-start-2">
		<p class="t1-text-white text-base text-end justify-end">
			THEME
		</p>
	</div>
	<div class="col-start-4 col-span-1 row-start-2">
		<input type="range" min="1" max="3" value="1" class="w-[70%]">
	</div>
</div>
<div class="bg-t1-bg-screen mb-[4%] rounded-lg">
	<span class="flex justify-end t1-text-white pr-6 py-6 text-5xl">
		{{num}}
	</span>
</div>
<div class="grid grid-cols-4 grid-rows-5 p-6 gap-6 bg-t1-bg-keypad rounded-lg">
	<div class="col-start-1 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			7
		</button>
	</div>
	<div class="col-start-2 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			8
		</button>
	</div>
	<div class="col-start-3 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			9
		</button>
	</div>
	<div class="col-start-4 col-span-1">
		<button class="t1-btn-bg-blue t1-text-white">
			DEL
		</button>
	</div>
	<div class="col-start-1 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			4
		</button>
	</div>
	<div class="col-start-2 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			5
		</button>
	</div>
	<div class="col-start-3 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			6
		</button>
	</div>
	<div class="col-start-4 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			+
		</button>
	</div>
	<div class="col-start-1 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			1
		</button>
	</div>
	<div class="col-start-2 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			2
		</button>
	</div>
	<div class="col-start-3 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			3
		</button>
	</div>
	<div class="col-start-4 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			-
		</button>
	</div>
	<div class="col-start-1 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			.
		</button>
	</div>
	<div class="col-start-2 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			0
		</button>
	</div>
	<div class="col-start-3 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			/
		</button>
	</div>
	<div class="col-start-4 col-span-1">
		<button class="t1-btn-bg-orange t1-text-gray">
			x
		</button>
	</div>
	<div class="col-start-1 col-span-2">
		<button class="t1-btn-bg-blue t1-text-white">
			RESET
		</button>
	</div>
	<div class="col-start-3 col-span-2">
		<button class="t1-btn-bg-red t1-text-white">
			=
		</button>
	</div>
</div>

</template>

<script setup>
import {ref} from 'vue'

const num = ref(0)

</script>

<style scoped>
</style>

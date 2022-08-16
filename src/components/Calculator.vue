<template>

<div class="grid grid-cols-4 mb-[4%] row-span-2">
	<div class="col-span-1 col-start-1 row-span-2">
		<p class="pl-2 text-left t1-text-white">
			calc
		</p>
	</div>
	<div class="col-span-1 col-start-3 row-start-2">
		<p class="justify-end text-base t1-text-white text-end">
			THEME
		</p>
	</div>
	<div class="col-span-1 col-start-4 row-start-2">
		<input type="range" min="1" max="3" value="1" class="w-[70%] bg-t1-bg-toggle rounded-xl p-1">
	</div>
</div>
<div class="bg-t1-bg-screen mb-[4%] rounded-lg">
	<span class="flex justify-end py-6 pr-6 text-5xl t1-text-white">
		{{num}}
	</span>
</div>
<div class="grid grid-cols-4 grid-rows-5 gap-4 p-3 rounded-lg xsm:gap-6 xsm:p-6 sm:gap-6 sm:p-6 bg-t1-bg-keypad">
	<div class="col-span-1 col-start-1">
		<button @click="updateNumber('7')" class="t1-btn-bg-orange t1-text-gray">
			7
		</button>
	</div>
	<div class="col-span-1 col-start-2">
		<button @click="updateNumber('8')" class="t1-btn-bg-orange t1-text-gray">
			8
		</button>
	</div>
	<div class="col-span-1 col-start-3">
		<button @click="updateNumber('9')" class="t1-btn-bg-orange t1-text-gray">
			9
		</button>
	</div>
	<div class="col-span-1 col-start-4">
		<button @click="deleteDigit" class="t1-btn-bg-blue t1-text-white">
			DEL
		</button>
	</div>
	<div class="col-span-1 col-start-1">
		<button @click="updateNumber('4')" class="t1-btn-bg-orange t1-text-gray">
			4
		</button>
	</div>
	<div class="col-span-1 col-start-2">
		<button @click="updateNumber('5')" class="t1-btn-bg-orange t1-text-gray">
			5
		</button>
	</div>
	<div class="col-span-1 col-start-3">
		<button @click="updateNumber('6')" class="t1-btn-bg-orange t1-text-gray">
			6
		</button>
	</div>
	<div class="col-span-1 col-start-4">
		<button @click="setOperator('+')" class="t1-btn-bg-orange t1-text-gray">
			+
		</button>
	</div>
	<div class="col-span-1 col-start-1">
		<button @click="updateNumber('1')" class="t1-btn-bg-orange t1-text-gray">
			1
		</button>
	</div>
	<div class="col-span-1 col-start-2">
		<button @click="updateNumber('2')" class="t1-btn-bg-orange t1-text-gray">
			2
		</button>
	</div>
	<div class="col-span-1 col-start-3">
		<button @click="updateNumber('3')" class="t1-btn-bg-orange t1-text-gray">
			3
		</button>
	</div>
	<div class="col-span-1 col-start-4">
		<button @click="setOperator('-')" class="t1-btn-bg-orange t1-text-gray">
			-
		</button>
	</div>
	<div class="col-span-1 col-start-1">
		<button @click="setDecimal" class="t1-btn-bg-orange t1-text-gray">
			.
		</button>
	</div>
	<div class="col-span-1 col-start-2">
		<button @click="updateNumber('0')" class="t1-btn-bg-orange t1-text-gray">
			0
		</button>
	</div>
	<div class="col-span-1 col-start-3">
		<button @click="setOperator('/')" class="t1-btn-bg-orange t1-text-gray">
			/
		</button>
	</div>
	<div class="col-span-1 col-start-4">
		<button @click="setOperator('x')" class="t1-btn-bg-orange t1-text-gray">
			x
		</button>
	</div>
	<div class="col-span-2 col-start-1">
		<button @click="reset" class="t1-btn-bg-blue t1-text-white">
			RESET
		</button>
	</div>
	<div class="col-span-2 col-start-3">
		<button class="t1-btn-bg-red t1-text-white">
			=
		</button>
	</div>
</div>

</template>

<script setup>
import {ref} from 'vue'

const num = ref('0')
const num1 = ref(null)
const operator = ref(null)
const decimal = ref(false)

function updateNumber(number) {
	if ( num.value == '0') {
		num.value = number
	}
	else {
		num.value += number
	}
}

function setDecimal() {
	if ( !decimal.value ) {
		decimal.value = true
		num.value += '.'
	}
}

function deleteDigit() {
	num.value = Math.floor(num.value/10)
}

function setOperator(newOperator) {
	operator.value = newOperator
	num1.value = num.value
	num.value = 0
}

function reset() {
	console.log(operator.value)
	num.value = 0
	num1.value = null
	operator.value = null
	decimal.value = false
}

</script>



<style scoped>

input[type=range] {
	-webkit-appearance: unset;
}

input[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	width: 1em;
	height: 1em;
	border-radius: 1em;
	background: hsl(6, 63%, 50%);
}

</style>

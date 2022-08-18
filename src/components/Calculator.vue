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
	<KeypadButton v-for="(button, index) in buttons" :key="index" @buttonPressed="handleButtonPressed" :text="button.text" :color="button.color" :colsSpan="button.colsSpan" />
</div>

</template>

<script setup>
import {ref} from 'vue'
import KeypadButton from './KeypadButton.vue';

const buttons = [
	{
		text: '7',
		color: 1,
		colsSpan: 1
	},
	{
		text: '8',
		color: 1,
		colsSpan: 1
	},
	{
		text: '9',
		color: 1,
		colsSpan: 1
	},
	{
		text: 'DEL',
		color: 2,
		colsSpan: 1
	},
	{
		text: '4',
		color: 1,
		colsSpan: 1
	},
	{
		text: '5',
		color: 1,
		colsSpan: 1
	},
	{
		text: '6',
		color: 1,
		colsSpan: 1
	},
	{
		text: '+',
		color: 1,
		colsSpan: 1
	},
	{
		text: '1',
		color: 1,
		colsSpan: 1
	},
	{
		text: '2',
		color: 1,
		colsSpan: 1
	},
	{
		text: '3',
		color: 1,
		colsSpan: 1
	},
	{
		text: '-',
		color: 1,
		colsSpan: 1
	},
	{
		text: '.',
		color: 1,
		colsSpan: 1
	},
	{
		text: '0',
		color: 1,
		colsSpan: 1
	},
	{
		text: '/',
		color: 1,
		colsSpan: 1
	},
	{
		text: 'x',
		color: 1,
		colsSpan: 1
	},
	{
		text: 'RESET',
		color: 2,
		colsSpan: 2
	},
	{
		text: '=',
		color: 3,
		colsSpan: 2
	},
	]

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
	// se ja tiver 2 numeros, resolve antes de definir novo operador
	if ( num1.value != null ) {
		solve()
	}
	operator.value = newOperator
	num1.value = num.value
	num.value = 0
}

function solve() {
	console.log(num.value)
	console.log(num1.value)
	if ( num1.value != null ) {
		let num2 = num.value
		if ( operator.value == '+') {
			num.value = ( parseFloat(num1.value) + parseFloat(num2) ).toString()
		}
		else if ( operator.value == '-') {
			num.value = ( parseFloat(num1.value) - parseFloat(num2) ).toString()
		}
		else if ( operator.value == 'x') {
			num.value = ( parseFloat(num1.value) * parseFloat(num2) ).toString()
		}
		else if ( operator.value == '/') {
			num.value = ( parseFloat(num1.value) / parseFloat(num2) ).toString()
		}
		num1.value = null
	}
}

function reset() {
	console.log(operator.value)
	num.value = 0
	num1.value = null
	operator.value = null
	decimal.value = false
}

function handleButtonPressed(button) {
	button = button.text
	if ( button >= '1' && button <= '9') {
		updateNumber(button)
	}
	else if ( button == '.') {
		setDecimal()
	}
	else if ( button == "DEL") {
		deleteDigit()
	}
	else if ( button == "RESET") {
		reset()
	}
	else if ( button == "=") {
		solve()
	}
	else {
		setOperator(button)
	}
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

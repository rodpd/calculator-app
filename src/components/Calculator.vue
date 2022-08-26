<template>

<div class="grid grid-cols-4 mb-[4%] row-span-2">
	<div class="col-span-1 col-start-1 row-span-2">
		<p class="pl-2 text-left t1-text-white" ref="calc">
			calc
		</p>
	</div>
	<div class="col-span-1 col-start-3 row-start-2">
		<p class="justify-end text-base t1-text-white text-end" ref="themeText">
			THEME
		</p>
	</div>
	<div class="col-span-1 col-start-4 row-start-2">
		<input @input="updateTheme" type="range" min="1" max="3" value="1" class="mt-1 w-[70%] bg-t1-bg-toggle rounded-xl p-1" ref="themeToggler">
	</div>
</div>
<div class="bg-t1-bg-screen mb-[4%] rounded-lg" ref="screenNumberBackground">
	<span class="flex justify-end py-6 pr-6 text-5xl t1-text-white" ref="screenNumber">
		{{num}}
	</span>
</div>
<div class="grid grid-cols-4 grid-rows-5 gap-4 p-3 rounded-lg xsm:gap-6 xsm:p-6 sm:gap-6 sm:p-6 bg-t1-bg-keypad" ref="keypadBackground">
	<KeypadButton v-for="(button, index) in buttons" :key="index" @buttonPressed="handleButtonPressed" :text="button.text" :color="button.color" :colsSpan="button.colsSpan" />
</div>

</template>

<script setup>
import { ref } from 'vue'
import { useThemesStore } from '@/stores/themes'
import KeypadButton from './KeypadButton.vue';

const store = useThemesStore()

const { buttons } = require('../data/buttons')

localStorage['theme'] = 1

const num = ref('0')
const num1 = ref(null)
const operator = ref(null)
const decimal = ref(false)

const calc = ref(null)
const themeText = ref(null)
const themeToggler = ref(null)
const screenNumber = ref(null)
const screenNumberBackground = ref(null)
const keypadBackground = ref(null)


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
	decimal.value = false
	num1.value = num.value
	num.value = 0
}

function solve() {
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
	num.value = 0
	num1.value = null
	operator.value = null
	decimal.value = false
}

function handleButtonPressed(button) {
	button = button.text
	if ( button >= '0' && button <= '9') {
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

function updateTheme(e) {
	store.changeTheme(e.target.value)
	let theme = 't' + localStorage['theme']
	if ( e.target.value == 1 ) {
		document.querySelector('html').style.backgroundColor = 'hsl(222, 26%, 31%)'
		screenNumber.value.className = screenNumber.value.className.replace(theme, 't1')
		screenNumber.value.className = screenNumber.value.className.replace('gray', 'white')
		calc.value.className = calc.value.className.replace(theme, 't1')
		calc.value.className = calc.value.className.replace('gray', 'white')
		themeText.value.className = themeText.value.className.replace(theme, 't1')
		themeText.value.className = themeText.value.className.replace('gray', 'white')
		themeToggler.value.className = themeToggler.value.className.replace(theme, 't1')
		screenNumberBackground.value.className = screenNumberBackground.value.className.replace(theme, 't1')
		keypadBackground.value.className = keypadBackground.value.className.replace(theme, 't1')
		localStorage['theme'] = 1
	}
	else if ( e.target.value == 2 ) {
		document.querySelector('html').style.backgroundColor = 'hsl(0, 0%, 90%)'
		screenNumber.value.className = screenNumber.value.className.replace(theme, 't2')
		screenNumber.value.className = screenNumber.value.className.replace('white', 'gray')
		calc.value.className = calc.value.className.replace(theme, 't2')
		calc.value.className = calc.value.className.replace('white', 'gray')
		themeText.value.className = themeText.value.className.replace(theme, 't2')
		themeText.value.className = themeText.value.className.replace('white', 'gray')
		themeToggler.value.className = themeToggler.value.className.replace(theme, 't2')
		screenNumberBackground.value.className = screenNumberBackground.value.className.replace(theme, 't2')
		keypadBackground.value.className = keypadBackground.value.className.replace(theme, 't2')
		localStorage['theme'] = 2
	}
	else {
		document.querySelector('html').style.backgroundColor = 'hsl(268, 75%, 9%)'
		screenNumber.value.className = screenNumber.value.className.replace(theme, 't3')
		screenNumber.value.className = screenNumber.value.className.replace('white', 'gray')
		calc.value.className = calc.value.className.replace(theme, 't3')
		calc.value.className = calc.value.className.replace('white', 'gray')
		themeText.value.className = themeText.value.className.replace(theme, 't3')
		themeText.value.className = themeText.value.className.replace('white', 'gray')
		themeToggler.value.className = themeToggler.value.className.replace(theme, 't3')
		screenNumberBackground.value.className = screenNumberBackground.value.className.replace(theme, 't3')
		keypadBackground.value.className = keypadBackground.value.className.replace(theme, 't3')
		localStorage['theme'] = 3
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

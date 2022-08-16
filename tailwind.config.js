/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			't1': {
				'bg': {
					'main': 'hsl(222, 26%, 31%)',
					'toggle': 'hsl(223, 31%, 20%)',
					'keypad': 'hsl(223, 31%, 20%)',
					'screen': 'hsl(224, 36%, 15%)',
					'key': {
						'blue': 'hsl(225, 21%, 49%)',
						'blueshadow': 'hsl(224, 28%, 35%)',
						'red': 'hsl(6, 63%, 50%)',
						'redshadow': 'hsl(6, 70%, 34%)',
						'orange': 'hsl(30, 25%, 89%)',
						'orangeshadow': 'hsl(28, 16%, 65%)'
						}
					},
				'text': {
					'gray': 'hsl(221, 14%, 31%)',
					'white': 'hsl(0, 0%, 100%)'
				}
			}
		},
		boxShadow: {
			'button': '0 4px 0px -0.05px'
		},
		screens: {
			'xsm': '400px'
		}
	},
  },
  plugins: [],
}

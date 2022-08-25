/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
	't2-btn-bg-orange',
	't2-btn-bg-blue',
	't2-btn-bg-red',
	't2-text-gray',
	't2-text-white',
	'bg-t2-bg-screen',
	'bg-t2-bg-toggle',
	'bg-t2-bg-keypad',
	't3-btn-bg-orange',
	't3-btn-bg-blue',
	't3-btn-bg-red',
	't3-text-gray',
	't3-text-white',
	'bg-t3-bg-screen',
	'bg-t3-bg-toggle',
	'bg-t3-bg-keypad',
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
			},
			't2': {
				'bg': {
					'main': 'hsl(0, 0%, 90%)',
					'toggle': 'hsl(0, 5%, 81%)',
					'keypad': 'hsl(0, 5%, 81%)',
					'screen': 'hsl(0, 0%, 93%)',
					'key': {
						'blue': 'hsl(185, 42%, 37%)',
						'blueshadow': 'hsl(185, 58%, 25%)',
						'red': 'hsl(25, 98%, 40%)',
						'redshadow': 'hsl(25, 99%, 27%)',
						'orange': 'hsl(45, 7%, 89%)',
						'orangeshadow': 'hsl(35, 11%, 61%)'
						}
					},
				'text': {
					'gray': 'hsl(60, 10%, 19%)',
					'white': 'hsl(0, 0%, 100%)'
				}
			},
			't3': {
				'bg': {
					'main': 'hsl(268, 75%, 9%)',
					'toggle': 'hsl(268, 71%, 12%)',
					'keypad': 'hsl(268, 71%, 12%)',
					'screen': 'hsl(268, 71%, 12%)',
					'key': {
						'blue': 'hsl(281, 89%, 26%)',
						'blueshadow': 'hsl(285, 91%, 52%)',
						'red': 'hsl(176, 100%, 44%)',
						'redshadow': 'hsl(177, 92%, 70%)',
						'orange': 'hsl(268, 47%, 21%)',
						'orangeshadow': 'hsl(290, 70%, 36%)'
						}
					},
				'text': {
					'gray': 'hsl(52, 100%, 62%)',
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

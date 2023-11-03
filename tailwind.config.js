/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './dist/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: 'inter',
				CircularSTD: 'CircularSTD'
			},
			colors: {
				Purple: '#5D50C6',
				Pink: '#F85E9F',
				Orange: '#FF5722',
				Yellow: '#FACD49',
				Gray: '#222831',
				Whatsapp: '#25D366',
				Instagram: '#E4405F',
				Facebook: '#0866FF',
				Discord: '#5865F2',
				Linkedin: '#0A66C2',
				Figma: '#F24E1E'
			},
			boxShadow: {
				smshadow: [
					'0px 0px 0px 0px rgba(0, 0, 0, 0.07)',
					'0px 34px 75px 0px rgba(0, 0, 0, 0.07)',
					'0px 137px 137px 0px rgba(0, 0, 0, 0.06)',
					'0px 308px 185px 0px rgba(0, 0, 0, 0.04)',
					'0px 548px 219px 0px rgba(0, 0, 0, 0.01)',
					'0px 856px 240px 0px rgba(0, 0, 0, 0.00)'
				],
				buttonshadow: [
					'0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
					'0px 5px 11px 0px rgba(0, 0, 0, 0.10)',
					'0px 20px 20px 0px rgba(0, 0, 0, 0.09)',
					'0px 45px 27px 0px rgba(0, 0, 0, 0.05)',
					'0px 81px 32px 0px rgba(0, 0, 0, 0.01)',
					'0px 126px 35px 0px rgba(0, 0, 0, 0.00)'
				]
			}
		}
	},
	plugins: []
}

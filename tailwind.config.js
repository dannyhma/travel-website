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
			}
		}
	},
	plugins: []
}

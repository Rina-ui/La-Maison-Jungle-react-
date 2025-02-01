import monstera from './assets/monstera.jpg'
import lyrata from './assets/lyrata.jpg'
import pothos from './assets/pothos.jpg'
import succulent from './assets/succulent.jpg'
import olivier from './assets/olivier.jpg'
import basil from './assets/basil.jpg'
import mint from './assets/mint.jpg'
import calathea from './assets/calathea.jpg'
import cactus from './assets/cactus.jpg'


export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
		isSpecialOffer: true,
		light: 2,
		water: 3,
		cover : monstera,
		price: 15
	},

	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: true,
		light: 3,
		water: 1,
		cover : lyrata,
		price: 16
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
		light: 1,
		water: 2,
		cover : pothos,
		price: 10
	},

	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover : cactus,
		price: 12
        
	},

	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        light: 3,
		water: 1,
		cover : olivier,
		price: 11
	},

	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        light: 2,
		water: 2,
		cover : mint,
		price: 16
	},

	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        light: 2,	
		water: 3,
		cover : basil,
		price: 9
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover : calathea,
		price: 10
	},

	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover : succulent,
		price: 18
	}
]

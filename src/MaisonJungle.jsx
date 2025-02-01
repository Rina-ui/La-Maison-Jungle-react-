import React, { useState, useEffect } from "react";
import "./styles/maisonJungle.css";
import logo from './assets/leaf+1.png';
import { plantList } from './plantList';
import Sun from './assets/sun.svg'; 
import Water from './assets/water.svg';
    


// Composant Description pour afficher un message de description
function Description() {
    return (
        <p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
    );
}

// Composant Cart pour afficher les paniers et les prix avec utilisation de useState qui permet de mettre à jour le panier de le hidden ou pas le tout avec un boutton
function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true);

    // Calcul du total des prix
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

	useEffect(() => {
	    alert(`J'aurai ${total}€ à payer 💸`)
	}, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3> {/* Affichage du total */}
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    );
}

// Fonction recommandation pour afficher un message en fonction du mois actuel
function recommandation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    
    if (isSpring) {
        return <div>C'est le moment de rempoter vos plantes !</div>;
    } else {
        return <div>Ce n'est pas le moment de rempoter vos plantes !</div>;
    }
}

// Composant Header pour afficher le logo et le nom de la maison jungle
function Header() {
    return (
        <div className="header">
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1>La Maison Jungle</h1>
            <br />
        </div>
    );
}

// Fonction CareScale pour afficher les icones de lumière et d'arrosage en fonction de la valeur de scaleValue
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

// Fonction handleClick pour afficher une alerte lorsqu'on clique sur une plante
function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

//Composant PlantItem pour afficher les plantes et les caractéristiques
function PlantItem({ cover, name, water, light }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div className="lmj-plant-item-care">
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}


// Composant ShoppingList pour afficher les plantes et les caractéristiques

function ShoppingList({ cart, updateCart }) {
    // La ligne qui générait les catégories uniques a été supprimée.
//     // const categories = plants.reduce(
//     //     (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
//     //     []
//     // );

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name);
	    if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
			);
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			]);
		} else {
			updateCart([...cart, { name, price, amount: 1 }]);
		}
	}
    
    return (
        <div className="lmj-shopping-list">

            {/* La liste des catégories a été supprimée ici. */}
			{/* affichage de la liste de categorie */}
             {/* <ul>
               {categories.map((cat) => (
                   <li key={cat}>{cat}</li>
               ))}
           </ul> */}

            <ul className="lmj-plant-list">
                {plantList.map(({ id, cover, name, water, light, price }) => (
                    <div key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button onClick={() => addToCart(name, price)}>
                            Ajouter
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
}





// Composant CategorieList pour afficher les catégories de plantes et les afficher
// function CategorieList() {
//     const catList = [];
//     plantList.forEach((plant) => {
//         if (!catList.includes(plant.category)) {
//             catList.push(plant.category);
//         }
//     });

//     return (
//         <div>
//             <h2>Les catégories de plantes</h2>
//             <ul>
//                 {catList.map((category, index) => (
//                     <li key={`${category}-${index}`}>
//                         {category}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

//pour afficher categorie des palntes et que toutes les plantes soient dans leur differentes categories
function Categories({ setActiveCategory, categories, activeCategory }) {
    // Supprimer les doublons de catégories
    const uniqueCategories = [...new Set(categories)];

    return (
        <div className='lmj-categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {uniqueCategories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')} className="lmj-categories-button">Réinitialiser</button>
        </div>
    );
}


// Composant Footer pour le formulaire et les mentions légales
function Footer(){
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                placeholder='Entrez votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}


// Composant Banner pour regrouper les composants et les afficher
 
export default function Banner() {
    const [cart, updateCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');  // État pour la catégorie active

    // Filtrage des plantes en fonction de la catégorie active
    const filteredPlants = activeCategory
        ? plantList.filter(plant => plant.category === activeCategory)
        : plantList;

    return (
        <div>
            <Header />
			<Categories 
                setActiveCategory={setActiveCategory} 
                categories={plantList.map(plant => plant.category)} 
                activeCategory={activeCategory} 
            />
            <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} plants={filteredPlants} />
            </div>
            {recommandation()}
            <Description />
            <Footer />
        </div>
    );
}


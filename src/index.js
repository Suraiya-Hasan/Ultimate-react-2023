import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { pizzaData } from './data';

function App() {
    return (
        <div className="App">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div className='header'>
            <h1>Pizzaria</h1>
        </div>
    )
}

function Menu() {
    const pizzas = pizzaData;
    const numPizza = pizzas.length;
    return (
        <main className='menu'>
            <h2>Our Menu</h2>

            {numPizza > 0 ?
                (
                    <>
                        <p>Not a very authentic pizza place but just to make a website.You have {numPizza} pizzas to choose from.
                        </p>
                        <ul className='pizzas'>
                            {/* {pizzaData.map(pizza => <Pizza name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price} />)} */}
                            {pizzas.map(pizza => {
                                return <Pizza pizzaObj={pizza} key={pizza.name} />
                            })}
                        </ul>
                    </>
                ) : <p>We're still working on it, please come back later.</p>}

        </main>
    )
}

function Footer() {
    const now = new Date().getHours();
    const openHour = 7;
    const closeHour = 23;
    const isOpen = now >= openHour && now <= closeHour;

    return (
        <footer className='footer'>
            {isOpen ?
                <Order closeHour={closeHour} openHour={openHour} />
                : <p className='order'>We're happy to welcome you between {openHour}:00 and {closeHour}:00. </p>}
        </footer>
    )
}

function Order({ closeHour, openHour }) {
    return (
        <div className='order'>
            <p>We are open from {openHour}:00 until {closeHour}:00. Come visit us or order online.
            </p>
            <button className='btn'>Order</button>
        </div>)
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt='pizza' style={{}} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>
                    {pizzaObj.soldOut ? "SOLD OUT" : +pizzaObj.price + 3}
                </span>
            </div>
        </li>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

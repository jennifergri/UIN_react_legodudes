import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import ContentPage from './components/ContentPage';
import './css/main.css'
import { useState } from 'react';

const cartStart = [
  {
    id: 0,
    title: "",
    price: 0,
  }
]

function App() {
  //State:
  const [cartItem, setCartItem] = useState([...cartStart])
  const [amount, setAmount] = useState(0)
  const [id, setId] = useState(0)

  return (
    <div className="container">
        <Header cartItem={cartItem} amount={amount} id={id}/>
        <Nav/>
        <ContentPage cartItem={cartItem} setCartItem={setCartItem} setAmount={setAmount}/>
          {/*Sender med til ContentPage^ */}
    </div>
  );
}

export default App;

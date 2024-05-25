
// import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import AlbumList from './components/AlbumList';
import CartProvider from './Store/CartProvider';

const productsArr = [
  {
    id: 'album1',
    title: 'Album 1',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 'album2',
    title: 'Album 2',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 'album3',
    title: 'Album 3',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 'album4',
    title: 'Album 4',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
]


function App() {


  return (
    <CartProvider >
      <NavbarComponent />
      <AlbumList productsArr={productsArr} />
    </CartProvider>
  );
}

export default App;


// import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import AlbumList from './components/AlbumList';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
]


function App() {


  return (
    <Fragment >
      <NavbarComponent />
      <AlbumList productsArr={productsArr} />
    </Fragment>
  );
}

export default App;

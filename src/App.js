
// import { Container } from 'react-bootstrap';
// import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import AlbumList from './components/AlbumList';
import CartProvider from './Store/CartProvider';
// import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './components/Navbar/AboutPage';
import Footer from './components/Footer';
import Home from './components/Home';

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

// const router = createBrowserRouter([
//   { path: '/store', element: <AlbumList /> },
//   { path: '/about', element: <AboutPage /> }
// ])


function App() {


  return (
    <CartProvider >
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<AlbumList productsArr={productsArr} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

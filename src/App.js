
import React from 'react'
import Header from './components/Header'; // Import the Header component
import ProductCard from './components/ProductCards/ProductCard'; // Import the ProductCard component
import images from './utils/ImageImporter';


const product = [
  {
    image: images['JD1 SpiderVerse.jpg'],
    name: 'Jordan 1 Spider-Verse',
    price: "190",
      },
  {
    image: images['JD1 Chicago.jpg'],
    name : 'Jordan 1 Retro High OG',
    price : "300",
  },
  
  ];

  function App() {
    return (
      <div>
        <Header /> {/* Add the Header component */}
        <ProductCard products={product} /> {/* Add the ProductCard component */}
      </div>
    );
  }

export default App;
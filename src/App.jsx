import React, { useState } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  let products = [
    {
      title: "Fancy Product",
      rating: false,
      sale: false,
      price: "$40.00 - $80.00",
    },
    {
      title: "Special Item",
      rating: true,
      sale: true,
      oldPrice: "$20.00",
      price: "$18.00",
    },
    {
      title: "Sale Item",
      rating: false,
      sale: true,
      oldPrice: "$50.00",
      price: "$25.00",
    },
    {
      title: "Popular Item",
      rating: true,
      sale: false,
      price: "$40.00",
    },
    {
      title: "Sale Item",
      rating: false,
      sale: true,
      oldPrice: "$50.00",
      price: "$25.00",
    },
    {
      title: "Fancy Product",
      rating: false,
      sale: false,
      price: "$120.00 - $280.00",
    },
    {
      title: "Special Item",
      rating: true,
      sale: true,
      oldPrice: "$20.00",
      price: "$18.00",
    },
    {
      title: "Popular Item",
      rating: true,
      sale: false,
      price: "$40.00",
    },
  ];
  return (
    <div>
      <Nav cartLength={cartItems.length} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
            <Card
              products={products}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;

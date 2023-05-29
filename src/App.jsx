import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Carrito from "./pages/Carrito";
import AppContext from "./my_context";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navbar";


function App() {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/EniDev911/ts-react-mamma-mia/main/public/pizzas.json"
    )
      .then((response) => response.json())
      .then((datos) => setPizzas(datos))
      .catch((err) => console.error(err));
      console.log(carrito);
  }, []);

  const getPizza = (id) => {
    return pizzas.find(pizza => pizza.id === id);
  }

  const totalCarrito = (items) => {
    const total = items.reduce((total, carItem) => {
      const item =  getPizza(carItem.id);
      return (total + (item.price || 0 )) * carItem.cantidad
    }, 0)
    console.log(total)
    return total;
  }
   const incrementarCarrito = (id) => {
     setCarrito((currItems) => {
       if (currItems.find((item) => item.id === id) == null) {
         return [...currItems, { id, cantidad: 1 }];
       } else {
         return currItems.map((item) => {
           if (item.id === id) {
             return { ...item, cantidad: item.cantidad + 1 };
           } else {
             return item;
           }
         });
       }
     });
   };

      const decrementarCarrito = (id) => {
        setCarrito((currItems) => {
          if (currItems.find((item) => item.id === id).cantidad === 1) {
            return currItems.filter((item) => item.id != id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, cantidad: item.cantidad - 1 };
              } else {
                return item;
              }
            });
          }
        });
      };

  return (
    <AppContext.Provider value={{ pizzas, getPizza, carrito, incrementarCarrito, decrementarCarrito, totalCarrito }}>
      <Navigation />
      <Container className="my-5">
        <Routes>
          <Route index element={<Home />} />
          <Route path="pizza/:id" element={<Pizza />} />
          <Route path="carrito" element={<Carrito />} />
        </Routes>
      </Container>
    </AppContext.Provider>
  );
}

export default App;

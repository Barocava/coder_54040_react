import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    console.log(cart);

    const addItem = (productToAdd) => {
      if (!isInCart(productToAdd.id)) {
        setCart((prev) => [...prev, productToAdd]);
        console.log("por aqui");
      } else {
        setCart( (prev) => {
            const nuevo = [...prev];
           const objeto = nuevo.find((obj) => obj.id === productToAdd.id);
           objeto.stock = productToAdd.stock;
           console.log(objeto);
           console.log("avers");
           return nuevo;
        })
      }
    };

    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id);
    };

    const removeItem = (id) => {
      console.log(id);
      console.log(cart);
      const cartUpdated = cart.filter((prod) => prod.id !== id);
      console.log(cartUpdated);
      setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    }

    const getTotalQuantity = () => {
      let accu = 0;
      cart.forEach(prod => {
        accu += prod.stock
      })
      return accu
    }

    const totalQuantity = getTotalQuantity()


    return (
      <CartContext.Provider
        value={{
          cart,
          isInCart,
          addItem,
          removeItem,
          clearCart,
          totalQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}

export const useCart = () => {
  return useContext(CartContext)
}
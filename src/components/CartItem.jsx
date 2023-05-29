import React from "react";
import { useContext } from "react";
import context from "../my_context";

const CartItem = ({ id, cantidad }) => {
  const { getPizza, incrementarCarrito, decrementarCarrito } =
    useContext(context);
  const item = getPizza(id);

  if (item == null) return null;

  return (
    <article className="detail__item">
      <div className="detail__figure">
        <figure>
          <img src={item.img} alt={item.name} />
        </figure>
        <h4>{item.name}</h4>
      </div>
      <div className="detail__actions">
        <div className="detail__item-total">
          {item.price * cantidad}
        </div>
        <button
          className="btn bg-primary"
          onClick={() => incrementarCarrito(item.id)}
        >
          +
        </button>
        {cantidad}
        <button
          className="btn bg-secondary"
          onClick={() => decrementarCarrito(item.id)}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;

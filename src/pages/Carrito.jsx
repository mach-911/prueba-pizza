import CartItem from "../components/CartItem";
import { useContext } from "react";
import context from "../my_context";

const Carrito = () => {

  const { carrito, totalCarrito } = useContext(context);

  return (
    <section className="detail">
      <h4 className="detail__text">Detalles del pedido:</h4>
      <div className="detail__container">
        {carrito.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <p className="detail__total">Total: {totalCarrito(carrito)}</p>
        {Number(totalCarrito(carrito)) > 0 ? (
          <button
            className="btn bg-success"
            onClick={() => {
              if (
                confirm(
                  `¿Estás seguro de llevar la compra por $${totalCarrito(
                    carrito
                  )} ?`
                )
              )
                return alert("Pagado");
            }}
          >
            Ir a pagar
          </button>
        ) : undefined}
      </div>
    </section>
  );
};

export default Carrito;

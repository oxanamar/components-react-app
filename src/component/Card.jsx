//functional component with ternary operator
import React from "react";
import "../App.css";

export default function Card(props) {
  const {
    title,
    price,
    description,
    imgLink,
    addedToCart,
    onAddToCart,
    onRemoveFromCart,
  } = props;

  return (
    <div className="card">
      <div className="card-body">
        <img src={imgLink} alt={title} />
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <span className="card-price">${price}</span>
        {addedToCart > 0 ? (
          <AddToCartForm
            addedToCart={addedToCart}
            onAdd={onAddToCart}
            onRemove={onRemoveFromCart}
          />
        ) : (
          <AddToCartButton onAdd={onAddToCart} />
        )}
      </div>
    </div>
  );
}

function AddToCartButton({ onAdd }) {
  return (
    <button onClick={onAdd} className="card-add">
      Add to Cart
    </button>
  );
}

function AddToCartForm({ addedToCart, onAdd, onRemove }) {
  return (
    <form>
      <button type="button" onClick={onRemove} className="card-form__del">
        -
      </button>
      <input className="card-form__input" value={addedToCart} readOnly />
      <button type="button" onClick={onAdd} className="card-form__add">
        +
      </button>
    </form>
  );
}

//functional component with if statement
/*
import React from "react";

function Card({
  title,
  price,
  description,
  imgLink,
  addedToCart,
  onAddToCart,
  onRemoveFromCart,
}) {
  let actionItem;
  if (addedToCart > 0) {
    actionItem = (
      <AddToCartForm
        addedToCart={addedToCart}
        onAdd={() => onRemoveFromCart(title)}
      />
    );
  } else {
    actionItem = <AddToCartButton onAdd={() => onAddToCart(title)} />;
  }

  return (
    <div className="card">
      <div className="card-body">
        <img src={imgLink} alt={title} />
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <span className="card-price">${price}</span>
        {actionItem}
      </div>
    </div>
  );
}

function AddToCartButton({ onAdd }) {
  return (
    <button onClick={onAdd} className="card-add">
      Add to Cart
    </button>
  );
}

function AddToCartForm({ addedToCart, onAdd, onRemove }) {
  return (
    <form>
      <button type="button" onClick={onRemove} className="card-form__del">
        -
      </button>
      <input className="card-form__input" value={addedToCart} readOnly />
      <button type="button" onClick={onAdd} className="card-form__add">
        +
      </button>
    </form>
  );
}

export default Card;
*/

//class-based component with if statement
/*
import React from "react";

export default class Card extends React.Component {
  render() {
    const { title, price, description, imgLink, addedToCart, onAddToCart, onRemoveFromCart } = this.props;

    let actionItem;
    if (addedToCart > 0) {
      actionItem = (
        <AddToCartForm
          addedToCart={addedToCart}
          onAdd={onAddToCart}
          onRemove={onRemoveFromCart}
        />
      );
    } else {
      actionItem = <AddToCartButton onAdd={onAddToCart} />;
    }

    return (
      <div className="card">
        <div className="card-body">
          <img src={imgLink} alt={title} />
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          {actionItem}
        </div>
      </div>
    );
  }
}

// Button to Add to Cart
function AddToCartButton({ onAdd }) {
  return <button onClick={onAdd} className="card-add">Add to Cart</button>;
}

// Form to show when item is already added to the cart
function AddToCartForm({ addedToCart, onAdd, onRemove }) {
  return (
    <form>
      <button type="button" onClick={onRemove} className="card-form__del">-</button>
      <input className="card-form__input" value={addedToCart} readOnly />
      <button type="button" onClick={onAdd} className="card-form__add">+</button>
    </form>
  );
}

 */

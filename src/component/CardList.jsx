import React, { Component } from "react";
import Card from "./Card";
import "../App.css";

const shoes = [
  {
    title: "Зимние ботинки",
    price: 99,
    description: "Такие только у нас",
    imgLink: ".src/component/55.png",
  },
  {
    title: "Пляжные тапки",
    price: 23,
    description: "Надеюсь, пригодятся",
    imgLink: "https://shop/slippers.jpg",
  },
  {
    title: "Праздничные туфли",
    price: 85,
    description: "Теперь и в чёрном цвете",
    imgLink: "https://shop/shoes.jpg",
  },
];

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {
        "Зимние ботинки": 0,
        "Пляжные тапки": 0,
        "Праздничные туфли": 0,
      },
    };
  }

  // Function to handle adding items to the cart
  handleAddToCart = (title) => {
    this.setState((prevState) => ({
      cartItems: {
        ...prevState.cartItems,
        [title]: prevState.cartItems[title] + 1,
      },
    }));
  };

  // Function to handle removing items from the cart
  handleRemoveFromCart = (title) => {
    this.setState((prevState) => ({
      cartItems: {
        ...prevState.cartItems,
        [title]:
          prevState.cartItems[title] > 0 ? prevState.cartItems[title] - 1 : 0,
      },
    }));
  };

  render() {
    return (
      <React.Fragment>
        {shoes.map((shoe, index) => (
          <Card
            key={index}
            title={shoe.title}
            price={shoe.price}
            description={shoe.description}
            imgLink={shoe.imgLink}
            addedToCart={this.state.cartItems[shoe.title]} // Pass addedToCart prop
            onAddToCart={() => this.handleAddToCart(shoe.title)} // Pass onAddToCart event
            onRemoveFromCart={() => this.handleRemoveFromCart(shoe.title)} // Pass onRemoveFromCart event
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CardList;

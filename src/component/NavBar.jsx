import { Link } from "react-router-dom";

function NavBar({ title = "To Do List" }) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/news">News</Link>
    </div>
  );
}

export default NavBar;

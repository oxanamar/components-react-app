import "./Header.css";

function Header({ title = "To Do List" }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;

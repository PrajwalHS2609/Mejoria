import "./Navbar2.css";
import Logo from "./Logo";
import Menu from "./Menu";
const NavBar = () => {
  // let [scroll, setScroll] = useState(false);

  // let changeColor = () => {
  //   if (window.scrollY >= 10) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };
  // window.addEventListener("scroll", changeColor);

  return (
    // <nav className={scroll ? "navContainer" : "navContainer1"}>
    <div className="navContainer">
      <Logo />
      <Menu />
    </div>
  );
};

export default NavBar;

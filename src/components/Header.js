function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React sneaker</h3>
          <p className="opacity-5">The shop of the best sneakers!</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/basket.svg" alt="cart" />
          <span>120$</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/heart.svg" alt="heart" />
        </li>
        <li>
          <img width={18} height={18} src="/img/person.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

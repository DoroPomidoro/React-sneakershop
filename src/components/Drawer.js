function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between mb-30">
            Basket{" "}
            <img className="cu-p" src="/img/btn-remove.svg" alt="removeBtn" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneak2.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 d-flex">
                <p className="mr-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>129$</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="btn-remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneak2.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 d-flex">
                <p className="mr-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>129$</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="btn-remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneak2.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 d-flex">
                <p className="mr-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>129$</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="btn-remove"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Sum:</span>
                <div></div>
                <b>258$</b>
              </li>
              <li className="d-flex">
                <span>Taxes 5%:</span>
                <div></div>
                <b>17$</b>
              </li>
            </ul>
            <button className="greenButton">
              Make order <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    )
}

export default Drawer;
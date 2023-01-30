function Card() {
    return (<div className="card">
    <div className="favourite">
      <img src="/img/heart-unliked.svg" alt="unliked" />
    </div>
    <img width={133} height={112} src="/img/sneak1.jpg" alt="card1" />
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Price:</span>
        <b>129$</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/crossplus.svg" alt="plus" />
      </button>
    </div>
  </div>
  );
}

export default Card;

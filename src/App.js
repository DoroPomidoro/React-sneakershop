import Card from "./components/Card";
import Header from "./components/Header";
import Drawer  from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <Card />
          <div className="card">
            <img width={133} height={112} src="/img/sneak2.jpg" alt="card2" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/crossplus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneak3.jpg" alt="card3" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/crossplus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneak4.jpg" alt="card4" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/crossplus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneak5.jpg" alt="card5" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/crossplus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneak6.jpg" alt="card6" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/crossplus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneak7.jpg" alt="card7" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/crossplus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneak9.png" alt="card8" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>129$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/crossplus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

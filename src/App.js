import GlobalStyle from "./styles/Global";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Calculator />
      </div>
    </>
  );
}

export default App;

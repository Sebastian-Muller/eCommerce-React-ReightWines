
import ProductsProvider from "./context/ProductsProvider";
import Rutas from "./routes/Rutas"
import Login from "./components/Login";








function App() {

  return (
  <ProductsProvider>
    <Rutas/>
  </ProductsProvider>
  );
}

export default App;

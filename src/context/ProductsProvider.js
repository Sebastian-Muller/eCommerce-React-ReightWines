import { createContext } from "react"




export const ProductsContext = createContext();
const data = [];





const ProductsProvider = ({children}) => {
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
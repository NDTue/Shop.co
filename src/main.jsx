import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { CartProvider } from './components/layout/Cart/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Shop.co/'>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
  // <StrictMode>
  //   <HashRouter>
  //     <CartProvider>
  //       <App />
  //     </CartProvider>
  //   </HashRouter>
  // </StrictMode>,
)

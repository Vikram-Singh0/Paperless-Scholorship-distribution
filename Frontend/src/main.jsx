  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import App from './App.jsx'
  import { ToastContainer, Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
      <ToastContainer
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss={false}
  draggable
  pauseOnHover
  theme="colored"
  transition={Bounce}
/>

    </StrictMode>,
  )

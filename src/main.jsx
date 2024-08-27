import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Playing11App from './Playing11App.jsx'
import './index.css'
import SearchingApp from './SearchingApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Playing11App/> */}
    <SearchingApp />
  </StrictMode>,
)

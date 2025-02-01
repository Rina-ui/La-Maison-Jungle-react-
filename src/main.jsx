import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Text from './Text.jsx'
import Banner from './MaisonJungle.jsx'
import Description from './MaisonJungle.jsx'
import { QuestionForm } from './QuestionForm.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Text />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Description />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategorieList />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionForm />
  </React.StrictMode>,
)

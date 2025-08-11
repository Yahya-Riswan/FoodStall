import React from 'react'
import { Provider } from "react-redux"
import store from "./redux/redux"
import Recipes from './Recipes'
import "./App.css"
function App() {

  return (
    <>
      <Provider store={store}>
        <Recipes />
      </Provider>
    </>
  )
}

export default App

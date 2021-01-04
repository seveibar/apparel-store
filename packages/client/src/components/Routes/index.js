import React from "react"
import Header from "../Header"
import Search from "../Search"
import Inventory from "../Inventory"
import StickyFooter from "../StickyFooter"
import CreditCardForm from "../CreditCardForm"
import ReviewOrder from "../ReviewOrder"
import SuccessfulOrder from "../SuccessfulOrder"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/checkout/success">
          <Header />
          <SuccessfulOrder />
        </Route>
        <Route path="/checkout/review">
          <Header />
          <ReviewOrder />
        </Route>
        <Route path="/checkout">
          <Header />
          <CreditCardForm />
        </Route>
        <Route path="/">
          <Header />
          <Search />
          <Inventory />
          <StickyFooter />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes

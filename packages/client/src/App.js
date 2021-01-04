import tw, { GlobalStyles } from "twin.macro"
import { RecoilRoot } from "recoil"
import Routes from "./components/Routes"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

export const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <RecoilRoot>
        <div>
          <GlobalStyles />
          <Routes />
        </div>
      </RecoilRoot>
    </Elements>
  )
}

export default App

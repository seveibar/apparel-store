import tw, { GlobalStyles } from "twin.macro"
import { RecoilRoot } from "recoil"
import Routes from "./components/Routes"

export const App = () => {
  return (
    <RecoilRoot>
      <div>
        <GlobalStyles />
        <Routes />
      </div>
    </RecoilRoot>
  )
}

export default App

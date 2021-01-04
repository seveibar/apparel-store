import { useCallback } from "react"
import tw from "twin.macro"
import CheckoutIcon from "./CheckoutIcon.js"
import { useRecoilValue } from "recoil"
import cartAtom from "../../recoil/cart-atom"
import { useHistory } from "react-router-dom"

export const StickyFooter = () => {
  const history = useHistory()
  const cart = useRecoilValue(cartAtom)

  const onClickCheckout = useCallback(() => {
    history.push("/checkout")
  }, [history])

  return (
    <div
      style={{ bottom: cart.length ? 0 : -100, transition: "bottom 250ms" }}
      tw="fixed w-full border-t-2 bg-white p-8"
    >
      <div tw="container mx-auto flex items-center">
        <div tw="text-green-600 font-bold text-3xl">
          ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </div>
        <div tw="flex-grow"></div>
        <button
          onClick={onClickCheckout}
          tw="flex bg-green-600 text-white p-2 px-4 font-semibold text-xl items-center"
        >
          <CheckoutIcon />
          <div>Checkout</div>
        </button>
      </div>
    </div>
  )
}

export default StickyFooter

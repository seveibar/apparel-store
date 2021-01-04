import React from "react"
import { useCallback } from "react"
import tw from "twin.macro"
import CheckoutIcon from "./CheckoutIcon.js"
import ReviewOrderIcon from "./ReviewOrderIcon.js"
import { useRecoilState } from "recoil"
import cartAtom from "../../recoil/cart-atom"
import { useHistory } from "react-router-dom"
import AnimatedNumber from "react-animated-number"

const formatMoney = (m) => m.toFixed(2) // TODO toLocale for > $1,000

export const StickyFooter = ({ onClickNext, checkoutStage = 1 }) => {
  const history = useHistory()
  const [cart, setCart] = useRecoilState(cartAtom)

  const onClickCheckout = useCallback(() => {
    history.push("/checkout")
  }, [history])

  const onClickClearCart = useCallback(() => {
    setCart([])
  })

  return (
    <>
      <div tw="h-32" />
      <div
        style={{ bottom: cart.length ? 0 : -50, transition: "bottom 250ms" }}
        tw="fixed w-full border-t-2 bg-white p-8"
      >
        <div tw="container mx-auto flex items-center">
          <div
            tw="text-green-600 font-bold text-3xl"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            $
            <AnimatedNumber
              value={cart.reduce((acc, item) => acc + item.price, 0)}
              duration={600}
              formatValue={formatMoney}
            />
          </div>
          <div tw="text-gray-400 font-bold text-xl pl-4">
            ({cart.length} items)
          </div>
          <div tw="flex-grow"></div>
          {checkoutStage === 1 && (
            <>
              <button
                onClick={onClickClearCart}
                tw="flex rounded bg-red-500 text-white p-2 px-4 text-xl items-center mr-2"
              >
                <div>Clear Cart</div>
              </button>
              <button
                onClick={onClickCheckout}
                tw="flex rounded bg-green-600 text-white p-2 px-4 font-semibold text-xl items-center"
              >
                <CheckoutIcon />
                <div>Checkout</div>
              </button>
            </>
          )}
          {checkoutStage === 2 && (
            <>
              <button
                onClick={onClickNext}
                tw="flex rounded bg-green-600 text-white p-2 px-4 font-semibold text-xl items-center"
              >
                <ReviewOrderIcon />
                Review Order
              </button>
            </>
          )}
          {checkoutStage === 3 && (
            <>
              <button
                onClick={onClickNext}
                tw="flex rounded bg-green-600 text-white p-2 px-4 font-semibold text-xl items-center"
              >
                Confirm Purchase
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default StickyFooter

import React, { useState } from "react"
import tw from "twin.macro"
import StickyFooter from "../StickyFooter"
import { useHistory } from "react-router-dom"
import cartAtom from "../../recoil/cart-atom"
import paymentIntentAtom from "../../recoil/payment-intent-atom"
import customerAtom from "../../recoil/customer-atom"
import { useRecoilValue } from "recoil"

export const ReviewOrder = () => {
  const history = useHistory()
  const paymentIntent = useRecoilValue(paymentIntentAtom)
  const customer = useRecoilValue(customerAtom)
  const cart = useRecoilValue(cartAtom)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const totalCost = cart.reduce((acc, item) => item.price + acc, 0)

  const onClickNext = async () => {
    setLoading(true)
    try {
      const order = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentIntentId: paymentIntent.id,
          customerId: customer._id,
          totalCost,
          items: cart,
        }),
      }).then((r) => r.json())

      history.push("/checkout/success")
    } catch (e) {
      setError(e.toString())
    }
    setLoading(false)
  }

  return (
    <>
      <div tw="container mx-auto p-6">
        <table tw="w-full">
          <thead>
            <tr tw="font-semibold">
              <td tw="w-2/3">Item Name</td>
              <td tw="w-1/6">Quantity</td>
              <td tw="w-1/6">Cost</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <StickyFooter
        loading={loading}
        error={error}
        checkoutStage={3}
        onClickNext={onClickNext}
      />
    </>
  )
}

export default ReviewOrder

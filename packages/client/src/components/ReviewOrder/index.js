import React from "react"
import tw from "twin.macro"
import StickyFooter from "../StickyFooter"
import { useHistory } from "react-router-dom"
import cartAtom from "../../recoil/cart-atom"
import { useRecoilValue } from "recoil"

export const ReviewOrder = () => {
  const history = useHistory()
  const onClickNext = async () => {
    // TODO
    history.push("/checkout/success")
  }

  const cart = useRecoilValue(cartAtom)
  console.log(cart)

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
      <StickyFooter checkoutStage={3} onClickNext={onClickNext} />
    </>
  )
}

export default ReviewOrder

import { useCallback } from "react"
import { useRecoilState } from "recoil"
import cartAtom from "../../recoil/cart-atom"
import tw from "twin.macro"

export const InventoryItem = ({ title, imageSrc, _id: productId, price }) => {
  const [cartState, setCartState] = useRecoilState(cartAtom)

  const numberInCart =
    cartState.find((item) => item._id === productId)?.quantity ?? 0

  const onAddItem = useCallback(() => {
    if (cartState.map((item) => item._id).includes(productId)) {
      setCartState(
        cartState.map((item) =>
          item._id !== productId
            ? item
            : {
                _id: productId,
                title,
                quantity: item.quantity + 1,
                price: (item.quantity + 1) * price,
              }
        )
      )
    } else {
      setCartState(
        cartState.concat([
          {
            _id: productId,
            title,
            quantity: 1,
            price,
          },
        ])
      )
    }
  }, [cartState, setCartState, price, productId])

  return (
    <div tw="bg-white shadow p-3 rounded lg:w-64 border m-4">
      <div>
        <div
          style={{
            backgroundImage: `url('${imageSrc}')`,
          }}
          tw="bg-cover bg-center bg-gray-300 h-32 rounded"
        ></div>
      </div>
      <div tw="mt-6">
        <p tw="text-lg font-bold tracking-wide text-gray-600 mb-2">{title}</p>
      </div>
      <p tw="text-lg font-bold tracking-wide text-green-600 mb-2">
        ${price.toFixed(2)}
      </p>
      <div tw="mt-6 flex justify-end">
        <button
          onClick={onAddItem}
          tw="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add to Cart
          {typeof numberInCart === "number" ? ` (${numberInCart})` : ""}
        </button>
      </div>
    </div>
  )
}

export default InventoryItem

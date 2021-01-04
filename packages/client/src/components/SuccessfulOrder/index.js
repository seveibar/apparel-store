import React from "react"
import Check from "./Check"
import tw from "twin.macro"

export const SuccessfulOrder = () => {
  return (
    <div tw="container mx-auto flex items-center flex-col">
      <div tw="text-5xl font-bold mt-16 flex items-center">
        <Check />
        Now you've done it
      </div>
      <div tw="text-xl w-1/2 mt-8">
        You've ordered clothes that can be worn, your order will arrive which is
        perfect, considering you had purchased clothing apparel* that had been
        available to purchase.
      </div>
      <div tw="text-xl w-1/2 mt-8">
        <a tw="text-blue-500" href="/">
          Shop here for more clothing apparel
        </a>
      </div>
      <div tw="text-sm w-1/2 mt-16 text-gray-400">
        *Clothing apparel may or may not be worn. Apparel Store cannot be held
        liable for the wearing of Apparal Store clothing for any purpose
        whatsoever.
      </div>
    </div>
  )
}

export default SuccessfulOrder

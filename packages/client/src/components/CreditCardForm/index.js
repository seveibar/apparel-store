import React, { useReducer, useState } from "react"
import tw from "twin.macro"
import StickyFooter from "../StickyFooter"
import usTerritoriesAndStates from "states-us"
import { useHistory } from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

const states = usTerritoriesAndStates
  .filter((s) => !s.territory)
  .map((s) => s.name)

export const CreditCardForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [fields, setField] = useReducer((state, action) => {
    return { ...state, [action.field]: action.value }
  }, {})
  const history = useHistory()
  const [error, setError] = useState()
  const onClickNext = async () => {
    if (!stripe || !elements) return setError("Stripe/Elements not loaded")
    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    })
    if (error) return setError(`An error occurred: ${error.toString()}`)

    const customer = await fetch("/api/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        paymentMethod,
      }),
    }).catch((e) => {
      setError(e.toString())
      return null
    })
    if (!customer) return

    history.push("/checkout/review")
  }

  return (
    <>
      <div tw="container mx-auto p-6">
        <div tw="bg-white shadow-md rounded border px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <div tw="-mx-3 md:flex mb-5">
            <div tw="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                tw="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3"
                type="text"
                placeholder="Jane"
              />
              {/* <p tw="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div tw="md:w-1/2 px-3">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                tw="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div tw="-mx-3 md:flex mb-6">
            <div tw="md:w-1/2 px-3">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                tw="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4"
                type="text"
                placeholder="janedoe@example.com"
              />
              <p tw="text-gray-600 text-xs italic">
                You'll receive a purchase receipt at this email address.
              </p>
            </div>
            <div tw="md:w-1/2 px-3">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Phone Number
                <span tw="text-gray-500 italic pl-1 lowercase">(optional)</span>
              </label>
              <input
                tw="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4"
                type="text"
                placeholder="123-456-7890"
              />
            </div>
          </div>
          <div tw="-mx-3 md:flex mb-6">
            <div tw="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <input
                tw="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div tw="md:w-1/2 px-3">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div tw="relative">
                <select tw="block appearance-none w-full bg-gray-100 border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded pl-6">
                  <option></option>
                  {states.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <div tw="pointer-events-none inset-x-0 inset-y-0 absolute flex items-center px-2 text-gray-700">
                  <svg
                    tw="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div tw="md:w-1/2 px-3">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Zip
              </label>
              <input
                tw="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4"
                type="text"
                placeholder="90210"
              />
            </div>
          </div>
          <div tw="md:flex mb-6">
            <div tw="md:w-1/2 sm:w-full">
              <label
                tw="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Card Information
              </label>
              <div tw="border bg-gray-100 border-gray-400 p-4 rounded">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        // color: "#424770",
                        "::placeholder": {
                          // color: "#aab7c4",
                        },
                      },
                      invalid: {
                        // color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div tw="text-red-500">{error}</div>
          </div>
        </div>
      </div>
      <StickyFooter onClickNext={onClickNext} checkoutStage={2} />
    </>
  )
}

export default CreditCardForm

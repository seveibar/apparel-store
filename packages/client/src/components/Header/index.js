import tw from "twin.macro"

const onClickAbout = () => {
  alert("This button is aesthetic")
}
const onClickSignIn = () => {
  alert("This button is aesthetic")
}

export const Header = () => {
  return (
    <div tw="border-b-2">
      <div tw="container flex mx-auto">
        <a href="/" tw="px-4 py-4">
          <div tw="text-4xl font-extrabold text-gray-900">Apparel Store</div>
          <div tw="text-xl font-bold text-gray-600 py-1">
            Buy clothes you can wear!
          </div>
        </a>
        <div tw="flex-grow"></div>
        <div tw="flex flex-shrink flex-grow-0 items-center justify-center">
          <button
            onClick={onClickAbout}
            tw="mx-2 font-semibold rounded-md text-gray-600 py-2 px-4"
          >
            About Us
          </button>
          <button
            onClick={onClickSignIn}
            tw="mx-2 font-semibold rounded-md text-gray-600 py-2 px-4"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header

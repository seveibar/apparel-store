import tw from "twin.macro"

export const Header = () => {
  return (
    <div tw="border-b-2">
      <div tw="container flex mx-auto">
        <div tw="px-4 py-4">
          <div tw="text-7xl font-extrabold text-gray-900">Apparel Store</div>
          <div tw="text-2xl font-bold text-gray-600 py-4">
            Buy clothes you can wear!
          </div>
        </div>
        <div tw="flex-grow"></div>
        <div tw="flex flex-shrink flex-grow-0 items-center justify-center">
          <button tw="mx-2 border border-gray-300 font-semibold rounded-md text-gray-700 py-2 px-4">
            About Us
          </button>
          <button tw="mx-2 border border-gray-300 font-semibold rounded-md text-gray-700 py-2 px-4">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header

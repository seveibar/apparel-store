import { useEffect, useState } from "react"
import tw from "twin.macro"
import SearchIcon from "./SearchIcon"
import { useRecoilState } from "recoil"
import activeItemsAtom from "../../recoil/active-items-atom"

export const Search = () => {
  const [activeItems, setActiveItems] = useRecoilState(activeItemsAtom)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    async function fetchResults() {
      const items = await fetch(
        `/api/item?q=${encodeURIComponent(searchText)}`
      ).then((r) => r.json())
      setActiveItems(items)
    }
    fetchResults()
  }, [searchText])

  return (
    <div tw="container mx-auto p-8 px-16">
      <div tw="shadow border flex items-center w-1/2 mx-auto">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          tw="w-full rounded p-2"
          type="text"
          placeholder="Search..."
        />
        <button tw="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <div tw="px-2">
            <SearchIcon />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Search

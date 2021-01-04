import { useRecoilValue } from "recoil"
import tw from "twin.macro"
import InventoryItem from "../InventoryItem"
import activeItemsAtom from "../../recoil/active-items-atom"

export const Inventory = () => {
  const items = useRecoilValue(activeItemsAtom)

  return (
    <div tw="container mx-auto flex justify-center items-center flex-wrap p-4 pt-0">
      {items.map((item) => (
        <InventoryItem key={item.title} {...item} />
      ))}
    </div>
  )
}

export default Inventory

import tw from "twin.macro"
import InventoryItem from "../InventoryItem"

export const Inventory = () => {
  return (
    <div tw="container mx-auto flex justify-center items-center flex-wrap p-4 pt-0">
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
      <InventoryItem />
    </div>
  )
}

export default Inventory

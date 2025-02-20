import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


const ProductPage = () => {
    return ( <div className="bg-gray-800 text-white mt-10 flex  flex-col justify-center items-center border-none">
        <h1 className="text-4xl "> olaaaa</h1>
        <div>
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
        </div>
    </div> );
}
 
export default ProductPage ;
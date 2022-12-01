import ICategory from "@/interfaces/ICategory";
import IOption from "@/interfaces/IOption";

export default interface IProduct{
    id: number,
    name: string,
    price: number,
    description: string,
    category: ICategory,
    options: IOption[]
}
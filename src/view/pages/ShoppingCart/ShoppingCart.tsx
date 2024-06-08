import {Component} from "react";
import {CartItem} from "../../../model/CartItem";
interface ShoppingCartProps{
    itemsList:CartItem[];
}
export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <table className="w-full mx-6">
                    <tr className="bg-gray-400">
                        <th className="text-[14px] font-normal border-black border-[0.5px] p-2">Product Id</th>
                        <th className="text-[14px] font-normal border-black border-[0.5px] p-2">Name</th>
                        <th className="text-[14px] font-normal border-black border-[0.5px] p-2">Unit Price</th>
                        <th className="text-[14px] font-normal border-black border-[0.5px] p-2">Qauntity</th>
                        <th className="text-[14px] font-normal border-black border-[0.5px] p-2">Total Price</th>
                    </tr>
                    {
                        this.props.itemsList
                            .map((item) => (
                                <tr className="border-black
                                               border-[0.5px]
                                               px-1">
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{item.product.id}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{item.product.name}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{item.product.price + ' '
                                        + item.product.currency}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{item.itemCount}</td>
                                    <td className="text-[15px] border-black border-[0.5px] px-1">{(item.itemCount * item.product.price)
                                        + ' ' + item.product.currency}</td>
                                </tr>
                            ))
                    }
                </table>

            </div>
        );
    }
}

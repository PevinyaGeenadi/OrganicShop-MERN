import { Component } from "react";
import { CartItem } from "../../../model/CartItem";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-screen-lg mx-6 bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-green-500 text-white">
                            <th className="text-lg font-semibold border-b-2 border-green-600 p-4">Product Id</th>
                            <th className="text-lg font-semibold border-b-2 border-green-600 p-4">Name</th>
                            <th className="text-lg font-semibold border-b-2 border-green-600 p-4">Unit Price</th>
                            <th className="text-lg font-semibold border-b-2 border-green-600 p-4">Quantity</th>
                            <th className="text-lg font-semibold border-b-2 border-green-600 p-4">Total Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.itemsList.map((item) => (
                            <tr key={item.product.id} className="even:bg-gray-100 odd:bg-white border-b-2 border-gray-200">
                                <td className="text-center text-base border-r-2 border-gray-200 p-4">{item.product.id}</td>
                                <td className="text-center text-base border-r-2 border-gray-200 p-4">{item.product.name}</td>
                                <td className="text-center text-base border-r-2 border-gray-200 p-4">{`${item.product.price} ${item.product.currency}`}</td>
                                <td className="text-center text-base border-r-2 border-gray-200 p-4">{item.itemCount}</td>
                                <td className="text-center text-base border-r-2 border-gray-200 p-4">{`${(item.itemCount * item.product.price).toFixed(2)} ${item.product.currency}`}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

import { Component } from "react";
import spinash from "../../../images/products/spinach.png";
import { ModifyCart } from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any;
}

interface ProductState {
    isActive: boolean;
}

export class Product extends Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {
        const { data } = this.props;
        const image = require('../../../images/products/' + data.image);
        return (
            <div className="w-48 h-56 mr-4 mb-4 justify-center items-center border border-gray-300 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                <div className="flex justify-center">
                    <img className="h-32 w-32" src={image} alt={data.name} />
                </div>
                <div className="flex mt-2">
                    <div>
                        <h3 className="text-secondary text-sm pl-2">{data.name}</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-1 rounded-lg pr-2">
                        <h3 className="text-sm pl-2">{data.price} <small className="text-xs">{data.currency}</small></h3>
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    {
                        this.state.isActive ?
                            <ModifyCart data={{ product: data, isAdded: this.state.isActive }}></ModifyCart>
                            :
                            <button
                                className="w-full py-1 bg-secondary text-xs border border-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition duration-300"
                                onClick={this.addToCartOnClick}
                            >
                                Add to Cart
                            </button>

                    }
                </div>

            </div>
        );
    }

    private addToCartOnClick = () => {
        this.setState({
            isActive: true,
        })
    }
}

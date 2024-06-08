import { Component } from "react";
import spinash from "../../../images/products/spinach.png";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any;
}
interface ProductState{
    isActive : boolean
}
export class Product extends Component<ProductProps,ProductState> {
    constructor(props:ProductProps) {
        super(props);
        this.state ={
            isActive:false
        }
    }
    render() {
        const { data } = this.props;
        const image = require('../../../images/products/' + data.image);
        return (
            <div className="w-36 h-44 mr-4 mb-4 justify-center items-center border-gray-500 border-[0.5px]">
                <div className="flex justify-center">
                    <img className="h-[112px] w-[112px]" src={image} alt={data.name} />
                </div>
                <div className="flex mt-2">
                    <div>
                        <h3 className="text-secondary text-[14px] pl-2">{data.name}</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-1 rounded-lg pr-2">
                        <h3 className="text-[14px] pl-2">{data.price} <small className="text-[8px]">{data.currency}</small></h3>
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    {
                        this.state.isActive ?
                            <ModifyCart></ModifyCart>
                         :
                            <button
                                className="w-full p-[4px] bg-secondary text-[10px] border-gray-500 border-[0.5px]"
                                onClick={this.addToCartOnClick}
                            >
                                Add to Cart
                            </button>

                    }
                </div>

            </div>
        );
    } //
    private addToCartOnClick = () => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({
            isActive: true,
        })

    }
}


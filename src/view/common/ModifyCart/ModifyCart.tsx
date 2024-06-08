import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps{
    data: any;
}
interface ModifyCartState{
    itemCount: number
}
export class ModifyCart extends Component <ModifyCartProps,ModifyCartState>{
    public static itemsList: CartItem[] = [];
    constructor(props:ModifyCartProps) {
        super(props);
        this.state = {
            itemCount:1
        }
    }
    // @ts-ignore
    componentDidMount() {
        const {itemCount}
            = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList.find(item=>
                    item.product.id ===
                    this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                );
                console.log(ModifyCart.itemsList);
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount}
            = this.state;
        let item
            = ModifyCart.itemsList
            .find(item =>
                item.product.id ===
                this.props.data
                    .product.id);

        if(item) {
            let index: number = ModifyCart.itemsList.indexOf(item);

            ModifyCart.itemsList.splice(index, 1);

            ModifyCart.itemsList.push({
                product: this.props.data.product,
                itemCount: itemCount
            });
            console.log(ModifyCart.itemsList);
        }
    }


    render() {
        let {itemCount} = this.state;
        const increaseItemCount =() : void =>{
           // alert("Add")
            this.setState({
                itemCount: ++itemCount
            })
        }
        const decreaseItemCount =() : void =>{
            //alert("Remove")

            if(itemCount >1){
                this.setState({
                    itemCount: --itemCount
                })
            } else {
                alert("Item count cannot be less than 1")
            }

        }
        return (
            <><div className="w-full mt-1 p-[2.4px] text-[12px] text-center bg-gray-500">
                <button className="float-left text-[12px] bg-yellow-300 rounded-lg h-4 w-5" onClick={decreaseItemCount}> - </button>
                <small className="text-[12px]">{itemCount}</small>
                <button className="float-right text-[12px] bg-yellow-300 rounded-lg h-4 w-5" onClick={increaseItemCount}> + </button>
            </div></>
        );
    }
}

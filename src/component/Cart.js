import Cartitem from "./Cartitem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTAL } from "../action";
import React from "react";


const Cartcontainer=({amount,data,dispatch})=>{
    React.useEffect(()=>
    {
        dispatch({type:GET_TOTAL})
    })
    if(data.length===0)
    {
        return (
        <div className="cart_container">
        <h1>Cart Bag</h1>
        <h3>Your bag is empty</h3></div>
        )
    }
    return (
        <div className="cart_container">
        <h1>Cart Bag</h1>
        <div className="cart_prd">
            {data.map((data)=>
            {
                return <Cartitem key={data.id} {...data}></Cartitem>
            })}
        </div>
        <section className="footer">
            <h3>Total</h3>
            <h3 className="prd_price" >${amount}</h3>
        </section>
        <button className="clear-cart" onClick={()=>dispatch({type:CLEAR_CART})}>clear cart</button></div>
    )
}
const mapstatetoprop=(state)=>{
    return {amount:state.amount,data:state.cart}
}
export default connect(mapstatetoprop)(Cartcontainer);
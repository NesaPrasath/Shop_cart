import {connect} from 'react-redux'
import { DECREASE, GET_TOTAL, INCREASE, REMOVE } from '../action'

const Cartitem=({img,title,price,amount,remove,increase,decrease})=>
{
    return (<>
    <div className="cart_item">
            <a href={img} target="_blank"><img src={img} alt="prdc_img"></img></a>
            <div>
            <h4 className="prd_name">{title}</h4>
            <h4 className="prd_price">${parseFloat((price*amount).toFixed(2))}</h4>
            <button className="cart_btn" onClick={()=> remove()}>remove</button>
            </div>
            <div>
                <button className="cart_btn inc_btn" onClick={()=>increase()}>+</button>
                <h5>{amount}</h5>
                <button className="cart_btn dec_btn" onClick={()=>decrease()}>-</button>
            </div>
    </div>
    </>)
}
const mapdispatch=(act,prop)=>
{
    return {
        remove:()=> act({type:REMOVE,payload:{id:prop.id}}),
        increase:()=> act({type:INCREASE,payload:{id:prop.id}}),
        decrease:()=> act({type:DECREASE,payload:{id:prop.id,amount:prop.amount}}),
            }
}
export default connect(null,mapdispatch)(Cartitem);
import { CLEAR_CART, DECREASE,GET_AMOUNT,GET_TOTAL,INCREASE, REMOVE } from "./action";
function reducer(state,action)
{
  if(action.type===INCREASE)
  {
    return {...state,cart:state.cart.map(cartitem=>
      {if(cartitem.id===action.payload.id)
      {
        cartitem={...cartitem,amount:cartitem.amount+1}
      }
    return cartitem}
      )};
  }
  if(action.type===DECREASE)
  {
    if(action.payload.amount===1)
    {
      return {...state,cart:state.cart.filter(cartitem =>
        cartitem.id!==action.payload.id)}
    }
    return {...state,cart:state.cart.map(cartitem=>
      {if(cartitem.id===action.payload.id)
      {
        cartitem={...cartitem,amount:cartitem.amount-1}
      }
    return cartitem}
      )};
  }
  if(action.type===CLEAR_CART)
  {
    return {...state,cart:[]}
  }
  if(action.type===REMOVE)
  {
    return {...state,cart:state.cart.filter(cartitem =>
      cartitem.id!==action.payload.id)}
  }
  if(action.type===GET_TOTAL)
  {
    let amt=state.cart.reduce((total,data)=>
    {
      total+=(data.price*data.amount)
      total=parseFloat(total.toFixed(2))
      return total
    },0)
    return {...state,amount:amt}
  }
  return state;
}
export default reducer
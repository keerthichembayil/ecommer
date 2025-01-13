import { createSlice} from '@reduxjs/toolkit'
const initialState={
    items:[],
   
}
const cartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
              addToCart(state,action){
                const{productid,quantity}=action.payload;
                
              const indexproductid= (state.items).findIndex(item => item.productid===productid);

                if (indexproductid>=0) {
                    state.items[indexproductid].quantity+=quantity;
                  } else {
                    state.items.push({productid,quantity});
                  }
               
              },
              changequantity(state,action)
              {
                const{productid,quantity}=action.payload;
                const indexproductid= (state.items).findIndex(item => item.productid===productid);
              if(quantity>0)
              {
                state.items[indexproductid].quantity=quantity;

              }
              else{
                //delete state.items[indexproductid] this create undefined error as it do not delete that item
                state.items=(state.items).filter(item=>item.productid!==productid);

              }
              
              }





        }
    }
)
export const {addToCart,changequantity}=cartSlice.actions;
export default cartSlice.reducer    
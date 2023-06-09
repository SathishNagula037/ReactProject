import React from "react";


type GreetProps = {
    name: string,
    messageCount?: number,
    isloggedin: Boolean
}
export const TypeScript = (props:GreetProps) => {
    let {messageCount = 10} = props
    return (
        <div>
           
            <h2>
            {props.isloggedin ? 
                `Welcome ${props.name} ${messageCount}! you have 10 unread messages` : 'welcome Guest'}
            </h2>
        </div>
    )
}

/*
export type CartItemsType = { 
id: number,
category:string,
description:string,
image:string,
price: number,
title: string,
amount:number
}



const getProducts = async(): Promise<CartItemsType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

  const getTotalItems = (items: CartItemsType[]) => 
     items.reduce((ack:number, item) => ack + item.amount,0); 

  const handleAddToCart = (clickedItem: CartItemsType) => {
    setCartItems(prev => {
        //1. is the item is already in the cart?
        const isItemInCart = prev.find(item => item.id === clickedItem.id)
        if(isItemInCart){
            return prev.map(item => (
                item.id === clickedItem.id 
                 ? {...item, amount: item.amount + 1 } : item
            ))
        }
        //First time the item is added
        return [...prev, {...clickedItem, amount: 1 }]
    })
  };

  const handleRemoveCart = (id: number) => {
    setCartItems(prev => (
        prev.reduce((acc, item) => {
            if(item.id === id){
                if(item.amount === 1) return ack;
                return[...ack, { item, amount}]
            }
        })
    ))
  }
const calculateTotal = (item: CartItemsType[]) => 
     item.reduce((ack:number, item) => ack + item.amount * item.price,0)
  return (
    <wrapper>
       <Grid container spacing={3}>
        {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
            <cart cartItems={CartItems} addToCart={handleAddToCart} /> ------------ props
        ))}
    <wrapper>
  )



  cart.tsx
  -----------------------------------------
  type Props = {
    cartItems: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void
    
  }
  const Cart: React.FC<Props> = ({ cartItems, handleAddToCart, removeFromCart }) => (
    <wrapper>
       <p>{item.description}
       <h3>{item.price}</h3>
       <button onclick={() => handleAddToCart(item.id)}>Add to cart</button>

       <button onclick={() => removeFromCart(item.id)}
    </wrapper>
  )


*/
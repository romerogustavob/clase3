import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList'
import products from '../Jsons/products'


const ItemDetailContainer = () => {

  const [item, setItem]= useState({})

  useEffect(() => {
    getItem().then( data =>{
      console.log(data)
      setItem(data)
    } )
  
    return () => {
      
    }
  }, [])
  

  const getItem = () => {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
          resolve(products[1])
       },2000);
    })
  }

  return (
    <>
      <ItemDetail item={item}/>
    </>
    
  )
}

export default ItemDetailContainer
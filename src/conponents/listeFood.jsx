
import React from 'react' 
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchFood } from '../features/foodSlice';
import Food from './fooddd';



export default function ListFood() {

  const foods = useSelector((state) => state.food.food);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFood())
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
     {
      foods.map((product, id) => 
        <Food key={id} item={product} />
      )
     }
    </div>
  )
}

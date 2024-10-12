import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/feature/product/productSlice';
import Box from '../Box/Box';
import "./Section3.css"


const Section3 = () => {
    const dispatch = useDispatch();
    const {value} = useSelector((state) => state.product);

    

    useEffect(() => {
        dispatch(getProduct());
    },[]);

  return (

    <div className="boxContainer" style={{flexWrap:'wrap', display:'flex', width:'100%'}}>
        {value && value.map((item) => (
            <Box key={item.id} item={item} />
        ))}
    </div>

    
  );
};

export default Section3;

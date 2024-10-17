import React from 'react'
import "./Card2.css"
import { MdDeleteForever } from "react-icons/md";
import { deleteFromBasket } from '../../redux/feature/basket/basketSlice';
import { useDispatch } from 'react-redux';



const Card2 = ({item}) => {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(deleteFromBasket(item));
      };

  return (
    <>
   <div className="card">

            <div className="center-pic">
            <img src={item.image} alt="Card" className='imgg' />
            </div>
            <div className="card-body">
                <h2 className="card-title">{item.category}</h2>
                <p className="card-text">{item.title}</p>
            </div>

            <div className="icons-card">
            <button href="#" className="card-button">Learn More</button>
            <MdDeleteForever className='delete-icon' onClick={handleRemove} />
            </div>
        </div>

      
    </>
  )
}

export default Card2

import AddToCartIcon from "../../assets/icons/add_cart.png"
import {Fragment, useState} from 'react'
import { useSelector,useDispatch } from "react-redux" 
import Modal from "../../components/Layout/UI/Modal"
import {addItemHandler,removeItemHandler} from "../../actions"



const ListItem = ({data}) =>{

    const [showModal,setShowModal]=useState(false)
 
    const item=useSelector(state=>state.items.find(item=>item.id===data.id))  
    // console.log(item,"dipesh");
    const dispatch = useDispatch()
    
    //undefined
    // console.log(item,"dipesh")
    // console.log(data,"ddata")
    
    const increaseCounterByOne = (e)=>{
        e.stopPropagation();
        // onAdd(data.id) as we are directly making use of redux storage
        dispatch(addItemHandler(data))

}

    const decreaseCounterByOne = (e)=>{
        e.stopPropagation();
        // onRemove(data.id) we are directly making use of redux storage
        dispatch(removeItemHandler(data.id))

    }

    const handleModal = () =>{
        setShowModal(prevState=>!prevState)
    }

    // console.log(item?.quantity)
 

    return (
        <Fragment>
        <div className="item-card" onClick={handleModal}>
            <img className="img-fluid" src={`/assets/${data.thumbnail}`} alt="imagetitle" ></img>
            <div className="item-card__information">
                <div className="pricing"><span>{data.discountedPrice}</span>
                <strike>{data.price}</strike></div>
                <div className="title"><h3>{data.title}</h3></div>
            </div>
            {
                !item || item?.quantity<1 ? <button className="cart-add" onClick={increaseCounterByOne}>
                <span> Add to cart</span>
                 <img src={AddToCartIcon} alt="Cart Icon"/>
                 </button>: <div className="cart-addon">
                    <button onClick ={decreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick ={increaseCounterByOne}><span>+</span></button>
                </div>
            }

        

        </div>
        {
            showModal && <Modal onClose={handleModal}>
                <div className="item-card__modal">
                <img className="img-fluid" src={`/assets/${data.thumbnail}`} alt="imagetitle" ></img>
                <div className="meta">
                    <h3>{data.title}</h3>
                    <div className="pricing"><span>{data.discountedPrice}</span>
                <small><strike>{data.price}</strike></small></div>
                <p>{data.description}</p>
                {
                    
                !item || item?.quantity==='undefined' ? <button className="cart-add card-add__modal" onClick={increaseCounterByOne}>
                <span> Add to cart</span>
                 <img src={AddToCartIcon} alt="Cart Icon"/>
                 </button>: <div className="cart-addon card-addon__modal">
                    <button onClick ={decreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{item.quantity}</span>
                    <button onClick ={increaseCounterByOne}><span>+</span></button>
                </div>
            }
                </div>

                </div>
            </Modal>
        }
        </Fragment>

    )
}


export default ListItem;
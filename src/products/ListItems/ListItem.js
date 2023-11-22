import AddToCartIcon from "../../assets/icons/add_cart.png"
import {Fragment, useState} from 'react'
import Modal from "../../components/Layout/UI/Modal"


const ListItem = ({data,onAdd,onRemove}) =>{


    const [counter,setCounter] = useState(0)
    const [showModal,setShowModal]=useState(false)

    const increaseCounterByOne = (e)=>{
        e.stopPropagation();
        onAdd(data.id)
        setCounter(counter+1)

    }

    const decreaseCounterByOne = (e)=>{
        e.stopPropagation();
        // if(counter>0){
        //     setCounter(counter-1)
        // }
        if(counter===0){
            return;
        }
        if(counter==1){
            onRemove(data.id)
        }
        setCounter(counter-1)
       
        
    }

    const handleModal = () =>{
        setShowModal(prevState=>!prevState)
    }


 

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
                counter<1 ? <button className="cart-add" onClick={increaseCounterByOne}>
                <span> Add to cart</span>
                 <img src={AddToCartIcon} alt="Cart Icon"/>
                 </button>: <div className="cart-addon">
                    <button onClick ={decreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{counter}</span>
                    <button onClick ={increaseCounterByOne}><span>+</span></button>
                </div>
            }

            {/* <button className="cart-add">
               <span> Add to cart</span>
                <img src={AddToCartIcon} alt="Cart Icon"/>
                </button>
                <div className="cart-addon">
                    <button><span>-</span></button>
                    <span className="counter">{datas}</span>
                    <button><span>+</span></button>
                </div> */}
        

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
                counter<1 ? <button className="cart-add card-add__modal" onClick={increaseCounterByOne}>
                <span> Add to cart</span>
                 <img src={AddToCartIcon} alt="Cart Icon"/>
                 </button>: <div className="cart-addon card-addon__modal">
                    <button onClick ={decreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{counter}</span>
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
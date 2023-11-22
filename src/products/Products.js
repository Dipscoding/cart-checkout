import ListItem from "./ListItems/ListItem"
import {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from "../components/Layout/UI/Loader"



  
const Products = () =>
{
    const [items,setItems] =useState([])
    const [loader,setLoader]=useState(true)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
            const response = await axios.get("https://cart-checkout-a1fef-default-rtdb.firebaseio.com/items.json")
            const data=response.data
            const transformedData = data.map((item,index)=>{
                return {
                    ...item,
                    id:index
                }
            })
            setLoader(false)
            setItems(transformedData)
        }catch(err){
            console.log(err);
        }

        }
        fetchData()
    },[])
    return (
        <>
        
        <div className="product-list">
            <div className="product-list--wrapper">
                {
                    items.map((item,index)=>{
                        return <ListItem key={index} data={item}/>

                    })
                }
               
         
            </div>

        </div>
        {loader && <Loader/>}
        </>
    )
}

export default Products
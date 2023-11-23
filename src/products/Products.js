import ListItem from "./ListItems/ListItem"
import {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from "../components/Layout/UI/Loader"



  
const Products = ({onAddItem,onRemoveItem}) =>
{
    const [items,setItems] =useState([])
    const [loader,setLoader]=useState(true)
    // const [presentItems,setPresentItems] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
            const response = await axios.get("https://cart-checkout-a1fef-default-rtdb.firebaseio.com/items.json")
            const data=response.data
            const transformedData = data.map((item,index)=>{
                return {
                    ...item,
                    quantity:0,
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

    const handleAddItem = (id) =>{
        console.log(id);
        // if(presentItems.indexOf(id)>-1){
        //     return;
        // }else{
        //     setPresentItems([...presentItems,id])
        // }
        // onAddItem()
        let data = [...items]
        let index = data.findIndex(i => i.id===id)
        data[index].quantity+=1
        setItems([...data])

    }

    const handleRemoveItem=(id)=>{
        console.log(id);
        // let index = presentItems.indexOf(id)
        // if(index>-1){
        //     let items = [...presentItems]
        //     items.splice(index,1)
        //     setPresentItems([...items])
        //     onRemoveItem()
        // }
        let data = [...items]
        let index = data.findIndex(i => i.id===id)
        if(data[index].quantity!==0){
            data[index].quantity-=1
            setItems([...data])
        }
        
        

    }


    return (
        <>
        
        <div className="product-list">
            <div className="product-list--wrapper">
                {
                    items.map((item,index)=>{
                        return <ListItem key={index} data={item} onAdd={handleAddItem} onRemove={handleRemoveItem}/>

                    })
                }
               
         
            </div>

        </div>
        {loader && <Loader/>}
        </>
    )
}

export default Products
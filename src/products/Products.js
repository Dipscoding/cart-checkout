import ListItem from "./ListItems/ListItem"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from "../components/Layout/UI/Loader"




const Products = ({ onAddItem, onRemoveItem, eventState }) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://cart-checkout-a1fef-default-rtdb.firebaseio.com/items.json")
                const data = response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,

                        id: index
                    }
                })
                setLoader(false)
                setItems(transformedData)
            } catch (err) {
                console.log(err);
            }

        }
        fetchData()
    }, [])

    useEffect(() => {
        if (eventState.id > -1) {
            if (eventState.type === 1) {
                handleAddItem(eventState.id)
            } else if (eventState.type === -1) {
                handleRemoveItem(eventState.id)
            }
        }

    }, [eventState])

    const handleAddItem = (id) => {
        console.log(id);
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1
        setItems([...data])
        onAddItem(data[index])

    }

    const handleRemoveItem = (id) => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if (data[index].quantity !== 0) {
            data[index].quantity -= 1
            setItems([...data])
            onRemoveItem(data[index])
        }



    }


    return (
        <>

            <div className="product-list">
                <div className="product-list--wrapper">
                    {
                        items.map((item, index) => {
                            return <ListItem key={index} data={item} onAdd={handleAddItem} onRemove={handleRemoveItem} />

                        })
                    }


                </div>

            </div>
            {loader && <Loader />}
        </>
    )
}

export default Products
import ListItem from "./ListItems/ListItem"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from "../components/Layout/UI/Loader"
import {useParams,useNavigate, useLocation} from 'react-router-dom'




const Products = () => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

    const params = useParams();
    const history = useNavigate();
    // console.log(params)
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search).get('search')
    // console.log(queryParams)




    useEffect(() => {
        const fetchData = async () => {
            try {
                let slug = `items.json`;
                if(params.category){
                    slug = `items-${params.category}.json`

                }
                if(queryParams){
                    slug +=`?search=${queryParams}`
                }
                const response = await axios.get(`https://cart-checkout-a1fef-default-rtdb.firebaseio.com/${slug}`)
                const data = response.data
                if(!data){
                    handleNotFound()
                    return;
                }
                

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
    }, [params.category, queryParams])

    const handleNotFound =() =>{
        history('/404')

    }






    return (
        <>

            <div className="product-list">
                <div className="product-list--wrapper">
                    {
                        items.map((item, index) => {
                            return <ListItem key={index} data={item}/>

                        })
                    }


                </div>

            </div>
            {loader && <Loader />}
        </>
    )
}

export default Products
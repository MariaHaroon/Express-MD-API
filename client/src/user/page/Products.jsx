import React, { useEffect, useState } from 'react'
import UserCards from '../component/UserCards'
import axios from 'axios'
import { AppRoute } from '../../App'
import ProductsByCategory from './ProductsByCategory'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`${AppRoute}api/allproducts`)
            .then(json => setProducts(json.data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Entire product directory, Add to cart whatever you like!</small>
            </div>

            <div className="row my-5">
                {
                    products?.map((val, key) => <UserCards key={key} image={val.thumbnail} name={val.productName} url={`/products/${val._id}`} />)
                }
                <div>
                    <small className="text-secondary">Or filter products by any category you like!</small>
                    {ProductsByCategory}
                </div>
            </div>
        </div>
    )
}
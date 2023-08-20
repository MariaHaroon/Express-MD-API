import React, { useEffect, useState }  from 'react'
import UserCards from '../component/UserCards'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function Categories() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get(`${AppRoute}api/allcategories`)
            .then(json => setCategory(json.data.categories))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Categories</h2>
                <small className="text-secondary">Our exciting range of categories to explore!</small>
            </div>

            <div className="row my-5">
                {
                    category.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
    )
}
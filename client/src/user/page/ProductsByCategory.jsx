import React, { useEffect, useState }  from 'react'
import UserCards from '../component/UserCards'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function Categories() {
    const [categorypro, setCategorypro] = useState([])
    useEffect(() => {
        axios.get(`${AppRoute}api/productbycategory/:category`)
            .then(json => setCategorypro(json.data.categorypro))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Produvts By Category</h2>
                <small className="text-secondary">Our variety of products from a single category!</small>
            </div>

            <div className="row my-5">
                {
                    categorypro?.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
    )
}
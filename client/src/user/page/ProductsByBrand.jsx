import React, { useEffect, useState } from 'react'
import UserCards from '../component/UserCards'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function Brands() {
    const [brandpro, setBrandpro] = useState([])

    useEffect(() => {
        axios.get(`${AppRoute}api/productbybrand/:brand`)
            .then(json => setBrandpro(json.data.brandpro))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products By Brand</h2>
                <small className="text-secondary">Check out these products by this brands here. </small>
            </div>

            <div className="row my-5">
                {
                    brandpro?.map((val, key) => <UserCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Brand() {
    const [brands, setbrands] = useState([])

    useEffect(() => {
        axios.get('/api/allbrands')
            .then(json => setbrands(json.data.brands))
            .catch(err => alert(err.message))
    }, [])




    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Check out the most amazing brands here. Lorem, ptis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brands?.map((val, key) => <GuestCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}
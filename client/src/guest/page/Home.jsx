import React from 'react'
import Brand from '../component/Brands'
import Categories from '../component/Categories'
import FooterContact from '../component/FooterContact'

export default function Home() {
    return (
        <div>
            <Categories />
            <Brand />
            <FooterContact/>
        </div>
    )
}
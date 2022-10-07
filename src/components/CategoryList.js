import React from 'react'


const List = [
    { id: 1, title: "Long-Sleeve," },
    { id: 2, title: "Shirt," },
    { id: 3, title: "One-piece," },
    { id: 4, title: "Pants," },
    { id: 5, title: "Loafers," },
    { id: 6, title: "Shoulder & Tote bag," },
    { id: 7, title: "Men-Long Sleeve," },
    { id: 8, title: "Men-Basic Shirt," },
    { id: 9, title: "Men-Sweats," },
    { id: 10, title: "Men-Denim pants," },
    { id: 11, title: "Men-Lace up," },
    { id: 12, title: "Cap," },
    { id: 13, title: "Kitchen," },
    { id: 14, title: "Home Deco," },
    { id: 15, title: "Bedding," },
    { id: 16, title: "Beauty," },
    { id: 17, title: "Pet," },
]


const CategoryList = () => {
    return (
        <div className='CategoryList'>
            {
                List.map((it, idx) => {
                    return (
                        <ul>
                            <li key={idx}><a href="">{it.title}</a></li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default CategoryList
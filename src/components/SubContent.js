import React from 'react'

import '../css/Content.scss'

const SubDes = [
    { id: 1, des: "EQLOOK / 워킹우먼의 미니멀 니트 룩" },
    { id: 2, des: "BRAND / MISCHIEF 22FW 컬렉션 2차 발매" },
    { id: 3, des: "EDITOR'S NOTE / 등산복이 하이패션이 되기까지" },
    { id: 4, des: "BRAND / YIE YIE 22FW 컬렉션 발매 5%" },
]

const SubContent = () => {
    return (

        <div className='SubContent' >
            {
                SubDes.map((it, idx) => {
                    return (
                        <figure className={`itm itm0${idx + 1}`}>
                            <img src={process.env.PUBLIC_URL + `/assets/images/s_sec0${it.id}.jpg`} alt="" />
                            <div><p>{it.des}</p></div>
                        </figure>
                    )
                })
            }

        </ div>
    )
}

export default SubContent
import React from 'react'

import '../css/Main.scss'

const MainDes = [
    { id: 1, des: "BRAND / ANDERSSON BELL FOR WOMEN 22FW 컬렉션 PART.2 발매" },
    { id: 2, des: "WISH LIST / 이번역은 EQL스테이션" },
    { id: 3, des: "EQL STATION / 첫 오프라인 스토어 더현대서울 오픈" },
    { id: 4, des: "FOUND TALK / 깨진 기물에 아름다운 흔적" },
]

const MainContent = () => {
    return (

        <div className='MainContent' >
            {
                MainDes.map((it, idx) => {
                    return (
                        <figure className={`itm itm0${idx + 1}`}>
                            <img src={process.env.PUBLIC_URL + `/assets/images/f_sec0${it.id}.jpg`} alt="" />
                            <div><p>{it.des}</p></div>
                        </figure>
                    )
                })
            }

        </ div>
    )
}

export default MainContent
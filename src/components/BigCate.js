import React from 'react'
import '../css/Content.scss'

const BigCate = () => {
    return (
        <div className='BigCate'>
            <figure className='women'>
                <div>
                    <strong>WOMEN</strong>
                    <p>보들보들한 감촉</p>
                    <img src={process.env.PUBLIC_URL + "/assets/images/t_women.jpg"} alt="" />
                </div>
            </figure>
            <figure className='men'>
                <div>
                    <strong>MEN</strong>
                    <p>깔끔한 핏의 긴팔 셔츠</p>
                    <img src={process.env.PUBLIC_URL + "/assets/images/t_men.jpg"} alt="" />
                </div>
            </figure>
            <figure className='essential'>
                <div>
                    <strong>ESSENTIAL BY EQL</strong>
                    <p>올 가을 에센셜 웨어</p>
                    <img src={process.env.PUBLIC_URL + "/assets/images/tessential.jpg"} alt="" />
                </div>
            </figure>
        </div>
    )
}

export default BigCate
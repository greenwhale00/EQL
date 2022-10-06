import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const contentTitle = [
    { id: 1, title: "GBH 어패럴 22FALL 컬렉션 단독 10%" },
    { id: 2, title: "빅토리아 슈즈 X 럭키마르쉐 10%" },
    { id: 3, title: "오아이페인티드 22FW 컬렉션 발매 ~30%" },
    { id: 4, title: "인더스타 22FW 2차 신상품 발매 ~20%" }
]

const ContentSlide = () => {
    return (
        <div className='ContentSlide'>
            <Slider>
                {
                    contentTitle.map((it, idx) => {
                        return (
                            <figure>
                                <img src={process.env.PUBLIC_URL + `/assets/images/mid_slide0${it.id}.jpg`} alt="" />
                                <div className='slide'>
                                    <span><FiArrowLeft onClick={() => ContentSlide.current.slickPrev()} className="icon left" /></span>
                                    <p>{it.title}</p>
                                    <span> <FiArrowRight onClick={() => ContentSlide.current.slickNext()} className="icon right" /></span>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ContentSlide
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import '../css/Main.scss'


const main_content = [
    { id: 1, content: "아조바이아조 22FW 마릴린먼로 캡슐 컬렉션 10%" },
    { id: 2, content: "커버낫 우먼 라인 신규 발매 기념 ~15% & 10% 쿠폰" },
    { id: 3, content: "#EQL FAMILY SALE 2주간 진행되는 50여개 브랜드 특가 ~80%" },
    { id: 4, content: "플랫/로퍼 타임리스 아이템 ~50% & 15% 쿠폰" },
    { id: 5, content: "이큐엘스튜디오 민음사 콜라보레이션 발매 5% & 댓글 이벤트" },
    { id: 6, content: "#NEXT LABEL 디자이너 20인의 한정판 런웨이 배틀, 런웨이를 쇼핑하라!" },
    { id: 7, content: "단 7일, 주얼리 5개 브랜드 ~20% & 무료배송 혜택" },
    { id: 8, content: "#INSIDER CAMPAIGN 보야주 WHAT WE DO l 모던 노마드" },
    { id: 9, content: "#슬로우라이프 때로는 천천히, 15% 쿠폰 혜택" },
    { id: 10, content: "캠핑 자연에서 즐기는 낭만 ~56% & 10% 쿠폰" },
    { id: 11, content: "빅토리아 슈즈 룸슈즈 선발매 10% & 포토 후기 이벤트" },
    { id: 12, content: "모어쥬드 22FW 신상품 발매 단독 ~15%" },
    { id: 13, content: "소니 몰입의 즐거움 ~17%" },
    { id: 14, content: "로드 존 그레이 22FW 울 후디드 코트 프리오더 15%" },
    { id: 15, content: "마리떼 프랑소와 저버 22FALL 3차 컬렉션 단독 5%" },
]

const MainSlide = () => {
    const MainSlide = useRef(null);

    return (
        <div className='MainSlide'>
            <Slider
                arrows={false}
                autoplay={true}
                infinite={true}
                pauseOnHover={false}
                ref={MainSlide}
                dots={false}
                centerMode={true}
                slidesToShow={3}

            >
                {
                    main_content.map((it, idx) => {
                        return (
                            <figure className={`itm itm0${idx + 1}`}>
                                <img src={process.env.PUBLIC_URL + `/assets/images/main_slider0${it.id}.jpg`} alt="" />
                                <div>
                                    <span></span>
                                    <p>{it.content}</p>
                                    <span></span>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default MainSlide
import React from 'react'
import css from '../Hero/Hero.module.css'
import HeroImg from '../../../src/assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy collection</span>
                    <span>
                        {" "}
                        seddily say has sutiable disposal and boy.Exercise joy man children rejoiced.
                    </span>

                </div>
            </div>
            {/*middel side hero image */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>
                            Best Signup offers
                        </span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* right side  */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5M</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100K</span>
                    <span>Happy Customers</span>
                </div>
            </div>

        </div>
    )
}

export default Hero

import globals from '../../globals.module.scss'
import compStyles from './sliderG.module.scss'
import Image from "next/image";
import line from '../../../public/Vector7.png'
import {SliderElement} from "@/widgets/slider/SliderElement";
import triangle from '../../../public/ui/btnSlider.png'
import React, {useEffect, useRef} from "react";
import {SliderElementG} from "@/widgets/gallery/SliderElementG";
import classNames from "classnames";
import {setIn} from "immutable";

const pics = ['', 'pic1', 'pic2', 'pic3', 'pic4', 'pic5', '']
type SliderGProps = {
    close: () => void; // explicitly type the close prop
};
export const SliderG = ({close}: SliderGProps) => {
    const [index, setIndex] = React.useState('pic1')
    const open = true
    const getScroll = (name: string) => {
        let scroll
        switch (name) {
            case 'pic1':
                scroll = 654
                break
            case 'pic2':
                scroll = 1666
                break

            case 'pic3':
                scroll = 2676
                break

            case 'pic4':
                scroll = 3686
                break

            case 'pic5':
                scroll = 4696
                break
            default:
                scroll = 654;
        }
        return scroll
    }
    const getIdx = (name: string) => {
        setIndex(name)
        document.getElementById('gg')?.scrollTo({
            left: getScroll(name),
            behavior: 'smooth',
        })
        //console.log(document.getElementById('gg').scrollLeft)
    }
    useEffect(() => document.getElementById('gg')?.scrollTo({
        left: 652,
        behavior: 'smooth',
    }), [])
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // useEffect(() => {
    //     const gg = document.getElementById('gg');
    //     if (!gg) return; // Guard clause: stop if element is not found
    //
    //     const handleScroll = () => {
    //         console.log("Container scroll:", gg.scrollLeft);
    //     };
    //
    //     gg.addEventListener("scroll", handleScroll);
    //
    //     return () => {
    //         gg.removeEventListener("scroll", handleScroll);
    //     };
    // }, [])
    const slide = (event: any) => {

        const idx = pics.findIndex((name) => name === index)
        console.log('name = ', index, idx)
        if (event.target.dataset.name === 'right') {
            console.log('right')
            if (idx < 6) {
                if (idx === 5) {
                    document.getElementById('gg')?.scrollTo({
                        left: getScroll('pic1'),
                        behavior: 'smooth',
                    })
                } else {
                    document.getElementById('gg')?.scrollTo({
                        left: getScroll('pic' + (idx + 1)),
                        behavior: 'smooth',
                    })
                }
                idx === 5 ? setIndex('pic1') : setIndex('pic' + (idx + 1))
            }
        } else {
            console.log('left')
            if (idx === 1) {
                document.getElementById('gg')?.scrollTo({
                    left: getScroll('pic5'),
                    behavior: 'smooth',
                })
            } else {
                document.getElementById('gg')?.scrollTo({
                    left: getScroll('pic' + (idx - 1)),
                    behavior: 'smooth',
                })
            }
            idx === 1 ? setIndex('pic5') : setIndex('pic' + (idx - 1))
        }
    }
    return <div id={'pics'} data-name={'gallery'} className={classNames(compStyles.slider, globals.contentBlock)}>
        <div className={compStyles.content}>
            <div onClick={close} className={compStyles.close}>
                <div onClick={() => close}
                     className={compStyles.burger}>
        <span
            className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
            }`}
        />
                    <span
                        className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${
                            open ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                            open ? "-rotate-45 -translate-y-[10px]" : ""
                        }`}
                    />
                </div>
            </div>
            <div id={'gg'} className={compStyles.sliderCont}>
                {pics.map((pic, idx) => <SliderElementG key={pic} data={pic} onnClick={getIdx}/>)}
            </div>
            <div className={compStyles.navs}>
                <Image onClick={slide} data-name='left' src={triangle} alt={'triangle'}
                       className={compStyles.triRight}/>
                <Image onClick={slide} data-name='right' src={triangle} alt={'triangle'}
                       className={compStyles.triLeft}/>
            </div>
        </div>
    </div>
}
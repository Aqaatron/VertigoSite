import globals from '../../../globals.module.scss'
import compStyles from './singlegallery.module.scss'
import Image from "next/image";

import triangle from '../../../../public/ui/btnSlider.png'
import React, {useEffect, useRef} from "react";
import {SliderElementG} from "./SliderElementG";
import classNames from "classnames";
import {RootState} from "@/store/store";
import {useDispatch, useSelector} from "react-redux";
import {setShowGal} from "@/store/slices/slice";

const pics = ['', 'pic1', 'pic2', 'pic3', 'pic4', 'pic5', '']

export const SingleGallery = () => {

    const dispatch = useDispatch()
    const scroll = useSelector((state: RootState) => state.counter.scroll)
    const activePic = useSelector((state: RootState) => state.counter.pic)
    const [index, setIndex] = React.useState(activePic)
    const [open, setOpen] = React.useState(false)
    const closeMe = () => {
        dispatch(setShowGal(false))
        //document.getElementById('pics')?.style.setProperty('visibility', 'hidden')
    }
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
    // useEffect(() => document.getElementById('gg')?.scrollTo({
    //     left: 652,
    //     behavior: 'smooth',
    // }), [])
    useEffect(() => {
        getIdx(activePic)
    }, [activePic]);
    React.useEffect(() => {

        if (open) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'auto';
            };
        }
    }, []);
    // React.useEffect(() => {
    //     window.scrollTo({top: 5861, behavior: 'smooth'})
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
    console.log('1', activePic, scroll)
    return <div id={'pics'} data-name={'gallery'} className={classNames(compStyles.slider, globals.contentBlock)}
                style={{position: 'absolute', top: `${scroll}px`, zIndex: '1000'}}>
        <div className={compStyles.close} onClick={closeMe}>
            <div onClick={closeMe}
                 className={compStyles.burger}>
        <span
            className={`block h-1 w-full bg-white rounded transition-transform duration-300 rotate-45 translate-y-[7px]`}
        />
                <span
                    className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${
                        !open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                        !open ? "-rotate-45 -translate-y-[10px]" : ""
                    }`}
                />
            </div>
        </div>
        <div className={compStyles.content}>
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
        <div className={compStyles.fold}></div>
    </div>
}
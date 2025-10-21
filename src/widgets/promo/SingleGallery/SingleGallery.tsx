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

const pics = ['',
    'pic1',
    'pic2',
    'pic3',
    'pic4',
    'pic5',
    'pic6',
    'pic7',
    'pic8',
    'pic9',
    'pic10',
    'pic11',
    'pic12',
    '']

export const SingleGallery = () => {

    const dispatch = useDispatch()
    const chapter = useSelector((state: RootState) => state.counter.chapter)
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
            case 'pic6':
                scroll = 5706
                break
            case 'pic7':
                scroll = 6716
                break
            case 'pic8':
                scroll = 7726
                break
            case 'pic9':
                scroll = 8736
                break
            case 'pic10':
                scroll = 9746
                break
            case 'pic11':
                scroll = 10756
                break
            case 'pic12':
                scroll = 11766
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
    }
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

    const slide = (event: any) => {

        const idx = pics.findIndex((name) => name === index)
        console.log('name = ', index, idx)
        if (event.target.dataset.name === 'right') {
            console.log('right')
            if (idx < 13) {
                if (idx === 12) {
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
                idx === 12 ? setIndex('pic1') : setIndex('pic' + (idx + 1))
            }
        } else {
            console.log('left')
            if (idx === 1) {
                document.getElementById('gg')?.scrollTo({
                    left: getScroll('pic12'),
                    behavior: 'smooth',
                })
            } else {
                document.getElementById('gg')?.scrollTo({
                    left: getScroll('pic' + (idx - 1)),
                    behavior: 'smooth',
                })
            }
            idx === 1 ? setIndex('pic12') : setIndex('pic' + (idx - 1))
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
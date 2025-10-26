import globals from '../../../globals.module.scss'
import compStyles from './sliderM.module.scss'
import Image from "next/image";
import pad from './pPad.png'
import line from '../../../../public/Vector7.png'
import {SliderElementM} from "@/widgets/mobile/sliderM/SliderElementM";
import triangle from './btn.png'
import React, {useEffect} from "react";
import {texts} from "@/texts";

const games = texts.slider.games
export const SliderM = () => {
    const [index, setIndex] = React.useState(2)
    const [scrl, setScrl] = React.useState(0)
    const [initLeft, setInitLeft] = React.useState(0)
    const getIdxMinus = (idx: number) => {
        setIndex(idx)
        if (idx === 1) {
            document.getElementById('gg')?.scrollTo({
                left: initLeft + scrl * (10),
                behavior: 'smooth',
            })
            games.forEach((el, idxx) => {
                if (idxx === 11) {
                    el.active = true
                } else {
                    el.active = false
                }
            })
        } else {
            document.getElementById('gg')?.scrollTo({
                left: initLeft + scrl * (idx - 1),
                behavior: 'smooth',
            })
            games.forEach((el, idxx) => {
                if (idxx === idx) {
                    el.active = true
                } else {
                    el.active = false
                }
            })
        }

    }
    const getIdxPlus = (idx: number) => {
        //console.log(idx)
        setIndex(idx)
        if (idx === 10) {
            document.getElementById('gg')?.scrollTo({
                left: initLeft + scrl * (1),
                behavior: 'smooth',
            })
            games.forEach((el, idxx) => {
                if (idxx === 2) {
                    el.active = true
                } else {
                    el.active = false
                }
            })
        } else {
            document.getElementById('gg')?.scrollTo({
                left: initLeft + scrl * (idx + 1),
                behavior: 'smooth',
            })
            games.forEach((el, idxx) => {
                if (idxx === idx + 2) {
                    el.active = true
                } else {
                    el.active = false
                }
            })
        }

    }
    useEffect(() => {
        const slider = document.getElementById("gg");

        if (slider) {
            const sliderWidth = slider.offsetWidth;
            const sliderScrollWidth = slider.scrollWidth;
            const elCount = slider.childElementCount;

            // 3*2 diff between active border and other el borders
            if (sliderWidth && sliderScrollWidth && elCount) {
                const scrl = (sliderScrollWidth - 3 * 2) / elCount;
                const initLeft = sliderWidth / 2 - scrl - scrl / 2;
                const moduleInitLeft = initLeft < 0 ? initLeft * -1 : initLeft;

                slider.scrollTo({
                    left: moduleInitLeft + scrl * 2,
                    behavior: "smooth",
                });

                setScrl(scrl);
                setInitLeft(moduleInitLeft);
            }
        }
    }, []);
    const slide = (event: any) => {
        if (event.target.dataset.name === 'right') {
            getIdxPlus(index)
            index < 10 ? setIndex(index + 1) : setIndex(1)
        } else {
            getIdxMinus(index)
            if (index === 1) {
                setIndex(10)
            } else {
                setIndex(index - 1)
            }
        }
    }

    const slideSwype = (dir: string) => {
        if (dir === 'right') {
            getIdxPlus(index)
            index < 10 ? setIndex(index + 1) : setIndex(1)
        } else {
            //console.log(index, 'INDEEX!!!')
            getIdxMinus(index)
            if (index === 1) {
                setIndex(10)
            } else {
                setIndex(index - 1)
            }
        }
    }
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: any) => {
        touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e: any) => {
        touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 5) {
            // Swiped left
            slideSwype('right')
        }
        if (touchEndX - touchStartX > 5) {
            // Swiped right
            slideSwype('left')
        }
    };
    return <div id={'games'} className={globals.contentBlock} style={{backgroundColor: '#685BC7', minHeight: '650px'}}>
        <div className={compStyles.content}>
            <h1 style={{fontSize: '30px'}} className={compStyles.spaceF}>НАШИ ИГРЫ</h1>
            <div onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd} id={'gg'} className={compStyles.sliderCont}>
                {games.map((game) => <SliderElementM key={game.title} data={game}/>)}
            </div>
            <div className={compStyles.navs}>
                <Image onClick={slide} data-name='left' src={triangle} alt={'triangle'}
                       className={compStyles.triRight}/>

                <Image onClick={slide} data-name='right' src={triangle} alt={'triangle'}
                       className={compStyles.triLeft}/>
            </div>

        </div>

        {/*<Image src={pad} alt={'pad'} className={compStyles.Ppad}/>*/}
    </div>
}
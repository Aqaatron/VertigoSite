import globals from '../../globals.module.scss'
import compStyles from './slider.module.scss'
import Image from "next/image";
import pad from '../../../public/purpPadClean.png'
import line from '../../../public/Vector7.png'
import {SliderElement} from "@/widgets/slider/SliderElement";
import triangle from '../../../public/ui/btnSlider.png'
import React, {useEffect, useRef} from "react";
import {texts} from "@/texts";
import girlSlider from '../../../public/girlSlider.png'
import circle from "../../../public/circle.png";

const games = texts.slider.games
export const Slider = () => {
    const [index, setIndex] = React.useState(2)
    const [scrl, setScrl] = React.useState(0)
    const [initLeft, setInitLeft] = React.useState(0)

    useEffect(() => {
        const slider = document.getElementById("gg");
        if (slider) {
            const sliderWidth = slider.offsetWidth;
            const sliderScrollWidth = slider.scrollWidth;
            const elCount = slider.childElementCount;
            // 3*2 diff between active border and other el borders
            if (sliderWidth && sliderScrollWidth && elCount) {
                // 3*2 diff between active border and other el borders
                // 566
                const oneElScroll = (sliderScrollWidth - 605) / (elCount - 1)
                const initLeft = sliderWidth / 2 - oneElScroll - oneElScroll / 2
                const moduleInitLeft = initLeft < 0 ? initLeft * -1 : initLeft
                document.getElementById('gg')?.scrollTo({
                    left: moduleInitLeft,
                    behavior: 'smooth',
                })
                setScrl(oneElScroll)
                setInitLeft(moduleInitLeft)
            }
        }
    }, []);
    // debug
    // useEffect(() => {
    //     const gg = document.getElementById('gg');
    //     if (!gg) return; // Guard clause: stop if element is not found
    //
    //     const handleScroll = () => {
    //         console.log("Container scroll:", gg.scrollLeft);
    //     };
    //     gg.addEventListener("scroll", handleScroll);
    //     return () => {
    //         gg.removeEventListener("scroll", handleScroll);
    //     };
    // }, [])
    const getIdx = (idx: number) => {
        let scroll
        setIndex(idx)
        switch (idx) {
            case 1:
                document.getElementById('gg')?.scrollTo({
                    left: 82,
                    behavior: 'smooth',
                })
                break
            case 2:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft,
                    behavior: 'smooth',
                })
                break

            case 3:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl,
                    behavior: 'smooth',
                })
                break

            case 4:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl * 2,
                    behavior: 'smooth',
                })
                break

            case 5:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl * 3,
                    behavior: 'smooth',
                })
                break

            case 6:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl * 4,
                    behavior: 'smooth',
                })
                break

            case 7:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl * 5,
                    behavior: 'smooth',
                })
                break

            case 8:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl * 6,
                    behavior: 'smooth',
                })
                break
            case 9:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl * 7,
                    behavior: 'smooth',
                })
                break
            case 10:
                document.getElementById('gg')?.scrollTo({
                    left: initLeft + scrl * 8,
                    behavior: 'smooth',
                })
                break
        }
        games.forEach((el, idxx) => {
            if (idxx === idx + 1) {
                el.active = true
            } else {
                el.active = false
            }
        })
        //console.log(document.getElementById('gg').scrollLeft)
    }
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
    const getIdxMinus = (idx: number) => {
        console.log(idx, index)
        setIndex(idx)
        if (idx === 1) {
            document.getElementById('gg')?.scrollTo({
                left: initLeft + scrl * (8),
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
                left: initLeft + scrl * (idx - 3),
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
        console.log('INDEX START', idx)
        console.log(idx, index)
        setIndex(idx)
        if (idx === 10) {
            document.getElementById('gg')?.scrollTo({
                left: initLeft - scrl,
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
                left: initLeft + scrl * (index - 1),
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
    // const slide = (event: any) => {
    //     console.log('INDEX = ', index)
    //     if (event.target.dataset.name === 'right') {
    //         console.log('right')
    //         if (index < 10) {
    //             switch (index) {
    //                 case 1:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 350,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 2:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 670,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 3:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 980,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 4:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 1288,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 5:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 1609,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 6:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 1924,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 7:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 2240,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 8:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 2548,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 9:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 2867,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //             }
    //             games.forEach((el, idxx) => {
    //                 if (idxx - 1 === index + 1) {
    //                     console.log('+',idxx,index)
    //                     el.active = true
    //                 } else {
    //                     console.log('-')
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(index + 1)
    //         } else {
    //             setIndex(1)
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 40 + 345 * (0),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 if (idxx - 1 === 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             console.log('last right item')
    //         }
    //     } else {
    //         if (index > 1) {
    //             switch (index) {
    //                 case 1:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 350,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 2:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 33,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 3:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 350,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 4:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 670,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 5:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 980,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 6:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 1288,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 7:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 1609,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 8:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 1924,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 9:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 2240,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //                 case 10:
    //                     document.getElementById('gg')?.scrollTo({
    //                         left: 2559,
    //                         behavior: 'smooth',
    //                     })
    //                     break
    //             }
    //             games.forEach((el, idxx) => {
    //                 if (idxx - 1 === index - 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(index - 1)
    //         } else {
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 2867,
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 if (idxx - 1 === 10) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(10)
    //         }
    //     }
    // }
    return <div id={'games'} className={globals.contentBlock}>
        <Image src={girlSlider} className={compStyles.girlSlider} alt={'girlSlider'}/>
        <Image className={compStyles.circle} src={circle} alt={'logo'}/>
        <div className={compStyles.content}>
            <h1 className={compStyles.title}>ИГРЫ</h1>
            <Image src={line} alt={'line'}/>
            <h2 className={compStyles.subtitle}>Полное погружение</h2>
            {/*<Image src={line} alt={'line'}/>*/}
            <div id={'gg'} className={compStyles.sliderCont}>
                {games.map((game) => <SliderElement key={game.title} data={game} onnClick={getIdx}/>)}
            </div>
            <div className={compStyles.navs}>
                <Image onClick={slide} data-name='left' src={triangle} alt={'triangle'}
                       className={compStyles.triRight}/>
                <h1 style={{minWidth: '320px', display: 'flex', justifyContent: 'center'}}>{games[index + 1].title}</h1>
                <Image onClick={slide} data-name='right' src={triangle} alt={'triangle'}
                       className={compStyles.triLeft}/>
            </div>
            <div className={compStyles.text}> {games[index + 1].body}</div>
        </div>
        <Image src={pad} alt={'pad'} className={compStyles.Ppad}/>
    </div>
}
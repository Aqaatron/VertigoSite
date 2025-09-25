import compStyles from './slider.module.scss'
import ps from '../../../public/games/pss.png'
import pm from '../../../public/games/pm.png'
import pz from '../../../public/games/pz.png'
import pa from '../../../public/games/paa.png'
import pgg from '../../../public/games/pgg.png'
import bp from '../../../public/games/bpp.png'
import ss from '../../../public/games/sss.png'
import sh from '../../../public/games/shh.png'
import js from '../../../public/games/jss.png'
import bs from '../../../public/games/bs.jpeg'

import Image from "next/image";
import React, {useRef} from "react";

export const SliderElement = ({data, onnClick}: { data: any, onnClick: Function }) => {
    const fn = () => {
        onnClick(data.index)
    }
    const divRef = useRef(null);

    React.useEffect(() => {
        if (divRef.current) {
            //console.log("offsetLeft:", divRef.current.offsetLeft);
        }
    }, []);
    const processImg = () => {

        switch (data.src) {
            case 'ps':
                return ps
            case 'pm':
                return pm
            case 'pz':
                return pz
            case 'pa':
                return pa
            case 'pg':
                return pgg
            case 'bp':
                return bp
            case 'ss':
                return ss
            case 'sh':
                return sh
            case 'js':
                return js
            case 'bs':
                return bs
            default:
                return ps
        }
    }
    return <div ref={divRef} data-name={data.src}
                className={data.src === '' ? compStyles.sliderElEmpty : !data.active ? compStyles.sliderEl : compStyles.sliderElActive}>
        {data.src !== '' && <Image onClick={fn} src={processImg()} width={265} height={220} alt={data.title}
                                   className={data.active ? compStyles.picActive : compStyles.pic}/>}

    </div>
}
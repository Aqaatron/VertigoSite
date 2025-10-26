import compStyles from './sliderM.module.scss'
import bs from '../../../../public/games/bs.jpeg'
import Image from "next/image";
import ps from "../../../../public/games/pss.png";
import pm from "../../../../public/games/pm.png";
import pz from "../../../../public/games/pz.png";
import pa from "../../../../public/games/paa.png";
import pg from "../../../../public/games/pgg.png";
import bp from "../../../../public/games/bpp.png";
import ss from "../../../../public/games/sss.png";
import sh from "../../../../public/games/shh.png";
import js from "../../../../public/games/jss.png";
import React from "react";

export const SliderElementM = ({data}: { data: any }) => {

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
                return pg
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
    return <div>
        <div data-name={data.src} id={data.src}
             className={data.src === '' ? compStyles.sliderElEmpty : !data.active ? compStyles.sliderEl : compStyles.sliderElActive}>
            {data.src !== '' && <Image src={processImg()} alt={data.title}
                                       className={data.active ? compStyles.picActive : compStyles.pic}/>}

        </div>
        <h1 className={compStyles.gameTitle}>{data.title}</h1>
        <div className={compStyles.gameBody}>{data.body}</div>
    </div>
}
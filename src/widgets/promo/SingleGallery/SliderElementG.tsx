import compStyles from './singlegallery.module.scss'
import pic1 from '../../../../public/gallery/1.jpg'
import pic2 from '../../../../public/gallery/2.jpg'
import pic3 from '../../../../public/gallery/3.jpg'
import pic4 from '../../../../public/gallery/4.jpg'
import pic5 from '../../../../public/gallery/5.jpg'

import Image from "next/image";
import React, {useRef} from "react";

export const SliderElementG = ({data, onnClick}: { data: any, onnClick: Function }) => {
    const fn = () => {
        onnClick(data)
    }

    const processImg = () => {
        switch (data) {
            case 'pic1':
                return pic1
            case 'pic2':
                return pic2
            case 'pic3':
                return pic3
            case 'pic4':
                return pic4
            case 'pic5':
                return pic5
            default:
                return pic1
        }
    }
    return <div data-name={data}
                className={data === '' ? compStyles.sliderElEmpty : compStyles.sliderEl}>
        {data !== '' && <Image data-name={data} onClick={fn} src={processImg()} width={900} height={550} alt={data}
                               className={compStyles.pic}/>}

    </div>
}
import globals from '../../globals.module.scss'
import gallery from '../../../public/Gallery.png'
import circle from '../../../public/circle.png'
import Image from "next/image";
import compStyles from "@/widgets/gallery/gallery.module.scss";
import vector from '../../../public/Vector7.png'
import pic1 from '../../../public/gallery/1.jpg'
import pic2 from '../../../public/gallery/2.jpg'
import pic3 from '../../../public/gallery/3.jpg'
import pic4 from '../../../public/gallery/4.jpg'
import pic5 from '../../../public/gallery/5.jpg'
import pic6 from '../../../public/gallery/pic1.png'
import React, {useRef} from "react";
import {SliderG} from "@/widgets/gallery/SliderG";
import classNames from "classnames";
import {texts} from "@/texts";

export const Gallery = () => {
    const [fs, setFs] = React.useState(false)
    const anchorTo = () => {
        const name = 'gallery'
        const doc = document.getElementById(name)
        if (doc) {
            const yy = doc.offsetTop
            window.scrollTo({top: yy, behavior: 'smooth'})
        }
    }
    const handleClickOutside = (event: any) => {

        const name = event.target.dataset.name
        if (!name) {
            setFs(false);
        }
    }
    //     if (name.includes('pic') || event.target.dataset.name === 'left' || event.target.dataset.name === 'right') {
    //     } else {
    //         setFs(false);
    //         console.log("Clicked outside!");
    //     }
    // };
    React.useEffect(() => {
        if (fs) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [fs]);
    const toggleFs = () => {
        anchorTo()
        setFs(true)
    }
    return <div id="gallery" className={classNames(globals.contentBlock, compStyles.topM)}>
        <h1 style={{fontSize: '60px'}} className={compStyles.spaceF}>ГАЛеРея</h1>
        <Image src={vector} alt={'vector'}/>
        <h1 style={{fontSize: '50px'}} className={compStyles.spaceF}><span
            style={{color: '#F05018'}}>ОСТОРОжНО</span> ФОТО С ИГР</h1>
        <div className={compStyles.galRowUp}>
            <div className={compStyles.vertOr}>verTiGO</div>
            <Image onClick={toggleFs} className={classNames(compStyles.pic,compStyles.pic40)} src={pic3} alt={'pic'}/>
            <Image onClick={toggleFs} className={classNames(compStyles.pic,compStyles.pic20)} src={pic2} alt={'pic'}/>
            <Image onClick={toggleFs} className={classNames(compStyles.pic,compStyles.pic20)} src={pic1} alt={'pic'}/>
        </div>
        <div className={compStyles.galRowDown}>
            <Image onClick={toggleFs} className={classNames(compStyles.pic,compStyles.pic20)} src={pic4} alt={'pic'}/>
            <Image onClick={toggleFs} className={classNames(compStyles.pic,compStyles.pic20)} src={pic5} alt={'pic'}/>
            <Image onClick={toggleFs} className={classNames(compStyles.pic,compStyles.pic40)} src={pic6} alt={'pic'}/>
            <div className={compStyles.vertPur}>verTiGO</div>
        </div>
        <Image className={compStyles.circle} src={circle} alt={'logo'}/>
        <h1 style={{fontSize: '50px',marginBottom:'100px'}} className={compStyles.spaceF}>ПОВЫШАЮТ <span
            style={{color: '#685BC7'}}>АДРеНАЛИН</span> В кРОВИ
        </h1>
        {fs && <div className={compStyles.fs}>
            <SliderG/>
        </div>}
    </div>
}
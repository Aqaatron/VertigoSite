import globals from '../../../globals.module.scss'
import compStyles from './sertificateM.module.scss'
import Image from "next/image";
import pad from '../../../../public/orPadClear.png'
import leftImg from './Sertificat.png'
import pic1 from './icon_1.png'
import pic2 from './icon_2.png'
import pic3 from './icon_3.png'
import slide1 from './Slide1.png'
import classNames from "classnames";

export const SertificateM = ({showP}: { showP: Function }) => {
    const show = () => {
        showP(true)
    }
    return <div id={'sert'} className={globals.contentBlock}>
        <div className={compStyles.content}>
            <h1 className={compStyles.title}>Подарочный
                сертификат</h1>
            <div className={globals.flexContRow}>
                <Image src={pic1} alt={'pic'} className={compStyles.picEl}/>
                <Image src={pic2} alt={'pic'} className={compStyles.picEl}/>
                <Image src={pic3} alt={'pic'} className={compStyles.picEl}/>
            </div>
            <Image src={slide1} alt={'pic'} style={{margin: '20px'}}/>
            <div className={compStyles.gradientBorder} onClick={show}>
                <div className={compStyles.Btn} onClick={show}>Связаться со мной</div>
            </div>

        </div>
        {/*<Image className={compStyles.pad} src={pad} alt={'pad'}/>*/}
    </div>
}
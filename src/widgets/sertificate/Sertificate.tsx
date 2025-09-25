import globals from '../../globals.module.scss'
import compStyles from './sertificate.module.scss'
import Image from "next/image";
import pad from '../../../public/orPadClear.png'
import leftImg from './Sertificat.png'
import pic1 from './icon_1.png'
import pic2 from './icon_2.png'
import pic3 from './icon_3.png'
import slide1 from './Slide1.png'
import classNames from "classnames";

export const Sertificate = ({showP}: { showP: Function }) => {
    const show = () => {
        showP()
    }
    return <div id={'sert'} className={globals.contentBlock}>
        <div className={compStyles.content}>
            <h1 style={{fontSize: '60px'}} className={compStyles.spaceF}>Подарочные
                сертификаты</h1>
            <div className={compStyles.flexContRow}>
                <div className={compStyles.contentLeft}>
                    <div className={classNames(globals.flexContColumn, compStyles.leftUp)}>
                        <div className={compStyles.spaceF}
                             style={{margin: '30px 0', fontSize: '40px', width: '80%', textAlign: 'center'}}> Подарок
                            для себя и близких
                        </div>
                        <div className={globals.flexContRow}>
                            <Image src={pic1} alt={'pic'} className={compStyles.picEl}/>
                            <Image src={pic2} alt={'pic'} className={compStyles.picEl}/>
                            <Image src={pic3} alt={'pic'} className={compStyles.picEl}/>
                        </div>
                    </div>
                    <div className={classNames(globals.flexContColumn, compStyles.leftDown)}>
                        <Image src={slide1} alt={'pic'} style={{margin: '20px'}}/>
                    </div>
                </div>
                <div className={compStyles.contentRight}>
                    <h1 style={{fontSize: '40px', fontWeight: 'normal', width: '380px', marginTop: '0'}}
                        className={compStyles.spaceF}>Дарите близким
                        впечатления с
                        подарочными сертификатами <span style={{color: '#F05018'}}>v</span>erTiGO
                    </h1>
                    <div className={compStyles.gradientBorder} onClick={show}>
                        <div className={compStyles.Btn} onClick={show}>Связаться со мной</div>
                    </div>
                </div>
            </div>
        </div>
        <Image className={compStyles.pad} src={pad} alt={'pad'}/>
    </div>
}
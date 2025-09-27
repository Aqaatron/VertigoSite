import globals from '../../../globals.module.scss'
import padd from '../../../../public/orPadClear.png'
import Image from "next/image";
import compStyles from "@/widgets/mobile/eventsM/eventsM.module.scss";
import bday from "../../../../public/photos/bday.jpg";
import corp from "../../../../public/photos/corp.jpg"
import React from "react";
import classNames from "classnames";
import icons from './icon.png'
import map from "../../../../public/events/mapp.png"
import pistol from "@/widgets/events/pistol.png";
import people from "../../../../public/events/peopls.png";
import ps from "../../../../public/events/PS5.png";
import pizza from "../../../../public/events/lauge.png";

const textsBday = {
    name: 'bday',
    title: 'День Рождения',
    body: 'Отпразднуйте День рождения ярко и необычно! Настоящая атмосфера веселья для компании друзей и незабываемые эмоции для именинника!'
}
const textsCorp = {
    name: 'corp',
    title: 'корпоратив',
    body: 'Проведите незабываемый корпоратив с захватывающими сражениями! Проверенный способ прокачать командный дух и подарить коллегам эмоции, о которых будут вспоминать ещё долго.'
}
export const EventsM = ({showP}: { showP: Function }) => {


    const [content, setContent] = React.useState('bday')
    const changeEvent = (event: any) => {
        setContent(event.target.dataset.name)
    }
    const show = () => {
        showP(true)
    }
    return <div id={'events'} className={globals.contentBlock} style={{minHeight: '700px', backgroundColor: '#F05018'}}>
        {/*<Image className={compStyles.pad} src={padd} alt={'logo'}/>*/}
        <div style={{
            marginTop: '20px',
            zIndex: '20',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
            , justifyContent: 'space-around',
            width: '100%'
        }}>
            <Image onClick={changeEvent} data-name='bday'
                   className={content === 'bday' ? compStyles.photoCard : compStyles.photoCardGray} src={bday}
                   alt={'logo'}/>
            <Image onClick={changeEvent} data-name='corp'
                   className={classNames(compStyles.photoCard, content !== 'bday' ? compStyles.photoCard : compStyles.photoCardGray)}
                   src={corp}
                   alt={'logo'}/>
        </div>
        <div className={compStyles.contentWrapper}>
            <h1 className={compStyles.title}>{content === 'bday' ? textsBday.title : textsCorp.title}</h1>
            <h2 className={compStyles.text}>
                {content === 'bday' ? textsBday.body : textsCorp.body}
            </h2>
        </div>
        <div className={compStyles.icons}>
            <Image src={map} alt={'map'} className={compStyles.ico}/>
            <div className={compStyles.icoTextShort}>Арена</div>
            <Image src={people} alt={'people'} className={compStyles.ico}/>
            <div className={compStyles.icoTextLong}>2-20 игроков</div>
        </div>
        <div className={compStyles.icons}><Image src={ps} alt={'pistol'} className={compStyles.ico}/>
            <div className={compStyles.icoTextShort}>PS5</div>
            <Image src={pizza} alt={'pizza'} className={compStyles.ico}/>
            <div className={compStyles.icoTextLong}>Lounge зона</div>
        </div>
        <div className={compStyles.gradientBorder}>
            <div className={compStyles.cardContent} onClick={show}>Связаться со мной</div>
        </div>
    </div>
}
import globals from '../../globals.module.scss'
import padd from '../../../public/orPadClean.png'
import Image from "next/image";
import compStyles from "@/widgets/events/events.module.scss";
import bday from "../../../public/photos/bday.jpg";
import corp from "../../../public/photos/corp.jpg"
import map from "../../../public/events/mapp.png"
import ps from "../../../public/events/PS5.png"
import people from "../../../public/events/peopls.png"
import pizza from "../../../public/events/lauge.png"
import React from "react";
import robot from '../../../public/robot.png'
import classNames from "classnames";
import circle from "../../../public/circle.png";

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
export const Events = ({showP}: { showP: Function }) => {

    const changeEvent = (event: any) => {
        setContent(event.target.dataset.name)
    }
    const show = () => {
        showP()
    }
    const [content, setContent] = React.useState('bday')
    return <div id={'events'} className={classNames(globals.contentBlock, compStyles.block)}>
        <Image className={compStyles.pad} src={padd} alt={'logo'}/>
        <Image className={compStyles.robot} src={robot} alt={'robot'}/>
        <Image className={compStyles.circle} src={circle} alt={'logo'}/>
        <div className={compStyles.content}>
            <div className={compStyles.eventPad}>
                <Image onClick={changeEvent} data-name='bday' className={compStyles.photoCard} src={bday} alt={'logo'}/>
                <h1 className={compStyles.title}>{textsBday.title}</h1>
                <h2 className={compStyles.textB}>{textsBday.body}</h2>
                <div className={compStyles.icons}>
                    <Image src={map} alt={'map'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextShort}>Арена</div>
                    <Image src={people} alt={'pistol'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextLong}>16 игроков</div>
                </div>
                <div className={compStyles.icons}>
                    <Image src={ps} alt={'pistol'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextShort}>PS5</div>
                    <Image src={pizza} alt={'pistol'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextLong}>Лаундж</div>
                </div>
                <div className={compStyles.gradientBorder}>
                    <div className={compStyles.cardContent} onClick={show}>Связаться со мной</div>
                </div>
            </div>
            <div className={compStyles.eventPad}>
                <Image onClick={changeEvent} data-name='corp'
                       className={compStyles.photoCard} src={corp}
                       alt={'logo'}/>
                <h1 className={compStyles.title}>{textsCorp.title}</h1>
                <h2 className={compStyles.textB}>{textsCorp.body}
                </h2>
                <div className={compStyles.icons}>
                    <Image src={map} alt={'map'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextShort}>Арена</div>
                    <Image src={people} alt={'pistol'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextLong}>16 игроков</div>
                </div>
                <div className={compStyles.icons}>
                    <Image src={ps} alt={'pistol'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextShort}>PS5</div>
                    <Image src={pizza} alt={'pistol'} className={compStyles.ico}/>
                    <div className={compStyles.icoTextLong}>Лаундж</div>
                </div>
                <div className={compStyles.gradientBorder}>
                    <div className={compStyles.cardContent} onClick={show}>Связаться со мной</div>
                </div>
            </div>
        </div>

    </div>
}
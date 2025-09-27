import compStyles from './faq.module.scss'
import Image from "next/image";
import triangle from '../../../public/triangle.png'
import React from "react";
import {toUpperCase} from "uri-js/dist/esnext/util";
import eclipse from "../../../public/Ellipse.png";

export const QuestionElement = ({data}: { data: any }) => {
    const [active, setActive] = React.useState(false)
    const changeActive = () => {
        setActive(!active)
    }
    React.useEffect(() => {
        const el = document.getElementById('evTitle')
        if (el) {
            if (active) {
                console.log('fire');
                el.style.setProperty('--circle-bg', 'white')
            } else {
                console.log('fire');
                el.style.setProperty('--circle-bg', 'transparent')
            }
        }

    }, [active])
    return <div onClick={changeActive} className={compStyles.questionEl}>
        <div onClick={changeActive} className={compStyles.headLine}>
            <h1 id={'evTitle'} className={compStyles.qTitle}>{toUpperCase(data.title)}</h1>
            <Image onClick={changeActive} src={triangle} alt={'triangle'}
                   className={!active ? compStyles.triangleOpened : compStyles.triangleClosed}/></div>
        <div className={active ? compStyles.bodyTextOpened : compStyles.bodyTextClosed}>{data.body}</div>
    </div>
}
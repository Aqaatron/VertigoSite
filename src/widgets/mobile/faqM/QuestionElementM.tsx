import compStyles from './faqM.module.scss'
import Image from "next/image";
import triangle from '../../../../public/triangle.png'
import React from "react";
import eclipse from '../../../../public/Ellipse.png'

export const QuestionElementM = ({data}: { data: any }) => {
    const [active, setActive] = React.useState(false)
    const changeActive = () => {
        setActive(!active)
    }
    return <div onClick={changeActive} className={compStyles.questionEl}>
        <div onClick={changeActive} className={compStyles.headLine}>
            <Image src={eclipse} alt={'eclipse'} className={compStyles.eclipse}/>
            <h1 className={compStyles.elTitle}>{data.title}</h1>
            <Image onClick={changeActive} src={triangle} alt={'triangle'}
                   className={!active ? compStyles.triangleOpened : compStyles.triangleClosed}/></div>
        <div className={active ? compStyles.bodyTextOpened : compStyles.bodyTextClosed}>{data.body}</div>
    </div>
}
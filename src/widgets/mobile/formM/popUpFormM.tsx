import globals from '../../../globals.module.scss'
import compStyles from './formM.module.scss'
import Image from "next/image";
import vertigo from "../../../../public/Title.png";
import line from '../../../../public/lineHeader.png'
import classNames from "classnames";
import React from "react";

export const PopUpFormM = () => {
    const [open, setOpen] = React.useState(true)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [agreed, setAgreed] = React.useState(false)
    const [canSend, setCanSend] = React.useState(false)
    const [sended, setSended] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)
    const [phoneVal, setPhoneVal] = React.useState('compStyles.valFail')

    const handleInput = (event: any) => {
        switch (event.target.dataset.name) {
            case 'name':
                setName(event.target.value)
                break
            case 'phone':
                setPhone(event.target.value)
                break
            case 'comment':
                setComment(event.target.value)
                break
        }
    }
    const handleAgreed = () => {
        setAgreed(!agreed)
    }

    const sendMessage = async () => {
        const body = ` ФИО - ${name}\n Тел - ${phone}\n Комментарий - ${comment}`

        if (canSend) {
            // //ym(104030838, 'reachGoal', 'fos');
            // if (typeof window !== "undefined" && typeof (window as any).ym === "function") {
            //     (window as any).ym(104030838, "reachGoal", "button_click");
            // }
            // await fetch(`https://api.telegram.org/bot8486915093:AAE9-gQFLsKbydaA-dZPn-O4OWu-pMKc8AA/sendMessage`, {
            //     method: "POST",
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify({
            //         chat_id: '-1003055161566',
            //         text: body,
            //         parse_mode: "Markdown"
            //     })
            // });
            // await fetch('/api/sendForm', {
            //     method: "POST",
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify(
            //         {
            //             "name": name,
            //             "phone": phone,
            //             "comment": comment
            //         })
            // })
            setSended(true)
            setTimeout(() => close(), 2000)
        }
    }

    React.useEffect(() => {
        if (name && phone && phone.length === 11 && agreed) {
            setCanSend(true)
        } else {
            setCanSend(false)
        }
    }, [name, phone, agreed])
    return <div className={classNames(globals.flexContColumn, compStyles.formPad)}>
        {/*<Image src={circleInside} alt={'pad'} className={compStyles.padPopUp}/>*/}

        <div className={compStyles.content}>
            <Image src={line} alt={'line'} className={compStyles.invertLine} style={{height: '20px'}}/>
            <Image className={compStyles.logoImg} src={vertigo} alt={'logo'}/>
            <Image src={line} alt={'line'} className={compStyles.line}/>
            <div className={globals.flexContColumn}>
                <div className={globals.flexContColumn} style={{marginRight: '20px', marginTop: '40px'}}>
                    <input onChange={handleInput} value={name} data-name={'name'} className={compStyles.formInp}
                           placeholder={'Имя'}/>
                    <input onChange={handleInput} value={phone} data-name={'phone'} className={compStyles.formInp}
                           placeholder={'Номер телефона'}/>
                    <input onChange={handleInput} value={comment} data-name={'comment'}
                           className={compStyles.formInpTall}
                           placeholder={'Комментарий'}/>
                    <div className={globals.flexContRow} style={{width: '100%', margin: '20px 0 20px 60px'}}>
                        <input onChange={handleAgreed} type={'checkbox'} style={{margin: '10px 10px 10px 0'}}/>
                        <div style={{width: '80%', fontSize: '12px'}}> Я согласен на обработку персональных данных в
                            соответствии с
                            Политикой конфиденциальности,
                            а также с условиями Пользовательского соглашения.
                        </div>
                    </div>
                    <div className={compStyles.gradientBorder}>
                        <div className={compStyles.cardContent} onClick={sendMessage}> СВЯЖИТЕСЬ СО МНОЙ</div>
                    </div>
                </div>
                <div className={compStyles.formText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>

    </div>
}
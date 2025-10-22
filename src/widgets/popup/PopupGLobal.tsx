import globals from '../../globals.module.scss'
import compStyles from './popupGlobal.module.scss'
import classNames from "classnames";
import React, {useEffect} from "react";

export const PopUpGlobal = ({closeMe}: { closeMe: Function }) => {
    const [open, setOpen] = React.useState(true)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [agreed, setAgreed] = React.useState(false)
    const [canSend, setCanSend] = React.useState(false)
    const [sended, setSended] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)
    const [phoneVal, setPhoneVal] = React.useState('compStyles.valFail')
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
        //window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true)
    }, []);
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    React.useEffect(() => {
        if (name && phone && phone.length === 11 && agreed) {
            setCanSend(true)
        } else {
            setCanSend(false)
        }
    }, [name, phone, agreed])
    const handleInput = (event: any) => {
        //console.log(event.target.dataset.name)
        //console.log(event.target.value)
        switch (event.target.dataset.name) {
            case 'name':
                setName(event.target.value)
                break
            case 'phone':
                if (/^[0-9 ]*$/.test(event.target.value)) {
                    setPhone(event.target.value)
                }
                break
            case
            'comment'
            :
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
            //ym(104030838, 'reachGoal', 'fos');
            if (typeof window !== "undefined" && typeof (window as any).ym === "function") {
                (window as any).ym(104030838, "reachGoal", "button_click");
            }
            await fetch(`https://api.telegram.org/bot8486915093:AAE9-gQFLsKbydaA-dZPn-O4OWu-pMKc8AA/sendMessage`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    chat_id: '-1003055161566',
                    text: body,
                    parse_mode: "Markdown"
                })
            });
            await fetch('/api/sendForm', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    {
                        "name": name,
                        "phone": phone,
                        "comment": comment
                    })
            })
            setSended(true)
            setTimeout(() => close(), 2000)
        }
    }
    const close = () => {
        closeMe()
    }
    useEffect(() => {
        if (phone.length !== 11) {
            setPhoneVal('valFail')
        } else {
            setPhoneVal('valOk')
        }
    }, [phone]);

    return <div id={'popup'} className={classNames(globals.flexContColumn, compStyles.formPad)}>
        {/*<Image src={circleInside} alt={'pad'} className={compStyles.padPopUp}/>*/}
        {!sended && <div className={compStyles.content}>
                <div onClick={close} className={compStyles.closeMe}>
                    <div onClick={() => setOpen(!open)}
                         className={compStyles.burger}>
        <span
            className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
            }`}
        />
                        <span
                            className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${
                                open ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${
                                open ? "-rotate-45 -translate-y-[10px]" : ""
                            }`}
                        />
                    </div>
                </div>

                <h1 className={compStyles.title}>Как с Вами связаться?</h1>
                <div className={globals.flexContColumn}>
                    <div className={globals.flexContColumn}>
                        <input onChange={handleInput} value={name} data-name={'name'} className={compStyles.formInp}
                               placeholder={'Имя'}/>
                        <input onChange={handleInput} value={phone} data-name={'phone'}
                               className={classNames(compStyles[phoneVal], compStyles.formInp)}
                               placeholder={'Номер телефона'}/>
                        <input onChange={handleInput} value={comment} data-name={'comment'}
                               className={compStyles.formInpTall}
                               placeholder={'Комментарий'}/>
                        <div className={classNames(globals.flexContRow, compStyles.agreedBox)}>
                            <input onChange={handleAgreed} type={'checkbox'} style={{margin: '10px 10px 10px 0'}}/>
                            <div className={compStyles.argeed}> Я согласен на обработку персональных данных в
                                соответствии с
                                Политикой конфиденциальности,
                                а также с условиями Пользовательского соглашения.
                            </div>
                        </div>
                        <div className={compStyles.gradientBorder}>
                            {canSend &&
                                <div className={compStyles.cardContent} onClick={sendMessage}> СВЯЖИТЕСЬ СО МНОЙ</div> ||
                                <div className={compStyles.cardContentDis} onClick={sendMessage}> СВЯЖИТЕСЬ СО МНОЙ</div>}
                        </div>
                    </div>

                </div>
            </div> ||
            <div className={compStyles.done}>
                <h1 className={compStyles.spaceF}>СПАСИБО!</h1>
                <div className={compStyles.spaceF}> Мы скоро свяжемся с Вами</div>
            </div>}

    </div>
}
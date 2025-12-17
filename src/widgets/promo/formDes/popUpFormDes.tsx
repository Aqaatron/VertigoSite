import globals from '../../../globals.module.scss'
import compStyles from './formDes.module.scss'
import Image from "next/image";
import vertigo from "../../../public/Title.png";
import line from '../../../../public/lineHeader.png'
import classNames from "classnames";
import React, {useEffect} from "react";
import promoStyles from "@/widgets/promo/promoCommon.module.scss";
import {texts} from "@/texts";
import Link from "next/link";

export const PopUpFormDes = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [date, setDate] = React.useState('')
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [agreed, setAgreed] = React.useState(false)
    const [canSend, setCanSend] = React.useState(false)
    const [sended, setSended] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [peopleCount, setPeopleCount] = React.useState(0)

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
    }, []);

    React.useEffect(() => {
        if (name && phone && phone.length === 11 && agreed) {
            setCanSend(true)
        } else {
            setCanSend(false)
        }
        if (phone.length !== 11) {
            setError(true)
        } else {
            setError(false)
        }
    }, [name, phone, agreed])
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
            case 'peopleCount':
                setPeopleCount(event.target.value)
                break

        }
    }
    const handleAgreed = () => {
        setAgreed(!agreed)
    }
    const sendMessage = async () => {
        const body = ` ФИО - ${name}\n Тел - ${phone}\n Комментарий - ${comment}+ \n Дата - ${date}`
        if (canSend) {
            //ym(104030838, 'reachGoal', 'fos');
            if (typeof window !== "undefined" && typeof (window as any).ym === "function") {
                (window as any).ym(104030838, "reachGoal", "fos");
                console.log('goal reached')
            }
            await fetch(`https://api.telegram.org/bot8341433626:AAFLFWm2ExJH3RuHfgVQ3QbPTCye9RSo-xU/sendMessage`, {
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
                        "comment": `${comment} Date: ${date} People: ${peopleCount} `
                    })
            })
            setSended(true)
            setCanSend(false)
            setTimeout(() => {
                const mydate = document.getElementById('date') as HTMLInputElement
                if (mydate) {
                    mydate.value = ''
                }
                const myname = document.getElementById('name') as HTMLInputElement
                if (myname) {
                    myname.value = ''
                }
                const myphone = document.getElementById('phone') as HTMLInputElement
                if (myphone) {
                    myphone.value = ''
                }
                const mycomment = document.getElementById('comment') as HTMLInputElement
                if (mycomment) {
                    mycomment.value = ''
                }
                const mypeople = document.getElementById('people') as HTMLInputElement
                if (mypeople) {
                    mypeople.value = ''
                }
                setSended(false)
                setName('')
                setPhone('')
                setComment('')
            }, 2000)
        }
    }
    const handleDate = (event: any) => {
        setDate(event.target.value)
        const doc = document.getElementById('date')
        if (doc) {
            doc.style.setProperty("--before-color", "transparent")
        }
    }

    return <div className={classNames(globals.flexContColumn, compStyles.formPad)}>
        {/*<Image src={circleInside} alt={'pad'} className={compStyles.padPopUp}/>*/}
        <div className={compStyles.content}>
            <Image src={line} alt={'line'} className={compStyles.invertLine} style={{height: '20px'}}/>
            <h1 className={compStyles.title}>{texts.promo.form.title}</h1>
            <Image src={line} alt={'line'} className={compStyles.line} style={{height: '20px'}}/>
            <div className={globals.flexContColumn} style={{marginTop: '40px'}}>
                <input id={'name'} data-name={'name'} onChange={handleInput} className={compStyles.formInp}
                       placeholder={'Ваше Имя'}/>
                <input id={'phone'} data-name={'phone'} onChange={handleInput} className={compStyles.formInp}
                       placeholder={'Номер телефона 7 ХХХ ХХХ ХХ ХХ'}/>
                <input id={'date'} data-name={'date'} onChange={handleDate}
                       className={classNames(compStyles.inp, compStyles.formInp)} type={"date"}
                />
                <input id={'people'} data-name={'peopleCount'} className={compStyles.formInp} onChange={handleInput}
                       placeholder={'Количество детей и взрослых:'}/>
                <input id={'comment'} data-name={'comment'} onChange={handleInput} className={compStyles.formInpTall}
                       placeholder={'Дополнительные пожелания:'}/>
                <div className={compStyles.contt}>
                    <input onChange={handleAgreed} type={'checkbox'}
                           style={{margin: '10px 10px 10px 0', width: '30px', height: '30px'}}/>
                    <div className={compStyles.personal}> Я согласен на обработку моих персональных данных
                    </div>
                </div>
                <div className={compStyles.gradientBorder}>
                    {canSend && <div className={compStyles.cardContent} style={{fontSize: '18px'}}
                                     onClick={sendMessage}> Получить индивидуальный расчет и
                            забронировать
                        </div> ||
                        <div className={compStyles.cardContent} style={{fontSize: '18px', backgroundColor: 'gray'}}
                             onClick={sendMessage}> Получить индивидуальный расчет и
                            забронировать
                        </div>}
                </div>
            </div>
            <h3 className={compStyles.aftbtn}>Предпочитаете общаться
                голосом? <Link href={'tel:8 902 710 02 10'}><span
                    style={{
                        textDecoration: 'underline',
                        color: 'white'
                    }}>Позвоните нам по номеру 8 902 710 02 10!</span></Link></h3>
        </div>
        {sended && <div className={compStyles.done}>
            <h1>СПАСИБО!</h1>
            <div> Мы скоро свяжемся с Вами</div>
        </div>}
        {error && <div className={compStyles.done}>
            <div> Заполните номер телефона в нужном формате</div>
        </div>}
    </div>
}
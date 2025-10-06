import globals from "@/globals.module.scss";
import compStyles from './promoForm.module.scss'
import promoStyles from '../promoCommon.module.scss'
import {texts} from "@/texts";
import React, {useEffect} from "react";
import {pack} from "@/pages/promo";

export const PromoForm = () => {
    const packk = React.useContext(pack)
    console.log(packk, 'packk')
    const [open, setOpen] = React.useState(true)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [agreed, setAgreed] = React.useState(false)
    const [canSend, setCanSend] = React.useState(false)
    const [sended, setSended] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)
    const [phoneVal, setPhoneVal] = React.useState('compStyles.valFail')

    React.useEffect(() => {
        if (name && phone && phone.length === 11 && agreed) {
            setCanSend(true)
        } else {
            setCanSend(false)
        }
    }, [name, phone, agreed])
    const handleInput = (event: any) => {
        console.log(event.target.dataset.name)
        console.log(event.target.value)
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
    useEffect(() => {
        if (phone.length !== 11) {
            setPhoneVal('valFail')
        } else {
            setPhoneVal('valOk')
        }
    }, [phone]);

    return <div className={globals.contentBlock} style={{backgroundColor: '#333333'}}>
        <h1 className={promoStyles.title}>{texts.promo.form.title}</h1>
        <h2 className={promoStyles.subtitle}>{texts.promo.form.subtitle}</h2>
        <h2 className={promoStyles.subtitle}>{texts.promo.form.ads}</h2>
        <div className={compStyles.form}>
            <div className={compStyles.field}>Ваше имя:</div>
            <input data-name={'name'} className={compStyles.inp} placeholder={'Иван Иванов'}/>
            <div className={compStyles.field}>Номер телефона:</div>
            <input data-name={'phone'} className={compStyles.inp} placeholder={'+7 (ХХХ) ХХХ ХХ ХХ'}/>
            <div className={compStyles.field}>Желаемая дата праздника:</div>
            <input data-name={'date'} className={compStyles.inp} type={"date"} placeholder={'Иван Иванов'}/>
            <div className={compStyles.field}>Количество человек (детей и взрослых):</div>
            <input data-name={'peopleCount'} className={compStyles.inp}
                   placeholder={'Например: 4 взрослых и 10 детей'}/>
            <div className={compStyles.field}>Дополнительные пожелания:</div>
            <input data-name={'comment'} className={compStyles.inp}
                   placeholder={'Например: интересует VIP-прадзник, хотим заказать пиццу'}/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <input onChange={() => setAgreed(!agreed)} type={"checkbox"}/>
                <div className={compStyles.field}>Я согласен на обработку моих персональных данных</div>
            </div>
            <div className={globals.gradientBorder} style={{width:'100%'}}>
                <div className={globals.cardContent}> Получить индивидуальный расчет и забронировать</div>
            </div>
        </div>
        {sended && <div className={compStyles.done}>
            <h1>СПАСИБО!</h1>
            <div> Мы скоро свяжемся с Вами</div>
        </div>}
    </div>
}
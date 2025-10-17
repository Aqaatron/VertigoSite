import globals from '../../../globals.module.scss'
import compStyles from './formDes.module.scss'
import Image from "next/image";
import vertigo from "../../../public/Title.png";
import line from '../../../../public/lineHeader.png'
import classNames from "classnames";
import React, {useEffect} from "react";
import promoStyles from "@/widgets/promo/promoCommon.module.scss";
import {texts} from "@/texts";

export const PopUpFormDes = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
        setIsMobile(mobile);
        //window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true)
    }, []);

    const [date, setDate] = React.useState(undefined)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [comment, setComment] = React.useState('')
    const [argeed, setAgreed] = React.useState(false)

    const handleInput = (event: any) => {
        console.log(event.target.dataset.name)
        console.log(event.target.value)
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
        setAgreed(!argeed)
    }
    const getChatId = async () => {
        try {
            const res = await fetch(`https://api.telegram.org/bot8486915093:AAE9-gQFLsKbydaA-dZPn-O4OWu-pMKc8AA/getUpdates`);
            const data = await res.json();
            if (!data.ok) {
                console.error("Error:", data);
                return;
            }
            if (data.result.length === 0) {
                console.log("No messages found. Send a message to your bot first!");
                return;
            }
            // Берём chat.id последнего сообщения
            const chatId = data.result[data.result.length - 1].message.chat.id;
            //console.log("Your chat ID is:", chatId);
        } catch (err) {
            //console.error("Fetch error:", err);
        }
    }
    const sendMessage = async () => {
        const body = ` ФИО - ${name}\n Тел - ${phone}\n Комментарий - ${comment}`
        if (argeed) {
            await fetch(`https://api.telegram.org/bot8486915093:AAE9-gQFLsKbydaA-dZPn-O4OWu-pMKc8AA/sendMessage`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    chat_id: '-1003055161566',
                    text: body,
                    parse_mode: "Markdown"
                })
            });
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
            <h1 className={promoStyles.title} style={{margin: '0 0 20px 0'}}>{texts.promo.form.title}</h1>
            <Image src={line} alt={'line'} className={compStyles.line} style={{height: '20px'}}/>
            <div className={globals.flexContRow}>
                <div className={globals.flexContColumn} style={{marginTop: '40px'}}>
                    <input onChange={handleInput} className={compStyles.formInp} placeholder={'Ваше Имя'}/>
                    <input onChange={handleInput} className={compStyles.formInp}
                           placeholder={'Номер телефона +7 (ХХХ) ХХХ ХХ ХХ'}/>
                    <input id={'date'} data-name={'date'} onChange={handleDate}
                           className={classNames(compStyles.inp, compStyles.formInp)} type={"date"}
                    />
                    <input data-name={'peopleCount'} className={compStyles.formInp}
                           placeholder={'Количество детей и взрослых:'}/>
                    <input onChange={handleInput} className={compStyles.formInpTall}
                           placeholder={'Дополнительные пожелания:'}/>
                    <div className={compStyles.contt}>
                        <input onChange={handleAgreed} type={'checkbox'} style={{margin: '10px 10px 10px 0'}}/>
                        <div className={compStyles.personal}> Я согласен на обработку персональных данных
                        </div>
                    </div>
                    <div className={compStyles.gradientBorder}>
                        <div className={compStyles.cardContent} style={{fontSize: '18px'}}
                             onClick={sendMessage}> Получить индивидуальный расчет и
                            забронировать
                        </div>
                    </div>
                </div>
                {/*<div className={compStyles.formText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                {/*    eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur*/}
                {/*    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod*/}
                {/*    tempor incididunt ut labore et dolore magna aliqua.*/}
                {/*</div>*/}
            </div>
        </div>
    </div>
}
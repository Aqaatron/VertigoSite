import globals from '../../globals.module.scss'
import compStyles from './form.module.scss'
import Image from "next/image";
import vertigo from "../../../public/Title.png";
import line from '../../../public/lineHeader.png'
import classNames from "classnames";
import React from "react";

export const PopUpForm = () => {
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
            console.log("Your chat ID is:", chatId);
        } catch (err) {
            console.error("Fetch error:", err);
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
    return <div className={classNames(globals.flexContColumn, compStyles.formPad)}>
        {/*<Image src={circleInside} alt={'pad'} className={compStyles.padPopUp}/>*/}
        <div className={compStyles.content}>
            <Image src={line} alt={'line'} className={compStyles.invertLine} style={{height: '20px'}}/>
            <Image className={compStyles.logoImg} src={vertigo} alt={'logo'}/>
            <Image src={line} alt={'line'} style={{height: '20px'}}/>
            <div className={globals.flexContRow}>
                <div className={globals.flexContColumn} style={{marginRight: '40px', marginTop: '40px'}}>
                    <input onChange={handleInput} className={compStyles.formInp} placeholder={'Имя'}/>
                    <input onChange={handleInput} className={compStyles.formInp} placeholder={'Номер телефона'}/>
                    <input onChange={handleInput} className={compStyles.formInpTall} placeholder={'Комментарий'}/>
                    <div className={globals.flexContRow} style={{width: '500px', margin: '20px 0'}}>
                        <input onChange={handleAgreed} type={'checkbox'} style={{margin: '10px 10px 10px 0'}}/>
                        <div> Я согласен на обработку персональных данных в соответствии с
                            Политикой конфиденциальности,
                            а также с условиями Пользовательского соглашения.
                        </div>
                    </div>
                    <div className={compStyles.gradientBorder}>
                        <div className={compStyles.cardContent} onClick={sendMessage}> СВЯЖИТЕСЬ СО МНОЙ</div>
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
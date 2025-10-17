import globals from '../../../globals.module.scss'
import line from '../../../../public/Vector7.png'
import Image from "next/image";
import compStyles from './faqMtwo.module.scss'
import {QuestionElementM} from "@/widgets/mobile/faqM/QuestionElementM";
import {texts} from "@/texts";

const questions = texts.promo.faq
import {anchorTo} from "@/helpers/helpers";

export const FaqMtwo = () => {

    return <div id={'faq'} className={globals.contentBlock} style={{marginTop: '20px'}}>
        <h1 className={compStyles.spaceF}>FAQ - часто
            задаваемые
            вопросы</h1>
        <Image src={line} alt={'line'} className={compStyles.line}/>
        {questions.map((question) => <QuestionElementM key={question.title} data={question}/>)}
        <Image src={line} alt={'line'} className={compStyles.line}/>
        <div className={compStyles.Btn} onClick={() => anchorTo('form')}>Связаться со мной</div>
    </div>
}
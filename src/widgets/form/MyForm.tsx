import globals from '../../globals.module.scss'
import compStyles from './form.module.scss'
import Image from "next/image";
import circle from '../../../public/circleTransparent.png'
import {PopUpForm} from "@/widgets/form/popUpForm";


export const MyForm = () => {

    return <div className={globals.contentBlock}>
        <Image src={circle} alt={'pad'} className={compStyles.pad}/>
        <PopUpForm/>
    </div>
}
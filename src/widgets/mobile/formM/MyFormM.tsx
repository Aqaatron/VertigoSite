import globals from '../../../globals.module.scss'
import compStyles from './formM.module.scss'
import Image from "next/image";
import circle from '../../../../public/circleTransparent.png'
import {PopUpFormM} from "@/widgets/mobile/formM/popUpFormM";


export const MyFormM = () => {

    return <div className={globals.contentBlock}>
        {/*<Image src={circle} alt={'pad'} className={compStyles.pad}/>*/}
        <PopUpFormM/>
    </div>
}
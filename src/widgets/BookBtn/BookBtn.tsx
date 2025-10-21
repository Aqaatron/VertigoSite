import {anchorTo} from "@/helpers/helpers";
import compStyles from './bookbtn.module.scss'
import classNames from "classnames";

export const BookBtn = () => {
    const slideTo = () => {
        anchorTo('form')
    }
    return <div className={classNames(compStyles.btn, compStyles.gradientBorder)} onClick={slideTo}>
        <div className={compStyles.cardContent}>Забронировать праздник</div>
    </div>
}
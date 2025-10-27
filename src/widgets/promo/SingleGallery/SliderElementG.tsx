import compStyles from './singlegallery.module.scss'

import instruction from '../../../../public/gallery/instruction2_slider.png'
import spacious_arena from '../../../../public/gallery/spacious_arena_slider.png'
import comfortable_lounge from '../../../../public/gallery/comfortable_lounge_slider.png'
import pic4 from '../../../../public/gallery/variety_of_vr_games_and_play_areas_slider.png'
import variety_of_vr_games_and_play_areas
    from '../../../../public/gallery/variety_of_vr_games_and_play_areas_slider.png'
import photos_and_videos from '../../../../public/gallery/photos_and_videos_slider.png'
import innovative_equipment from '../../../../public/gallery/innovative_equipment_slider.png'
import constant_supervision from '../../../../public/gallery/constant_supervision_slider.png'
import impeccable_hygiene from '../../../../public/gallery/impeccable_hygiene_slider.png'
import cleanliness_and_well_thought_out_space
    from '../../../../public/gallery/cleanliness_and_well_thought_out_space_slider.png'
import adults_with_children1 from '../../../../public/gallery/adults_with_children1_slider.png'
import adults_with_children3 from '../../../../public/gallery/adults_with_children1_slider.png'
import Image from "next/image";
import React, {useRef} from "react";

export const SliderElementG = ({data, onnClick}: { data: any, onnClick: Function }) => {
    const fn = () => {
        onnClick(data)
    }

    const processImg = () => {
        switch (data) {
            case 'pic1':
                return instruction
            case 'pic2':
                return spacious_arena
            case 'pic3':
                return comfortable_lounge
            case 'pic4':
                return pic4
            case 'pic5':
                return variety_of_vr_games_and_play_areas
            case 'pic6':
                return photos_and_videos
            case 'pic7':
                return innovative_equipment
            case 'pic8':
                return constant_supervision
            case 'pic9':
                return impeccable_hygiene
            case 'pic10':
                return cleanliness_and_well_thought_out_space
            case 'pic11':
                return adults_with_children1
            case 'pic12':
                return adults_with_children3
            default:
                return 'pic1'
        }
    }
    return <div data-name={data}
                className={data === '' ? compStyles.sliderElEmpty : compStyles.sliderEl}>
        {data !== '' && <Image data-name={data} onClick={fn} src={processImg()} width={900} height={550} alt={data}
                               className={compStyles.pic}/>}

    </div>
}
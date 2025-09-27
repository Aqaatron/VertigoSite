import globals from '../../../globals.module.scss'
import compStyles from './sliderM.module.scss'
import Image from "next/image";
import pad from './pPad.png'
import line from '../../../../public/Vector7.png'
import {SliderElementM} from "@/widgets/mobile/sliderM/SliderElementM";
import triangle from '../../../../public/ui/btnSlider.png'
import React, {useEffect} from "react";

const games = [
    {title: '123', src: '', body: '', active: false},
    {title: '12', src: '', body: '', active: false},
    {
        title: 'Portal Strike',
        src: 'ps',
        body: 'Portal Strike — это динамичный VR-шутер в стиле лазертага и Counter-Strike, где игроки сражаются на шести уникальных картах, двигаясь в реальном пространстве. Вас ждут захватывающие бои, продуманная статистика, выбор аватара и оружия, а также незабываемый драйв виртуальной арены!',
        index: 1,
        active: false
    },
    {
        title: 'Portal Mafia',
        src: 'pm',
        body: 'Portal Mafia — это командный VR-шутер в стиле Америки 50х, где полиция сражается с мафией на аренах «Город» и «Казино». Игроки свободно перемещаются по большим VR-площадкам, используя широкий выбор оружия и персонажей, а после раундов получают подробную статистику для улучшения тактики.',

        index: 2,
        active: true
    },
    {
        title: 'Portal Zombie',
        src: 'pz',
        body: 'Кооперативный PVE-хоррор от первого лица переносит игроков в заброшенный особняк, наполненный зомби и жуткой атмосферой с мистическими деталями. Объединяйтесь с друзьями, отражайте волны монстров, открывайте новое оружие и сражайтесь с могущественным боссом.',

        index: 3,
        active: false
    },
    {
        title: 'Portal Arcade',
        src: 'pa',
        body: 'Portal Arcade – это командный VR-шутер в стиле Counter-Strike и Fortnite, где игроки свободно перемещаются по арене и сражаются на ярких тематических картах. Игру отличают мультяшная графика, разнообразные скины и оружие, яркие красочные локации и возможность записи боёв.',

        index: 4,
        active: false
    },
    {
        title: 'Party Games',
        src: 'pg',
        body: 'Сборник казуальных игр, созданный специально для детей. Включает пять мини-игр с уникальными, но простыми механиками, детально проработанными уровнями и увлекательным, разнообразным геймплеем. Идеальный вариант для семейного досуга и празднования дней рождения!',

        index: 5,
        active: false
    },
    {
        title: 'Birthday Party',
        src: 'bp',
        body: 'Birthday Party — это яркая коллекция из трёх мини-игр с элементами шутера и аркады, где нужно лопать шарики, собирать свечи и проходить весёлые испытания. Простые правила, красочный дизайн и соревновательный драйв делают игру идеальным выбором для детских праздников и семейного досуга.',

        index: 6,
        active: false
    },
    {
        title: 'Serious Sam VR: The Last Hope',
        src: 'ss',
        body: 'Захватывающий VR-шутер, где игрок в роли Сэма Стоуна сражается с ордами инопланетян, используя оружие в обеих руках и прокачивая навыки. Игра предлагает динамичный экшен, кооперативный режим и яркий VR-опыт на разных планетах.',

        index: 7,
        active: false
    },
    {
        title: 'SUPERHOT',
        src: 'sh',
        body: 'Необычный шутер, где время движется только вместе с игроком, создавая уникальный ритмичный и тактический геймплей. В минималистичных локациях с красными врагами нужно уклоняться от пуль и использовать подручные предметы для выживания.',

        index: 8,
        active: false
    },
    {
        title: 'Job Simulator',
        src: 'js',
        body: 'Job Simulator — это забавный VR-симулятор, в котором в будущем, населенном роботами, можно примерить профессии повара, офисного сотрудника, кассира и автомеханика. Игра дарит полную свободу действий и превращает работу в веселую игру без последствий.',

        index: 9,
        active: false
    },
    {
        title: 'Beat Saber',
        src: 'bs',
        body: 'Музыкальная VR-игра, где игрок разрезает световыми мечами летящие в такт разноцветные кубы, создавая динамичный и захватывающий ритм-геймплей. Простая механика и яркие визуальные эффекты превращают каждое движение в настоящую физическую тренировку и шоу.',

        index: 10,
        active: false
    },
    {title: '321', src: '', body: '', active: false},
    {title: '231', src: '', body: '', active: false}
]
export const SliderM = () => {
    const [index, setIndex] = React.useState(2)

    // const getIdx = (idx: number) => {
    //     setIndex(idx)
    //     let scroll = 640 + 350 * (idx - 1)
    //     console.log(idx, scroll)
    //     document.getElementById('gg')?.scrollTo({
    //         left: scroll,
    //         behavior: 'smooth',
    //     })
    //     games.forEach((el, idxx) => {
    //         if (idxx === idx + 1) {
    //             el.active = true
    //         } else {
    //             el.active = false
    //         }
    //     })
    //     //console.log(document.getElementById('gg').scrollLeft)
    // }
    const getIdxPlus = (idx: number) => {
        let scroll
        setIndex(idx)
        switch (idx) {
            case 1:
                scroll = 995
                break
            case 2:
                scroll = 1330
                break

            case 3:
                scroll = 1670
                break

            case 4:
                //pz
                scroll = 2005
                break

            case 5:
                //pg
                scroll = 2355
                break

            case 6:
                //ss
                scroll = 2695
                break

            case 7:
                //sh
                scroll = 3030
                break

            case 8:
                //js
                scroll = 3375
                break
            case 9:
                //bs
                scroll = 3710
                break
            case 10:
                scroll = 655
                break
        }
        document.getElementById('gg')?.scrollTo({
            left: scroll,
            behavior: 'smooth',
        })
        games.forEach((el, idxx) => {
            if (idxx === idx + 2) {
                el.active = true
            } else {
                el.active = false
            }
        })
        //console.log(document.getElementById('gg').scrollLeft)
    }
    const getIdxMinus = (idx: number) => {
        let scroll
        setIndex(idx)
        switch (idx) {
            case 1:
                scroll = 3710
                break
            case 2:
                scroll = 655
                break

            case 3:
                scroll = 995
                break

            case 4:
                //pz
                scroll = 1330
                break

            case 5:
                //pg
                scroll = 1670
                break

            case 6:
                //ss
                scroll = 2005
                break

            case 7:
                //sh
                scroll = 2355
                break

            case 8:
                //js
                scroll = 2695
                break
            case 9:
                //bs
                scroll = 3030
                break
            case 10:
                scroll = 3375
                break
        }
        document.getElementById('gg')?.scrollTo({
            left: scroll,
            behavior: 'smooth',
        })
        games.forEach((el, idxx) => {
            if (idxx === idx) {
                el.active = true
            } else {
                el.active = false
            }
        })
        //console.log(document.getElementById('gg').scrollLeft)
    }
    useEffect(() => document.getElementById('gg')?.scrollTo({
        left: 348 + 640,
        behavior: 'smooth',
    }), [])

    const slide = (event: any) => {
        if (event.target.dataset.name === 'right') {
            getIdxPlus(index)
            index < 10 ? setIndex(index + 1) : setIndex(1)
        } else {
            console.log(index, 'INDEX!!!')
            getIdxMinus(index)
            if (index === 1) {
                setIndex(10)
            } else {
                setIndex(index - 1)
            }
        }
    }
    // const slide = (event: any) => {
    //     console.log('INDEX = ', index)
    //     if (event.target.dataset.name === 'right') {
    //         console.log('right')
    //         if (index < 10) {
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (index),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 console.log('массива', idxx - 1, 'нажатый', index + 1)
    //                 if (idxx - 1 === index + 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(index + 1)
    //         } else {
    //             setIndex(1)
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (0),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 console.log('массива', idxx - 1, 'нажатый', 1)
    //                 if (idxx - 1 === 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             console.log('last right item')
    //         }
    //     } else {
    //         if (index > 1) {
    //             console.log('left')
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (index - 2),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 console.log('массива', idxx, 'нажатый', index - 1)
    //                 if (idxx - 1 === index - 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(index - 1)
    //         } else {
    //             console.log('last left item')
    //             console.log('left')
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (10 - 1),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 console.log('массива', idxx, 'нажатый', 10 - 1)
    //                 if (idxx - 1 === 10) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(10)
    //         }
    //     }
    // }
    // const slide2 = (event: any) => {
    //     const cont = document.getElementById('gg')
    //     const game = games[index].src
    //     const doc = document.getElementById(game)
    //     const offset = document.getElementById(game).offsetLeft
    //     const www = document.body.offsetWidth / 2
    //     const sss= document.getElementById('gg').scrollWidth
    //     console.log(www, '!',sss)
    //     if (doc) {
    //         //ss 2519
    //         //sh 2829 2780 is center 49 is diff
    //         const yy = offset - 20
    //         cont.scrollTo({left: yy, behavior: 'smooth'})
    //     }
    //     if (event.target.dataset.name === 'right') {
    //         if (index === 10) {
    //             const game = games[index].src
    //             const doc = document.getElementById(game)
    //             if (doc) {
    //                 const yy = 500
    //                 cont.scrollTo({left: yy, behavior: 'smooth'})
    //             }
    //             setIndex(1)
    //         } else {
    //             console.log(event.target.dataset.name, games[index + 2].src)
    //             setIndex(index + 1)
    //         }
    //     } else {
    //         if (index === 1) {
    //             console.log(event.target.dataset.name, games[10].src)
    //             setIndex(10)
    //         } else {
    //             console.log(event.target.dataset.name, games[index].src)
    //             setIndex(index - 1)
    //         }
    //
    //     }
    //
    // }

    // const slideSwype = (dir: string) => {
    //     console.log('INDEX = ', index)
    //     if (dir === 'right') {
    //         console.log('right')
    //         if (index < 10) {
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (index),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 //console.log('массива', idxx - 1, 'нажатый', index + 1)
    //                 if (idxx - 1 === index + 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(index + 1)
    //         } else {
    //             setIndex(1)
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (0),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 //console.log('массива', idxx - 1, 'нажатый', 1)
    //                 if (idxx - 1 === 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             console.log('last right item')
    //         }
    //     } else {
    //         if (index > 1) {
    //             console.log('left')
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (index - 2),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 //console.log('массива', idxx, 'нажатый', index - 1)
    //                 if (idxx - 1 === index - 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(index - 1)
    //         } else {
    //             console.log('last left item')
    //             console.log('left')
    //             document.getElementById('gg')?.scrollTo({
    //                 left: 640 + 345 * (10 - 1),
    //                 behavior: 'smooth',
    //             })
    //             games.forEach((el, idxx) => {
    //                 //console.log('массива', idxx, 'нажатый', 10 - 1)
    //                 if (idxx - 1 === 10 - 1) {
    //                     el.active = true
    //                 } else {
    //                     el.active = false
    //                 }
    //             })
    //             setIndex(10)
    //         }
    //     }
    // }
    const slideSwype = (dir: string) => {
        if (dir === 'right') {
            getIdxPlus(index)
            index < 10 ? setIndex(index + 1) : setIndex(1)
        } else {
            console.log(index, 'INDEEX!!!')
            getIdxMinus(index)
            if (index === 1) {
                setIndex(10)
            } else {
                setIndex(index - 1)
            }
        }
    }
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: any) => {
        touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e: any) => {
        touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 5) {
            // Swiped left
            slideSwype('right')
        }

        if (touchEndX - touchStartX > 5) {
            // Swiped right
            slideSwype('left')
        }
    };
    //console.log(document.getElementById('gg')?.scrollLeft)
    return <div id={'games'} className={globals.contentBlock} style={{backgroundColor: '#685BC7', minHeight: '1100px'}}>
        <div className={compStyles.content}>
            <h1 style={{fontSize: '30px'}} className={compStyles.spaceF}>НАШИ ИГРЫ</h1>
            <div onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd} id={'gg'} className={compStyles.sliderCont}>
                {games.map((game) => <SliderElementM key={game.title} data={game}/>)}
            </div>
            <div className={compStyles.navs}>
                <Image onClick={slide} data-name='left' src={triangle} alt={'triangle'}
                       className={compStyles.triRight}/>
                <h1 className={compStyles.gameTitle}>{games[index + 1].title}</h1>
                <Image onClick={slide} data-name='right' src={triangle} alt={'triangle'}
                       className={compStyles.triLeft}/>
            </div>
            <div className={compStyles.gameBody}>{games[index + 1].body}</div>
        </div>

        {/*<Image src={pad} alt={'pad'} className={compStyles.Ppad}/>*/}
    </div>
}
import globals from '../../globals.module.scss'
import compStyles from './slider.module.scss'
import Image from "next/image";
import pad from './pPad.png'
import line from '../../../public/Vector7.png'
import {SliderElement} from "@/widgets/slider/SliderElement";
import triangle from '../../../public/ui/btnSlider.png'
import React, {useEffect, useRef} from "react";
import {texts} from "@/texts";

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
export const Slider = () => {
    const [index, setIndex] = React.useState(2)
    const getIdx = (idx: number) => {
        let scroll
        setIndex(idx)
        switch (idx) {
            case 1:
                scroll = 33
                break
            case 2:
                scroll = 350
                break

            case 3:
                scroll = 670
                break

            case 4:
                scroll = 980
                break

            case 5:
                scroll = 1288
                break

            case 6:
                scroll = 1609
                break

            case 7:
                scroll = 1924
                break

            case 8:
                scroll = 2240
                break
            case 9:
                scroll = 2548
                break
            case 10:
                scroll = 2867
                break
        }
        document.getElementById('gg')?.scrollTo({
            left: scroll,
            behavior: 'smooth',
        })
        games.forEach((el, idxx) => {
            if (idxx === idx + 1) {
                el.active = true
            } else {
                el.active = false
            }
        })
        //console.log(document.getElementById('gg').scrollLeft)
    }
    useEffect(() => document.getElementById('gg')?.scrollTo({
        //left: frameWidth + 60,
        //566 275
        left: 350,
        behavior: 'smooth',
    }), [])
    //console.log(index, 'INDEX',)
    const anchorTo = (event: any) => {
        const name = event.target.dataset.name
        const doc = document.getElementById(name)
        if (doc) {
            const yy = doc.offsetLeft
            window.scrollTo({top: yy, behavior: 'smooth'})
        }
    }
    useEffect(() => {
        const gg = document.getElementById('gg');
        if (!gg) return; // Guard clause: stop if element is not found

        const handleScroll = () => {
            console.log("Container scroll:", gg.scrollLeft);
        };
        gg.addEventListener("scroll", handleScroll);
        return () => {
            gg.removeEventListener("scroll", handleScroll);
        };
    }, [])
    const slide = (event: any) => {
        console.log('INDEX = ', index)
        if (event.target.dataset.name === 'right') {
            console.log('right')
            if (index < 10) {
                switch (index) {
                    case 1:
                        document.getElementById('gg')?.scrollTo({
                            left: 350,
                            behavior: 'smooth',
                        })
                        break
                    case 2:
                        document.getElementById('gg')?.scrollTo({
                            left: 670,
                            behavior: 'smooth',
                        })
                        break
                    case 3:
                        document.getElementById('gg')?.scrollTo({
                            left: 980,
                            behavior: 'smooth',
                        })
                        break
                    case 4:
                        document.getElementById('gg')?.scrollTo({
                            left: 1288,
                            behavior: 'smooth',
                        })
                        break
                    case 5:
                        document.getElementById('gg')?.scrollTo({
                            left: 1609,
                            behavior: 'smooth',
                        })
                        break
                    case 6:
                        document.getElementById('gg')?.scrollTo({
                            left: 1924,
                            behavior: 'smooth',
                        })
                        break
                    case 7:
                        document.getElementById('gg')?.scrollTo({
                            left: 2240,
                            behavior: 'smooth',
                        })
                        break
                    case 8:
                        document.getElementById('gg')?.scrollTo({
                            left: 2548,
                            behavior: 'smooth',
                        })
                        break
                    case 9:
                        document.getElementById('gg')?.scrollTo({
                            left: 2867,
                            behavior: 'smooth',
                        })
                        break

                }
                games.forEach((el, idxx) => {
                    if (idxx - 1 === index + 1) {
                        el.active = true
                    } else {
                        el.active = false
                    }
                })
                setIndex(index + 1)
            } else {
                setIndex(1)
                document.getElementById('gg')?.scrollTo({
                    left: 40 + 345 * (0),
                    behavior: 'smooth',
                })
                games.forEach((el, idxx) => {
                    if (idxx - 1 === 1) {
                        el.active = true
                    } else {
                        el.active = false
                    }
                })
                console.log('last right item')
            }
        } else {
            if (index > 1) {
                switch (index) {
                    case 1:
                        document.getElementById('gg')?.scrollTo({
                            left: 350,
                            behavior: 'smooth',
                        })
                        break
                    case 2:
                        document.getElementById('gg')?.scrollTo({
                            left: 33,
                            behavior: 'smooth',
                        })
                        break
                    case 3:
                        document.getElementById('gg')?.scrollTo({
                            left: 350,
                            behavior: 'smooth',
                        })
                        break
                    case 4:
                        document.getElementById('gg')?.scrollTo({
                            left: 670,
                            behavior: 'smooth',
                        })
                        break
                    case 5:
                        document.getElementById('gg')?.scrollTo({
                            left: 980,
                            behavior: 'smooth',
                        })
                        break
                    case 6:
                        document.getElementById('gg')?.scrollTo({
                            left: 1288,
                            behavior: 'smooth',
                        })
                        break
                    case 7:
                        document.getElementById('gg')?.scrollTo({
                            left: 1609,
                            behavior: 'smooth',
                        })
                        break
                    case 8:
                        document.getElementById('gg')?.scrollTo({
                            left: 1924,
                            behavior: 'smooth',
                        })
                        break
                    case 9:
                        document.getElementById('gg')?.scrollTo({
                            left: 2240,
                            behavior: 'smooth',
                        })
                        break
                    case 10:
                        document.getElementById('gg')?.scrollTo({
                            left: 2559,
                            behavior: 'smooth',
                        })
                        break
                }
                games.forEach((el, idxx) => {
                    if (idxx - 1 === index - 1) {
                        el.active = true
                    } else {
                        el.active = false
                    }
                })
                setIndex(index - 1)
            } else {
                document.getElementById('gg')?.scrollTo({
                    left: 2867,
                    behavior: 'smooth',
                })
                games.forEach((el, idxx) => {
                    if (idxx - 1 === 10) {
                        el.active = true
                    } else {
                        el.active = false
                    }
                })
                setIndex(10)
            }
        }
    }
    return <div id={'games'} className={globals.contentBlock}>
        <div className={compStyles.content}>
            <h1 className={compStyles.title}>ИГРЫ</h1>
            <Image src={line} alt={'line'}/>
            <h2 className={compStyles.subtitle}>Полное погружение</h2>
            {/*<Image src={line} alt={'line'}/>*/}
            <div id={'gg'} className={compStyles.sliderCont}>
                {texts.slider.games.map((game) => <SliderElement key={game.title} data={game} onnClick={getIdx}/>)}
            </div>
            <div className={compStyles.navs}>
                <Image onClick={slide} data-name='left' src={triangle} alt={'triangle'}
                       className={compStyles.triRight}/>
                <h1 style={{minWidth: '320px', display: 'flex', justifyContent: 'center'}}>{games[index + 1].title}</h1>
                <Image onClick={slide} data-name='right' src={triangle} alt={'triangle'}
                       className={compStyles.triLeft}/>
            </div>
            <div className={compStyles.text}> {games[index + 1].body}</div>
        </div>
        <Image src={pad} alt={'pad'} className={compStyles.Ppad}/>
    </div>
}
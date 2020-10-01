import React, { Fragment } from 'react';
import an from "./Achievements.module.css";
import crown from "./icons/crown.png"
import brain from "./icons/brain.png";
import money from "./icons/money.png"
import book from "./icons/open-book.png"
import success from "./icons/success.png"
import target from "./icons/target.png"
import achievements from "./icons/achievement.png"

export const Achievements = (props) => {
    return (

        <div id={an.cards}>

            <div className={an.bannerBlock} style={{display: 'flex',marginLeft: '12px', marginBottom: '20px'}}>
                {/* <div style={{display: 'flex'}}>
                    <img style={{ maxWidth: '100%', width: '423px', borderRadius: '15px' }} src={banner} alt="" />
                </div>
                <div style={{display: 'flex'}}>
                    <img style={{maxWidth: '100%', width: '200px', borderRadius: '15px'}} src={rightBanner} alt="" />
                </div> */}
                <div>
                    <h1 style={{fontFamily: 'emoji', fontSize: '30px'}}>Achievements</h1>
                </div>

                <div style={{marginLeft: '25px'}}>
                    <img style={{width: '50px'}} src={achievements} alt=""/>
                </div>
            </div>

            <div style={{ float: 'left' }}>
                <div className={`${an.card} ${an.card__normal}`}>
                    <div className={an.card__image_container}>
                        {/* Изучить теорию */}
                        <img src={crown} alt="Eevee" className={an.card__image} />
                    </div>
                    {/*{`${d.icon} ${d.typicons_minus}`}*/}
                    <figcaption className={an.card__caption}>
                        <h1 className={an.card__name}>Eevee</h1>

                        <h4 className={an.card__type}>normal</h4>

                        <table className={an.card__stats}>
                            <tbody>
                                <tr>
                                    <th><p className={an.card__info}>Complete 3 courses</p></th>
                                </tr>
                            </tbody>
                        </table>

                        <div className={an.card__abilities}>
                            <h4 className={an.card__ability}><span className={an.card__label}>Ability</span>Run Away</h4>
                        </div>
                    </figcaption>
                </div>

                <div className={`${an.card} ${an.card__water}`}>
                    <div className={an.card__image_container}>
                        <img src={book} alt="Vaporeon" className={an.card__image} />
                    </div>

                    <figcaption className={an.card__caption}>
                        <h1 className={an.card__name}>Vaporeon</h1>
                        <h4 className={an.card__type}>water</h4>
                        <table className={an.card__stats}>
                            <tbody>
                                <tr>
                                    <th><p className={an.card__info}>Complete 3 courses</p></th>
                                </tr>
                            </tbody>
                        </table>

                        <div className={an.card__abilities}>
                            <h4 className={an.card__ability}><span className={an.card__label}>Ability</span>Absorb</h4>
                        </div>
                    </figcaption>
                </div>

                <div className={`${an.card} ${an.card__electric}`}>
                    <div className={an.card__image_container}>
                        <img src={success} alt="Jolteon" className={an.card__image} />
                    </div>

                    <figcaption className={an.card__caption}>
                        <h1 className={an.card__name}>Jolteon</h1>
                        <h4 className={an.card__type}>electric</h4>
                        <table className={an.card__stats}>
                            <tbody>
                                <tr>
                                    <th><p className={an.card__info}>Complete 3 courses</p></th>
                                </tr>
                            </tbody>
                        </table>

                        <div className={an.card__abilities}>
                            <h4 className={an.card__ability}>
                                <span className={an.card__label}>Ability</span>Volt Absorb</h4>
                            
                        </div>
                    </figcaption>
                </div>

            </div>

            <div style={{ float: 'left' }}>
                <div className={`${an.card} ${an.card__fire}`}>
                    <div className={an.card__image_container}>
                        {/* Заработка опыта */}
                        <img src={money} alt="Flareon" className={an.card__image} />
                    </div>

                    <figcaption className={an.card__caption}>
                        <h1 className={an.card__name}>Flareon</h1>

                        <h4 className={an.card__type}>fire</h4>

                        <table className={an.card__stats}>
                            <tbody>
                                <tr>
                                    <th><p className={an.card__info}>Complete 3 courses</p></th>
                                </tr>
                            </tbody>
                        </table>

                        <div className={an.card__abilities}>
                            <h4 className={an.card__ability}>
                                <span className={an.card__label}>Ability</span>Flash Fire</h4>
                        </div>
                    </figcaption>
                </div>

                <div className={`${an.card} ${an.card__psychic}`}>
                    <div className={an.card__image_container}>
                        <img src={brain} alt="Espeon" className={an.card__image} />
                    </div>
                    <figcaption className={an.card__caption}>
                        <h1 className={an.card__name}>Espeon</h1>
                        <h4 className={an.card__type}>psychic</h4>
                        <table className={an.card__stats}>
                            <tbody>
                                <tr>
                                    <th><p className={an.card__info}>Complete 3 courses</p></th>
                                </tr>
                            </tbody>
                        </table>

                        <div className={an.card__abilities}>
                            <h4 className={an.card__ability}>
                                <span className={an.card__label}>Ability</span>Synchronize</h4>
                        </div>
                    </figcaption>
                </div>

                <div className={`${an.card} ${an.card__grass}`}>
                    <div className={an.card__image_container}>
                        {/* Пройти обучение без ошибок */}
                        <img src={target} alt="Leafeon" className={an.card__image} />
                    </div>

                    <figcaption className={an.card__caption}>
                        <h1 className={an.card__name}>Leafeon</h1>
                        <h4 className={an.card__type}>grass</h4>
                        <table className={an.card__stats}>
                            <tbody>
                                <tr>
                                    <th><p className={an.card__info}>Complete 3 courses</p></th>
                                </tr>
                            </tbody>
                        </table>

                        <div className={an.card__abilities}>
                            <h4 className={an.card__ability}><span className={an.card__label}>Ability</span> Leaf Guard</h4>
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>


    );
}
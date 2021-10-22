import React from "react";
import s from './pop_app.module.css';
import closeButton from "./../assets/close_button.png"
import {NavLink} from "react-router-dom";

export class PopApp extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                button_class_1:s.item_6_first_button_active,
                button_class_2:s.item_6_second_button,
                button_active_class_1:s.item_6_first_button_active,
                button_active_class_2:s.item_6_second_button_active,
                id:0
            }
    }

    turnActiveButton_1 = () => {
       if (this.state.button_class_1 === s.item_6_first_button ){
           this.setState({
               button_class_1: this.state.button_active_class_1,
               button_class_2: s.item_6_second_button,
               id:2
           })
       }
    }
    turnActiveButton_2 = () => {
        if (this.state.button_class_2 === s.item_6_second_button ){
            this.setState({
                button_class_2: this.state.button_active_class_2,
                button_class_1: s.item_6_first_button,
                id:1
            })
        }

    }


    render() {
        return (

            <div className={s.container}>
                <div className={s.modal}>
                    <div className={s.modal__container}>
                        <div className={s.modal__flex}>
                            <div className={s.item_close}>
                                 <NavLink to='/'><img src={closeButton} alt=""/></NavLink>
                            </div>
                            <div className={s.item_1}>Налоговый вычет</div>
                            <div className={s.item_2}>Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                                Размер налогового вычета составляет не более 13% от своего официального годового
                                дохода.
                            </div>
                            <div className={s.item_3}>Ваша зарплата в месяц</div>
                            <div className={s.item_4}>
                                <input type="text" placeholder="Введите данные" autoFocus/>
                            </div>
                            <div className={s.item_5}>Рассчитать</div>
                            <div className={s.item_6_flex}>
                                <div className={s.item_6_text}>Что уменьшаем?</div>
                                <div className={this.state.button_class_1}>
                                    <button className={s.button_1} onClick={this.turnActiveButton_1}>Платеж</button>
                                </div>
                                <div className={this.state.button_class_2}>
                                    <button className={s.button_2} onClick={this.turnActiveButton_2}>Срок</button>
                                </div>
                            </div>
                            <div className={s.item_7}>
                                <button>Добавить</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }

}


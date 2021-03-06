import React from "react";
import s from './pop_app.module.css';
import closeButton from "./../assets/close_button.png"
import {NavLink, Route} from "react-router-dom";
import {Work} from "./work/work";

export class PopApp extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                button_class_1:s.item_6_first_button_active,
                button_class_2:s.item_6_second_button,
                button_active_class_1:s.item_6_first_button_active,
                button_active_class_2:s.item_6_second_button_active,
                id:0,
                newInputText:' ' ,
                item_4_style: s.item_4,
                input_error:s.input_error_description_0,
                PopApp_work_path:"/PopApp",
                currentValue: 0,
                AddButtonStyle: s.item_7_error,

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

    updateNewInputText(newText) {

        this.state.newInputText = newText;
    }

    turnActiveButton_3 = () =>{
        this.setState({
            AddButtonStyle: s.item_7
        })
    }


    render() {
        let inputText = React.createRef();
        let onInputChange = () =>{
            let text = inputText.current.value ;
            this.updateNewInputText(text);
            this.setState({
                newInputText: text ,
                input_error:s.input_error_description_0,
                PopApp_work_path:"/PopApp"

            })
            console.log(text);
            if ((isNaN(text) === true)  )

            {
                this.setState({
                    item_4_style: s.item_4_error,
                    input_error:s.input_error_description_1,
                    PopApp_work_path:"/PopApp"
                })

            }
            else {
                if (text.length === 0){
                    this.setState({
                        item_4_style: s.item_4_error,
                        input_error:s.input_error_description_1,
                        PopApp_work_path:"/PopApp"
                    })
                }
                else {
                        this.setState({
                            item_4_style: s.item_4,
                            PopApp_work_path: "/PopApp/Work",
                            currentValue: Number(text)

                        })

                    }
                }
            }

        let onClickCurrent = () =>{
            this.turnActiveButton_3();
            onInputChange();
        }


        return (

            <div className={s.container}>
                <div className={s.modal}>
                    <div className={s.modal__container}>
                        <div className={s.modal__flex}>
                            <div className={s.item_close}>
                                 <NavLink to='/'><img src={closeButton} alt=""/></NavLink>
                            </div>
                            <div className={s.item_1}>?????????????????? ??????????</div>
                            <div className={s.item_2}>?????????????????????? ?????????????????? ?????????? ?????????? ???????????????? ?????????????? ????????????????.
                                ???????????? ???????????????????? ???????????? ???????????????????? ???? ?????????? 13% ???? ???????????? ???????????????????????? ????????????????
                                ????????????.
                            </div>
                            <div className={s.item_3}>???????? ???????????????? ?? ??????????</div>
                            <div className={this.state.item_4_style}>
                                <input type="text" placeholder="?????????????? ????????????" autoFocus ref={inputText}    />
                                <div className={this.state.input_error}>???????? ?????????????????????? ?????? ???????????????????? ?????? ???? ?????????? ???????????????????????? ???????????? </div>
                            </div>
                            <NavLink to={this.state.PopApp_work_path} className={s.item_5} onClick={onClickCurrent} >????????????????????</NavLink>
                            {/*=>>>>*/}

                            <Route path='/PopApp/Work' render={ () =>  <Work  InputCurrentValue={this.state.currentValue} />}/>




                            <div className={s.item_6_flex}>
                                <div className={s.item_6_text}>?????? ???????????????????</div>
                                <div className={this.state.button_class_1}>
                                    <button className={s.button_1} onClick={this.turnActiveButton_1}>????????????</button>
                                </div>
                                <div className={this.state.button_class_2}>
                                    <button className={s.button_2} onClick={this.turnActiveButton_2}>????????</button>
                                </div>
                            </div>
                            <div className={this.state.AddButtonStyle}>
                                <button>????????????????</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }

}



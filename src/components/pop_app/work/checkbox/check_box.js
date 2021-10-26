import React from "react";
import s from './check_box.module.css'



export class CheckBox extends React.Component  {
    constructor(props) {
        super(props);
        this.state ={
            itemStyle:s.checkbox_item__0,
            name:props.name,
            current: props.current,
            WordID:props.WordID,
            checkbox_current:true
        }
    }

    checkboxChange = () =>{
        if (this.state.checkbox_current){
            this.setState({
                itemStyle:s.checkbox_item_0_checked,
                checkbox_current:false
            })

        }
        else {
            this.setState({
                itemStyle:s.checkbox_item__0,
                checkbox_current:true
            })
        }
        console.log(this.state.checkbox_current)
    }



    render(){
        return(

            <div className={s.checkbox_flex}>
                <div className={s.checkbox_item}>

                    <div className={this.state.itemStyle} onChange={this.checkboxChange} onClick={this.checkboxChange}>
                        <img src="checkbox.svg" alt=""  /> </div>
                    <div className={s.checkbox_label_item_1}>{this.state.current} </div>
                    <div className={s.checkbox_label_item_2}> в {this.state.name}-{this.state.WordID} год</div>

                </div>
            </div>

        )
    }
}
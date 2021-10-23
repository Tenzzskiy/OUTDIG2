import React from "react";
import s from './checkbox/check_box.module.css'
import {CheckBox} from "./checkbox/check_box";

export class Work extends React.Component{
constructor(props) {
    super(props);
    this.state ={
        currentValue: props.InputCurrentValue
    }
}


    render(){
        return(
            <div className={s.work_flex}>
                <div className={s.checkbox_title}>Итого можете внести в качестве досрочных: </div>
                <CheckBox InputCurrentValue={this.state.currentValue} />
            </div>
        )
    }
}
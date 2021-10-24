import React from "react";
import s from './check_box.module.css'

//
// export class CheckBox extends React.Component{
// constructor(props) {
//     super(props);
//     this.state ={
//         currentValue: props.InputCurrentValue,
//         taxInfo: [
//
//         ]
//     }
// }
//


export const CheckBox = (props) => {

//     let state ={
//         currentValue: props.InputCurrentValue,
//          taxInfo: [
//
//          ],
//         lastIdValue: {
//
//         }
//
//     }
//     function LeastRange(){
//         let tax = (state.currentValue*12)*0.13;
//         let result = 260000;
//         let each =Math.trunc( 260000 / tax );
//         console.log(each);
//         for( let i =1 ; i<=each;i++){
//             result = result - tax;
//             state.taxInfo.push({current: tax, id:i })
//
//     }
//         state.taxInfo.push({current: result, id:state.taxInfo.length + 1  })
//     }
// LeastRange();
//     console.log(state.taxInfo);


    return(

        <div className={s.checkbox_flex}>
            <div className={s.checkbox_item}>
                <input className={s.checkbox_input} type="checkbox" id="checkbox_1" />
                <label className={s.checkbox_label} htmlFor="checkbox_1" >
                    <div className={s.checkbox_label_item_1}>{props.current} </div>
                    <div className={s.checkbox_label_item_2}> в {props.name}-{props.WordID} год</div>
                </label>
            </div>
        </div>

    )
}
import React from "react";
import s from './checkbox/check_box.module.css'
import {CheckBox} from "./checkbox/check_box";




export const Work = (props) => {

        let state = {
            currentValue: props.InputCurrentValue,
            taxInfo: [

            ],
            lastIdValue: {

            }
        }




    //
    // LeastRange = () =>{
    //     let tax = (this.state.currentValue*12)*0.13;
    //     let result = 260000;
    //     let each =Math.trunc( 260000 / tax );
    //     console.log(each);
    //     for( let i =1 ; i<=each;i++){
    //         result = result - tax;
    //
    //         if (i === 2 || i=== 6 || i ===7 || i === 8 ){
    //             this.state.taxInfo.push({current: tax, name:i,id:i, WordID:'ой' })
    //         }else if (i === 3  ){
    //             this.state.taxInfo.push({current: tax, name:i,id:i, WordID:'ий' })
    //         } else {
    //             this.state.taxInfo.push({current: tax, name:i,id:i, WordID:'ый' })
    //         }
    //     }
    //     this.state.taxInfo.push({current: result, name:this.state.taxInfo.length + 1, id:this.state.taxInfo.length + 1 ,WordID: ' ый' })
    //
    // }
    //



     let LeastRange = () =>{
        let tax = (state.currentValue*12)*0.13;
        let result = 260000;
        let each =Math.trunc( 260000 / tax );
        for( let i =1 ; i<=each;i++){
            result = result - tax;

            if (i === 2 || i=== 6 || i ===7 || i === 8 ){
                state.taxInfo.push({current: tax, name:i,id:i, WordID:'ой' })
            }else if (i === 3  ){
                state.taxInfo.push({current: tax, name:i,id:i, WordID:'ий' })
            } else {
                state.taxInfo.push({current: tax, name:i,id:i, WordID:'ый' })
            }
        }
        state.taxInfo.push({current: result, name:state.taxInfo.length + 1, id:state.taxInfo.length + 1 ,WordID: ' ый' })

    }
    LeastRange();


          console.log(state.taxInfo)
          const elements = state.taxInfo.map( item => {
              const {id,...itemProps} = item;
              return(
                  <CheckBox key={id} {...itemProps}  />
              )
          })



        return(
            <div className={s.work_flex}>
                <div className={s.checkbox_title}>Итого можете внести в качестве досрочных: </div>

                {elements}
            </div>
        )

}

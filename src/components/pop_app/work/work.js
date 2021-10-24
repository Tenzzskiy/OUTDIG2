import React from "react";
import s from './checkbox/check_box.module.css'
import {CheckBox} from "./checkbox/check_box";



    // const LeastRange = () =>{
    //     let tax = (this.state.currentValue*12)*0.13;
    //     let result = 260000;
    //     let each =Math.trunc( 260000 / tax );
    //     console.log(each);
    //     for( let i =1 ; i<=each;i++){
    //         result = result - tax;
    //         this.state.taxInfo.push({current: tax, id:i })
    //
    //     }
    //     this.state.taxInfo.push({current: result, id:this.state.taxInfo.length + 1  })
    // }
    //
    // console.log(this.state.taxInfo);
    // LeastRange();
    // LeastRange();


export const Work = (props) =>{
   let state ={
        currentValue: props.InputCurrentValue,
         taxInfo: [

         ],
        lastIdValue: {

        }

    }



     function LeastRange (){
        let tax = (state.currentValue*12)*0.13;
        let result = 260000;
        let each =Math.trunc( 260000 / tax );
        console.log(each);
        for( let i =1 ; i<=each;i++){
            result = result - tax;

            if (i === 2 ){
                state.taxInfo.push({current: tax, name:i,id:i, WordID:'ой' })
            }else if (i === 3 ){
                state.taxInfo.push({current: tax, name:i,id:i, WordID:'ий' })
            } else {
                state.taxInfo.push({current: tax, name:i,id:i, WordID:'ый' })
            }
        }
        state.taxInfo.push({current: result, name:state.taxInfo.length + 1, id:state.taxInfo.length + 1 ,WordID: ' ый' })
    }
    LeastRange ();
    console.log(state.taxInfo);

    const elements = state.taxInfo.map( item => {
        const {id,...itemProps} = item;
        return(
            <CheckBox key={id} {...itemProps} />
        )
    })


        return(
            <div className={s.work_flex}>
                <div className={s.checkbox_title}>Итого можете внести в качестве досрочных: </div>

                {elements}
            </div>
        )

}

import {Button} from "./button/button";
import s from './start_screen.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

export const  StartScreen = () => {
  return (

      <div>

          <NavLink to="/PopApp" className={s.container} ><Button /></NavLink>

        </div>




  );
}



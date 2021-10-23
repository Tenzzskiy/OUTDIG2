import {NavLink} from "react-router-dom";
import s from './button.module.css';

export const  Button = () => {
  return (
      <div>
          <NavLink  to="/PopApp"  > <button className={s.button}>
        Налоговый вычет
      </button></NavLink>
</div>

  );
}



import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { HiUser} from 'react-icons/hi';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
      
      <p className={css.username}><HiUser /><span>{user.name}</span></p>
    </div>
  );
}
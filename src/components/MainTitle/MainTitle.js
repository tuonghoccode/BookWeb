import styles from "./MainTitle.module.css";
import clsx from 'clsx';

function MainTitle(props){
    return <div className={clsx(styles.main_title)}>{props.main_title}</div>;
}

export default MainTitle;
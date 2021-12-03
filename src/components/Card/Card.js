import styles from './Card.module.css'
import clsx from 'clsx'

function Card({props}){
    
    return (
      <div className={styles.container}>
        {props.map((item) => (
          <div className={styles.block_child}>
            <img
              className={styles.img}
              src={item.img}
              alt=""
            />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.author}>{item.author}</div>
            <div className={styles.block_footer}>
              <time className={styles.time}>{item.time}</time>
              <span className={styles.line}>|</span>

              <a href="#" className={styles.order}>
                Pre-order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    );
}
export default Card

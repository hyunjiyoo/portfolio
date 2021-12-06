import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './arrow.module.css';

const Arrow = () => (
  <button id="arrow" className={styles.arrow}>
    <FontAwesomeIcon className={styles.arrow__icon} icon={faArrowCircleUp} />
  </button>
);

export default Arrow;
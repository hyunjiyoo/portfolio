import styles from './divider.module.css';

interface DividerProp {
  gradient: 'asc' | 'desc'
}

const Divider = ({ gradient }: DividerProp) => {
  const DividerAsc = () => (
    <section id={styles.section}>
      <div className={styles.custom_shape_divider_top_1638593839}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shape_fill}></path>
        </svg>
      </div>
    </section>
  );

  const DividerDesc = () => (
    <section id={styles.section}>
      <div className={styles.custom_shape_divider_top_1638600951}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shape_fill}></path>
        </svg>
      </div>
    </section>
  );

  return (
    (gradient === 'asc') ? <DividerAsc /> : <DividerDesc />
  );
};

export default Divider;
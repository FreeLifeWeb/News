import { cloneElement, useRef } from 'react';
import styles from './style.module.css';

export const Slider = ({ children, step = 150 }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= step;
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += step;
        }
    };
    return (
        <div className={styles.slider}>
            <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
            {cloneElement(children, { ref: scrollRef })}
            <button
                onClick={scrollRight}
                className={styles.arrow}
            >{`>`}</button>
        </div>
    );
};

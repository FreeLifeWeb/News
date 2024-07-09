import { cloneElement, useRef } from 'react';
import styles from './style.module.css';

interface Props {
    children: React.ReactElement;
    step?: number;
    isDark: boolean;
}
export const Slider = ({ children, step = 150, isDark }: Props) => {
    const scrollRef = useRef<HTMLElement | null>(null);

    const scrollLeft = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft -= step;
    };

    const scrollRight = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft += step;
    };
    return (
        <div
            className={`${styles.slider} ${
                isDark ? styles.dark : styles.light
            }`}
        >
            <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
            {cloneElement(children, { ref: scrollRef })}
            <button
                onClick={scrollRight}
                className={styles.arrow}
            >{`>`}</button>
        </div>
    );
};

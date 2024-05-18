import React from 'react';
import styles from './style.module.css';

export const Image = ({ image }) => {
    return (
        <div className={styles.wrapper}>
            {image ? (
                <img src={image} alt="news" className={styles.image} />
            ) : null}
        </div>
    );
};

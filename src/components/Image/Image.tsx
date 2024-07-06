import styles from './style.module.css';

interface Props {
    image: string;
}

export const Image = ({ image }: Props) => {
    return (
        <div className={styles.wrapper}>
            {image ? (
                <img src={image} alt="news" className={styles.image} />
            ) : null}
        </div>
    );
};

import styles from './style.module.css';

export const Search = ({ keywords, setKeywords }) => {
    return (
        <div className={styles.search}>
            <input
                type="text"
                className={styles.input}
                placeholder="Javascript"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
            />
        </div>
    );
};

import styles from './style.module.css';

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

export const Search = ({ keywords, setKeywords }: Props) => {
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

import { useTheme } from '../../context/ThemeContext';
import styles from './style.module.css';

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

export const Search = ({ keywords, setKeywords }: Props) => {
    const { isDark } = useTheme();
    return (
        <div
            className={`${styles.search} ${
                isDark ? styles.dark : styles.light
            }`}
        >
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

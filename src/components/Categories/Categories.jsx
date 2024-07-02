import styles from './style.module.css';

export function Categories({ categories, selectCategory, setSelectCategory }) {
    // console.log('categories: ', categories);
    return (
        <div className={styles.categoriess}>
            <button
                onClick={() => setSelectCategory(null)}
                className={!selectCategory ? styles.active : styles.item}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    onClick={() => setSelectCategory(category)}
                    className={
                        selectCategory === category
                            ? styles.active
                            : styles.item
                    }
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

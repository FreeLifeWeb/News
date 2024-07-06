import { ForwardedRef, forwardRef } from 'react';
import styles from './style.module.css';
import { CategoriesType } from '../../interfaces';

interface Props {
    categories: CategoriesType;
    selectCategory: CategoriesType | null;
    setSelectCategory: (category: CategoriesType | null) => void;
}

export const Categories = forwardRef(
    (
        { categories, selectCategory, setSelectCategory }: Props,
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <div ref={ref} className={styles.categoriess}>
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
);

Categories.displayName = 'Categories';

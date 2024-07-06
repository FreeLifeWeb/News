import styles from './style.module.css';
import { useFetch } from '../../helpers/hooks/useFetch';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import { getCategories } from '../../api/apiNews';
import { Slider } from '../Slider/Slider';

export const NewsFilters = ({ filters, changeFilters }) => {
    const { data: dataCategories } = useFetch(getCategories);
    return (
        <div className={styles.filters}>
            {' '}
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        selectCategory={filters.category}
                        setSelectCategory={(category) =>
                            changeFilters('category', category)
                        }
                    />
                </Slider>
            ) : null}
            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilters('keywords', keywords)}
            />
        </div>
    );
};

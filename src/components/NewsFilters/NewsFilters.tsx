import styles from './style.module.css';
import { useFetch } from '../../helpers/hooks/useFetch';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import { getCategories } from '../../api/apiNews';
import { Slider } from '../Slider/Slider';
import { CategoriesApiResponse, IFilters } from '../../interfaces';

interface Props {
    filters: IFilters;
    changeFilters: (key: string, value: string | null | undefined) => void;
}

export const NewsFilters = ({ filters, changeFilters }: Props) => {
    const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
        getCategories
    );
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
                setKeywords={(keywords: string) =>
                    changeFilters('keywords', keywords)
                }
            />
        </div>
    );
};

import styles from './style.module.css';
import { getNews } from '../../api/apiNews';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilter } from '../../helpers/hooks/useFilters';
import { LatestNews } from '../../components/LatestNews/LatestNews';
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters';

export const Main = () => {
    const { filters, changeFilters } = useFilter({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    });

    const debounceKeyWord = useDebounce(filters.keywords, 1500);

    const { data, isLoading, error } = useFetch(getNews, {
        ...filters,
        keywords: debounceKeyWord,
    });

    return (
        <main className={styles.main}>
            {error && (
                <div className={styles.error}>Error: {error.message}</div>
            )}
            <LatestNews isLoading={isLoading} banners={data && data.news} />
            <NewsByFilters
                news={data?.news}
                isLoading={isLoading}
                filters={filters}
                changeFilters={changeFilters}
            />
        </main>
    );
};

import { getNews } from '../../api/apiNews';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilter } from '../../helpers/hooks/useFilters';
import { NewsApiResponse, ParamsType } from '../../interfaces';
import { NewsFilters } from '../NewsFilters/NewsFilters';
import { NewsListWithSkeleton } from '../NewsList/NewsList';
import { PaginationWrappper } from '../PaginationWrappper/PaginationWrappper';
import styles from './style.module.css';

export const NewsByFilters = () => {
    const { filters, changeFilters } = useFilter({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    });

    const debounceKeyWord = useDebounce(filters.keywords, 1500);

    const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
        ...filters,
        keywords: debounceKeyWord,
    });
    function handleNextPage() {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilters('page_number', filters.page_number + 1);
        }
    }

    function handlePreviosPage() {
        if (filters.page_number > 1) {
            changeFilters('page_number', filters.page_number - 1);
        }
    }

    function handleClickPage(page: number) {
        changeFilters('page_number', page);
    }

    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilters={changeFilters} />

            <PaginationWrappper
                top
                bottom
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handleClickPage={handleClickPage}
                currentPage={filters.page_number}
            >
                <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
            </PaginationWrappper>
        </section>
    );
};

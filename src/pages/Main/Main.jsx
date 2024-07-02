import styles from './style.module.css';
import { NewsBunnerWithSkeleton } from '../../components/NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../api/apiNews';
import { NewsListWithSkeleton } from '../../components/NewsList/NewsList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Categories } from '../../components/Categories/Categories';
import { Search } from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilter } from '../../helpers/hooks/useFilters';

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
    const { data: dataCategories } = useFetch(getCategories);

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

    function handleClickPage(page) {
        changeFilters('page_number', page);
    }

    return (
        <main className={styles.main}>
            {error && (
                <div className={styles.error}>Error: {error.message}</div>
            )}
            {dataCategories ? (
                <Categories
                    categories={dataCategories.categories}
                    selectCategory={filters.category}
                    setSelectCategory={(category) =>
                        changeFilters('category', category)
                    }
                />
            ) : null}
            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilters('keywords', keywords)}
            />
            <NewsBunnerWithSkeleton
                isLoading={isLoading}
                item={
                    data && data.news && data.news.length > 0
                        ? data.news[0]
                        : null
                }
            />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handleClickPage={handleClickPage}
                currentPage={filters.page_number}
            />

            <NewsListWithSkeleton
                isLoading={isLoading}
                news={data && data.news ? data.news : []}
            />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handleClickPage={handleClickPage}
                currentPage={filters.page_number}
            />
        </main>
    );
};

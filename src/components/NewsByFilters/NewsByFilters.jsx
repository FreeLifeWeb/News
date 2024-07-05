import { TOTAL_PAGES } from '../../constants/constants';
import { NewsFilters } from '../NewsFilters/NewsFilters';
import { NewsListWithSkeleton } from '../NewsList/NewsList';
import { Pagination } from '../Pagination/Pagination';
import styles from './style.module.css';

export const NewsByFilters = ({ filters, changeFilters, isLoading, news }) => {
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
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilters={changeFilters} />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handleClickPage={handleClickPage}
                currentPage={filters.page_number}
            />

            <NewsListWithSkeleton isLoading={isLoading} news={news} />

            <Pagination
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handleClickPage={handleClickPage}
                currentPage={filters.page_number}
            />
        </section>
    );
};

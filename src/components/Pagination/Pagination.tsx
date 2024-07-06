import { IPaginationProps } from '../../interfaces';
import style from './style.module.css';

export const Pagination = ({
    totalPages,
    handleNextPage,
    handlePreviosPage,
    handleClickPage,
    currentPage,
}: IPaginationProps) => {
    return (
        <div className={style.pagination}>
            <button
                className={style.arrow}
                onClick={() => handlePreviosPage()}
                disabled={currentPage <= 1}
            >
                {'<'}
            </button>
            <div className={style.list}>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={style.pageNumber}
                        onClick={() => handleClickPage(index + 1)}
                        disabled={index + 1 === currentPage}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button
                className={style.arrow}
                onClick={() => handleNextPage()}
                disabled={currentPage >= 10}
            >
                {'>'}
            </button>
        </div>
    );
};

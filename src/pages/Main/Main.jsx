import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import { Pagination } from '../../components/Pagination/Pagination';

export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const data = await getNews(currentPage, pageSize);
            // console.log(data);
            setNews(data.news);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    function handlePreviosPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleClickPage(page) {
        setCurrentPage(page);
    }
    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton count={1} type={'banner'} />
            )}
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handleClickPage={handleClickPage}
                currentPage={currentPage}
            />
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton count={10} type={'item'} />
            )}
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviosPage={handlePreviosPage}
                handleClickPage={handleClickPage}
                currentPage={currentPage}
            />
        </main>
    );
};

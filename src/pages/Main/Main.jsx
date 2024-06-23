import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import { Pagination } from '../../components/Pagination/Pagination';
import { Categories } from '../../components/Categories/Categories';

export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState('All');
    const totalPages = 10;
    const pageSize = 10;

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectCategory]);

    useEffect(() => {
        fetchCategories();
    }, []);
    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const data = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectCategory === 'All' ? null : selectCategory,
            });
            // console.log(data);
            setNews(data.news);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const data = await getCategories();
            setCategories(['All', ...data.categories]);
        } catch (err) {
            console.log(err);
        }
    };
    // console.log('categories: ', categories);

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
            <Categories
                categories={categories}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
            />
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

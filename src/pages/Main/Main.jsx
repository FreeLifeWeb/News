import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';
import { Skeleton } from '../../components/Skeleton/Skeleton';

export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const data = await getNews();
                console.log(data);
                setNews(data.news);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNews();
    }, []);
    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton count={1} type={'banner'} />
            )}
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton count={10} type={'item'} />
            )}
        </main>
    );
};

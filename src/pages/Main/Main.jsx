import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';

export const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getNews();
                console.log(data);
                setNews(data.news);
            } catch (e) {
                console.log(e);
            }
        };
        fetchNews();
    }, []);
    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
            <NewsList news={news} />
        </main>
    );
};

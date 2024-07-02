import React from 'react';
import styles from './style.module.css';
import { NewsItem } from '../NewsItem/NewsItem';
import { withSkeleton } from '../../helpers/hocs/WithSkeleton';

const NewsList = ({ news }) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    );
};

export const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

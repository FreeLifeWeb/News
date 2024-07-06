import styles from './style.module.css';
import { NewsItem } from '../NewsItem/NewsItem';
import { withSkeleton } from '../../helpers/hocs/WithSkeleton';
import { INews } from '../../interfaces';

interface Props {
    news?: INews[] | null;
}

const NewsList = ({ news }: Props) => {
    return (
        <ul className={styles.list}>
            {news?.map((item) => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    );
};

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

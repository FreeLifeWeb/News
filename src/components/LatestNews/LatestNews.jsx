import { BannersListWithSkeleton } from '../BannersList/BannersList';
import styles from './style.module.css';

export const LatestNews = ({ banners, isLoading }) => {
    return (
        <section className={styles.section}>
            <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
        </section>
    );
};

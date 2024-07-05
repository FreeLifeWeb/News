import styles from './style.module.css';
import { withSkeleton } from '../../helpers/hocs/WithSkeleton';
import { NewsBanner } from '../NewsBanner/NewsBanner';

const BannersList = ({ banners }) => {
    return (
        <ul className={styles.banner}>
            {banners?.map((banner) => {
                return <NewsBanner key={banner.id} item={banner} />;
            })}
        </ul>
    );
};

export const BannersListWithSkeleton = withSkeleton(
    BannersList,
    'banner',
    10,
    'row'
);

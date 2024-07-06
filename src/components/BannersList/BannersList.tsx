import styles from './style.module.css';
import { withSkeleton } from '../../helpers/hocs/WithSkeleton';
import { NewsBanner } from '../NewsBanner/NewsBanner';
import { INews } from '../../interfaces';

interface Props {
    banners?: INews[] | null;
}
const BannersList = ({ banners }: Props) => {
    return (
        <ul className={styles.banner}>
            {banners?.map((banner) => {
                return <NewsBanner key={banner.id} item={banner} />;
            })}
        </ul>
    );
};

export const BannersListWithSkeleton = withSkeleton<Props>(
    BannersList,
    'banner',
    10,
    'row'
);

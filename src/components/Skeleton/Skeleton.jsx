import style from './style.module.css';

export const Skeleton = ({
    count = 1,
    type = 'banner',
    direction = 'column',
}) => {
    return (
        <>
            {count > 1 ? (
                <ul
                    className={
                        direction === 'column'
                            ? style.columnList
                            : style.rowList
                    }
                >
                    {[...Array(count)].map((__, index) => (
                        <li
                            key={index}
                            className={
                                type === 'banner' ? style.banner : style.item
                            }
                        ></li>
                    ))}
                </ul>
            ) : (
                <li
                    className={type === 'banner' ? style.banner : style.item}
                ></li>
            )}
        </>
    );
};

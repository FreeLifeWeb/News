import { Pagination } from '../Pagination/Pagination';

export const PaginationWrappper = ({
    top,
    bottom,
    children,
    ...paginationProps
}) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
};

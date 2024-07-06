import { IPaginationProps } from '../../interfaces';
import { Pagination } from '../Pagination/Pagination';

interface Props {
    children: React.ReactNode;
    top?: boolean;
    bottom?: boolean;
    totalPages: number;
    handleNextPage: () => void;
    handlePreviosPage: () => void;
    handleClickPage: (page: number) => void;
    currentPage: number;
}

export const PaginationWrappper = ({
    top,
    bottom,
    children,
    ...paginationProps
}: Props & IPaginationProps) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
};

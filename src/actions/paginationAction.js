import { PAGINATION } from './types';

export const paginationAction = (pager) => dispatch => {

    var startIndex = (pager.currentPage - 1) * pager.itemsPerPage;
    var endIndex = Math.min(startIndex + pager.itemsPerPage - 1, pager.totalItems - 1);

    // console.log("Pagination Action",[startIndex, endIndex]);
    
    dispatch({
        type: PAGINATION,
        payload: {
            startIndex,
            endIndex
        }
    });
}
import axios from 'axios';

export function dataLoadSuccess({data}) {
    return {
        type: 'DATA_LOAD_SUCCESS',
        data
    };
}

export function loadData() {
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result => (dispatch(dataLoadSuccess(result))))
            .catch(error => (dispatch(dataLoadFail(error))));
    };
}
export function dataLoadFail(error) {
    return {
        type: 'DATA_LOAD_ERROR',
        error
    };
}

export function checkItemClicked(item) {
    return {
        type: 'CHECK_ITEM_CLICKED',
        item
    };
}
export function gotoNextPage(nextPage) {
    return {
        type: 'GOTO_NEXT_PAGE',
        nextPage
    };
}
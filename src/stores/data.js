const initialState = {
    data: {},
    nextPage: false
};

export default function dataReducer(state = initialState, action) {
    let patchedState = {};

    switch (action.type) {
        case 'DATA_LOAD_SUCCESS':
            patchedState = {
                data: action.data.map(item => {
                    return Object.assign({}, item, {
                        checked: false
                    });
                })
            };
            break;

        case 'DATA_LOAD_FAIL':
            patchedState = {};
            break;

        case 'GOTO_NEXT_PAGE':
            patchedState = {
                nextPage: action.nextPage
            };
            break;

        case 'CHECK_ITEM_CLICKED':
            //Possible Immutable Violation
            const itemIndex = state.data.indexOf(action.item);
            action.item.checked = !action.item.checked;
            let data = state.data.slice();
            data[itemIndex] = action.item;
            patchedState = {
                data
            };
            break;
        default:
            patchedState = {};
            break;
    }

    return Object.assign({}, state, patchedState);
}
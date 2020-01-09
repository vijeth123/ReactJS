
const defaultFilter = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

export default (state = defaultFilter, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default: return state;
    }
};
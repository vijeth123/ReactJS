
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
});
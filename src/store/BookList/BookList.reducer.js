const initialState = {
    Page: 1,
}

const paginatePage = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE': return {
            ...state,
            Page: state.Page + 1
        }
        case 'PREVIOUS_PAGE': return {
            ...state,
            Page: state.Page - 1
        }

        default: return state
    }
}

export default paginatePage
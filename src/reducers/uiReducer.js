import initialState from '../data/initial-state';


 const uiReducer = (state = initialState.ui, action) => {
    switch (action.type) {

        case 'SHOW_ADD_COMPANY_FORM':
            return {
                ...state,
                isShowedAddCompanyForm: true
            };
            default:
                return state;
        }

}

export default uiReducer;
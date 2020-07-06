import initialState from '../data/initial-state';

 const dataReducer = (state = initialState.data, action) => {

    switch (action.type) {

        case 'COMPANY_LIST_LOADED':
            return {
                ...state,
                companyList: action.payload,
                isCompanyListloading: false
            };

        case 'COMPANY_LIST_REQUESTED':
            return {
                ...state,
                isCompanyListloading: true
            };

        case 'COMPANY_LIST_ERROR':
            return {
                ...state,
                isErrorGetCompanyList: true
            };
        
        case 'COMPANY_SELECTED':
            return {
                ...state,
                selectedItem: action.payload,
            }; 
        
        case 'COMPANY_LOADED':
            return {
                ...state,
                companyItem: action.payload,
                isCompanyItemloading: false
            };

        case 'COMPANY_REQUESTED':
            return {
                ...state,
                isCompanyItemloading: true
            };

        case 'COMPANY_ERROR':
            return {
                ...state,
                isErrorGetCompanyItem: true
            };   
        default: 
            return state;
    }

}

export default dataReducer;
const companyListLoaded = (newCompany) => {

    return {

        type: 'COMPANY_LIST_LOADED',
        payload: newCompany
    };
};

const companyListRequested = () => {

    return {

        type: 'COMPANY_LIST_REQUESTED'
    };
};

const companyListError = () => {

    return {

        type: 'COMPANY_LIST_ERROR'
    };
};

const companySelected = (selectedCompany) => {

    return {

        type: 'COMPANY_SELECTED',
        payload: selectedCompany

    };
};

// const companyLoaded = (selectedCompany) => {

//     return {

//         type: 'COMPANY_LOADED',
//         payload: selectedCompany

//     };
// };

const companyRequested = () => {

    return {

        type: 'COMPANY_REQUESTED'
    };
};

const companyError = () => {

    return {

        type: 'COMPANY_ERROR'
    };
};




export {

    companyListLoaded,
    companyListRequested,
    companyListError,
    companySelected,
    // companyLoaded,
    companyRequested,
    companyError
};
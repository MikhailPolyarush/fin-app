 const initialState = {
    data: {
        companyList: [], // все компании
        isCompanyListloading: true, 
        isErrorGetCompanyList: false,
        newCompany: [], // добавление новой компании

        selectedItem: '',
        companyItem: [], // компания, выбранная по id
        isCompanyItemloading: true,
        isErrorGetCompanyItem: false,

        companyStats: [], // исторические данные 
        newCompanyStats: [], // добавление новой статистики   
    },

    ui: {
        isShowedAddCompanyForm: false,
        isShowedCompanyStats: false,
        isShowedAddCompanyStatsForm: false
    }
}

export default initialState;
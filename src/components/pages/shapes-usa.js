import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithDataService from '../../components/hoc';
import Spinner from '../spinner';
import ItemsList from '../items-list';
import {companyListLoaded, companyListRequested, companyListError} from '../../actions';

class ShapesUSA extends Component {

    componentDidMount() {
        const {companyListLoaded, companyListRequested, companyListError, DataService} = this.props;

        companyListRequested();

        DataService.getFundsUSA()
        .then(result => companyListLoaded(result))
        .catch(error => companyListError());
    }

    render() {
        const {data, loading, DataService, selected} = this.props;

        console.log (selected);

        if (loading) {
            return <Spinner/> 
        }

        return (
            <div className="container-fluid">
            <ItemsList  
                data={data}
                getData={DataService.getFundsUSA}
                 />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        data: state.data.companyList,
        loading: state.data.isCompanyListloading,
        error: state.data.isErrorGetCompanyList,
        selected: state.data.selectedItem
    }
}

const mapDispatchToProps = {

    companyListLoaded,
    companyListRequested,
    companyListError
}


export default WithDataService()(connect(mapStateToProps, mapDispatchToProps)(ShapesUSA));



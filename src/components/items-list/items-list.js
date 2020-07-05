import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithDataService from '../../components/hoc';
import {companyLoaded, companyRequested, companyError, showAddCompanyForm, showStatistics} from '../../actions';
import Spinner from '../spinner';
import ItemsListItem from '../items-list-item';
import './items-list.css';

class ItemsList extends Component {

    componentDidMount() {

        const {companyLoaded, companyRequested, companyError, DataService} = this.props;

        companyRequested();

        DataService.getFundsUSA()
        .then(result => companyLoaded(result))
        .catch(error => companyError());
    }




    render() {

        const {data, loading, isShowedAddCompanyForm, showAddCompanyForm, isShowedCompanyStatistic, selectedItem} = this.props;
        console.log(selectedItem);

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className="todo-list list-group">
                <li className="list-group-item d-block">
                    { 
                        data.map(item => {
                            return <ItemsListItem key={item.id} itemTitle={item.title} />
                        })
                    }
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        data: state.company,
        loading: state.loading,
        error: state.error,
        selectedItem: state.selectedItem,
        isShowedAddCompanyForm: state.isShowedAddCompanyForm,
        isShowedCompanyStatistic: state.isShowedCompanyStatistic
    }
}

const mapDispatchToProps = {

    companyLoaded,
    companyRequested,
    companyError,
    showAddCompanyForm,
    showStatistics

}

export default WithDataService()(connect(mapStateToProps, mapDispatchToProps)(ItemsList));
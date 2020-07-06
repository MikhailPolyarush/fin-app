import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithDataService from '../../components/hoc';
import {companyListLoaded, companyListRequested, companyListError, companySelected} from '../../actions';
import Spinner from '../spinner';
import ItemsListItem from '../items-list-item';
import './items-list.css';

class ItemsList extends Component {

    // componentDidMount() {

    //     const {companyListLoaded, companyListRequested, companyListError, getData} = this.props;

    //     companyListRequested();

    //     this.props.getData()
    //     .then(result => companyListLoaded(result))
    //     .catch(error => companyListError());

    // }

    render() {

        const {data, companySelected} = this.props;



        return (
            <ul className="todo-list list-group">
                <li className="list-group-item d-block">
                    { 
                        data.map(item => {

                            return <ItemsListItem 
                                        itemId={item.id} 
                                        itemTitle={item.title}
                                        onSelected={companySelected}/>
                        })
                    }
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        data: state.data.companyList,
        selected: state.data.selectedItem

    }
}

const mapDispatchToProps = {

    companyListLoaded,
    companySelected


}

export default WithDataService()(connect(mapStateToProps, mapDispatchToProps)(ItemsList));
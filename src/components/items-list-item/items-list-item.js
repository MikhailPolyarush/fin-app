import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemSelected} from '../../actions';
import './items-list-item.css';


class ItemsListItem extends Component {
  
  
  render() {
    const {id, itemTitle, itemSelected} = this.props;


    return (
      <div className="todo-list-item ">

        <section className="section-one">
            
            <span
              className="todo-list-item-label"
              key={id} 
              onClick={() => itemSelected(id)}>{itemTitle}
        </span>
        </section>
        <section className="section-two">
        <button type="button"
          className="btn btn-link btn-sm float-right todo-list-item-price">
          12
      </button>
      </section> 
        <section className="section-three">
          <div>
                <button type="button"
          className="btn btn-outline-success btn-sm todo-list-item-button float-right">
          <i className="fa fa-exclamation "></i>
      </button>

      <button type="button"
          className="btn btn-outline-danger btn-sm todo-list-item-button float-right">
          <i className="fa fa-trash-o"></i>
      </button>


      </div>

        </section>

      
  
      </div>
    );
  }

  }

  

const mapStateToProps = (state) => {

  return {
      selectedItem: state.selectedItem
  }
}

const mapDispatchToProps = {

      itemSelected

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListItem);

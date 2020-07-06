import React from 'react';
import './items-list-item.css';

const ItemsListItem = ({itemId, itemTitle, onSelected}) => {

    return (
      <div className="todo-list-item">
        <section className="section-one">
          <span
            className="todo-list-item-label"
            key={itemId}
            onClick={() => onSelected(itemId)}>{itemTitle}
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
    )
  }

export default ItemsListItem;

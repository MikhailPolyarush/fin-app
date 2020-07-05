import React from 'react';

const validateNums = (num, handler = '%') => {
    if (num < 0) {
        return (<span className="text-danger">({num} {handler})</span>);
    } else if (num > 0) {
        return (<span className="text-success">({num} {handler})</span>);
    } else {
        return (<span className="text-warning">({num} {handler})</span>);
    }
}

export default validateNums;


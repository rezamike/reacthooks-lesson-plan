import React from 'react';

const List = props => (
    <li key={props.key} className="list-group-item" style={{ margin: '0 2% 1% 2%' }}>
        <div className="row">
            <div className="custom-control custom-checkbox col-8" style={{ padding: '.375rem .75rem .375rem 2.25rem', textAlign: 'left' }}>
                <input type="checkbox" className="custom-control-input" id={props.id} />
                <label className="custom-control-label" htmlFor={props.id}>{props.value}</label>
            </div>
            <div className="col-4">
                <button onClick={() => props.ondelete(props.id)} type="button" className="btn btn-dark">Delete</button>
            </div>
        </div>
    </li>
);

export default List;
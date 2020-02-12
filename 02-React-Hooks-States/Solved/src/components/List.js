import React from 'react';

const List = ({delete_todo, value, key, id}) => (
    <li key={key} className="list-group-item" style={{ margin: '0 2% 1% 2%' }}>
        <div className="row">
            <div className="custom-control custom-checkbox col-8" style={{ padding: '.375rem .75rem .375rem 2.25rem', textAlign: 'left' }}>
                <input type="checkbox" className="custom-control-input" id={id} />
                <label className="custom-control-label" htmlFor={id}>{value}</label>
            </div>
            <div className="col-4">
                <button onClick={() => delete_todo(id)} type="button" className="btn btn-dark">Delete</button>
            </div>
        </div>
    </li>
);

export default List;
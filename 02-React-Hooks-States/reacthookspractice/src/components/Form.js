import React from 'react';

const Form = props => (
    <div className="container" style={{marginBottom: '5%'}}>
        <div className="row">
            <div className="col"></div>
            <div className="col-6">
                <form
                    onSubmit={props.onSubmit}
                >
                    <input
                        value={props.value}
                        onChange={props.onChange}
                        className="form-control"
                        type="text"
                        name="todo"
                        placeholder="Add Todo..."
                    />
                </form>
            </div>
            <div className="col"></div>
        </div>
    </div>
);

export default Form;
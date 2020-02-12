import React from 'react';
import formState from '../global/formState.js';

const Form = ({ handle_submit }) => {
    const {value, reset, onChange} = formState('');

    return (
        <div className="container" style={{ marginBottom: '5%' }}>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handle_submit(value);
                            reset();
                        }}
                    >
                        <input
                            value={value}
                            onChange={onChange}
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
};

export default Form;
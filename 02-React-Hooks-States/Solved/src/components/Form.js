import React, { useState } from 'react';

const Form = ({ handle_submit }) => {
    const [value, setValue] = useState('');

    return (
        <div className="container" style={{ marginBottom: '5%' }}>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handle_submit(value);
                            setValue('');
                        }}
                    >
                        <input
                            value={value}
                            onChange={(event) => {
                                setValue(event.target.value);
                            }}
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
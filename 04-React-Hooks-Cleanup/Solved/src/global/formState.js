import { useState } from 'react';

export default (init) => {
    const [value, setValue] = useState(init);

    return {
        value,
        onChange: (event) => {
            setValue(event.target.value);
        },
        reset: () => setValue('')
    };
};
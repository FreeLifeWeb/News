import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};



function useDebounce(cb, delay = 2000) {
    let timeoutId;
    return (...args) => {
        console.log("Debounced function called with args:", args);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}






// function useDebounce(value, delay = 2000) {
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [value, delay]);

//     return debouncedValue;
// }

export default useDebounce;



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

export default useDebounce;








// import { useRef } from 'react';

// function useDebounce(cb, delay = 2000) {
//   const timeoutRef = useRef(null);

//   return (...args) => {
//     console.log("Debounced function called with args:", args);
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     timeoutRef.current = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// }

// export default useDebounce;








// // function useDebounce(value, delay = 2000) {
// //     const [debouncedValue, setDebouncedValue] = useState(value);

// //     useEffect(() => {
// //         const handler = setTimeout(() => {
// //             setDebouncedValue(value);
// //         }, delay);

// //         return () => {
// //             clearTimeout(handler);
// //         };
// //     }, [value, delay]);

// //     return debouncedValue;
// // }

// export default useDebounce;
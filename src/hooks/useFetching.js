import { useState } from "react";


export default function useFetching(callback) {
    let [isFetchLoading, setIsLoading] = useState(true);

    async function fetching(...args) {
        await callback(...args);
        setIsLoading(false);    
    }

    return [isFetchLoading, fetching];
}
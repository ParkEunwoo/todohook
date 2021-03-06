import {useState, useEffect} from 'react';

const useLoad = (callback:Function, key:string) => {
    const [loading, setLoading] = useState(false);

    const loadInitData = async (callback:Function, key:string) => {
        setLoading(true);
        const data = await localStorage.getItem(key);
        if(data){
            const initData = await JSON.parse(data);
            callback(initData);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadInitData(callback, key);
    }, []);
    return loading;
}

export default useLoad;
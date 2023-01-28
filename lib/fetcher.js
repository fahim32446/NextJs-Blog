import useSWR from 'swr';

// const baseURL = "http://localhost:3000/";

const baseURL = 'https://blogtemp-next4.vercel.app';

const response = (...args) => fetch(...args).then(res => res.json())

export default function Fetcher(endpoint){
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)
    return {
        data,
        isLoading : !error && !data,
        isError : error
    }
}
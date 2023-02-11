import { useState } from "react";

interface useMutationOptions {
    url:string;
    method: "POST" | "PUT" | "DELETE" | "PATCH"
}

export default function useMuattion<Response, Payload>({url, method}:useMutationOptions){
    const [data, setData] = useState<null | Response>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const postData = async (payload:Payload) => {
        setLoading(true);
        const response = await fetch(url, {method: method, body:JSON.stringify(payload)});
        setLoading(false);
        if(!response.ok)setError("Something went wrong");
        const data = await response.json();
        setData(data)
    }

    return {data, loading, error, postData};
}
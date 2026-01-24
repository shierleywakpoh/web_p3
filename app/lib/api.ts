

export async function fetchAPI<T>(
    endpoint : string,
    options?: RequestInit
) : Promise<T>{
    console.log(process.env.NEXT_PUBLIC_API_URL)
    console.log(endpoint)
    const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,

        {...options,
            cache : options?.cache || "no-store",});
    
    if (!res.ok) {
        let errorMessage =`failed to fetch data from ${endpoint}`;
        try {
            const errorData =await res.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch(e){
            console.log(e);
        }
        throw new Error(errorMessage);
    }
    return res.json();
}

export function getImagaeUrl(path:string){
    if(path.startsWith("http")) return path;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`
}

export function getAuthHeaders(){
    const token = localStorage.getItem("token");
    return {
        Authorization :`Bearer ${token}`,
    };
}
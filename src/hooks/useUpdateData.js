import baseUrl from '../Api/baseURL'


const useInUpdateDataWithImage = async (url, parmas) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.put(url, parmas, config);
    console.log(res.status)
    return res;
}

const useInsUpdateData = async (url, parmas) => {
    const res = await baseUrl.put(url, parmas);
    return res;
}

export { useInUpdateDataWithImage, useInsUpdateData };
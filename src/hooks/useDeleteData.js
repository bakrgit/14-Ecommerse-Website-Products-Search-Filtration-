import baseUrl from '../Api/baseURL'

const useDeleteData = async (url, parmas) => {
    const res = await baseUrl.delete(url, parmas);
    return res.data;
}

export default useDeleteData;
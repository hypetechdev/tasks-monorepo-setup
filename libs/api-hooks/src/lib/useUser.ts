import Axios from 'axios'
import useSWR from 'swr'

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users'

const userFetcher = url => Axios.get(url).then(res => res.data)

export function useUser(id: string) {
    const requestUrl = `${usersEndpoint}/${id}`
    const { data, error } = useSWR(requestUrl, userFetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: !!error
    }
}

import { useEffect, useState } from 'react'
import config from '../config'

export const useFetch = (url, method, trigger, automaticCancel, body = null) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (trigger) {
            const abortController = new window.AbortController()
            if (abortController.signal.aborted) { return }
            setLoading(true)
            setError(false)

            window.fetch(url, {
                method: method,
                body: body ? JSON.stringify(body) : undefined,
                headers: config.defaultHeaders,
                signal: abortController.signal
            })
                .then(res => {
                    if (!res.ok) {
                        if (res.status === 404) {
                            setNotFound(true)
                        } if (res.status === 401) {
                            setError(true)
                        } else {
                            setError(true)
                        }

                        setLoading(false)

                    }
                    return res.json()
                })
                .then(response => {
                    if (!abortController.signal.aborted) {
                        setData(response)

                    }

                    setLoading(false)
                })
                .catch(function () {
                    if (!abortController.signal.aborted) {
                        setError(true)
                    }
                })

            return () => {
                if (automaticCancel) {
                    abortController.abort()
                }

            }
        }
    }, [url, trigger])

    return { data, loading, error, notFound }
}
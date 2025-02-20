
import { useState } from "react"
import { createItemInDB } from "../api/api"
import { toast } from 'react-toastify';

export const useRequest = () => {
    const [data, setData] = useState({
        response: null,
        loading: false
    })

    const Post = async (url, data) => {
        setData(prev => ({ ...prev, loading: true }))
        try {
            let config = {};
            let resp = await createItemInDB(url, data, config);
            setData(prev => ({ ...prev, response: resp }))
        } catch (err) {
            toast(err.response.data, { position: "top-right", type: "error" })
            console.error(err);
        } finally {
            setData(prev => ({ ...prev, loading: false }))
        }
    }

    return { data, Post }
}



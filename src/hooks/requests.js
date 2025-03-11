
import { useContext, useState } from "react"
import { createItemInDB, deleteItemInDb, getItemInDB } from "../api/api"
import { toast } from 'react-toastify';
import { UserContext } from "../context/user";
export const useRequest = () => {
    const { user } = useContext(UserContext)
    const getConfig = (isProtected, contentType) => {
        let config = !isProtected ? {} : {
            headers: {
                "Authorization": `Bearer ${user}`,
            }
        }

        return config
    }
    const [data, setData] = useState({
        response: null,
        loading: false
    })

    const Post = async (url, data, isProtected) => {
        setData(prev => ({ ...prev, loading: true }))
        try {
            let config = getConfig(isProtected, url.includes("upload") ? "multipart/form-data" : null);
            let resp = await createItemInDB(url, data, config);
            return resp
        } catch (err) {
            toast(err.response.data, { position: "top-right", type: "error" })
            console.error(err);
        } finally {
            setData(prev => ({ ...prev, loading: false }))
        }
    }

    const Get = async (url, isProtected) => {
        setData(prev => ({ ...prev, loading: true }))
        try {
            let config = getConfig(isProtected);
            let resp = await getItemInDB(url, config)
            setData(prev => ({ ...prev, response: resp }))
        } catch (err) {
            toast(err.response.data, { position: "top-right", type: "error" })
            console.error(err);
        } finally {
            setData(prev => ({ ...prev, loading: false }))
        }
    }

    const Delete = async (url, isProtected) => {
        setData(prev => ({ ...prev, loading: true }));
        try {
            let config = getConfig(isProtected);
            let resp = await deleteItemInDb(url, config)
            return true
        } catch (err) {
            toast(err.response.data, { position: "top-right", type: "error" })
            console.error(err);
        } finally {
            setData(prev => ({ ...prev, loading: false }))
        }
    }
    const changeLoading = (value) => {
        setData(prev => ({ ...prev, loading: value }))
    }

    return { data, Get, Post, Delete, changeLoading }
}



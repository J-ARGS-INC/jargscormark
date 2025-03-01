
import { useContext, useState } from "react"
import { createItemInDB, deleteItemInDb, getItemInDB } from "../api/api"
import { toast } from 'react-toastify';
import { UserContext } from "../context/user";

export const useRequest = () => {
    const { user } = useContext(UserContext)
    const getConfig = (isProtected) => {
        let config = !isProtected ? {} : {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user}`,
            }
        }

        return config
    }
    const [data, setData] = useState({
        response: null,
        loading: false
    })

    const Post = async (url, data) => {
        setData(prev => ({ ...prev, loading: true }))
        try {
            let config = getConfig(true);
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



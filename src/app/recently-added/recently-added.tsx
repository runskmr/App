import { dispatch } from '../redux';
import Card from '../../components/card/card';
import styles from './recently-added.module.css'
import { useState, useEffect } from 'react';
import { ImageInfo } from '../../global-types';
import { useSelector } from 'react-redux';
import { GlobalState } from '../redux';
import { useLocation } from 'react-router-dom';
const RecentlyAdded = () => {

    const { allItems } = useSelector((store: GlobalState) => store) || {}
    const [list, setList] = useState<Array<ImageInfo>>([])
    const { pathname } = useLocation();

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (pathname === '/favourites') {
            setList([...allItems].filter(item => item.favorited))
        } else {
            setList([...allItems])
        }
        viewDetails('')
    }, [allItems, pathname])

    const getData = async () => {
        const result = await fetch('https://agencyanalytics-api.vercel.app/images.json')
        const data = await result.json()

        const sortedData = (data || [])?.sort((a: ImageInfo, b: ImageInfo) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));

        dispatch({ type: 'setAllItems', payload: [...sortedData] })
    }

    const viewDetails = (id: string) => {
        dispatch({ type: 'setdetails', payload: id })
    }

    return (<div className={`${styles.cardContainer}`}>

        {list?.map(item => (<div key={item.id} className={`${styles.cardWrapper}`} onClick={() => viewDetails(item.id)}>
            <Card info={item} />
        </div>))}
    </div>)
}

export default RecentlyAdded
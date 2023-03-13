import styles from './info.module.css'
import { useSelector } from 'react-redux'
import Card from '../../components/card/card'
const InfoSection = () => {
    const { allItems, selectedItemId } = useSelector(store => store)

    const item = allItems?.find(item => item?.id === selectedItemId) || {}

    if (!item.id) {
        return <div className={`${styles.infoWrapper}`}>Select the item to view the details</div>
    }

    return <div className={`${styles.infoWrapper}`}>
        <Card info={item || {}} showInfo />
    </div>
}

export default InfoSection
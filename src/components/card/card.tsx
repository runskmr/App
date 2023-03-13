import { type } from 'os'
import styles from './card.module.css'
import { ImageInfo } from '../../global-types'
import heartIcon from '../../assets/heart.svg'
import heartIconFilled from '../../assets/heart-filled.svg'
import { dispatch } from '../../app/redux'

type CardProps = {
    info: ImageInfo,
    showInfo?: boolean
}
const Card = (props: CardProps) => {

    const { info, showInfo } = props
    const { filename, sizeInBytes, url, uploadedBy, createdAt, updatedAt, dimensions, resolution, description, favorited, id } = info

    const converToMb = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2)

    const getFormattedDate = (dateStr: string) => {

        const [, month, date, year] = new Date(dateStr).toDateString().split(' ')
        return `${month} ${date}, ${year}`

    }

    const toggleFavourite = () => {
        dispatch({type: 'setFavourite', payload: id})
    }

    const deleteItem = () => {
        dispatch({type: 'deleteItem', payload: id})
    }

    return (<div className={`${styles.cardWrapper}`}>
        <img src={url} alt="img" />

        <div className='d-flex justify-content-between align-item-center'>
            <div>
                <p className={`${styles.itemName}`}>{filename}</p>
                <p className={`${styles.size}`}>{converToMb(sizeInBytes)}MB</p>
            </div>


            {showInfo && (<img src={favorited ? heartIconFilled : heartIcon} className={`${styles.favIcon}`} onClick={toggleFavourite}/>)}

        </div>


        {
            showInfo && <div className={`${styles.detailedInfo}`}>
                <div className={`${styles.infoItem} ${styles.infoHead}`}>
                    Information
                </div>
                <div className={`${styles.infoItem}`}>
                    <span className={`${styles.label}`}>Uploaded By</span><span>{uploadedBy}</span>
                </div>
                <div className={`${styles.infoItem}`}>
                    <span className={`${styles.label}`}>Created</span><span>{getFormattedDate(createdAt)}</span>
                </div>
                <div className={`${styles.infoItem}`}>
                    <span className={`${styles.label}`}>Last Modified</span><span>{getFormattedDate(updatedAt)}</span>
                </div>
                <div className={`${styles.infoItem}`}>
                    <span className={`${styles.label}`}>Dimensions</span><span>{dimensions?.width} x {dimensions?.height}</span>
                </div>
                <div className={`${styles.infoItem}`}>
                    <span className={`${styles.label}`}>Resolution</span><span>{resolution?.width} x {resolution?.height}</span>
                </div>

                {description && <div>
                    <div className={`${styles.descHead}`}>
                        Description
                    </div>

                    <p className={`${styles.label}`}>
                        {description}
                    </p>
                </div>}

                <button  onClick={deleteItem} className={`${styles.deleteBtn}`}>Delete</button>
            </div>
        }

    </div>)
}

export default Card
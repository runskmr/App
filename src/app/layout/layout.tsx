import Header from "../header/header";
import InfoSection from "../info-section/info-section";
import styles from './layout.module.css'

type LayoutProps = {
    children: React.ReactNode,
}

const Layout = (props: LayoutProps) => {
    const { children } = props
    return <>
        <div className={`flex-grow-1 d-flex`} >
            <div className={`flex-grow-1 ${styles.mainWrapper}`}>
                <Header />
                <div className={` ${styles.bodyContainer}`}>
                    {children}
                </div>
            </div>
            <div>
                <InfoSection />
            </div>
        </div>
    </>
}


export default Layout
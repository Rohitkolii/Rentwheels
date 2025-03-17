import Styles from "../Alert/Alert.module.css"
const Alert = () => {
    return(
        <div className={Styles.alertcon}>
            <div className={Styles.alertinn}>
                <img src="/images/bin.jpg" alt="" />
                <p>Do you want to delete user!</p>
                <div className={Styles.btn}>
                    <button>No</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Alert;
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Styles from "../ErrorPage/ErrorPage.module.css"

const ErrorPage = () => {
    return(
        <>
            <Navbar />
                <section className={Styles.ErrorPage}>
                    <img src="images/error1.png" alt="" />
                    <h1>404</h1>
                    <p>Page you are looking for not found!</p>
                </section>
            <Footer />
        </>
    )
}

export default ErrorPage;
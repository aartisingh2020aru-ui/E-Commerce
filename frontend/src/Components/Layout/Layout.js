import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({children }){
    return(
        <div className="d-flex flex-column min-vh-100">

            <Header/>

            <main className="container py-4 flex-grow-1">
                {children}
            </main>

            <Footer/>

        </div>
    );
}

export default Layout;
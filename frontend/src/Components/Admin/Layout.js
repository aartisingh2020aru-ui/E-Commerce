import Header from "./Header";
import { ToastContainer } from 'react-toastify';


function Layout({children }){
    return(
        <div className="d-flex flex-column min-vh-100">

            <Header/>

            <main className="container py-4 flex-grow-1">
                <ToastContainer />
                {children}
            </main>

            

        </div>
    );
}

export default Layout;
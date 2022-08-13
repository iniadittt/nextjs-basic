import Header from "../components/Header/Header"
import Content from "../components/Content/Content"
import Artikel from "../components/Artikel/Artikel"
import Sidebar from "../components/Sidebar/Sidebar"
import Footer from "../components/Footer/Footer"
import BottomNav from "../components/BottomNav/BottomNav"

export default function Home() {
    return (
        <>
            <Header />
            <Content />
            <Artikel />
            <Sidebar />
            <Footer />
            <BottomNav />
        </>
    )
}
import Navigasi from "./Navigasi"
import LeftNav from "./LeftNav"
import RightNav from "./RightNav"

export default function Header() {
    return (
        <div className="lg:pt-3">
            <Navigasi />
            <div className="lg:mt-10 lg:px-28 lg:flex lg:gap-10">
                <LeftNav />        
                <RightNav />
            </div>
        </div>
    )
}

import SideLeft from "./SideLeft"
import SideRight from "./SideRight"


export default function Sidebar() {
  return (
    <div className="lg:px-28 lg:py-16">
        <div className="lg:flex lg:gap-28">
            <SideLeft />
            <SideRight />
        </div>
    </div>
  )
}

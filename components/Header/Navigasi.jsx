import BasicMenu from "./BasicMenu"
import Link from "next/link"

export default function Navigasi() {
  return (
        <div className="lg:flex lg:justify-around">
            <div className="lg:w-3/12 lg:py-3 lg:px-10 lg:text-gray-800 lg:font-bold lg:text-2xl">
                <Link href="/">
                    <a className="lg:cursor-pointer lg:text-gray-800">NGODINGTERUS</a>
                </Link>
            </div>
            <div className="lg:w-5/12">
                <ul className="lg:flex lg:justify-center lg:h-full lg:py-2">
                    <BasicMenu nama='DASHBOARD' navLink='/' />
                    <BasicMenu nama='TENTANG' navLink='/tentang' />
                    <BasicMenu nama='PROGRAM' navLink='/program' />
                    <BasicMenu nama='GALLERY' navLink='/gallery' />
                </ul>
            </div>
      </div>
  )
}

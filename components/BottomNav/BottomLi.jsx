import Link from "next/link"


export default function BottomLi({ myLink, myText }) {
  return (
    <li className="lg:mb-3 lg:text-gray-300 lg:font-poppins">
        <Link href={myLink}>
            <a>{myText}</a>
        </Link>
    </li>
  )
}

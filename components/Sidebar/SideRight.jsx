import Image from "next/image"


export default function SideRight() {
  return (
    <div className="lg:w-1/2">
        <Image src="/community.svg" alt="KomunitasProgramming" width="100%" height="100%" layout="responsive" />
    </div>
  )
}

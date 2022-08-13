import Image from "next/image"

export default function RightNav() {
  return (
    <div className="lg:w-1/2">
      <Image src="/rightnav.svg" alt="NavImage" width='100%' height='100%' layout="responsive" />
    </div>
  )
}

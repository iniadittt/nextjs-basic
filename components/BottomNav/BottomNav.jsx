import BottomLi from "./BottomLi"

export default function BottomNav() {
  return (
    <div className="lg:bg-slate-900 lg:w-full lg:px-28 lg:py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            <div>
                <p className="lg:text-gray-100 lg:font-poppins lg:text-4xl lg:font-semibold">NgodingTerus</p>
            </div>
            <div>
                <ul>
                    <BottomLi myLink="/" myText="Dashboard" />
                    <BottomLi myLink="/tentang" myText="Tentang" />
                    <BottomLi myLink="/program" myText="Program" />
                    <BottomLi myLink="/gallery" myText="Gallery" />
                </ul>
            </div>
            <div>
                <p className="lg:text-gray-300 lg:font-poppins lg:leading-relaxed">
                    Misi Kami adalah wadah Mahasiswa Universitas Muhammadiyah Cirebon dan sebagai tempat untuk bertukar pikiran dalam hal Programming.
                </p>
            </div>
        </div>
    </div>
  )
}

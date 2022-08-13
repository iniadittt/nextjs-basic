import LeftArtikel from "./LeftArtikel"
import RightArtikel from "./RightArtikel"

export default function Artikel() {
  return (
    <div className="lg:py-16 lg:px-28">
        <div className="lg:flex lg:gap-20">
            <LeftArtikel />
            <RightArtikel />
        </div>
    </div>
  )
}

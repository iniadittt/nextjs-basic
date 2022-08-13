import RecipeReviewCard from "./Card"


export default function Footer() {
  return (
    <div className="lg:bg-gray-100 lg:px-28 lg:py-16">
      <h1 className="lg:text-center lg:mb-12 lg:font-semibold lg:text-2xl lg:text-gray-700">Pertanyaan Yang Sering Diajukan</h1>
        <div className="lg:px-28">
          <RecipeReviewCard question="Apa tanggung jawab seorang Web Developer?" answer="Seorang Web Developer harus memahami kontribusinya dalam perancangan dan pengembangan situs. Berikan jawaban yang menggambarkan proses, kewajiban, dan rencana kamu dalam suatu proyek. Contohnya, Web Developer bertugas merancang, mengembangkan, memperkaya, menguji, dan meluncurkan apikasi situs dengan tujuan menciptakan suatu produk yang user-friendly. Mereka juga harus mampu mengelola dan mengatasi bug pada situs tersebut." />
          <RecipeReviewCard question="Bagaimana metode analisis masalah yang kamu lakukan sebelum mengimplementasikan solusi dalam pemrograman?" answer="Programmer pada dasarnya berperan memberikan solusi atas suatu masalah atau untuk mencapai misi yang ditargetkan melalui sebuah program. Dengan pertanyaan ini, perekrut ingin mengetahui kerangka pemikiran yang kamu terapkan saat bekerja nanti." />
          <RecipeReviewCard question="Pentingkah sertifikasi dan pelatihan bagimu sebagai seorang programmer?" answer="Ada programmer yang menempuh jalur otodidak. Ada juga yang memilih menimba ilmu di pelatihan. Manapun jalur yang kamu pilih, ceritakan preferensimu pada perekrut agar mereka mengerti dari jalur mana kamu berasal dan ke mana orientasimu di masa depan." />
          <RecipeReviewCard question="Apa kepanjangan dari akronim WYSIWYG? Apa manfaatnya dalam proses pemrograman?" answer="Sebuah akronim bisa saja ditanyakan karena sehari-hari dipakai oleh tim programming di perusahaan tersebut. Dalam konteks WYSIWYG, atau What You See Is What You Get, jelaskan pula manfaatnya kepada si perekrut dalam proses pemrograman, misalnya saat mengerjakan user interface untuk proyek website." />
          <RecipeReviewCard question="Bagaimana cara mencari elemen yang terduplikasi dalam integer larik/array?" answer="Masing-masing bahasa pemrograman mungkin punya langkah spesifiknya sendiri. Bahkan di satu bahasa, Java misalnya, setidaknya ada 3 cara mencari duplikasi dalam array." />
        </div>
    </div>
  )
}

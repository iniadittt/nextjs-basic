import ActionAreaCard from "./Card"

export default function Content() {
  return (
    <div className="lg:bg-gray-100 lg:px-28 lg:py-16">
        <h1 className="lg:text-center lg:font-poppins lg:text-2xl lg:font-medium lg:mb-8 lg:text-gray-800">Apa itu <span className="text-blue-600">NgodingTerus</span>?</h1>
        <p className="lg:px-48 lg:mb-16 lg:text-center lg:font-poppins lg:text-sm lg:leading-relaxed lg:text-gray-800">NgodingTerus adalah Komunitas Programming yang ada di Universitas Muhammadiyah Cirebon. Komunitas ini bertujuan sebagai wadah mahasiswa terhadap minat programming baik itu web programming, mobile programming, dan lain sebagainya. Dengan adanya Komunitas NgodingTerus, mahasiswa mampu belajar dan berkembang terutama dalam skill programming.</p>
        <div className="lg:flex lg:justify-center lg:gap-10">
            <ActionAreaCard linkImage='/html.png' altImage='html' titleCard='Hypertext Markup Language' descCard='Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet.' />
            <ActionAreaCard linkImage='/css.png' altImage='css' titleCard='Cascading Style Sheets' descCard='Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam.' />
            <ActionAreaCard linkImage='/js.jpg' altImage='javascript' titleCard='JavaScript' descCard='JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer dan dapat bekerja disebagian besar web browser seperti Google Chrome.' />
        </div>
    </div>
  )
}

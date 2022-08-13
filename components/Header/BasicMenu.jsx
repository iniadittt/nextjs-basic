import Button from '@mui/material/Button';
import Link from 'next/link'

export default function BasicMenu({ nama, navLink }) {
  return (
    <div>
      <Link href={navLink}>
        <Button className="lg:py-2 lg:px-5 lg:mr-1 lg:text-gray-800 lg:font-semibold lg:hover:bg-blue-600 lg:hover:text-gray-100">{nama}</Button>
      </Link>
    </div>
  );
}

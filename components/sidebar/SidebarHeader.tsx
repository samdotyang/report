import { Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function SidebarHeader( { children }: any) {
  return (
    <Nav.Item>
      <Link href="/" passHref legacyBehavior>
        <Nav.Link className='md:block text-center md:pb-2 text-black dark:text-white mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4'>
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}
import { Nav } from 'react-bootstrap';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

type SidebarNavItemProps = {
    href: string;
    // icon?: IconDefinition;
  } & PropsWithChildren
  
  const SidebarNavItem = (props: SidebarNavItemProps) => {
    const {
    //   icon,
      children,
      href,
    } = props
  
    return (
      <Nav.Item>
        <Link href={href} passHref legacyBehavior>
          <Nav.Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded px-3 py-2 d-flex align-items-center">
            {/* {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
              : <span className="nav-icon ms-n3" />} */}
            {children}
          </Nav.Link>
        </Link>
      </Nav.Item>
    )
  }
  


export default function SidebarNav() {
    return (
        <ul className="list-unstyled">
            <li><SidebarNavItem href="/about">About</SidebarNavItem></li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
        </ul>
    )
}
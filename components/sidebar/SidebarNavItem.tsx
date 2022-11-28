import { Nav } from 'react-bootstrap';
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

type SidebarNavItemProps = {
    href: string;
    // icon?: IconDefinition;
  } & PropsWithChildren
  
export default function SidebarNavItem(props: SidebarNavItemProps) {
    const router = useRouter();
    const {
    //   icon,
        children,
        href,
    } = props

    return (
        <Nav.Item className="items-center">
            <Link href={href} passHref legacyBehavior>
                <Nav.Link
                    className={
                        "text-xs uppercase py-3 pl-6 font-bold block text-blueGray-700 hover:text-gray-500 " +
                        (router.pathname.indexOf(href) !== -1 ? "bg-mac-sidebar-gray-select" : "bg-inherit")
                    }
                >
                    {children}
                </Nav.Link>
            </Link>
        </Nav.Item>
    )
}
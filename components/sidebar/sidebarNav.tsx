import SidebarNavItem from "./SidebarNavItem";
import Nav from "@components/_nav";

export default function SidebarNav() {
  return (
    <>
      {Nav.map ( (nav) => (
        <ul key={nav.title} className="md:flex-col md:min-w-full flex flex-col list-none px-6">
          <div className="md:min-w-full text-slate-600 dark:text-slate-400 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            {nav.title}
          </div>
          {nav.links.map ( (subnav) => (
            <SidebarNavItem key={subnav.name} href={subnav.href}>{subnav.name}</SidebarNavItem>
          ))}
        </ul>
      ))}
    </>
  );
}
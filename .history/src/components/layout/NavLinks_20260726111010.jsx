import { navigation } from "@/data/navigation";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
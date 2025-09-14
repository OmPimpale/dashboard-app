import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-xs text-gray-800">
      <Link to="/" className="hover:text-blue-500 transition-colors duration-200">
        Home
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={routeTo}>
            {" / "}
            {isLast ? (
              <span className="text-gray-500 capitalize">{name}</span>
            ) : (
              <Link to={routeTo} className="hover:text-blue-500 capitalize transition-colors duration-200">
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

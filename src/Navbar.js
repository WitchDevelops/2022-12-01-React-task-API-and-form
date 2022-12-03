import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export default function Navbar() {
    
    return <nav className="nav">
        <Link to="/" className="site-title">Users</Link>
        <ul>
            <CustomLink to="/pricing">Pricing</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/rejestracja">Rejestracja</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}
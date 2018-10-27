import Link from 'next/link';

const Header = () => (
    <div>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/about'>
            <a>About</a>
        </Link>
        <style jsx>{`
            a {
                margin-right: 15px;
                color: green
            }

            a:hover {
                color: red;
            }
        `}</style>
    </div>
);

export default Header;

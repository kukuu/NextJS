import Link from 'next/link';

const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a> </Link> </li>
            <li><Link href="/"><a>About</a> </Link> </li>
        </ul>
        <style jsx>{`
            ul {
               background: #333;
               colorr: #fff;
               lisst-style: none;
               display: flex;
            }

            ul li {
                font-size: 18px;
                margin-right: 20px;
            }

            ul li a {
                color: #fff;
                text-decoration: none;
            }
        `}</style>
    </div>
);
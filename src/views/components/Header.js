import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/artists">
      <a style={linkStyle}>Artists</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';

export default function NotFound() {
  return (
    <div
      style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ maxWidth: '640px', padding: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image src={Logo} width={64} height={64} alt="ECTickets Logo" className="size-16" />
        </div>
        <h1 style={{ fontSize: '2rem', lineHeight: '5rem', fontWeight: 700, color: '#767676' }}>
          Page Not Found
        </h1>
        <Link
          href="/"
          style={{
            maxWidth: '64px',
            padding: '0.5rem 2rem',
            border: '1px solid gray',
            backgroundColor: '#767676',
            color: '#fff',
            fontSize: '1rem',
            marginTop: '2rem',
            borderRadius: '1rem',
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

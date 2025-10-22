import Image from 'next/image';
import ECTicketsLogo from '../../public/logo.png';
import ECTicketsLogoBlackHorizontal from '../../public/assets/logo/logo-black-horizontal.png';
import ECTicketsLogoWhiteHorizontal from '../../public/assets/logo/logo-white-horizontal.png';

export function Logo() {
  return <Image src={ECTicketsLogo} width={32} height={32} className='size-6' alt='ECTickets Logo'/>;
}

export function HorizontalLogo({ colorScheme }: { colorScheme: 'dark' | 'light' }) {
  return colorScheme === 'dark' ? (
    <Image
      src={ECTicketsLogoWhiteHorizontal}
      width={160}
      height={40}
      alt='ECTickets Logo White Horizontal'
    />
  ) : (
    <Image
      src={ECTicketsLogoBlackHorizontal}
      width={160}
      height={40}
      alt='ECTickets Logo Black Horizontal'
    />
  )
}

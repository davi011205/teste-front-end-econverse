import logoEconverse from '../../assets/images/logo.png';
import './Logo.scss';

interface LogoProps {
  height?: number;
}

export function Logo({ height = 44 }: LogoProps) {
  return <img className="logo" src={logoEconverse} alt="Econverse" height={height} />;
}

import Desktop from '../assets/illustration-sign-up-desktop.svg';
import Tablet from '../assets/illustration-sign-up-tablet.svg';
import Mobile from '../assets/img.png';

export default function Illustration() {
    return (
        <picture>
            <source src={Desktop} media="(min-width: 1440px)" />
            <source src={Tablet} media="(min-width: 768px)" />
            <img src={Mobile} alt="Illustration" loading="lazy" />
        </picture>
    );
}

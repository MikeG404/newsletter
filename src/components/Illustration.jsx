import Desktop from '../assets/illustration-sign-up-desktop.svg';
import Tablet from '../assets/illustration-sign-up-tablet.svg';
import Mobile from '../assets/illustration-sign-up-mobile.svg';

export default function Illustration() {
    return (
        <div className="illustration-container">
            <img 
                src={Mobile} 
                alt="Illustration" 
                loading="lazy" 
                className="block md:hidden"
            />
            <img 
                src={Tablet} 
                alt="Illustration" 
                loading="lazy" 
                className="hidden md:block xl:hidden"
            />
            <img 
                src={Desktop} 
                alt="Illustration" 
                loading="lazy" 
                className="hidden xl:block"
            />
        </div>
    );
}

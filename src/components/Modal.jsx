import CheckIcon from '/check.png';
import Button from "./Button.jsx";

export default function Modal() {
    return (
        <section className="fixed inset-0 bg-opacity-50 z-50 h-screen">
            <div className="flex flex-col gap-4 items-center px-16 py-16">
                <img src={CheckIcon} alt="Check icon" className="w--16 h-16"/>
                <h2>Thanks for subscribing!</h2>
                <p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
                <Button text='Dismiss message' variant='primary'/>
            </div>
        </section>
    )
}


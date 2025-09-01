import CheckIcon from '/check.png';
import Button from "./Button.jsx";

export default function Modal({ email, onClose }) {
    return (
        <section className="fixed inset-0 bg-[#36384D] bg-opacity-50 z-50 h-screen flex items-center justify-center">
            <div className="bg-white rounded-3xl p-10 max-w-md mx-4">
                <div className="flex flex-col gap-6 items-center text-center">
                    <img src={CheckIcon} alt="Check icon" className="w-16 h-16"/>
                    <h2 className="text-[40px] font-bold leading-none">Thanks for subscribing!</h2>
                    <p className="text-preset-2-regular">A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                    <Button text='Dismiss message' variant='primary' onClick={onClose}/>
                </div>
            </div>
        </section>
    )
}


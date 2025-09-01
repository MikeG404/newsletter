import { useState } from 'react';
import './App.css'
import Illustration from "./components/Illustration.jsx";
import AdvantageList from "./components/AdvantageList.jsx";
import TextInput from "./components/TextInput.jsx";
import Button from "./components/Button.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Valid email required');
    } else if (!validateEmail(email)) {
      setError('Valid email required');
    } else {
      setError('');
      setIsModalOpen(true);
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail('');
  }

  return (
      <main className="bg-[#36384D] md:flex md:flex-col md:items-center md:px-20 md:py-[73px]">
          <section className="card md:p-10 xl:flex xl:flex-row-reverse xl:p-8 gap-16 bg-white rounded-3xl">
            <Illustration />
            <section className="flex flex-col justify-center gap-10 px-[24px] py-10 md:gap-6 md:px-0 md:pb-0">
                <div className="flex flex-col gap-6">
                  <h1 className="text-[40px] md:text-[56px] font-bold leading-none">Stay updated!</h1>
                    <p className="text-preset-2-regular">Join 60,000+ product managers receiving monthly updates on:</p>
                    <AdvantageList />
                </div>
                <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <TextInput name="email" label="Email address" placeholder="email@company.com" error={error} value={email} handleChange={handleChange} />
                    <Button text='Subscribe to monthly newsletter' variant='primary'/>
                </form>
            </section>
          </section>
                     {isModalOpen && <Modal email={email} onClose={handleCloseModal} />}
      </main>
  )
}

export default App

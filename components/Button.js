"use client"
import {useState} from 'react'
import Modal from '@/components/Modal';

const Button = ({buttonId}) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalKey, setModalKey] = useState(0);
      const [loading, setLoading] = useState(false);
      const [triggeredBy, setTriggeredBy] = useState(null);

      const handleOpenModal = () => {
        setTriggeredBy(buttonId);
        setIsModalOpen(true);
        
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalKey(prevKey => prevKey + 1);
      };
    
      const handleSubmit = async (name, email) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!nameRegex.test(name) || name.length < 3)  {
      alert("Kindly enter a valid name with at least 3 letters (alphabets only).");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address (e.g., name@example.com).");
      return;
    }
    setLoading(true);

        try {
          const response = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
          });
    
          if (response.ok) {
            alert("Registration Successful!");
            setIsModalOpen(false);
          } else {
            alert("Registration Failed!");
          }
        } catch (error) {
          console.error("Error:", error);
        }finally {
          setLoading(false); // Hide loading state after response
        }
      }
  return (
    <>
    <div>
        <button onClick={handleOpenModal} className="mt-4 px-5 py-3 bg-[#a78a7f] hover:bg-[#c5a295] text-white rounded-md animate-bounce ">Get the Course</button>
                <Modal key={modalKey}  isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} loading={loading} triggeredBy={triggeredBy}  />
    </div>
    </>
  )
}

export default Button

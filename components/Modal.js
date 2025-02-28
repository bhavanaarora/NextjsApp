import { useState,useEffect } from "react";

export default function Modal({ isOpen, onClose, onSubmit,loading,triggeredBy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#735751] p-6 rounded-md w-96">
     <div className="text-end"> <button onClick={onClose} className="bg-[#a78a7f] hover:bg-[#c5a295] text-white px-4 py-2 rounded"> X
     </button></div>
          
        <h2 className="text-xl font-bold text-white text-center pb-2">Register Now </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
           autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           autoComplete="off"
        />
        <div className="flex justify-center gap-2 mt-4">
          
          {/* <button
            onClick={() => onSubmit(name, email)}
            className="bg-[#a78a7f] text-white px-4 py-2 rounded hover:bg-[#c5a295]"
          >
            Submit
          </button> */}

<button
  onClick={() => onSubmit(name, email)}
  disabled={loading} // Disable button when loading
  className={`bg-[#a78a7f] text-white px-4 py-2 rounded hover:bg-[#c5a295] 
              ${loading ? "opacity-50 cursor-not-allowed" : ""}`} // Add opacity when loading
>
  {loading ? "Submitting..." : "Submit"} {/* Change text dynamically */}
</button>
        
          
        </div>
      </div>
    </div>
  );
}






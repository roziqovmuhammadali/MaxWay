import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://example.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setResponse(data.message); // Serverdan kelgan ma'lumotni o'qib, uni statega saqlaymiz
    } catch (error) {
      setResponse("Server bilan bog'lanishda xatolik yuz berdi.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <h1>Tizimga kirish</h1>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email manzili bilan tizimga kiring
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading} // Agar yuborish jarayoni boshlangan bo'lsa, inputni bloklang
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={loading} // Agar yuborish jarayoni boshlangan bo'lsa, tugmani bloklang
          >
            {loading ? "Yuborilmoqda..." : "Yuborish"}
          </button>
        </div>
      </form>
      {response && <p className="text-center">{response}</p>}{" "}
      {/* Serverdan kelgan javobni ekranga chiqarish */}
    </div>
  );
}

export default EmailForm;

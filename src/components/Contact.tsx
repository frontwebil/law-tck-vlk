import { motion } from "framer-motion";
import React, { useState } from "react";

export function Contact() {
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_BOT_API_KEY;
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleChangePhone = (phone: string) => {
    const value = phone.replace(/\D/g, "");
    setPhone(value);
  };

  const sendBookingNotification = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const inputContents = [
      "siteId:#1",
      "",
      "*Заявка з Адвокат по ТЦК/ВЛК",
      "",
      `👤 *Ім'я:* ${name}`,
      `👤 *Прізвище:* ${surname}`,
      `📱 *Номер телефону:* ${phone}`,
      `📩 *Запит:* ${comment}`,
    ];

    const message = inputContents.join("\n");

    try {
      const response = await fetch(URI_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Telegram notification error:", error);
      throw new Error("Failed to send booking notification");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        {/* Title + Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#f5f0e8] mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-[#a09882] font-sans text-xl font-light">
            Ми готові обговорити вашу справу та запропонувати ефективні рішення.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1816] p-8 md:p-12 border border-[#2a2520] shadow-2xl rounded-lg"
        >
          <form className="space-y-8" onSubmit={sendBookingNotification}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold tracking-widest text-[#c9a84c] uppercase opacity-80"
                >
                  Ім'я
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-[#2a2520] py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-sans text-[#f5f0e8] text-lg placeholder-[#a09882]/30"
                  placeholder="Ваше ім'я"
                  value={name}
                  onChange={(el) => setName(el.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-bold tracking-widest text-[#c9a84c] uppercase opacity-80"
                >
                  Прізвище
                </label>
                <input
                  required
                  type="text"
                  id="surname"
                  className="w-full bg-transparent border-b border-[#2a2520] py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-sans text-[#f5f0e8] text-lg placeholder-[#a09882]/30"
                  placeholder="Ваше прізвище"
                  value={surname}
                  onChange={(el) => setSurname(el.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-bold tracking-widest text-[#c9a84c] uppercase opacity-80"
              >
                Телефон
              </label>
              <input
                required
                type="phone"
                id="phone"
                className="w-full bg-transparent border-b border-[#2a2520] py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-sans text-[#f5f0e8] text-lg placeholder-[#a09882]/30"
                placeholder="+38 (050) - 000 - 0000"
                value={phone}
                onChange={(e) => handleChangePhone(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-bold tracking-widest text-[#c9a84c] uppercase opacity-80"
              >
                Повідомлення
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-[#2a2520] py-3 focus:outline-none focus:border-[#c9a84c] transition-colors font-sans text-[#f5f0e8] text-lg resize-none placeholder-[#a09882]/30"
                placeholder="Опишіть вашу ситуацію..."
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c9a84c] text-[#0f0f0f] py-4 font-sans uppercase tracking-widest text-sm font-bold hover:bg-[#d4b65c] transition-colors duration-300 mt-6"
            >
              Надіслати запит
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

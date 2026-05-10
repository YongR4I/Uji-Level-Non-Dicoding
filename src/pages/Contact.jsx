import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-80px" },
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay,
    },
  });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    // Menghilangkan notifikasi secara otomatis setelah 3 detik
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bsvalzq",
        "template_ak02rzk",
        form.current,
        "Jf5CYDdUQAoteHpof"
      )
      .then(
        () => {
          showNotification("Pesan berhasil dikirim!", "success");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          showNotification("Gagal mengirim pesan!", "error");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #eef3ff 100%, #f0edff 50%, #f8f9fb 0%)",
      }}
    >
      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 left-0 right-0 mx-auto w-max z-[100] px-6 py-3 rounded-full shadow-lg backdrop-blur-xl bg-white/70 text-slate-800 text-sm font-sans flex items-center gap-3"
          >
            {notification.type === "success" ? (
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">
                ✓
              </span>
            ) : (
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs">
                ✕
              </span>
            )}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, #c4b5fd 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          {...fadeUp(0)}
          className="text-5xl md:text-6xl font-telegraf font-bold text-slate-900 text-center mb-16 tracking-tight"
        >
          Diskusikan Kebutuhan Anda
        </motion.h2>

        {/* Form Section */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          {...fadeUp(0.1)}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Masukkan Nama"
              required
              className="w-full px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 outline-none focus:outline-none focus:ring-0"
            />

            <input
              type="email"
              name="email"
              placeholder="Masukkan Email"
              required
              className="w-full px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 outline-none focus:outline-none focus:ring-0"
            />
          </div>

          <textarea
            name="message"
            placeholder="Pesan"
            rows="6"
            required
            className="w-full px-6 py-4 rounded-[2rem] bg-white/80 backdrop-blur-sm text-slate-800 outline-none focus:outline-none focus:ring-0 resize-none"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 text-white px-10 py-4 rounded-full font-sas"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </motion.button>
        </motion.form>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">

          {/* Instagram Skanic Link */}
          <motion.a
            href="https://www.instagram.com/smkn1ciomas?igsh=MTM1bXZndWViNmltZQ=="
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(0.2)}
            whileHover={{ y: -5 }}
            className="bg-blue-600 p-8 rounded-[2rem] text-white flex items-center gap-4 shadow-xl shadow-blue-500/20 cursor-pointer"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <FaInstagram className="text-2xl" />
            </div>

            <div>
              <h4 className="font-sans">smkn1ciomas</h4>
              <p className="text-xs opacity-80">
                Ikuti skanic di Instagram.
              </p>
            </div>
          </motion.a>

          {/* Instagram PPLG Link */}
          <motion.a
            href="https://www.instagram.com/pplgsmkn1ciomas?igsh=MThqMmZrbXhtbmNjMQ=="
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(0.3)}
            whileHover={{ y: -5 }}
            className="bg-blue-600 p-8 rounded-[2rem] text-white flex items-center gap-4 shadow-xl shadow-blue-500/20 cursor-pointer"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <FaInstagram className="text-2xl" />
            </div>

            <div>
              <h4 className="font-sans">pplgsmkn1ciomas</h4>
              <p className="text-xs opacity-80">
                Lihat konten seru kami di Instagram.
              </p>
            </div>
          </motion.a>

          {/* Lokasi Link */}
          <motion.a
            href="https://maps.app.goo.gl/bjciBWkA4g3KYqdA9"
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(0.4)}
            whileHover={{ y: -5 }}
            className="bg-blue-600 p-8 rounded-[2rem] text-white flex items-center gap-4 shadow-xl shadow-blue-500/20 cursor-pointer"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shrink-0">
              <FaMapMarkerAlt className="text-2xl" />
            </div>

            <div>
              <h4 className="font-sans">Lokasi</h4>
              <p className="text-xs opacity-80 leading-tight">
                Laladon, Ciomas, Bogor
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
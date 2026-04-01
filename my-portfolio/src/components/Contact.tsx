import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mnnjzobo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-bgLight text-textPrimary min-h-[90vh] py-28 px-6 relative">
      <motion.h2
        className="text-4xl font-bold text-center text-textDark mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        className="w-12 h-1 bg-accent mx-auto mb-6 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-center text-textSecondary max-w-lg mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Whether you have a question, an opportunity, or just want to say hello — my inbox is open.
      </motion.p>

      <motion.form
        className="max-w-2xl mx-auto bg-bgCard border border-textSecondary/10 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className="block text-sm font-medium text-textSecondary mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 rounded-lg bg-bgLight border border-textSecondary/20 text-textPrimary placeholder-textSecondary/40 focus:outline-none focus:border-accent transition"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-textSecondary mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 rounded-lg bg-bgLight border border-textSecondary/20 text-textPrimary placeholder-textSecondary/40 focus:outline-none focus:border-accent transition"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-textSecondary mb-1">Message</label>
          <textarea
            name="message"
            className="w-full p-3 rounded-lg bg-bgLight border border-textSecondary/20 text-textPrimary placeholder-textSecondary/40 focus:outline-none focus:border-accent transition resize-none"
            placeholder="What's on your mind?"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 disabled:opacity-50 transition"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="mt-4 text-center text-accent text-sm">Message sent — I'll be in touch!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-400 text-sm">Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;

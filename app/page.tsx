"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NAITLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Activities", link: "#activities" },
    { name: "Differentiator", link: "#unique" },
    { name: "NAIT Sabbath", link: "#sabbath" },
    { name: "Contact Us", link: "#contact" },
  ];

  const whatsappLink = "https://whatsapp.com/channel/0029Vb6l6qg9mrGW7Onnet40";
  const contactFormLink = "https://forms.gle/Snid5S7UBQEoPhEv6";

  return (
    <div className="bg-black text-white scroll-smooth overflow-x-hidden">
      {/* Animated Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-widest text-blue-400 drop-shadow-[0_0_14px_rgba(59,130,246,0.8)]">
            NAIT
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-blue-400 transition">
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="block py-2 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
        >
          Network of Adventists in Technology (NAIT)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 max-w-3xl text-lg md:text-xl text-gray-300"
        >
          We are building a vibrant community of Adventist professionals, students, and enthusiasts
          in the technology space. We build capacity, collaborate on projects, organize summits,
          and leverage our God-given skills for the advancement of the Church and society.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl px-10 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition transform shadow-[0_0_25px_rgba(99,102,241,0.8)]"
          >
            Join NAIT
          </a>
        </motion.div>
      </section>

      {/* About / Aim */}
      <section id="about" className="py-12 md:py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-blue-400 drop-shadow-[0_0_16px_rgba(59,130,246,0.75)]">
          Our Aim
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          To build a strong network of Adventists in technology for capacity building grounded
          on Adventist values and to contribute to the growth of the Church and community
          through faith-driven technological initiatives.
        </p>
      </section>

      {/* Core Activities */}
      <section id="activities" className="py-12 md:py-16 px-6 bg-white/5 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-purple-400 drop-shadow-[0_0_16px_rgba(168,85,247,0.75)]">
          Core Activities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Annual NAIT Summits",
              description:
                "Bringing together Adventist tech thought leaders, enthusiasts, church leaders, and innovators on identified themes.",
            },
            {
              title: "Capacity-Building Meetups",
              description:
                "Practical sessions including job searching & career mentorship, CV/portfolio development, project reviews, and technical bootcamps,",
            },
            {
              title: "Community",
              description:
                "An active online + offline community to share job opportunities, collaborate on projects, and exchange resources and expertise.",
            },
            {
              title: "Project Development",
              description:
                "Collaborative initiatives (contracted or voluntary) to solve real Church challenges.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-4 text-blue-300">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Differentiator */}
      <section id="unique" className="py-12 md:py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-cyan-400 drop-shadow-[0_0_16px_rgba(34,211,238,0.75)]">
          Key Differentiator
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          NAIT is a faith-centered professional community grounded in Adventist values.
          Technological projects and initiatives are designed with the Church’s mission in mind.
          Members strengthen professional capacity while reinforcing spiritual identity,
          and benefit from a trusted network of like-minded professionals balancing faith and innovation.
        </p>
      </section>

      {/* NAIT Sabbath */}
      <section id="sabbath" className="py-12 md:py-16 px-6 max-w-6xl mx-auto text-center bg-white/5 backdrop-blur-lg rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 drop-shadow-[0_0_18px_rgba(250,204,21,0.8)]">
          NAIT Sabbath
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
          Be part of the inaugural NAIT Sabbath on <strong>May 30, 2026</strong>. <br />
          Venue: <strong>ZUSDA Church (Zetech University)</strong>
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl py-6 px-10 bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition shadow-[0_0_25px_rgba(255,193,7,0.8)]"
        >
          View Channel Updates
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 drop-shadow-[0_0_16px_rgba(59,130,246,0.75)]">
            Contact Us
          </h2>
          <p className="text-gray-400">
            Reach out to the Network of Adventists in Technology for inquiries, partnerships, and collaboration.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <a
            href={contactFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center rounded-2xl py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition shadow-[0_0_25px_rgba(99,102,241,0.8)]"
          >
            Open Contact Form
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/10">
        © 2026 Network of Adventists in Technology (NAIT) · Faith · Innovation · Community
      </footer>
    </div>
  );
}

// PilatoComingSoon.jsx
import React, { useState } from "react";
import { CheckCircle, Leaf, Award, Mail, Phone, Factory, Sprout, FlaskConical, Truck, ClipboardCheck, Recycle, X, Menu } from "lucide-react";
import { motion } from "framer-motion";

const PilatoComingSoon = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your interest in Pilato. We have registered ${email} for early access.`
    );
    setEmail("");
  };

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Quality", href: "#quality" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "About", href: "#about" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="bg-gray-50 text-xs border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-gray-600">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><Award size={14}/> ISO 22000:2018</span>
              <span className="flex items-center gap-1"><CheckCircle size={14}/> FSSAI Licensed</span>
              <span className="flex items-center gap-1"><Leaf size={14}/> 100% Natural</span>
            </div>
            <span>Coming Soon | info@pilato.com</span>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-green-900 tracking-tight">PILATO</span>
            <span className="pl-3 text-sm text-gray-500 border-l border-gray-300">Premium Food Manufacturing</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-green-900 transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-green-900 border border-green-900 transition">
              Get In Touch
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-green-900"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="bg-white shadow-lg md:hidden px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-gray-700 hover:text-green-900">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block text-center bg-green-900 text-white px-4 py-2 rounded-lg">
              Get In Touch
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-light text-green-900 leading-tight">
              Revolutionizing <span className="text-yellow-500 font-semibold">Healthy Pasta</span>
            </h1>
            <p className="text-lg text-gray-600">
              Premium pasta crafted with care, enhanced with signature seasoning blends for taste + nutrition.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Food Safety Certified", "Zero Preservatives", "High Protein"].map((f, i) => (
                <span key={i} className="flex items-center gap-2 text-green-900 font-medium">
                  <CheckCircle size={18}/> {f}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-green-900 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition">
                Partner With Us
              </a>
              <a href="#products" className="border border-green-900 text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition">
                View Products
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 bg-gradient-to-br from-green-900 to-yellow-700 p-6 rounded-2xl shadow-lg"
          >
            {[
              { icon: "🍝", title: "Premium Pasta", desc: "Whole grain & refined" },
              { icon: "🥘", title: "Gourmet Macaroni", desc: "Shapes & sizes" },
              { icon: "🌿", title: "Herb Blends", desc: "Signature seasoning" },
              { icon: "📦", title: "Bulk Supply", desc: "B2B & retail" },
            ].map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-4 shadow hover:shadow-xl transition">
                <div className="text-3xl mb-2">{p.icon}</div>
                <h4 className="font-semibold text-green-900">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-green-900">Our Quality Commitment</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">Adhering to international food safety & quality standards.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { icon: <FlaskConical size={28}/>, title: "Lab Tested", desc: "Rigorous testing for purity & safety." },
              { icon: <Factory size={28}/>, title: "Modern Facility", desc: "Automated hygienic production." },
              { icon: <Sprout size={28}/>, title: "Natural Sourcing", desc: "Direct from organic farms." },
              { icon: <ClipboardCheck size={28}/>, title: "Certified", desc: "ISO 22000:2018 & GMP certified." },
              { icon: <Recycle size={28}/>, title: "Sustainable Packaging", desc: "Eco-friendly freshness guaranteed." },
              { icon: <Truck size={28}/>, title: "Supply Chain Excellence", desc: "Temperature-controlled logistics." },
            ].map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-900 to-yellow-600 text-white rounded-full flex items-center justify-center mb-4">
                  {q.icon}
                </div>
                <h4 className="text-green-900 font-semibold">{q.title}</h4>
                <p className="text-gray-600 text-sm">{q.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-green-900 text-white text-center">
        <h2 className="text-3xl font-light">Be Among the First to Experience Pilato</h2>
        <p className="mt-2 opacity-80">Join our exclusive launch list for early access & distributor opportunities</p>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto flex gap-3 bg-white rounded-lg overflow-hidden p-2">
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your business email"
            required
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button type="submit" className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
            Get Early Access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white mb-3 font-semibold">About Pilato</h4>
            <p className="text-sm">Premium healthy pasta blending tradition + nutrition science for GenZ & Millennials.</p>
          </div>
          <div>
            <h4 className="text-white mb-3 font-semibold">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500">Traditional Pasta</a></li>
              <li><a href="#" className="hover:text-yellow-500">Whole Grain Series</a></li>
              <li><a href="#" className="hover:text-yellow-500">Specialty Macaroni</a></li>
              <li><a href="#" className="hover:text-yellow-500">Seasoning Blends</a></li>
              <li><a href="#" className="hover:text-yellow-500">Private Label</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-3 font-semibold">Business</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500">Distributor Partnerships</a></li>
              <li><a href="#" className="hover:text-yellow-500">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-yellow-500">Export Inquiries</a></li>
              <li><a href="#" className="hover:text-yellow-500">Quality Certifications</a></li>
              <li><a href="#" className="hover:text-yellow-500">Sustainability Report</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-3 font-semibold">Contact</h4>
            <p className="text-sm">
              info@pilato.com<br/> +91-XXXXXXXXXX<br/> Corporate Office: Coming Soon
            </p>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">
          © 2024 Pilato Food Manufacturing Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PilatoComingSoon;

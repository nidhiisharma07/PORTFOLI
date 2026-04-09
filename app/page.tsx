import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      {/* HERO SECTION */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-center"
      >
        Nidhi Sharma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xl text-gray-400 text-center"
      >
        Full Stack Developer • ML Enthusiast
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* PROJECTS */}
      <section id="projects" className="mt-24 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-900 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Disease Prediction System</h3>
            <p className="text-gray-400 mt-2">
              ML-based system using SVM & Naive Bayes for predicting diseases.
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">E-commerce Website</h3>
            <p className="text-gray-400 mt-2">
              Full-stack e-commerce platform with modern UI and backend integration.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-24 mb-20 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-4">
          nidhi@example.com
        </p>
      </section>
    </main>
  );
}

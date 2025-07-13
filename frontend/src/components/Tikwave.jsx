import React from 'react';

const Homepage = () => {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-20 px-4"
        style={{ backgroundImage: "url('/doing.jpg')" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Built for Africa. Powered by Us.
          </h1>
          <p className="mt-4 text-xl">
            Tikwave makes digital payments and financial access simple, local, and human.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-bold">
            Get Early Access
          </button>
        </div>
      </section>

      {/* Celebrating Heritage */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Celebrating Our Heritage</h2>
        <p className="text-lg mb-8 text-gray-600">
          From Lagos to Nairobi, Cape Town to Cairo — we celebrate African diversity, joy, and strength.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {[
            { img: '/doing.jpg', title: 'Traditional Celebration', subtitle: 'Unity in Culture' },
            { img: '/culture.jpg', title: 'Future Leaders', subtitle: 'Driven by Excellence' },
            { img: '/pride.jpg', title: 'Cultural Pride', subtitle: 'Vibrant Traditions' },
            { img: '/culture.jpg', title: 'Community Spirit', subtitle: 'Together We Rise' },
          ].map(({ img, title, subtitle }, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4 text-left">
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="text-sm text-gray-600">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We're Building */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What We’re <span className="text-orange-600">Building</span></h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Tikwave is simplifying how Africans send, receive, and manage money — using smart, localized tools designed for our realities.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            { icon: '📱', label: 'Mobile Wallet' },
            { icon: '🤝', label: 'Community' },
            { icon: '🌍', label: 'Global Access' },
          ].map(({ icon, label }, i) => (
            <div key={i} className="bg-white shadow rounded p-6 w-60 mx-auto md:mx-0">
              <div className="text-4xl mb-2">{icon}</div>
              <div className="font-semibold text-gray-700">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Built for Our Reality */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Built for <span className="text-orange-600">Our Reality</span></h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Using tools designed with African contexts, behaviors, and infrastructure in mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'Localized Payment Solutions',
              text: 'From mobile money to bank transfers — with local currency and partnerships.',
            },
            {
              title: 'Culture-Focused UI',
              text: 'Designed with African languages, behaviors, and aesthetics.',
            },
            {
              title: 'Real Offline Functionality',
              text: 'Make transactions even when connectivity is low.',
            },
          ].map(({ title, text }, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded shadow">
              <h4 className="font-semibold text-xl mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Language Banner */}
      <section className="bg-orange-500 text-white py-10 px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Coming in Swahili, Yoruba, Hausa, French & More</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["English", "Swahili", "Yoruba", "Hausa", "Amharic"].map((lang, i) => (
            <button key={i} className="bg-white text-orange-600 px-4 py-2 rounded-full font-medium">
              {lang}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-2">Tikwave Africa</h5>
            <ul className="space-y-1 text-sm">
              <li>Community</li>
              <li>Access</li>
              <li>Growth</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Stay Connected</h5>
            <div className="flex gap-4 text-2xl">
              <a href="#">🔗</a>
              <a href="#">📸</a>
              <a href="#">🐦</a>
              <a href="#">📘</a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Get Updates</h5>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your email" className="p-2 rounded w-full text-black" />
              <button className="bg-orange-500 px-4 py-2 rounded text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">© 2025 Tikwave Africa</p>
      </footer>
    </main>
  );
};

export default Homepage;

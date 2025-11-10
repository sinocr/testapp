import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FeatureIcon1, FeatureIcon2, FeatureIcon3, StarIcon } from './components/icons';

const Hero = () => (
  <section id="home" className="bg-emerald-50 text-gray-800 py-20 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Elevate Your Workflow to the <span className="text-emerald-600">Next Level</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        ProLand is the all-in-one solution designed to boost your productivity, streamline processes, and drive success.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#pricing" className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition duration-300 transform hover:scale-105">
          Get Started for Free
        </a>
        <a href="#features" className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-full border border-emerald-600 hover:bg-emerald-50 transition duration-300">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose ProLand?</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Discover the powerful features that make our platform the best choice for your business.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
            <FeatureIcon1 />
          </div>
          <h3 className="text-xl font-bold mb-2">Intuitive Interface</h3>
          <p className="text-gray-600">Seamlessly navigate through our clean, modern, and user-friendly design, built for efficiency.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
            <FeatureIcon2 />
          </div>
          <h3 className="text-xl font-bold mb-2">Powerful Analytics</h3>
          <p className="text-gray-600">Gain valuable insights with our advanced data visualization and reporting tools.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
            <FeatureIcon3 />
          </div>
          <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
          <p className="text-gray-600">Your data is protected with enterprise-grade security protocols and 99.9% uptime.</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-emerald-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trusted by Professionals Worldwide</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Don't just take our word for it. Here's what our users are saying.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex text-yellow-400 mb-4">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <p className="text-gray-600 mb-6">"ProLand has revolutionized our workflow. The intuitive design and powerful features have boosted our team's productivity by 40%."</p>
          <div className="flex items-center">
            <img src="https://picsum.photos/id/1005/50/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-gray-800">Jane Doe</p>
              <p className="text-sm text-gray-500">CEO, Innovate Inc.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex text-yellow-400 mb-4">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <p className="text-gray-600 mb-6">"The analytics are a game-changer. We can now make data-driven decisions with confidence. Highly recommended!"</p>
          <div className="flex items-center">
            <img src="https://picsum.photos/id/1011/50/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-gray-800">John Smith</p>
              <p className="text-sm text-gray-500">Marketing Director, Solutions Co.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
           <div className="flex text-yellow-400 mb-4">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <p className="text-gray-600 mb-6">"Customer support is top-notch. They are responsive, knowledgeable, and genuinely care about our success."</p>
          <div className="flex items-center">
            <img src="https://picsum.photos/id/1027/50/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-gray-800">Samantha Lee</p>
              <p className="text-sm text-gray-500">Project Manager, TechForward</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Flexible Plans for Teams of All Sizes</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Choose the perfect plan to fit your needs. No hidden fees, cancel anytime.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-bold text-center mb-2">Starter</h3>
          <p className="text-gray-500 text-center mb-6">For individuals and small teams.</p>
          <p className="text-5xl font-extrabold text-center mb-6">$29<span className="text-lg font-medium text-gray-500">/mo</span></p>
          <ul className="space-y-4 text-gray-600 mb-8">
            <li className="flex items-center"><span className="text-emerald-500 mr-3">&#10003;</span>10 Projects</li>
            <li className="flex items-center"><span className="text-emerald-500 mr-3">&#10003;</span>Basic Analytics</li>
            <li className="flex items-center"><span className="text-emerald-500 mr-3">&#10003;</span>Email Support</li>
          </ul>
          <a href="#" className="w-full text-center block bg-white text-emerald-600 font-bold py-3 px-8 rounded-full border border-emerald-600 hover:bg-emerald-50 transition duration-300">Choose Plan</a>
        </div>
        
        <div className="bg-emerald-600 text-white p-8 rounded-lg shadow-2xl transform lg:scale-110">
          <p className="text-center bg-white text-emerald-600 font-bold py-1 px-4 rounded-full inline-block mb-4 text-sm">Most Popular</p>
          <h3 className="text-2xl font-bold text-center mb-2">Business</h3>
          <p className="text-emerald-200 text-center mb-6">For growing businesses.</p>
          <p className="text-5xl font-extrabold text-center mb-6">$99<span className="text-lg font-medium text-emerald-200">/mo</span></p>
          <ul className="space-y-4 text-emerald-100 mb-8">
            <li className="flex items-center"><span className="mr-3">&#10003;</span>Unlimited Projects</li>
            <li className="flex items-center"><span className="mr-3">&#10003;</span>Advanced Analytics</li>
            <li className="flex items-center"><span className="mr-3">&#10003;</span>Priority Support</li>
            <li className="flex items-center"><span className="mr-3">&#10003;</span>Team Collaboration Tools</li>
          </ul>
          <a href="#" className="w-full text-center block bg-white text-emerald-600 font-bold py-3 px-8 rounded-full hover:bg-emerald-100 transition duration-300">Choose Plan</a>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3>
          <p className="text-gray-500 text-center mb-6">For large organizations.</p>
          <p className="text-4xl font-extrabold text-center mb-6 py-4">Contact Us</p>
          <ul className="space-y-4 text-gray-600 mb-8">
            <li className="flex items-center"><span className="text-emerald-500 mr-3">&#10003;</span>Everything in Business</li>
            <li className="flex items-center"><span className="text-emerald-500 mr-3">&#10003;</span>Dedicated Account Manager</li>
            <li className="flex items-center"><span className="text-emerald-500 mr-3">&#10003;</span>Custom Integrations</li>
          </ul>
          <a href="#" className="w-full text-center block bg-white text-emerald-600 font-bold py-3 px-8 rounded-full border border-emerald-600 hover:bg-emerald-50 transition duration-300">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>
);


const CTA = () => (
    <section className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto">Join thousands of users who are already transforming their work with ProLand.</p>
            <a href="#pricing" className="bg-white text-emerald-700 font-bold py-4 px-10 rounded-full hover:bg-emerald-100 transition duration-300 transform hover:scale-105">
                Sign Up Now
            </a>
        </div>
    </section>
);


function App() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

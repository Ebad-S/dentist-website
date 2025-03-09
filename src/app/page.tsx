import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Image from 'next/image';
import { FaTooth, FaSmile, FaTeeth, FaMagic, FaPhoneAlt, FaRegSmileBeam } from 'react-icons/fa';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollAnimation animation="fadeIn">
        <section id="hero" className="bg-primary-600 dark:bg-primary-800 text-white py-16 px-4 text-center" aria-labelledby="hero-heading">
          <div className="container mx-auto">
            <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-4">Viva Dentistry</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">Welcome to Dr. Amin Yeganeh's dental clinic! We provide high-quality dental care for the whole family.</p>
            <a href="#contact" className="btn btn-secondary dark:bg-secondary-500 dark:hover:bg-secondary-400 dark:text-white">Book an Appointment</a>
          </div>
        </section>
      </ScrollAnimation>
      
      <ScrollAnimation animation="slideUp">
        <section id="services" className="py-20 px-4 bg-white dark:bg-secondary-900" aria-labelledby="services-heading">
          <div className="container mx-auto">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">Our Services</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-center max-w-2xl mx-auto mb-12 text-secondary-600 dark:text-secondary-300">We offer a comprehensive range of dental services to meet all your oral health needs.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="slideRight" delay={0.1}>
                <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group" role="article" aria-labelledby="service-1-heading">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300" aria-hidden="true">
                      <FaTooth className="w-8 h-8" />
                    </div>
                    <h3 id="service-1-heading" className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">General Dentistry</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">Comprehensive dental exams, cleanings, fillings, and preventive care to maintain your oral health.</p>
                    <a href="#contact" className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium">Learn More →</a>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group" role="article" aria-labelledby="service-2-heading">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300" aria-hidden="true">
                      <FaSmile className="w-8 h-8" />
                    </div>
                    <h3 id="service-2-heading" className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">Cosmetic Dentistry</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">Teeth whitening, veneers, bonding, and other procedures to enhance the appearance of your smile.</p>
                    <a href="#contact" className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium">Learn More →</a>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideLeft" delay={0.3}>
                <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group" role="article" aria-labelledby="service-3-heading">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300" aria-hidden="true">
                      <FaTeeth className="w-8 h-8" />
                    </div>
                    <h3 id="service-3-heading" className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">Dental Implants</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">Permanent replacement for missing teeth that look, feel, and function like natural teeth. Dr. Yeganeh holds a Post-Graduate Diploma in Dental Implantology.</p>
                    <a href="#contact" className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium">Learn More →</a>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideRight" delay={0.4}>
                <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group" role="article" aria-labelledby="service-4-heading">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300" aria-hidden="true">
                      <FaRegSmileBeam className="w-8 h-8" />
                    </div>
                    <h3 id="service-4-heading" className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">Clear Aligners</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">Linea Clear Aligners to straighten teeth discreetly without traditional braces. Dr. Yeganeh is a Preferred Provider for Linea Clear Aligners.</p>
                    <a href="#contact" className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium">Learn More →</a>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideUp" delay={0.5}>
                <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group" role="article" aria-labelledby="service-5-heading">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300" aria-hidden="true">
                      <FaMagic className="w-8 h-8" />
                    </div>
                    <h3 id="service-5-heading" className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">FastBraces</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">Advanced orthodontic treatment that can straighten teeth faster than traditional braces. Dr. Yeganeh is a Preferred Provider for FastBraces technology.</p>
                    <a href="#contact" className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium">Learn More →</a>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideLeft" delay={0.6}>
                <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group" role="article" aria-labelledby="service-6-heading">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300" aria-hidden="true">
                      <FaPhoneAlt className="w-8 h-8" />
                    </div>
                    <h3 id="service-6-heading" className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">Emergency Dental Care</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">Prompt attention for dental emergencies such as toothaches, broken teeth, or lost fillings.</p>
                    <a href="#contact" className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium">Learn More →</a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeIn">
        <section id="about" className="py-16 px-4 bg-gray-100 dark:bg-secondary-800" aria-labelledby="about-heading">
          <div className="container mx-auto">
            <h2 id="about-heading" className="text-3xl font-bold text-center mb-8 dark:text-white">About Us</h2>
            <p className="text-center max-w-2xl mx-auto mb-8 dark:text-secondary-200">Led by Dr. Amin Yeganeh, our team of experienced dentists and staff are dedicated to providing you with the best dental care possible.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="slideRight">
                <div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Mission</h3>
                  <p className="mb-4 dark:text-secondary-300">At Viva Dentistry, Dr. Amin Yeganeh's mission is to provide exceptional dental care in a comfortable and welcoming environment. We are committed to helping our patients achieve and maintain optimal oral health through personalized treatment plans and education.</p>
                  
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Approach</h3>
                  <p className="mb-6 dark:text-secondary-300">We believe in a patient-centered approach to dental care. Dr. Yeganeh takes the time to listen to your concerns, answer your questions, and develop a treatment plan that meets your specific needs and goals.</p>
                  
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">Dr. Yeganeh's Credentials</h3>
                  <ul className="list-disc pl-5 mb-4 space-y-2 dark:text-secondary-300">
                    <li>Post-Graduate Diploma of Dental Implantology (PGIDS)</li>
                    <li>Bachelor of Dental Science (CSU)</li>
                    <li>Diploma of Dental Technology (SYD)</li>
                    <li>Linea Clear Aligners Preferred Provider</li>
                    <li>FastBraces Preferred Provider</li>
                  </ul>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideLeft">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about/team-photo.jpg"
                    alt="Viva Dentistry Team led by Dr. Amin Yeganeh"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeIn">
        <section id="testimonials" aria-label="Patient Testimonials">
          <Testimonials />
        </section>
      </ScrollAnimation>
      
      <ScrollAnimation animation="slideUp">
        <section id="gallery" aria-label="Before and After Gallery">
          <Gallery />
        </section>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeIn">
        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQ />
        </section>
      </ScrollAnimation>
      
      <ScrollAnimation animation="slideUp">
        <section id="contact" className="py-16 px-4 bg-primary-600 dark:bg-primary-800 text-white" aria-labelledby="contact-heading">
          <div className="container mx-auto">
            <h2 id="contact-heading" className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <p className="text-center max-w-2xl mx-auto mb-12">Schedule an appointment today with Dr. Amin Yeganeh and experience the difference at Viva Dentistry.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollAnimation animation="slideRight">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                  <div className="mb-6">
                    <p className="mb-2"><strong>Phone:</strong> <a href="tel:+11234567890" className="hover:underline">(123) 456-7890</a></p>
                    <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@vivadentistry.com" className="hover:underline">info@vivadentistry.com</a></p>
                    <p><strong>Address:</strong> 123 Dental Street, City, State 12345</p>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                  <div>
                    <p className="mb-2">Monday - Friday: 8am - 6pm</p>
                    <p className="mb-2">Saturday: 9am - 3pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="slideLeft">
                <div className="card bg-white dark:bg-secondary-800 text-secondary-800 dark:text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Request an Appointment</h3>
                  <form aria-label="Contact form">
                    <div className="mb-4">
                      <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                      <input type="text" id="name" className="input w-full bg-white dark:bg-secondary-700 text-secondary-800 dark:text-white border-secondary-300 dark:border-secondary-600" placeholder="Your name" required aria-required="true" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                      <input type="email" id="email" className="input w-full bg-white dark:bg-secondary-700 text-secondary-800 dark:text-white border-secondary-300 dark:border-secondary-600" placeholder="Your email" required aria-required="true" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
                      <input type="tel" id="phone" className="input w-full bg-white dark:bg-secondary-700 text-secondary-800 dark:text-white border-secondary-300 dark:border-secondary-600" placeholder="Your phone number" required aria-required="true" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                      <textarea id="message" rows={4} className="input w-full bg-white dark:bg-secondary-700 text-secondary-800 dark:text-white border-secondary-300 dark:border-secondary-600" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full dark:bg-primary-600 dark:hover:bg-primary-700">Submit Request</button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}

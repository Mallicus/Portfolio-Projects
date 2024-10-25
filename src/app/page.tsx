import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

export default function Home() {
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
     pt-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <Header></Header>
      <main>

          <section id={"landing_page_section"} className="mt-7 text-black h-screen flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl font-semibold mb-4">Welcome to My Awesome Portfolio</h2>
              <p className="mb-6">Upcoming 10x developer.</p>
              <a href="#projects" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Get Started</a>
          </section>


          <section id="projects" className="py-12">
              <div className="max-w-7xl mx-auto px-4">
                  <h3 className="text-3xl font-bold text-center mb-8">Projects sample</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white shadow rounded p-6">
                          <h4 className="text-xl font-semibold mb-2">Project One</h4>
                          <p>Explain the first feature in a few sentences.</p>
                      </div>
                      <div className="bg-white shadow rounded p-6">
                          <h4 className="text-xl font-semibold mb-2">Project Two</h4>
                          <p>Explain the second feature in a few sentences.</p>
                      </div>
                      <div className="bg-white shadow rounded p-6">
                          <h4 className="text-xl font-semibold mb-2">Project Three</h4>
                          <p>Explain the third feature in a few sentences.</p>
                      </div>
                  </div>
              </div>
          </section>


          <section id="about" className="bg-gray-100 py-12">
              <div className="max-w-7xl mx-auto px-4">
                  <h3 className="text-3xl font-bold text-center mb-8">About Me</h3>
                  <p className="text-center">A brief description of the product and the team behind it.</p>
              </div>
          </section>


          <section id="contact" className="py-12">
              <div className="max-w-7xl mx-auto px-4">
                  <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
                  <form className="max-w-md mx-auto">
                      <div className="mb-4">
                          <label className="block mb-2" htmlFor={"name"}>Name</label>
                          <input className="w-full border rounded px-4 py-2" type="text" id="name" required/>
                      </div>
                      <div className="mb-4">
                          <label className="block mb-2" htmlFor="email">Email</label>
                          <input className="w-full border rounded px-4 py-2" type="email" id="email" required/>
                      </div>
                      <div className="mb-4">
                          <label className="block mb-2" htmlFor="message">Message</label>
                          <textarea className="w-full border rounded px-4 py-2" id="message" rows={4} required></textarea>
                      </div>
                      <button type="submit" className="text-black px-4 py-2 rounded hover:bg-teal-600 mb-6">Send</button>
                  </form>
              </div>
          </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

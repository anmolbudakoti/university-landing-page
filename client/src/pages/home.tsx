import { motion } from "framer-motion";
import { Lightbulb, Globe, Cpu, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://preview.ualberta.ca/en/research/media-library/innovation-2023/northcampus-divider-2800x1000.jpg')",
          }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            className="text-center text-white px-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where Ideas Begin.
              <br />
              <span className="ua-gold">Where Futures Are Shaped.</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 max-w-3xl mx-auto">
              A global community of learners, thinkers, and innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* University at a Glance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold ua-green mb-4">
              University at a Glance
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in education, research, and global impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "200+",
                title: "Academic Programs",
                description:
                  "Undergraduate, graduate, and continuing education offerings.",
              },
              {
                number: "140+",
                title: "Countries Represented",
                description: "A diverse and inclusive global student body.",
              },
              {
                number: "Top 5",
                title: "Research Institution in Canada",
                description:
                  "Driving innovation, discovery, and social impact.",
              },
              {
                number: "300,000+",
                title: "Alumni Worldwide",
                description:
                  "A legacy of leadership, service, and achievement.",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}>
                <div className="text-5xl font-bold ua-green mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold ua-green mb-4">
              Our Community Stories
            </h2>
            <p className="text-xl text-gray-600">
              Inspiring narratives from our vibrant university community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
                title: "Bridging Cultures Through Indigenous Knowledge",
                description:
                  "A look at tradition and modern education working together.",
              },
              {
                image:
                  "https://www.ualberta.ca/en/media-library/new-brand/homepage/homepage-walterdale-bridge.jpg",
                title: "Engineering Tomorrow's Cities",
                description:
                  "Meet the researchers building sustainable urban futures.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
                title: "Voices of Change: Student-Led Initiatives",
                description: "Today's students shaping tomorrow's world.",
              },
              {
                image:
                  "https://www.ualberta.ca/media-library/indigenous-excellence/indigenous-excellence-homepage-1636x780.jpg",
                title: "From Alberta to the World",
                description: "Alumni leading innovation on a global stage.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-200">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation Impact */}
      <section className="py-20 bg-ua-light-green">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold ua-green mb-4">
              Research & Innovation Impact
            </h2>
            <p className="text-xl text-gray-700">
              Advancing knowledge and solving global challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-white" />,
                title: "Biomedical Breakthroughs",
                description:
                  "Transforming global healthcare through innovative research and clinical applications.",
              },
              {
                icon: <Globe className="w-8 h-8 text-white" />,
                title: "Environmental Research",
                description:
                  "Advancing climate resilience and sustainable solutions for our planet's future.",
              },
              {
                icon: <Cpu className="w-8 h-8 text-white" />,
                title: "AI & Space Technology",
                description:
                  "Developing artificial intelligence and space technology for tomorrow's discoveries.",
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Social Sciences",
                description:
                  "Exploring culture, equity, and identity to build more inclusive societies.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="flex-shrink-0 w-16 h-16 bg-ua-green rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold ua-green mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & News Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold ua-green mb-4">
              Events & News Snapshot
            </h2>
            <p className="text-xl text-gray-600">
              Stay connected with our latest happenings and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <h3 className="text-3xl font-bold ua-green mb-8">
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {[
                  {
                    date: { month: "JUL", days: "14-18" },
                    title: "Campus Sustainability Week",
                    description:
                      "Join us for a week of environmental awareness and sustainable practices.",
                  },
                  {
                    date: { month: "OCT", days: "10" },
                    title: "Fall Convocation",
                    description:
                      "Celebrating our graduates and their academic achievements.",
                  },
                  {
                    date: { month: "NOV", days: "2" },
                    title: "Global Research Symposium",
                    description:
                      "International collaboration and cutting-edge research presentations.",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="flex-shrink-0 w-16 h-16 bg-ua-green rounded-lg flex items-center justify-center text-white font-bold">
                      <div className="text-center">
                        <div className="text-xs">{event.date.month}</div>
                        <div className="text-lg">{event.date.days}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {event.title}
                      </h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Latest Headlines */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <h3 className="text-3xl font-bold ua-green mb-8">
                Latest Headlines
              </h3>
              <div className="space-y-6">
                {[
                  {
                    image:
                      "https://www.ualberta.ca/en/media-library/new-brand/a-and-p/hands-on-research.jpg",
                    title: "U of A Researchers Uncover Arctic Climate Clues",
                    description:
                      "Groundbreaking research provides new insights into climate change patterns.",
                  },
                  {
                    image:
                      "https://www.ualberta.ca/en/media-library/new-brand/a-and-p/chemistry-lab.jpg",
                    title: "Student Startup Wins Global Impact Award",
                    description:
                      "Innovation and entrepreneurship recognized on the international stage.",
                  },
                  {
                    image:
                      "https://www.ualberta.ca/en/media-library/new-brand/a-and-p/funding.jpg",
                    title: "Celebrating 10 Years of Women in Engineering",
                    description:
                      "A decade of promoting diversity and inclusion in STEM fields.",
                  },
                ].map((news, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="flex items-start space-x-4">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {news.title}
                        </h4>
                        <p className="text-gray-600">{news.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus & Global Presence */}
      <section className="py-20 bg-ua-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Campus & Global Presence
            </h2>
            <p className="text-xl text-gray-200">
              Excellence locally, leadership globally
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <img
              src="https://www.ualberta.ca/en/media-library/new-brand/homepage/augustana-campus.jpeg"
              alt="Historic university building"
              className="w-full h-64 object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Modern university campus"
              className="w-full h-64 object-cover rounded-xl"
            />
            <img
              src="https://www.ualberta.ca/en/media-library/new-brand/homepage/campus-saint-jean.jpeg"
              alt="International students studying"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 max-w-4xl mx-auto">
              "With five campuses across Alberta and international
              collaborations in over 50 countries, the University of Alberta
              bridges local excellence with global leadership."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold ua-gold mb-2">5</div>
                <p className="text-lg">Campuses Across Alberta</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold ua-gold mb-2">50+</div>
                <p className="text-lg">International Collaborations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold ua-gold mb-2">159</div>
                <p className="text-lg">Countries Represented</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">University of Alberta</h3>
            <p className="text-gray-400 mb-4">
              Where Ideas Begin. Where Futures Are Shaped.
            </p>
            <p className="text-gray-500">
              © 2024 University of Alberta. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

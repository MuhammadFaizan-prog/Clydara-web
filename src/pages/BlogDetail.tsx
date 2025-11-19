import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { BlogsList, type Blog } from "../data/blogs";
import { useState } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Find the blog by ID
  const blog = BlogsList.find((b) => b.id === id);

  if (!blog) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-dark-blue mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className="inline-flex items-center text-brand-blue hover:underline font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blogs
          </Link>
        </div>
      </PageLayout>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        );
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-brand-dark-blue text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-blue/20 animate-float blur-3xl"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-blue/20 animate-float blur-3xl"
            style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-brand-blue/20 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <motion.h1
              className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              {blog.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>
                  {new Date(blog.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Image */}
                <motion.div
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}>
                  <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover" />
                </motion.div>

                {/* Blog Content */}
                <motion.div
                  className="prose prose-lg max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">{blog.excerpt}</p>

                  {/* Dynamic content based on blog category */}
                  {blog.category === "AI & Technology" && (
                    <>
                      <h2>The Future of AI in Software Development</h2>
                      <p>
                        Artificial Intelligence is revolutionizing the software development landscape in unprecedented ways. 
                        From automated testing to intelligent code generation, AI is becoming an integral part of modern 
                        development workflows. This transformation is not just about efficiency—it's about fundamentally 
                        changing how we approach software creation.
                      </p>

                      <h3>Key Benefits of AI in Development</h3>
                      <ul>
                        <li>Automated code generation and suggestions</li>
                        <li>Intelligent bug detection and prevention</li>
                        <li>Enhanced testing automation and coverage</li>
                        <li>Improved code quality and maintainability</li>
                        <li>Faster development cycles and time-to-market</li>
                      </ul>

                      <h3>Implementation Strategies</h3>
                      <p>
                        Implementing AI in your development process requires a strategic approach. Start with 
                        identifying repetitive tasks that can be automated, such as code reviews, testing, and 
                        documentation generation. Gradually integrate AI tools into your existing workflow, 
                        ensuring team adoption and proper training.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "AI will not replace developers, but developers who use AI will replace those who don't." - Unknown
                      </blockquote>

                      <h3>Future Considerations</h3>
                      <p>
                        As AI continues to evolve, we can expect even more sophisticated tools that will 
                        further streamline development processes. The key is to stay informed about emerging 
                        technologies and be ready to adapt your development practices accordingly.
                      </p>
                    </>
                  )}

                  {blog.category === "Frontend Development" && (
                    <>
                      <h2>Advanced React Performance Optimization</h2>
                      <p>
                        Performance optimization in React applications is crucial for delivering exceptional 
                        user experiences. Modern web applications face increasing complexity, making it 
                        essential to implement advanced optimization techniques that go beyond basic best practices.
                      </p>

                      <h3>Core Optimization Techniques</h3>
                      <ul>
                        <li>React.memo for component memoization</li>
                        <li>useMemo and useCallback for expensive computations</li>
                        <li>Code splitting with React.lazy and Suspense</li>
                        <li>Bundle optimization and tree shaking</li>
                        <li>Virtual scrolling for large datasets</li>
                      </ul>

                      <h3>Implementation Best Practices</h3>
                      <p>
                        Start by identifying performance bottlenecks using React DevTools Profiler. Focus on 
                        optimizing re-renders first, then move to bundle size optimization. Remember that 
                        premature optimization can lead to unnecessary complexity—measure first, optimize second.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Premature optimization is the root of all evil." - Donald Knuth
                      </blockquote>

                      <h3>Monitoring and Maintenance</h3>
                      <p>
                        Continuous monitoring of your application's performance is essential. Use tools like 
                        Lighthouse, WebPageTest, and real user monitoring to track performance metrics and 
                        identify areas for improvement.
                      </p>
                    </>
                  )}

                  {blog.category === "Cloud Computing" && (
                    <>
                      <h2>Building Cloud-Native Applications</h2>
                      <p>
                        Cloud-native applications represent a paradigm shift in how we design, develop, and 
                        deploy software. These applications are built specifically to leverage the advantages 
                        of cloud computing, including scalability, resilience, and operational efficiency.
                      </p>

                      <h3>Core Principles of Cloud-Native Design</h3>
                      <ul>
                        <li>Microservices architecture for modularity</li>
                        <li>Containerization for consistency and portability</li>
                        <li>Orchestration for automated deployment and scaling</li>
                        <li>DevOps practices for continuous delivery</li>
                        <li>Observability for monitoring and debugging</li>
                      </ul>

                      <h3>Implementation Strategy</h3>
                      <p>
                        Begin your cloud-native journey by breaking down monolithic applications into 
                        microservices. Implement containerization using Docker and orchestration with 
                        Kubernetes. Establish CI/CD pipelines and adopt infrastructure as code practices.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Cloud-native is not just about technology—it's about culture and processes." - Unknown
                      </blockquote>

                      <h3>Best Practices for Success</h3>
                      <p>
                        Focus on designing for failure, implementing proper monitoring and logging, and 
                        ensuring security from the ground up. Remember that cloud-native is a journey, not 
                        a destination—continuous improvement is key to long-term success.
                      </p>
                    </>
                  )}

                  {blog.category === "Security" && (
                    <>
                      <h2>Essential Cybersecurity Practices</h2>
                      <p>
                        In today's interconnected digital landscape, cybersecurity is not optional—it's 
                        essential. Every web application faces potential threats, making it crucial to 
                        implement robust security measures that protect both your application and your users.
                      </p>

                      <h3>Critical Security Measures</h3>
                      <ul>
                        <li>Input validation and sanitization</li>
                        <li>Authentication and authorization best practices</li>
                        <li>HTTPS implementation and certificate management</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>Data encryption at rest and in transit</li>
                      </ul>

                      <h3>Implementation Guidelines</h3>
                      <p>
                        Start by following the OWASP Top 10 guidelines and implement security measures 
                        from the beginning of your development process. Use security headers, implement 
                        proper session management, and regularly update dependencies to patch vulnerabilities.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Security is not a product, but a process." - Bruce Schneier
                      </blockquote>

                      <h3>Ongoing Security Maintenance</h3>
                      <p>
                        Security is an ongoing process that requires regular attention. Establish security 
                        monitoring, conduct regular audits, and stay informed about emerging threats and 
                        best practices in the cybersecurity landscape.
                      </p>
                    </>
                  )}

                  {blog.category === "Mobile Development" && (
                    <>
                      <h2>2024 Mobile App Development Trends</h2>
                      <p>
                        The mobile app development landscape is constantly evolving, driven by technological 
                        advancements and changing user expectations. Staying ahead of these trends is crucial 
                        for creating successful mobile applications that meet modern user demands.
                      </p>

                      <h3>Emerging Trends to Watch</h3>
                      <ul>
                        <li>Cross-platform development with React Native and Flutter</li>
                        <li>AI and machine learning integration</li>
                        <li>Progressive Web Apps (PWAs)</li>
                        <li>5G network optimization</li>
                        <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
                      </ul>

                      <h3>Implementation Strategies</h3>
                      <p>
                        Choose the right development approach based on your project requirements. Consider 
                        cross-platform solutions for broader reach, implement AI features for enhanced 
                        user experience, and optimize for 5G networks to leverage faster connectivity.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Mobile is not just a platform, it's a lifestyle." - Unknown
                      </blockquote>

                      <h3>Future-Proofing Your Apps</h3>
                      <p>
                        Focus on creating scalable, maintainable code that can adapt to future technological 
                        changes. Implement modular architectures, use modern development practices, and 
                        prioritize user experience in your design decisions.
                      </p>
                    </>
                  )}

                  {blog.category === "Data Science" && (
                    <>
                      <h2>Data Science for Business Intelligence</h2>
                      <p>
                        Data science has become a cornerstone of modern business intelligence, enabling 
                        organizations to transform raw data into actionable insights. This transformation 
                        is driving better decision-making and creating competitive advantages across industries.
                      </p>

                      <h3>Key Components of Data Science</h3>
                      <ul>
                        <li>Data collection and preprocessing</li>
                        <li>Exploratory data analysis</li>
                        <li>Machine learning model development</li>
                        <li>Data visualization and reporting</li>
                        <li>Predictive analytics implementation</li>
                      </ul>

                      <h3>Implementation Framework</h3>
                      <p>
                        Start with clearly defined business objectives and identify relevant data sources. 
                        Implement robust data pipelines, develop appropriate models, and create intuitive 
                        visualizations that communicate insights effectively to stakeholders.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Data is the new oil, but insights are the new gold." - Unknown
                      </blockquote>

                      <h3>Driving Business Value</h3>
                      <p>
                        Focus on creating measurable business impact through your data science initiatives. 
                        Establish clear KPIs, implement continuous monitoring, and ensure that insights 
                        lead to actionable business decisions and improved outcomes.
                      </p>
                    </>
                  )}

                  {blog.category === "Backend Development" && (
                    <>
                      <h2>Microservices Architecture Patterns</h2>
                      <p>
                        Microservices architecture has emerged as a powerful approach to building scalable, 
                        maintainable applications. This architectural pattern breaks down complex systems 
                        into smaller, independent services that can be developed, deployed, and scaled independently.
                      </p>

                      <h3>Essential Microservices Patterns</h3>
                      <ul>
                        <li>Service discovery and registration</li>
                        <li>API Gateway for centralized routing</li>
                        <li>Circuit breaker for fault tolerance</li>
                        <li>Event-driven communication</li>
                        <li>Distributed tracing and monitoring</li>
                      </ul>

                      <h3>Implementation Strategy</h3>
                      <p>
                        Begin by identifying bounded contexts in your domain and design services around 
                        business capabilities. Implement proper service communication patterns, establish 
                        monitoring and observability, and ensure data consistency across services.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Microservices are not just about technology—they're about organizational structure." - Martin Fowler
                      </blockquote>

                      <h3>Best Practices for Success</h3>
                      <p>
                        Focus on designing services with clear boundaries, implementing proper error handling, 
                        and establishing robust testing strategies. Remember that microservices introduce 
                        complexity—ensure that the benefits outweigh the operational overhead.
                      </p>
                    </>
                  )}

                  {blog.category === "DevOps" && (
                    <>
                      <h2>Docker and Kubernetes in Production</h2>
                      <p>
                        Containerization and orchestration have revolutionized how we deploy and manage 
                        applications in production environments. Docker and Kubernetes provide the tools 
                        needed to create reliable, scalable, and maintainable deployment pipelines.
                      </p>

                      <h3>Production Best Practices</h3>
                      <ul>
                        <li>Multi-stage Docker builds for optimization</li>
                        <li>Resource limits and requests in Kubernetes</li>
                        <li>Health checks and readiness probes</li>
                        <li>Secrets and configuration management</li>
                        <li>Monitoring and logging integration</li>
                      </ul>

                      <h3>Implementation Guidelines</h3>
                      <p>
                        Start with creating optimized Docker images and implementing proper resource 
                        management. Set up monitoring and logging, implement security best practices, 
                        and establish backup and disaster recovery procedures.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Containers are not just about packaging—they're about consistency and portability." - Unknown
                      </blockquote>

                      <h3>Operational Excellence</h3>
                      <p>
                        Focus on automation, monitoring, and continuous improvement. Implement proper 
                        CI/CD pipelines, establish incident response procedures, and ensure that your 
                        team has the necessary skills and knowledge to operate containerized applications effectively.
                      </p>
                    </>
                  )}

                  {blog.category === "Blockchain" && (
                    <>
                      <h2>Getting Started with Blockchain Development</h2>
                      <p>
                        Blockchain technology has evolved beyond cryptocurrencies to become a powerful 
                        platform for building decentralized applications. Understanding blockchain development 
                        opens up new possibilities for creating transparent, secure, and trustless systems.
                      </p>

                      <h3>Core Blockchain Concepts</h3>
                      <ul>
                        <li>Distributed ledger technology</li>
                        <li>Smart contracts and DApps</li>
                        <li>Consensus mechanisms</li>
                        <li>Cryptographic security</li>
                        <li>Web3 integration</li>
                      </ul>

                      <h3>Development Approach</h3>
                      <p>
                        Start by understanding the fundamentals of blockchain technology and choose the 
                        right platform for your use case. Learn smart contract development, implement 
                        proper security measures, and understand gas optimization techniques.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "Blockchain is not just a technology—it's a new way of thinking about trust." - Unknown
                      </blockquote>

                      <h3>Future of Blockchain Development</h3>
                      <p>
                        As blockchain technology matures, we can expect more sophisticated tools and 
                        frameworks that will make development easier and more accessible. Stay informed 
                        about emerging standards and best practices in the blockchain ecosystem.
                      </p>
                    </>
                  )}

                  {/* Default content for other categories */}
                  {!["AI & Technology", "Frontend Development", "Cloud Computing", "Security", "Mobile Development", "Data Science", "Backend Development", "DevOps", "Blockchain"].includes(blog.category) && (
                    <>
                      <h2>Industry Insights and Best Practices</h2>
                      <p>
                        In today's rapidly evolving technology landscape, staying informed about industry 
                        trends and best practices is crucial for success. This article explores key insights 
                        and practical approaches that can help you navigate the complexities of modern 
                        software development and technology implementation.
                      </p>

                      <h3>Key Industry Trends</h3>
                      <ul>
                        <li>Emerging technologies and their impact</li>
                        <li>Best practices for modern development</li>
                        <li>Strategies for staying competitive</li>
                        <li>Tools and frameworks for success</li>
                        <li>Future-proofing your technology stack</li>
                      </ul>

                      <h3>Implementation Strategies</h3>
                      <p>
                        Focus on continuous learning and adaptation to stay ahead in the technology 
                        landscape. Implement proven methodologies, leverage modern tools and frameworks, 
                        and build a culture of innovation and experimentation within your organization.
                      </p>

                      <blockquote className="border-l-4 border-brand-blue pl-6 italic text-gray-700">
                        "The only constant in technology is change." - Heraclitus
                      </blockquote>

                      <h3>Looking Forward</h3>
                      <p>
                        As technology continues to evolve, the key to success lies in adaptability and 
                        continuous improvement. Stay informed about emerging trends, invest in learning 
                        and development, and build systems that can evolve with changing requirements.
                      </p>
                    </>
                  )}
                </motion.div>

                {/* Tags */}
                <motion.div
                  className="mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}>
                  <h4 className="text-lg font-semibold text-brand-dark-blue mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-blue hover:text-white transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Action Buttons */}
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}>
                    <h4 className="font-semibold text-brand-dark-blue mb-4">Actions</h4>
                    <div className="space-y-3">

                      <button className="w-full flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-200 hover:scale-105">
                        <Share2 size={16} className="mr-2" />
                        Share
                      </button>
                    </div>
                  </motion.div>


                  {/* Author Info */}
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}>
                    <h4 className="font-semibold text-brand-dark-blue mb-4">About the Author</h4>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                        {blog.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h5 className="font-medium text-gray-900">{blog.author}</h5>
                      <p className="text-sm text-gray-600 mt-1">Technical Writer & Developer</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-brand-dark-blue mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BlogsList.filter((b) => b.id !== blog.id && b.category === blog.category)
                .slice(0, 3)
                .map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-brand-dark-blue mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedBlog.id}`}
                        className="text-brand-blue hover:underline text-sm font-medium">
                        Read More →
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetail;

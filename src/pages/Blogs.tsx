import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { useState } from "react";
import { BlogsList } from "../data/blogs";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const navigate = useNavigate();

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BlogsList.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(BlogsList.length / blogsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* Header */}
      <div className="relative bg-brand-blue border-b-4 border-black py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase transform -rotate-1">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold bg-black inline-block px-4 py-2 transform rotate-1 border-2 border-white shadow-neo">
              Insights, tutorials, and industry perspectives from our team of experts
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="bg-white border-2 border-black shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="h-48 overflow-hidden border-b-2 border-black relative group">
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-xs font-black text-black bg-brand-yellow border-2 border-black px-2 py-1 uppercase shadow-sm transform rotate-2 inline-block">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4 text-sm font-bold text-gray-500">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {new Date(blog.publishDate).toLocaleDateString()}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h2 className="text-xl font-black text-black mb-3 uppercase leading-tight flex-grow group-hover:text-brand-blue transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-black font-medium mb-6 line-clamp-3 border-l-4 border-brand-yellow pl-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold bg-gray-100 text-black border border-black px-2 py-1 uppercase">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t-2 border-black">
                      <div className="flex items-center text-sm font-bold">
                        <User size={14} className="mr-1" />
                        {blog.author}
                      </div>
                      <Link
                        to={`/blog/${blog.id}`}
                        className="inline-flex items-center text-brand-blue font-black uppercase hover:underline decoration-2 underline-offset-4">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <div className="flex items-center space-x-2 bg-white p-2 border-2 border-black shadow-neo">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center px-4 py-2 text-sm font-black uppercase border-2 border-transparent transition-all ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-black hover:bg-brand-yellow hover:border-black"
                  }`}>
                  <ChevronLeft size={16} className="mr-1" />
                  Prev
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1 px-2 border-x-2 border-gray-200">
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = pageNumber === currentPage;

                    // Show first page, last page, current page, and pages around current page
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 flex items-center justify-center text-sm font-black border-2 transition-all ${
                            isCurrentPage
                              ? "bg-brand-blue text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                              : "bg-white text-black border-transparent hover:border-black hover:bg-gray-50"
                          }`}>
                          {pageNumber}
                        </button>
                      );
                    } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                      return (
                        <span key={pageNumber} className="px-2 text-black font-black">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-4 py-2 text-sm font-black uppercase border-2 border-transparent transition-all ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-black hover:bg-brand-yellow hover:border-black"
                  }`}>
                  Next
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Page Info */}
          <div className="mt-8 text-center">
             <span className="inline-block bg-black text-white px-3 py-1 font-bold text-sm border-2 border-black transform -rotate-1">
              Showing {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, BlogsList.length)} of {BlogsList.length} blogs
            </span>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blogs;


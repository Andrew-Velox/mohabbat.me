export default function About() {
  return (
    <div className="flex flex-col items-center justify-start gap-8 sm:gap-12 mt-8 sm:mt-12">
      {/* About Header */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">About Me</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-500 dark:to-gray-600 mx-auto rounded-full"></div>
      </div>

      {/* About Content */}
      <div className="space-y-6 text-lg max-w-3xl">
        <p>
          Hi, I'm Mohabbat — though in some platform, you might know me as Andrew Velox, a name I use to explore the tech world with a bit of mystery and creativity.

          I'm currently pursuing my BSc in Computer Science and Engineering at Green University of Bangladesh, 
        </p>

        

        {/* Skills/Technologies */}
        {/* <div className="pt-4 border-t">
          <h3 className="text-xl font-semibold mb-3">What I Work With</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
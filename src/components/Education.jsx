export function Education() {
  return (
    <div id="education" className="flex flex-col items-center mt-8 px-6 py-12 sm:py-16 lg:px-8"> {/* Adjusted padding for smaller screens */}
      <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-gray-100 rounded-full flex overflow-hidden"> {/* Adjusted height for different screen sizes */}
        <a href="/policy/community" className="w-1/2 sm:w-1/3 lg:w-1/2 flex flex-col items-center justify-center bg-blue-100 hover:bg-blue-200 transition-colors duration-300 cursor-pointer p-6 sm:p-8"> {/* Adjusted width for different screen sizes */}
          <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">Community</h3> {/* Adjusted font size for smaller screens */}
          <p className="text-sm sm:text-base text-center"> {/* Adjusted font size for smaller screens */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius purus quis libero aliquam, at volutpat elit blandit.
          </p>
        </a>
        <a href="/policy/doctors" className="w-1/2 sm:w-1/3 lg:w-1/2 flex flex-col items-center justify-center bg-green-100 hover:bg-green-200 transition-colors duration-300 cursor-pointer p-6 sm:p-8"> {/* Adjusted width for different screen sizes */}
          <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">Doctors</h3> {/* Adjusted font size for smaller screens */}
          <p className="text-sm sm:text-base text-center"> {/* Adjusted font size for smaller screens */}
            Phasellus eget ipsum orci. Nulla facilisi. Aenean euismod volutpat purus, eu cursus velit viverra eu.
          </p>
        </a>
      </div>
    </div>
  );
}

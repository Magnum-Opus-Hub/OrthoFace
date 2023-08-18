export function Education() {
  return (
    <div id="education"  className="flex flex-col items-center mt-8 px-6 py-24 sm:py-32 lg:px-8">
      <div className="w-full h-[60vh] bg-gray-100 rounded-full flex overflow-hidden">
        <a href="/policy/community" className="w-1/2 flex flex-col items-center justify-center bg-blue-100 hover:bg-blue-200 transition-colors duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold mb-4">Community</h3>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius purus quis libero aliquam, at volutpat elit blandit.</p>
        </a>
        <a href="/policy/doctors" className="w-1/2 flex flex-col items-center justify-center bg-green-100 hover:bg-green-200 transition-colors duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold mb-4">Doctors</h3>
          <p className="text-center">Phasellus eget ipsum orci. Nulla facilisi. Aenean euismod volutpat purus, eu cursus velit viverra eu.</p>
        </a>
      </div>
    </div>
  );
}

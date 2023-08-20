'use client'
import { useState } from 'react';



export function Experts() {
  const [activeExpert, setActiveExpert] = useState('AIRWAY');

  const experts = [
    { name: "AIRWAY", color: "bg-blue-400",experts: [
      { name: "Dr. John", description: "Specialist in AIRWAY", imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    ], content: "nkjdvbsvjksvkb" },
    { name: "BITE", color: "bg-green-400",experts: [
      { name: "Dr. John", description: "Specialist in John", imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" },
    ], content: "A balanced bite plays a crucial role in the Ortho Face approach. The alignment of the teeth and jaws doesn't just influence chewing and speaking; it can also affect the harmony of the entire craniofacial structure. Correcting a misaligned bite not only contributes to better oral health but also supports proper joint function and may even alleviate issues like headaches and jaw pain." },
    { name: "HEARING", color: "bg-yellow-400",experts: [
      { name: "Dr. John", description: "Specialist in HEARING", imageUrl: "https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    ], content: "The Ortho Face philosophy extends to the auditory system. Addressing issues within the craniofacial complex can have implications for hearing health. Proper alignment of facial structures can impact how sound is transmitted and processed, potentially leading to improvements in auditory experiences." },
    { name: "VISION", color: "bg-indigo-400", experts: [
      { name: "Dr. John", description: "Specialist in VISION", imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    ],content: "Visual health is another integral component of Ortho Face. The positioning of facial bones and structures can impact how light enters the eyes, potentially affecting visual comfort and clarity. By considering the relationships between facial elements, Ortho Face seeks to support optimal visual function as part of comprehensive treatment." },
    { name: "BODY", color: "bg-purple-400",experts: [
      { name: "Dr. John", description: "Specialist in BODY", imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    ], content: "Ortho Face recognizes that the face is interconnected with the rest of the body. A well-aligned craniofacial structure can positively influence posture, muscle function, and even overall body comfort. By addressing facial concerns, Ortho Face aims to contribute to holistic bodily health and comfort." },
    { name: "MIND", color: "bg-pink-400", experts: [
      { name: "Dr. John", description: "Specialist in MIND", imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" },
    ],content: "Lastly, the Ortho Face approach acknowledges the psychological and emotional aspects of treatment. Improving facial aesthetics and function can have a profound impact on self-confidence, self-esteem, and overall mental well-being. By promoting a positive self-image, Ortho Face contributes to a healthier mind." },
  ];

  const activeExpertData = experts.find(e => e.name === activeExpert);
  const activeExpertList = activeExpertData.experts;
  const gridColsClass = activeExpertList.length > 1 ? 'grid-cols-2' : 'grid-cols-1';

  return (
    <div id="specialists" className="flex flex-col items-center space-y-8">
      <div className="flex flex-wrap justify-center space-x-[-1px]"> {/* Updated to flex-wrap and responsive margin */}
        {experts.map(expertCategory => (
          <div
            key={expertCategory.name}
            className={`${
              expertCategory.name === activeExpert ? 'mt-4' : 'mt-2' /* Adjusted spacing for mobile */
            } ${expertCategory.color} w-20 h-20 md:w-56 md:h-56 rounded-full flex items-center justify-center cursor-pointer transition-transform transform duration-300 hover:translate-y-2`}
            onClick={() => setActiveExpert(expertCategory.name)}
          >
            {expertCategory.name}
          </div>
        ))}
      </div>
      <div className="w-[70%] mt-6 md:mt-8"> {/* Adjusted margin for mobile */}
        <div className={`grid ${gridColsClass} gap-6 justify-center`}>
          {activeExpertList.map(expert => (
            <div key={expert.name} className="flex mb-8 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img src={expert.imageUrl} alt={expert.name} className="w-1/2 h-40 md:w-1/2 md:h-56 object-cover" /> {/* Adjusted image size for mobile */}
              <div className={`w-1/2 flex flex-col justify-center p-4 ${activeExpertData.color}`}>
                <h3 className="text-md md:text-xl font-bold mb-2 md:mb-4 text-white"> {/* Adjusted font size for mobile */}
                  {expert.name}
                </h3>
                <p className="text-xs md:text-sm text-white"> {/* Adjusted font size for mobile */}
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
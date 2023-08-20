// components/BubbleComponent.js
'use client'

import { useState } from 'react';

export function Bubble() {
  const [activeBubble, setActiveBubble] = useState('AIRWAY');
  const [bubbleClicked, setBubbleClicked] = useState(false); // New state for bubble click

  const bubbles = [
    { name: "AIRWAY", color: "bg-blue-400  ", content: "The airway is a central focus in the Ortho Face philosophy. A clear and unobstructed airway is essential for proper breathing and overall health. Orthodontic treatments that consider airway concerns can have a profound impact on sleep quality, energy levels, and even cognitive function. By optimizing the airway, Ortho Face aims to enhance not only dental aesthetics but also the individual's quality of life." },
    { name: "BITE", color: "bg-green-400", content: "A balanced bite plays a crucial role in the Ortho Face approach. The alignment of the teeth and jaws doesn't just influence chewing and speaking; it can also affect the harmony of the entire craniofacial structure. Correcting a misaligned bite not only contributes to better oral health but also supports proper joint function and may even alleviate issues like headaches and jaw pain." },
    { name: "HEARING", color: "bg-yellow-400", content: "The Ortho Face philosophy extends to the auditory system. Addressing issues within the craniofacial complex can have implications for hearing health. Proper alignment of facial structures can impact how sound is transmitted and processed, potentially leading to improvements in auditory experiences." },
    { name: "VISION", color: "bg-indigo-400", content: "Visual health is another integral component of Ortho Face. The positioning of facial bones and structures can impact how light enters the eyes, potentially affecting visual comfort and clarity. By considering the relationships between facial elements, Ortho Face seeks to support optimal visual function as part of comprehensive treatment." },
    { name: "BODY", color: "bg-purple-400", content: "Ortho Face recognizes that the face is interconnected with the rest of the body. A well-aligned craniofacial structure can positively influence posture, muscle function, and even overall body comfort. By addressing facial concerns, Ortho Face aims to contribute to holistic bodily health and comfort." },
    { name: "MIND", color: "bg-pink-400", content: "Lastly, the Ortho Face approach acknowledges the psychological and emotional aspects of treatment. Improving facial aesthetics and function can have a profound impact on self-confidence, self-esteem, and overall mental well-being. By promoting a positive self-image, Ortho Face contributes to a healthier mind." },
  ];
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex space-x-[-1px] flex-wrap justify-center">  {/* Added flex-wrap and responsive margin */}
        {bubbles.map(bubble => (
          <div
            key={bubble.name}
            className={`${
              bubble.name === activeBubble ? 'mt-4' : 'mt-2' /* Adjusted spacing for mobile */
            } ${bubble.color} w-24 h-24 md:w-60 md:h-60 rounded-full flex items-center justify-center cursor-pointer bubble-mix transition-transform transform duration-300 hover:translate-y-2`}  // Changed hover effect direction
            onClick={() => setActiveBubble(bubble.name)}
          >
            {bubble.name}
          </div>
        ))}
      </div>
      <div className={`w-full mt-6 md:mt-10 text-center p-4 ${bubbles.find(b => b.name === activeBubble).color} rounded-lg`}> {/* Adjusted padding and width */}
        {bubbles.find(b => b.name === activeBubble).content}
      </div>
    </div>
  );
}







'use client'

import React, { useState } from 'react';

const features = [
  {
    name: 'Story',
    initialDescription: 'Commodo nec sagittis tortor mauris sed.',
    expandedDescription:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
  },
  {
    name: 'Mission',
    initialDescription: 'Pellentesque enim a commodo malesuada turpis eleifend risus.',
    expandedDescription:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
  },
  {
    name: 'Vision',
    initialDescription: 'Pellentesque sit elit congue ante nec amet.',
    expandedDescription:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
  },
];

export function AboutUs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="about" className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl underline">
            About us
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-28 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <dt
                  className={`text-xl font-semibold leading-8 text-gray-900 p-3 bg-gray-100 rounded-full shadow cursor-pointer ${
                    expandedIndex === index ? 'bg-indigo-600 text-white' : ''
                  }`}
                  onClick={() => toggleExpansion(index)}
                >
                  {feature.name}
                </dt>
                <dd
                  className={`mt-6 text-lg leading-8 text-gray-600 transition-opacity ${
                    expandedIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {expandedIndex === index ? feature.expandedDescription : feature.initialDescription}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}



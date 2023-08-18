

const features = [
  {
    name: 'Story',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
  },
  {
    name: 'Mission',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
  },
  {
    name: 'Vision',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
  },
]
export function AboutUs() {
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
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <dt className="text-xl font-semibold leading-8 text-gray-900 p-3 bg-gray-100  rounded-full shadow">
                  {feature.name}
                </dt>
                <dd className="mt-6 text-lg leading-8 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex justify-center">
            <a href='/about' className="text-lg font-semibold leading-8 text-indigo-600 p-3 bg-gray-100  rounded-full shadow">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Specialized Programs",
    description: "Got your license or need specific training?",
    icon: "/assets/group28.svg",
  },
  {
    name: "Free Lesson",
    description: "Get your government funded Keys2Drive lesson here.",
    icon: "/assets/group29.svg",
  },
  {
    name: "First Go Guarantee",
    description: "We’re so confident you’ll pass first time, we guarantee it!",
    icon: "/assets/group30.svg",
  },
  {
    name: "Prices and Packages",
    description: "Choose a package that’s right for you.",
    icon: "/assets/group31.svg",
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-24">
      {/* simple hero */}
      <div className="mx-auto max-w-2xl mb-10">
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Covering all aspects of driving training
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our students are unique and so are our driving lessons. if you are
            looking to expand your skills with a friendly and safe instructor-
            we can help! If you don’t pass on your first go, have a free driving
            lesson; on us!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#packages"
              className="rounded-md bg-[#407BBF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#407BBF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407BBF]"
            >
              View packages
            </a>
            <Link
              href="/registration"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Register now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-9 flex items-center"
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.name}
                      width={150}
                      height={150}
                    />
                    <div className="">
                      <dt className="inline font-semibold text-gray-900">
                        {feature.name}
                      </dt>
                      <br />
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/assets/group4.svg"
            alt="Product image"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

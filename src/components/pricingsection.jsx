import { CheckIcon, StarIcon } from "@heroicons/react/solid";

export default function PricingSection() {
  return (
    <section className="w-full bg-blue-700 py-16 px-6" id="pricing">
      <h2 className="text-3xl font-bold text-slate-50 text-center mb-12">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-6">
        {/* One-on-one Pricing */}
        <div className="bg-slate-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">One-on-one</h3>
          <p className="text-lg text-slate-800 mb-6">$75/hr</p>
          <ul className="space-y-4">
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-6 w-6 text-blue-700 mr-3" />
              Individualised support
            </li>
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-6 w-6 text-blue-700 mr-3" />
              Suitable for specialised exam preparation
            </li>
            <li className="flex items-center text-slate-700">
              <StarIcon className="h-6 w-6 text-yellow-500 mr-3" />
              Perfect for mastering complex topics
            </li>
          </ul>
        </div>

        {/* Group Pricing */}
        <div className="bg-slate-100 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Groups of 2 or more</h3>
          <p className="text-lg text-slate-800 mb-6">$60/hr per person</p>
          <ul className="space-y-4">
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-6 w-6 text-blue-700 mr-3" />
              Learn from and motivate each other
            </li>
            <li className="flex items-center text-slate-700">
              <CheckIcon className="h-6 w-6 text-blue-700 mr-3" />
              Supportive learning environment
            </li>
            <li className="flex items-center text-slate-700">
              <StarIcon className="h-6 w-6 text-yellow-500 mr-3" />
              Boost your learning in a group setting
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

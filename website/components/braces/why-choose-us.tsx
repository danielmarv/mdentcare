import Image from "next/image"
import ima from "../../public/images/doct.jpg"

export default function WhyChooseUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            WHY SHOULD YOU CHOOSE? <span className="text-[#1e3a8a]">US</span>
          </h2>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={ima}
              alt="Woman smiling with natural hair"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              We are absolutely committed to excellence in providing the finest orthodontic treatment available in
              Uganda in an environment that is enriched with state-of-the-art technology. The result is beautiful teeth
              and a smile that will take you anywhere you choose to go in life.
            </p>
            <p className="text-gray-700">
              Whether you are an adult, adolescent or child, we are committed to helping you achieve the smile you
              deserve – a healthy, beautiful one! We strive to ensure that all our patients receive the most effective
              care and beautiful smile possible in a friendly, caring atmosphere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


import Image from "next/image"
import image from "../../public/images/do.jpg"

export function UnderstandingSection() {
  return (
    <div className="mb-12">
      <Image
        src={image}
        alt="Root Canal Treatment Illustration"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />
      <h2 className="text-2xl font-bold mb-4">Understanding Root Canal Treatment</h2>
      <p className="text-gray-600">
        Root Canal Treatment, also known as endodontic therapy, is a dental procedure performed to treat infected or
        damaged tooth pulp. It is a highly successful treatment that can save your natural tooth and alleviate pain
        caused by dental infections.
      </p>
    </div>
  )
}


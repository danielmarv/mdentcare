"use client"

export default function CrownBridgeProcess() {
  const visitOne = [
    {
      text: "Local anesthetic is applied",
    },
    {
      text: "Existing decay is removed, and tooth is shaped",
    },
    {
      text: "An intraoral 3D scan is taken and sent to a dental lab",
    },
    {
      text: "Your temporary crown is created and fixed to your tooth",
    },
  ]

  const visitTwo = [
    {
      text: "Temporary crown removed and your tooth is cleaned",
    },
    {
      text: "Fit of the final crown is confirmed with a close-up x-ray",
    },
    {
      text: "Adjustments are made for bite and comfort",
    },
    {
      text: "Permanent cement is attached to your final crown",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#2B4162] mb-8">What does the Crown & Bridge Process Involve?</h2>

      {/* Visit One */}
      <div className="mb-12">
        <div className="relative">
          <div className="inline-block bg-[#B5A642] text-white px-6 py-2 mb-6">VISIT ONE</div>
          <div className="grid gap-4 md:grid-cols-4">
            {visitOne.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-[#2B4162] text-white p-6 h-full flex items-center">
                  <p className="text-sm md:text-base">{step.text}</p>
                </div>
                {index < visitOne.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rotate-45 border-t-2 border-r-2 border-[#2B4162]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visit Two */}
      <div>
        <div className="relative">
          <div className="inline-block bg-[#B5A642] text-white px-6 py-2 mb-6">VISIT TWO</div>
          <div className="grid gap-4 md:grid-cols-4">
            {visitTwo.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-[#2B4162] text-white p-6 h-full flex items-center">
                  <p className="text-sm md:text-base">{step.text}</p>
                </div>
                {index < visitTwo.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rotate-45 border-t-2 border-r-2 border-[#2B4162]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


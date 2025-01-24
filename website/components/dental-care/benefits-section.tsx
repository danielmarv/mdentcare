interface BenefitProps {
    title: string
    description: string
  }
  
  function Benefit({ title, description }: BenefitProps) {
    return (
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  
  export default function BenefitsSection() {
    return (
      <div className="space-y-12">
        <Benefit
          title="Bite & Chew With Ease"
          description="An implant functions like a natural tooth. So, you can enjoy all your favourite foods without any discomfort in biting and chewing."
        />
        <Benefit
          title="Look Younger"
          description="Missing teeth may make your face look sunken and older than your age. Implants give you a well-balanced jawline, improve your smile and help you regain confidence."
        />
        <Benefit
          title="Life-long Solution"
          description="Dental implants are a one-time procedure. They are strong and extremely durable, lasting for a lifetime."
        />
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-4">Aesthetics In Dental Implants</h2>
          <p className="text-gray-600">
            A dental implant procedure is carefully planned and executed to ensure the dental restoration appears natural
            in shape, colour, and position. At iDental, we prioritise the comfort of our patients in addition to
            aesthetics. This requires a perfect blend of an artistic mind with surgical genius. Therefore, all implants
            are performed by a team of aesthetic dentists and implantologists, who are experts in their respective fields.
            This combination helps us achieve exceptional results.
          </p>
        </div>
      </div>
    )
  }
  
  
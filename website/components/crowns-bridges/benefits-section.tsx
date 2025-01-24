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
          title="What is a Bridge?"
          description="A bridge is a dental treatment that uses multiple crowns connected together in order to replace a missing tooth. At the minimum, a bridge includes two crowns on either side of a “fake” tooth called a pontic. Bridges are classified according to the number of units, which just means the number of teeth they cover. The most common is a three-unit bridge, which uses two teeth as anchors for one replacement tooth."
        />
        <Benefit
          title="Why do Some Teeth Need Dental Crowns or Bridges?"
          description="A dental crown replaces the enamel covering of a tooth, and is needed when the enamel can no longer perform its function. Enamel is the hardest substance in the human body, designed to withstand the thermal, chemical and mechanical forces our teeth undergo when we eat and drink. Unfortunately, however, it is not invincible."
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
  
  
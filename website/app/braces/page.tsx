import Hero from "@/components/braces/hero";
import WhyChooseSpecialist from "@/components/braces/why-choose-specialist";
import WhyChooseUs from "@/components/braces/why-choose-us";
import WhyOrthodontics from "@/components/braces/why-orthodontics";


export default function Home() {
  return (
    <main>
      <Hero/>
      <WhyOrthodontics />
      <WhyChooseSpecialist />
      <WhyChooseUs />
    </main>
  )
}



export default function Hero() {
    return (
      <div className="relative h-[400px] bg-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/do.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <h1 className="text-5xl font-bold text-white">Orthodontist</h1>
          </div>
        </div>
      </div>
    )
  }
  
  
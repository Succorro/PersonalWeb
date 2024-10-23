import { X } from "lucide-react"

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="min-h-screen p-6 md:p-8 lg:p-12">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-zinc-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <div className="space-y-6 text-lg">

            <h3 className="text-xl font-semibold mt-8 mb-4">Professional Journey 🚵‍♂️</h3>
            <p>
              Throughout my career, I've had the opportunity to work with diverse
              teams and contribute to projects ranging from startups to enterprise
              solutions. Each experience has shaped my understanding of what makes
              software not just functional, but truly impactful.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Beyond Coding 🚀</h3>
            <p>
              When I'm not coding, you can find me exploring nature hiking California's beautiful national parks,
              spending time with my family and friends, or discovering new food spots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
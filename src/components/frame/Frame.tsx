import Button from "../button/Button"

type ProjectCardProps = {
    title: string,
    stack: string,
    description: string,
    link: string,
    image: string,
    height: number
   }

const Frame: React.FC<ProjectCardProps> = ({ title, stack, description, link, image, height }) => {
  

  return (
    <div
      className="w-full rounded-3xl bg-cover bg-center p-6 relative
       text-white flex flex-col justify-end"
      style={{ backgroundImage: `url(${image})`, height: `${height}px` }}
    >
      {/* ✅ Gray overlay (behind content) */}
      <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-3xl z-0" />

      {/* ✅ Actual content (above overlay) */}
      <div className="relative z-10">
        <div className="w-1/2 bg-gray-700 bg-opacity-80 p-2 font-bold text-center rounded-2xl mb-4">
          {stack}
        </div>
        <h2 className="text-2xl font-bold py-2">{title}</h2>
        <p className="text-base py-4 w-[75%]">{description}</p>
        <Button
          href={link}
          label="View Case Study"
          className="btn-primary py-3!"
          icon=""
        />
      </div>
    </div>

  )
}

export default Frame
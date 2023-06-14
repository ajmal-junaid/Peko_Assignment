import PropTypes from "prop-types";
const List = ({image,title, subtitle}) => {
  return (
    <div className="flex items-center mt-6 ml-5">
    <img src={image} alt="image" className="w-11 h-11 mr-4" />
    <div>
      <h2 className="font-bold text-base">{title}</h2>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
  )
}
List.propTypes={
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired
}

export default List
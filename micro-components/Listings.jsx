import PropTypes from "prop-types";
export default function Listings(props) {
  return (
    <li className="p-3 hover:bg-blue-300/75 hover:text-blue-700  rounded-2xl">
      {props.link ? (
        <a href={props.link}>
          {props.emoji} {props.text}
        </a>
      ) : (
        <span className="cursor-pointer">
          {props.emoji} {props.text}
        </span>
      )}
    </li>
  );
}

Listings.propTypes = {
  emoji: PropTypes.string,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

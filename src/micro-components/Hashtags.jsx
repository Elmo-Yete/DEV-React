import PropTypes from "prop-types";
export default function Hashtags(props) {
  return (
    <div className="gap-5">
      {props.link ? (
        <a href={props.link}>{props.text}</a>
      ) : (
        <span>{props.text}</span>
      )}
    </div>
  );
}

Hashtags.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
};

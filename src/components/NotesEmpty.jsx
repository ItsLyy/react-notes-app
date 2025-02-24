import PropTypes from "prop-types";

export default function NotesEmpty({ message = "There are no notes here" }) {
  return (
    <div className="note-empty">
      <span>{message}</span>
    </div>
  );
}

NotesEmpty.propTypes = {
  message: PropTypes.string.isRequired,
};

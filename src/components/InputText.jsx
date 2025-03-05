import PropTypes from "prop-types";

function InputText({ type = "text", id = "", label = "", ...props }) {
  return (
    <div className="input__field">
      {label && <label htmlFor={id}>{label}</label>}
      <input {...props} type={type} id={id} name={id} />
    </div>
  );
}

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InputText;

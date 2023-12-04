import React, { ReactNode } from "react";
import PropTypes from "prop-types";
interface TextFieldProps {
  type: string | "text";
  value?: string;
  placeholder?: string;
  label?: string;
  id?: string;
  description?: string;
  borderRadius?: string;
  isRequired?: boolean;
  error?: string;
  componentStyle?: boolean;
  name?: string;
  icon?: ReactNode;
  autocomplete?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
  size?: string;
}
const TextField = (props: TextFieldProps) => {
  const {
    type = "text",
    value,
    placeholder,
    label,
    id,
    description,
    borderRadius,
    isRequired,
    error,
    componentStyle,
    name,
    icon,
    autocomplete,
    inputRef,
    disabled,
    size,
  } = props;
  const className = componentStyle ? "gray" : null;
  function getRadius(isIcon: boolean) {
    if (isIcon) {
      return {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      };
    } else {
      if (!icon && borderRadius) {
        return { borderRadius: borderRadius };
      } else if (icon && borderRadius) {
        return {
          borderTopRightRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        };
      }
    }
  }

  return (
    <>
      <label
        htmlFor={id}
        className={`${className + " " + size} ${error ? " error" : null}`}
      >
        {label} {isRequired ? <span>*</span> : null}
        {description ? <p>{description}</p> : null}
        <div className={icon ? "icon" : ""}>
          {icon ? <div style={getRadius(true)}>{icon}</div> : null}
          <input
            ref={inputRef}
            name={name}
            style={getRadius(false)}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            autoComplete={autocomplete}
            disabled={disabled}
          />
        </div>
      </label>
      {error ? <span className={"error"}>{error}</span> : null}
    </>
  );
};
TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
  borderRadius: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  componentStyle: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  size: PropTypes.string,
  inputRef: PropTypes.object,
  icon: PropTypes.any,
};
export default TextField;

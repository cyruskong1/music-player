import React, { Component } from "react";
import PropTypes from "prop-types";

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.handleOnChange.bind(this);
    this.onFocus = this.handleOnFocus.bind(this);
    this.onBlur = this.handleOnBlur.bind(this);
  }

  handleOnFocus(event) {
    const { onFocus } = this.props;
    if (onFocus) onFocus(event);
  }

  handleOnChange(event) {
    const { name, onChange } = this.props;
    if (onChange) onChange(event, name);
  }

  handleOnBlur(event) {
    const { onBlur } = this.props;
    if (onBlur) onBlur(event);
  }

  render() {
    const {
      className,
      type,
      name,
      value,
      placeholder,
      id,
      isVisible,
      isDisabled
    } = this.props;

    if (!isVisible) return null;

    return (
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value || ""}
        className={className}
        id={id}
        onBlur={this.props.onBlur ? this.onBlur : this.onChange}
        onChange={this.onChange}
        onFocus={this.onFocus}
        disabled={isDisabled}
      />
    );
  }
}

Textbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool
};

Textbox.defaultProps = {
  type: "text",
  name: "",
  value: "",
  className: "",
  placeholder: "",
  id: "",
  onBlur() {},
  onChange() {},
  onFocus() {},
  isVisible: true,
  isDisabled: false
};

export default Textbox;

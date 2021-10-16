import React, { useState } from "react";
import { Form, Input, InputNumber, message } from "antd";
import { StrongPasswordInput } from "react-rainbow-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function InputFormDefault({
  label,
  name,
  width,
  onChange,
  rules,
  hidden,
  validate,
  textValidate,
  addonBefore,
  style,
  password,
  showLabel,
  inputNumber = false,
  fieldKey,
  classCustom,
  onBlur,
  minValue = false,
  checkUserAndMail,
}) {
  const [value, setValue] = useState("");
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const getStrength = () => {
    const { length } = value;
    if (length === 0) {
      return undefined;
    }
    if (length <= 3) {
      return "weak";
    }
    if (length > 3 && length < 8) {
      return "average";
    }
    return "strong";
  };

  const passwordState = getStrength();

  const renderInput = () => {
    if (inputNumber) {
      return (
        <InputNumber
          placeholder={label}
          style={{ width: "100%" }}
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          formatter={(value) =>
            ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
        />
      );
    } else {
      return password ? (
        // <StrongPasswordInput
        //   id="strong-password-input-3"
        //   placeholder={label}
        //   // bottomHelpText="Mật khẩu nên có ký tự đặc biệt"
        //   className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        //   style={{ width: "100%" }}
        //   value={value}
        //   passwordState={passwordState}
        //   onChange={handleOnChange}
        //   icon={<FontAwesomeIcon icon={faKey} />}
        // />
        <Input.Password
          value={value}
          placeholder={label}
          style={{ width: "100%" }}
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      ) : (
        <Input
          className={`${classCustom}`}
          style={{ width: "100%" }}
          placeholder={label}
          onBlur={onBlur}
        />
      );
    }
  };
  return (
    <Form.Item
      label={showLabel ? label : ""}
      name={name}
      hidden={hidden}
      width={width}
      fieldKey={fieldKey}
      onChange={onChange}
      rules={
        validate && [
          {
            required: validate,
            message:
              textValidate !== null &&
              textValidate !== undefined &&
              textValidate !== ""
                ? textValidate
                : `Bạn chưa nhập   ${label} !`,
          },
          minValue && {
            min: minValue.min,
            message: minValue.msg,
          },
          // {
          //   validator: checkUserAndMail,
          // },
        ]
      }
    >
      {renderInput()}
    </Form.Item>
  );
}

import React, { useState } from "react";
import { PhoneInput } from "react-rainbow-components";
import styled from "styled-components";
import { Form } from "antd";

export default function InputNumberPhone({
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
}) {
  const [phone, setPhone] = useState();
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
        ]
      }
    >
      <PhoneInput placeholder={label} onChange={setPhone} value={phone} />
    </Form.Item>
  );
}

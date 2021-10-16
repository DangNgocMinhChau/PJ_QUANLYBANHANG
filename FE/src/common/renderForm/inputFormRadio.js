import React, { useEffect } from "react";
import { Form } from "antd";
import { RadioGroup } from "react-rainbow-components";
import * as actionCRUD from "./../../actions/configCRUDAutoAction/actCRUD";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
export default function InputFormRadio({
  label,
  name,
  width,
  onChange,
  rules,
  hidden,
  validate,
  textValidate,
  hasFeedback,
  validateStatus,
  style,
  value,
  showLabel,
  options,
  api,
  valueId = false,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (api) {
      dispatch(actionCRUD.actFindSelectRequest(api, name));
    }
  }, []);

  const { tag, quyen, file } = useSelector(
    (state) => ({
      tag: state.danhmuc.select.list.tag,
      quyen: state.danhmuc.select.list.quyen,
      file: state.danhmuc.select.list.file,
    }),
    shallowEqual
  );

  let optionsApi = [];
  if (name === "tag") {
    optionsApi = tag;
  }
  if (name === "quyen" || name === "quyenId") {
    optionsApi = quyen;
  }

  if (name === "file") {
    optionsApi = file;
  }
  let dataOption = options ? options : optionsApi;
  let data = [];
  let dataItem = {};
  dataOption.map((item, index) => {
    dataItem = {
      value: valueId ? item.id : item.value,
      label: item.ten,
    };
    data.push(dataItem);
  });

  return (
    <Form.Item
      label={showLabel ? label : ""}
      name={name}
      hidden={hidden}
      width={width}
      hasFeedback={hasFeedback}
      validateStatus={validateStatus}
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
      <RadioGroup
        orientation="horizontal"
        options={data}
        value={value}
        onChange={onChange}
      />
    </Form.Item>
  );
}

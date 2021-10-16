import moment from "moment";
import parse from "html-react-parser";
import "moment/locale/vi";
import { Link } from "react-router-dom";
import * as URL from "./../../constants/url";
import { valueNoiDatBanner } from "./../../common/data_options_select/optionSelect";
import { Image } from "antd";

export const renderDate = (value) => {
  if (value) {
    return <>{moment(value).format("DD/MM/YYYY")}</>;
  }
};

export const renderDateTime = (value) => {
  if (value) {
    return <>{moment(value).format("DD/MM/YYYY HH:mm:ss")}</>;
  }
};

export const renderDateTheoHeThong = () => {
  return moment().format("DD/MM/yyyy HH:mm:ss ");
};

export const renderStringHTML = (html) => {
  if (typeof html == "string") {
    return parse(html && html);
  }
};
export const renderConverText = (html, end = 100) => {
  if (typeof html == "string") {
    let text = html.slice(0, end);
    let result = text + " ...";
    return result;
  }
};

export const renderDateTinTuc = (time) => {
  var years = moment(time.split(" ")[0]).format("L");
  // .locale("vn")
  // .month(0)
  // .from(moment().month(1));

  return (
    <>
      <span className="custom-show-time">
        <i className="fa fa-clock-o" aria-hidden="true"></i> {years}
      </span>
    </>
  );
};

export const renderTrangThaiBaiViet = (status) => {
  if (status == 0) {
    return <span style={{ color: "blue" }}>Đang đợi phê duyệt</span>;
  }

  if (status == 1) {
    return <span style={{ color: "green" }}>Đã phê duyệt</span>;
  }

  if (status == 2) {
    return <span style={{ color: "red" }}>Không được phê duyệt</span>;
  }
};

export const renderTrangThaiBannerCustom = (status) => {
  if (status == true) {
    return <span style={{ color: "green" }}>Nổi bật</span>;
  }

  if (status == false) {
    return <span style={{ color: "red" }}>Không nổi bật</span>;
  }
};

export const renderNoiDatBannerCustom = (value) => {
  if (valueNoiDatBanner.find((item) => item.value == value)) {
    return (
      <span style={{ color: "black" }}>
        {valueNoiDatBanner.find((item) => item.value == value).ten}
      </span>
    );
  }
};

export const renderImgBanner = (data) => {
  return <iframe width="100%" height="300" src={data.value} />;
};

export const renderBreadcrumbs = (data) => {
  return <p>{data && data}</p>;
};

export const removeVietnameseTones = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  // str = str.replace(/\s+/g, "");

  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );

  str = str.replace(/\s+/g, " ");
  str = `${str.replace(/\s+/g, "-")}.html`;

  return str;
};
export const getValla = (arrItemDef, name) => {
  let indentityName = "";
  if (Array.isArray(name)) {
    indentityName = name.reduce((str, it) => (str += arrItemDef[it] + ""), "");
  } else {
    indentityName = arrItemDef[name];
  }
  return indentityName;
};

export const buildTree = (
  entities,
  mapParent = { cidProp: "id", pidProp: "pid", nameProp: "ten", codeProp: "ma" }
) => {
  const idCode =
    (mapParent.codeProp && mapParent.codeProp) || mapParent.cidProp;
  const getNestedChildren = (arr, parent, level = 0) => {
    let out = { treeData: [], entiObj: {}, leaf: [] };
    for (let i in arr) {
      let itemReturn = { ...arr[i] };
      let itemFlat = { ...arr[i], children: [] };
      itemReturn[mapParent.cidProp] = arr[i][mapParent.cidProp] + "";
      itemReturn[mapParent.pidProp] = arr[i][mapParent.pidProp] + "";
      itemReturn.lvl = level;

      itemFlat[mapParent.cidProp] = arr[i][mapParent.cidProp] + "";
      itemFlat[mapParent.pidProp] = arr[i][mapParent.pidProp] + "";
      itemFlat.lvl = level;
      let idName = getValla(arr[i], mapParent.nameProp);
      if (arr[i][mapParent.pidProp] + "" === parent + "") {
        let children = getNestedChildren(
          arr,
          arr[i][mapParent.cidProp] + "",
          level + 1
        );
        // if (children.treeData.length > 0) {
        //   itemReturn.treeData = children.treeData;
        //   itemFlat.children = children.treeData.reduce(
        //     (arrChild, itemChild) => {
        //       arrChild.push(itemChild[idCode] + "");
        //       return arrChild;
        //     },
        //     []
        //   );
        //   out.entiObj = { ...out.entiObj, ...children.entiObj };
        // } else {
        // }
        out.treeData.push({
          ...itemReturn,
          value: arr[i][idCode] + "",
          title: idName,
          label: idName,
          uuid: arr[i][mapParent.cidProp],
          parentUuid: arr[i][mapParent.pidProp],
          _cid: arr[i][idCode] + "",
          _name: idName,
          expanded: true,
        });
      }
    }
  };
  const treeBuild = entities
    ? getNestedChildren(entities, "0")
    : {
        treeData: [],
        entiObj: {},
        leaf: [],
      };
};

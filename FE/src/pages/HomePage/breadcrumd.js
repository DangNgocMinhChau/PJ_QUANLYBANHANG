import React from "react";
import { Breadcrumb, Breadcrumbs } from "react-rainbow-components";
import { renderBreadcrumbs } from "../../common/convert/renderConvert";
export default function Breadcrumd() {
  let data = renderBreadcrumbs();
  return (
    <div className="rainbow-p-around_large rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
      <Breadcrumbs>
        <Breadcrumb
          label="Breadcrumb Parent"
          onClick={() => alert("Breadcrumb was clicked")}
        />
        <Breadcrumb label="Breadcrumb" />
      </Breadcrumbs>
    </div>
  );
}

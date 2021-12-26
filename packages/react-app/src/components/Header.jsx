import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/ipatka/DadaWrapperUI/" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🎁 Dada Wrapper"
        subTitle="Simple UI to wrap and unwrap historic Dada collectibles"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}

import React from "react";

export type ShortcutProps = {
  shortc: string;
  delimeter: string;
};

const Shortcut: React.FC<ShortcutProps> = ({ shortc, delimeter }) => {
  return <span className={shortc === delimeter ? "command-delimeter" : ""}>{shortc}</span>;
};

export default Shortcut;

import React from "react";

export type ShortcutProps = {
  shortcut: string;
  delimeter: string;
};

const Shortcut: React.FC<ShortcutProps> = ({ shortcut, delimeter }) => {
  return <span className={shortcut === delimeter ? "command-delimeter" : ""}>{shortcut}</span>;
};

export default Shortcut;

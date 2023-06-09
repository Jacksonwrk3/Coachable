import React from "react";
//fontsize
// xs: Approximately 12 pixels
// sm: Approximately 14 pixels
// md: Approximately 16 pixels (base font size)
// lg: Approximately 20 pixels
// xl: Approximately 24 pixels
// 2xl: Approximately 32 pixels
// 3xl: Approximately 40 pixels
// 4xl: Approximately 48 pixels
// 5xl: Approximately 56 pixels
// 6xl: Approximately 64 pixels
// 7xl: Approximately 72 pixels
// 8xl: Approximately 80 pixels
// 9xl: Approximately 88 pixels
//Take text alignment
const Text = (props) => {
  let fontSize;
  let textAlign;
  let fontWeight;
  switch (props.fontSize) {
    case "xs":
      fontSize = ".75rem";
      break;
    case "sm":
      fontSize = ".875rem";
      break;
    case "md":
      fontSize = "1rem";
      break;
    case "lg":
      fontSize = "1.25rem";
      break;
    case "xl":
      fontSize = "1.5rem";
      break;
    case "2xl":
      fontSize = "2rem";
      break;
    case "3xl":
      fontSize = "2.5rem";
      break;
    case "4xl":
      fontSize = "3rem";
      break;
    case "5xl":
      fontSize = "3.5rem";
      break;
    case "6xl":
      fontSize = "4rem";
      break;
    case "7xl":
      fontSize = "4.5rem";
      break;
    case "8xl":
      fontSize = "5rem";
      break;
    case "9xl":
      fontSize = "5.5rem";
      break;
    default:
      fontSize = "1rem"; // Default font size if none of the cases match
      break;
  }

  switch (props.textAlign) {
    case "left":
      textAlign = "left";
      break;
    case "center":
      textAlign = "center";
      break;
    case "right":
      textAlign = "right";
      break;
    case "justify":
      textAlign = "justify";
      break;
    case "initial":
      textAlign = "initial";
      break;
    case "inherit":
      textAlign = "inherit";
      break;
    default:
      textAlign = "left"; // Default text alignment if none of the cases match
      break;
  }

  switch (props.fontWeight) {
    case "bold":
      fontWeight = "bold";
      break;
    case "light":
      fontWeight = "300";
      break;
    case "medium":
      fontWeight = "500";
      break;
    case "thin":
      fontWeight = "100";
      break;
    case "extraLight":
      fontWeight = "200";
      break;
    case "semiBold":
      fontWeight = "600";
      break;
    case "extraBold":
      fontWeight = "800";
      break;
    case "black":
      fontWeight = "900";
      break;
    default:
      fontWeight = "normal";
      break;
  }
  const textStyles = {
    fontSize: fontSize,
    textAlign: textAlign,
    fontWeight: fontWeight,
  };

  return (
    <p className={props.className} style={textStyles}>
      {props.children}
    </p>
  );
};

export default Text;

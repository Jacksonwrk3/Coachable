import React from "react";
const Flex = (props) => {
  let alignItems, flexDirection, justifyContent, flexWrap;

  switch (props.alignItems) {
    case "center":
      alignItems = "center";
      break;
    case "flexStart":
      alignItems = "flex-start";
      break;
    case "flexEnd":
      alignItems = "flex-end";
      break;
    case "baseLine":
      alignItems = "baseline";
      break;
    case "stretch":
      alignItems = "stretch";
      break;
    case "initial":
      alignItems = "initial";
      break;
    case "inherit":
      alignItems = "inherit";
      break;
    default:
      alignItems = ""; // Default value if none of the above cases match
      break;
  }

  switch (props.flexDirection) {
    case "row":
      flexDirection = "row";
      break;
    case "rowReverse":
      flexDirection = "row-reverse";
      break;
    case "column":
      flexDirection = "column";
      break;
    case "columnReverse":
      flexDirection = "column-reverse";
      break;
    default:
      flexDirection = "row"; // Default value if none of the above cases match
      break;
  }

  switch (props.justifyContent) {
    case "flexStart":
      justifyContent = "flex-start";
      break;
    case "flexEnd":
      justifyContent = "flex-end";
      break;
    case "center":
      justifyContent = "center";
      break;
    case "spaceBetween":
      justifyContent = "space-between";
      break;
    case "spaceAround":
      justifyContent = "space-around";
      break;
    case "spaceEvenly":
      justifyContent = "space-evenly";
      break;
    case "stretch":
      justifyContent = "stretch";
      break;
    default:
      justifyContent = ""; // Default value if none of the above cases match
      break;
  }

  switch (props.flexWrap) {
    case "nowrap":
      flexWrap = "nowrap";
      break;
    case "wrap":
      flexWrap = "wrap";
      break;
    case "wrapReverse":
      flexWrap = "wrap-reverse";
      break;
    default:
      flexWrap = ""; // Default value if none of the above cases match
      break;
  }
  const flexStyles = {
    display: "flex",
    alignItems: alignItems,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    flexWrap: flexWrap,
    height: "100%",
    width: "100%",
    border: "2px solid blue",
  };
  return <div style={flexStyles}>{props.children}</div>;
};

export default Flex;

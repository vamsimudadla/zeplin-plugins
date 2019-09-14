export const getTextStyles = textStyles => {
  let code = ``;
  for (let i = 0; i < textStyles.length; i++) {
    const name = textStyles[i].name;
    const color = textStyles[i].color || { name: "props.color" };
    const textColor = color.name;
    const textStyle = `\n\nexport const ${name} = styled.Text\`
      color: ${textColor};
      font-size: ${textStyles[i].fontSize};
      font-family: "${textStyles[i].fontFace}";
      \``;
    code = code + textStyle;
  }
  return code;
};

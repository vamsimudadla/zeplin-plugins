import { getTextStyles } from "./utils/text-styles";

/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {}

function screen(context, selectedVersion, selectedScreen) {}

function component(context, selectedVersion, selectedComponent) {}

function colors(context) {
  return JSON.stringify(context.project.colors, null, "\n");
}

function textStyles(context) {
  const code = getTextStyles(context.project.textStyles, context.project);
  return {
    code: code,
    language: "javascript"
  };
}

function exportColors(context) {}

function exportTextStyles(context) {
  var codeObject = textStyles(context);
  var code = codeObject.code;

  return {
    code: code,
    filename: "text-styles.js",
    language: "javascript"
  };
}

/**
 * The following functions will be deprecated. Your extensions can export them to support old versions of Zeplin's macOS app.
 * See Zeplin Extensions migration guide for details:
 * https://zpl.io/shared-styleguides-extensions-migration-guide
 */

function styleguideColors(context, colors) {}

function styleguideTextStyles(context, textStyles) {}

function exportStyleguideColors(context, colors) {}

function exportStyleguideTextStyles(context, textStyles) {}

function comment(context, text) {}

export default {
  layer,
  screen,
  component,
  colors,
  textStyles,
  exportColors,
  exportTextStyles,
  styleguideColors,
  styleguideTextStyles,
  exportStyleguideColors,
  exportStyleguideTextStyles,
  comment
};

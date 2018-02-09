// Theme constants
import {
  semantic_theme_names_dark,
  semantic_theme_names_light,
  theme_base16_material
} from "./themes";

export default class StyleSheet {
    private static _instance: StyleSheet;

    private _styleElement: HTMLStyleElement;
  /*
  private _styleElement: HTMLStyleElement;
  private _rules: string[];
  private _config: IStyleSheetConfig;
  private _rulesToInsert: string[];
  private _timerId: number;
  private _counter: number;
  private _keyToClassName: { [key: string]: string };

  // tslint:disable-next-line:no-any
  private _classNameToArgs: { [key: string]: { args: any, rules: string[] } };
  */

  public static getInstance(): StyleSheet {
      if (StyleSheet._instance) {
        StyleSheet._instance = new StyleSheet();
      }

      return StyleSheet._instance;
  }

  constructor() {
      this._styleElement = this._createCssElement();
  }

  /**
   * Inserts a css rule into the stylesheet.
   */
  public insertRule(rule: string): void {
    const { sheet } = this._styleElement!;
    try {
        (sheet as any).insertRule(rule, (sheet as any).cssRules.length);
    } catch (e) {
      console.error('Error: cannot insert rule');
    }
  }

  public loadDefaultTheme(isDark: boolean = true) {
    this.loadTheme(theme_base16_material, isDark);
  }

  public loadTheme(theme: any, isDark: boolean = true) {
    this._clear();
    let semanticNames = isDark ? semantic_theme_names_dark : semantic_theme_names_light;
    for (const name in theme) {
      let rule = ':root{' + name + ':' + theme[name] + ';}';
      this.insertRule(rule);
    }

    for (const name in semanticNames) {
      let rule = ':root{' + name + ':' + theme[semanticNames[name]] + ';}';
      this.insertRule(rule);
    }
  }

  private _clear() {
    const { sheet } = this._styleElement!;
    const ruleCount = (sheet as any).cssRules.length;
    for (let i = 0; i < ruleCount; i++) {
      (sheet as any).deleteRule(0);
    }
  }

  private _createCssElement(): HTMLStyleElement {
    const cssElement = document.createElement('style');
    cssElement.type = 'text/css';
    document.head.insertBefore(cssElement, document.head.childNodes[0]);

    return cssElement;
  }
}

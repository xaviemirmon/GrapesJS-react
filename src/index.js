/** @jsxImportSource theme-ui */

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import grapesjs from "grapesjs";
import Basics from "grapesjs-blocks-basic";

import BaseReactComponent from "./base-react-component";
// import ReactComponents from './react-components';
import ThemeUiComponents from "./theme-ui-components";

import { ThemeProvider, Link, Card, Text } from "theme-ui";
import * as themes from "@theme-ui/presets";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { HeaderA2 as Header } from "./theme-ui-components/Header";
import { Footer } from "./theme-ui-components/Footer";
import { CardVertical } from "./theme-ui-components/Card";

const Index = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs2",
      fromElement: false,
      storageManager: {
        id: "gjs-", // Prefix identifier that will be used inside storing and loading
        type: "local", // Type of the storage
        autosave: true, // Store data automatically
        autoload: true, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true, // Enable/Disable storing of components in JSON format
        storeStyles: false, // Enable/Disable storing of rules in JSON format
        storeHtml: false, // Enable/Disable storing of components as HTML string
        storeCss: false, // Enable/Disable storing of rules as CSS string
      },
      storageManager: false,
      plugins: [Basics, BaseReactComponent, ThemeUiComponents],
      blockManager: {
        appendTo: "#blocks",
      },
      styleManager: {
        appendTo: "#style-manager-container",
        sectors: [
          {
            name: "General",
            open: false,
            buildProps: [
              "float",
              "display",
              "position",
              "top",
              "right",
              "left",
              "bottom",
            ],
          },
          {
            name: "Dimension",
            open: false,
            buildProps: [
              "width",
              "height",
              "max-width",
              "min-height",
              "margin",
              "padding",
            ],
          },
          {
            name: "Typography",
            open: false,
            buildProps: [
              "font-family",
              "font-size",
              "font-weight",
              "letter-spacing",
              "color",
              "line-height",
              "text-align",
              "text-shadow",
            ],
          },
          {
            name: "Decorations",
            open: false,
            buildProps: [
              "border-radius-c",
              "background-color",
              "border-radius",
              "border",
              "box-shadow",
              "background",
            ],
          },
          {
            name: "Extra",
            open: false,
            buildProps: ["opacity", "transition", "perspective", "transform"],
            properties: [
              {
                type: "slider",
                property: "opacity",
                defaults: 1,
                step: 0.01,
                max: 1,
                min: 0,
              },
            ],
          },
        ],
        sectors: [],
      },
      selectorManager: {
        appendTo: "#selectors-container",
      },
      traitManager: {
        appendTo: "#traits-container",
      },
      panels: {
        defaults: [
          {
            id: "styles",
            el: "#style-manager",
            resizable: {
              tc: 0,
              cr: 0,
              cl: 1,
              bc: 0,
              keyWidth: "flex-basis",
            },
          },
        ],
      },
    });

    const bm = editor.BlockManager;
    editor.on("load", () => {
      editor.BlockManager.render([
        bm.get("column1").set("category", ""),
        bm.get("column2").set("category", ""),
        bm.get("column3").set("category", ""),
        bm.get("text").set("category", ""),
        bm.get("image").set("category", ""),
        bm.get("Card").set("attributes", { class: "fa fa-square" }),
        bm.get("Card").set("category", ""),
        bm.get("Button").set("attributes", { class: "fa fa-external-link-square" }),
        bm.get("Button").set("category", ""),
      ]);
    });

    editor.runCommand("sw-visibility");
    editor.on("canvas:drop", (some, argument) => {
      const canvas = editor.Canvas;

      const arrStyleSheets = document.querySelectorAll("[data-emotion]");
      let strStyleSheets = "";

      arrStyleSheets.forEach((e) => {
        strStyleSheets += e.innerText;
      });

      const head = canvas.getDocument().head;
      head.insertAdjacentHTML(
        "beforeend",
        `<style>` + strStyleSheets + `</style>`
      );
    });
    const canvas = editor.Canvas;

    const arrStyleSheets = document.querySelectorAll("[data-emotion]");
    let strStyleSheets = "";

    arrStyleSheets.forEach((e) => {
      strStyleSheets += e.innerText;
    });

    const head = canvas.getDocument().head;
    head.insertAdjacentHTML(
      "beforeend",
      `<style>` + strStyleSheets + `</style>`
    );
  });
  return (
    <>
      <div className="column editor-clm">
        <div id="blocks"></div>
        <Header />
        <div id="gjs2"></div>
        <Footer />
      </div>

      <div id="style-manager" className="column" style={{ flexBasis: `500px` }}>
        <div id="selectors-container"></div>
        <div id="traits-container"></div>
        <div id="style-manager-container"></div>
      </div>
    </>
  );
};

const cache = createCache({
  key: "gjs",
  speedy: false,
});

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ThemeProvider theme={themes.system}>
        <Index />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

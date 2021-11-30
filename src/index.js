/** @jsxImportSource theme-ui */

import React, { useEffect } from "react"
import ReactDOM from "react-dom"

import grapesjs from 'grapesjs';
import Basics from 'grapesjs-blocks-basic';

import BaseReactComponent from './base-react-component';
// import ReactComponents from './react-components';
import ThemeUiComponents from './theme-ui-components';

import { ThemeProvider, Link, Card, Text } from 'theme-ui'
import * as themes from '@theme-ui/presets'

const Index = () => {
  
  useEffect(() => {

    const arrStyleSheets = document.querySelectorAll('[data-emotion]');
    let strStyleSheets = ''
    
    arrStyleSheets.forEach( e => {
      strStyleSheets += e.innerText
    })

    const editor = grapesjs.init({
      container  : '#gjs2',
      height: '100%',
      fromElement: false,
      storageManager: { 
        id: 'gjs-',             // Prefix identifier that will be used inside storing and loading
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true,  // Enable/Disable storing of components in JSON format
        storeStyles: false,      // Enable/Disable storing of rules in JSON format
        storeHtml: false,        // Enable/Disable storing of components as HTML string
        storeCss: false,         // Enable/Disable storing of rules as CSS string
      },
      storageManager: false,
      plugins: [Basics, BaseReactComponent, ThemeUiComponents],
      blockManager: {
        appendTo: '#blocks'
      },
      styleManager: {
        appendTo: '#style-manager-container',
        sectors: [{
      name: 'General',
      open: false,
      buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
    },{
      name: 'Dimension',
      open: false,
      buildProps: [ 'width', 'height', 'max-width', 'min-height', 'margin', 'padding']
    },{
      name: 'Typography',
      open: false,
      buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']
    },{
      name: 'Decorations',
      open: false,
      buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
    },{
      name: 'Extra',
      open: false,
      buildProps: ['opacity', 'transition', 'perspective', 'transform'],
      properties: [{
        type: 'slider',
        property: 'opacity',
        defaults: 1,
        step: 0.01,
        max: 1,
        min:0,
      }]
    }],
      },
      selectorManager: {
        appendTo: '#selectors-container',
      },
      traitManager: {
        appendTo: '#traits-container',
      },
      panels: {
        defaults: [{
          id: 'styles',
          el: '#style-manager',
          resizable: {
            tc: 0,
            cr: 0,
            cl: 1,
            bc: 0,
            keyWidth: 'flex-basis',
          },
        }]
      }
    });

const bm = editor.BlockManager;
editor.on('load', () => {
  editor.BlockManager.render([
    bm.get('column1').set('category', ''),
    bm.get('column2').set('category', ''),
    bm.get('column3').set('category', ''),
    bm.get('text').set('category', ''),
    bm.get('image').set('category', ''),
    bm.get('Card').set('attributes', {class:'fa fa-square'}),
    bm.get('Card').set('category', '')
  ])
});


editor.runCommand('sw-visibility');

const canvas = editor.Canvas;

const head = canvas.getDocument().head;
console.log(head, 'head')
console.log(strStyleSheets, 'styles')
head.insertAdjacentHTML('beforeend', `<style>` + strStyleSheets +`</style>`)


console.log(editor.getConfig())  
  
  });
  return (
    <>

      <div className="column editor-clm">
         <div id="blocks"></div>
         <header
          sx={{
            display: 'grid',
            gridGap: 3,
            gridTemplateColumns: 'repeat(3, 1fr)',
            px: 3,
            py: 4,
            alignItems: 'center',
            variant: 'styles.header',
          }}>
          <button
            title="Toggle Menu"
            sx={{
              appearance: 'none',
              width: 32,
              height: 32,
              m: 0,
              p: 1,
              color: 'inherit',
              bg: 'transparent',
              border: 0,
              ':focus': {
                outline: '2px solid',
              },
              ':hover': {
                color: 'primary',
              },
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentcolor"
              viewBox="0 0 24 24"
              sx={{
                display: 'block',
                margin: 0,
              }}>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Link
              to="/"
              sx={{
                variant: 'styles.navlink',
                px: 3,
                py: 1,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: '4px solid',
                color: 'primary',
              }}>
              Home
            </Link>
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Link
              to="/blog"
              sx={{
                variant: 'styles.navlink',
                ml: 3,
                py: 3,
              }}>
              Blog
            </Link>
            <Link
              to="/about"
              sx={{
                variant: 'styles.navlink',
                ml: 3,
                py: 3,
              }}>
              About
            </Link>
          </div>
        </header>
        <div id="gjs2" style={{overflow: `hidden`}}>

        </div>

        <div>
          <Card><Text>Foo</Text></Card>
        </div>

        <footer
          sx={{
            fontSize: 1,
            color: 'background',
            bg: 'text',
            variant: 'styles.footer',
          }}>
          <div
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              maxWidth: 768,
              mx: 'auto',
              px: 2,
              py: 4,
            }}>
            <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              Home
            </Link>
            <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              Blog
            </Link>
            <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              About
            </Link>
            <div sx={{ mx: 'auto' }} />
            <div sx={{ p: 2 }}>© 2019 Jane Doe</div>
          </div>
        </footer>
      </div>

      <div id="style-manager" className="column"  style={{flexBasis: `500px`}}>
        <div id="selectors-container"></div>
        <div id="traits-container"></div>
        <div id="style-manager-container"></div>
      </div>

    </>
  )

} 

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ themes.tosh }>
      <Index />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
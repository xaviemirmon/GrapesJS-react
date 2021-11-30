/** @jsxImportSource theme-ui */

import React from 'react';
import { Card, Switch, Text } from 'theme-ui';
import { CardVertical } from './Card';
import { ButtonGeneric as Button } from './Button'

export default (editor) => {
  const { Blocks, Components } = editor;

  // Helper for MUI components
  const addCmp = ({ type, component, props }) => {
    Components.addType(type, {
      extend: 'react-component',
      model: {
        defaults: {
          ...props,
          component
        }
      },
      view: {
        /**
         * We need this in order to render MUI styles in the canvas
         */
        
      },
      isComponent: (el) => el.tagName === type.toUpperCase()
    });
    
    Blocks.add(type, {
      label: type,
      category: 'Theme UI',
      content: { type },
    });
  };

  addCmp({
    type: 'Card',
    component: (props) =>
        React.createElement(CardVertical, {
          ...props
        }),
    props: {
      stylable: false,
      editable: true,
      traits: [],
      components: 'Foo',
    }
  });
  addCmp({
    type: 'Button',
    component: (props) =>
        React.createElement(Button, {
          ...props
        }),
        props: {
          attributes: {
            variant: "primary",
          },
          components: "Click me",
          traits: [
            {
              type: "select",
              label: "Variant",
              name: "variant",
              options: [
                { value: "contained", name: "Contained" },
                { value: "outlined", name: "Outlined" },
              ],
            },
            {
              type: "text",
              label: "Button text",
              name: "text",
              placeholder: 'Insert text'
            },
            {
              type: "checkbox",
              label: "Disabled",
              name: "disabled",
            },
            {
              type: "select",
              label: "Color",
              name: "variant",
              options: [
                { value: "primary", name: "Primary" },
                { value: "secondary", name: "Secondary" },
              ],
            },
          ],
        },
  });
  addCmp({
    type: 'Switch',
    component: (props) =>
        React.createElement(Switch, {}),
    props: {
      stylable: false,
      editable: true,
      traits: [],
    }
  });

 
};

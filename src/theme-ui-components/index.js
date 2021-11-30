import React from 'react';
import { Card, Switch, Text } from 'theme-ui';

export default (editor) => {
  const { Blocks, Components } = editor;
  const sheetsManager = new Map();

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
        createReactEl(cmp, props) {
          return React.createElement(
            cmp,
            props,
            this.createReactChildWrap()
          );
        }
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
        React.createElement(Card, {
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

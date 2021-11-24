import Listing from './Listing';
import { Card } from 'theme-ui';


export default (editor) => {
  editor.Components.addType('Listing', {
    extend: 'react-component',
    model: {
      defaults: {
        component: Listing,
        stylable: true,
        resizable: true,
        editable: true,
        draggable: true,
        droppable: true,
        attributes: {
          mlsid: 'Default MLSID',
          editable: true
        },
        traits: [
          {
            type: 'number',
            label: 'MLS ID',
            name: 'mlsid'
          }
        ]
      }
    },
    isComponent: (el) => el.tagName === 'LISTING'
  });

  editor.BlockManager.add('listing', {
    label: "<div class='gjs-fonts gjs-f-b1'>Listing</div>",
    category: 'React Components',
    content: '<Listing>Foo</Listing>'
  });
  editor.BlockManager.add('card', {
    label: "<div class='gjs-fonts gjs-f-b1'>Card</div>",
    category: 'React Components',
    content: '<Card>Foo</Card>'
  });
};

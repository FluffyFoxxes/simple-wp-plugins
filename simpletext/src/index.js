import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

registerBlockType('maxim/simpletext-block', {
    title: 'Simple text',
	icon: 'visibility',
	category: 'widgets',
    attributes: {
        text: {
            type: 'string',
            source: "attribute",
            attribute: "data-text",
            selector: "#simpletext"
        }
    },
    edit,
    save,

});
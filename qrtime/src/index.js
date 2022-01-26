import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

registerBlockType('maxim/qrtime-block', {
    title: 'QRTime Block',
	icon: 'visibility',
	category: 'widgets',
    attributes: {
        size: {
            type: "number",
            source: "attribute",
            attribute: "data-size",
            selector: "#qrСode"
        },
        timer: {
            type: "number",
            source: "attribute",
            attribute: "data-timer",
            selector: "#qrСode"
        },
        animSpeed: {
            type: "number",
            source: "attribute",
            attribute: "data-animSpeed",
            selector: "#qrСode"
        }
    },
    edit,
    save,

});
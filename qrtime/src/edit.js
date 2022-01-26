import {
    Placeholder,
    TextControl,
} from '@wordpress/components';


const edit = ({ attributes, isSelected, setAttributes }) => {
    return (
        <div>
            <Placeholder
                label="QRTime Block"
                instructions="Setup variable"
            >
                <Placeholder
                    label='Set size'
                    instructions='Setup stupid size'
                >
                    <TextControl
                        value={attributes.size}
                        onChange={(val) => setAttributes({ size: val })}
                    />
                </Placeholder>

                <Placeholder>
                    <TextControl
                        value={attributes.timer}
                        onChange={(val) => setAttributes({ timer: val })}
                    />
                </Placeholder>

                <TextControl
                    value={attributes.animSpeed}
                    onChange={(val) => setAttributes({ animSpeed: val })}
                />
            </Placeholder>
        </div>
    );
};

export default edit;
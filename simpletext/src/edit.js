import {
    Placeholder,
    TextControl
} from '@wordpress/components'

const edit = ({ attributes, isSelected, setAttributes }) => {
    return (
        <div>
            {attributes.text && !isSelected ?
                <div id="simpletext" data-text={attributes.text}>
                    <h1>{attributes.text}</h1>
                </div>
                : <Placeholder
                    label="Simple text"
                    instructions="Set text"
                >
                    <TextControl
                        value={attributes.text}
                        onChange={(val) => setAttributes({ text: val })}
                    />
                </Placeholder>
            }
        </div>
    )
}

export default edit
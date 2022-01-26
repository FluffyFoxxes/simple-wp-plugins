const save = ({ attributes }) => {
    return (
        <>
            <div
                id="qrСode"
                data-size={attributes.size}
                data-timer={attributes.timer}
                data-animSpeed={attributes.animSpeed}
            >
                <div id="qrOne"></div>
                <div id="qrTwo"></div>
                <div id="qrTime"></div>
            </div>
        </>
    );
};

export default save;

function Image(srcImg: string, altImg: string) {
    return (
        <>
            <img className="w3-image" src={{srcImg}} alt={{altImg}} />
        </>
    );
}

export default Image;

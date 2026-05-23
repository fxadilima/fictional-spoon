
function Image(srcImg: string, altImg: string) {
    return (
        <>
            <img className="w3-image" srcImg={{srcImg}} altImg={{altImg}} />
        </>
    );
}

export default Image;

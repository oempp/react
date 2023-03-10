import { React } from "react";

function Shadowdom() {
    const iframePart = () => {
        return {
            __html: `<iframe src="/html/screen01.html" width='100%' height='1400px' margin=''></iframe>`,
        };
    };
    return (
        <div
            dangerouslySetInnerHTML={iframePart()}
        />
    );
}


export default Shadowdom;
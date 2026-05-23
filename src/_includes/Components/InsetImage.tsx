
export default function InsetImage(src: string, alt: string, title: string) {
    return (
        <div class="w3-display-container w3-margin-top w3-margin-bottom">
            <img src={{src}} alt={{alt}} style="width:100%; max-width:800px; display:block; margin:auto;" class="w3-round w3-card-4" />
            <p class="w3-center w3-serif w3-opacity" style="font-size: 0.9em; margin-top: 8px;">
                {{title}}
            </p>
        </div>
    );
}


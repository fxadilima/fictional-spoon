import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";

import rehypeHighlight from "https://esm.sh/rehype-highlight@6";


const markdown = {
    breaks: false,
    html: true
};


const site = lume({}, { markdown });

site.use(mdx({
    extensions: [".mdx"],
    rehypePlugins: [rehypeHighlight]
}));

site.copy("./assets", "assets");
site.copy("./images", "images");
export default site;

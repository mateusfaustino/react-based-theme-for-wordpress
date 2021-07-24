 import breakpoints from "./breakpoints"
 import colors from "./colors"
 import { handleDefault } from "../functions"

 const header_0 = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 48px;
    line-height: 110%;
    @media (min-width:${breakpoints.mobile}) {
        font-size: 56px;
    }`

const header_1 = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 32px;
    line-height: 120%;
    @media (min-width:${breakpoints.mobile}) {
        font-size: 40px;
    }`

const header_2 = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 24px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 32px;
    }
`
const header_3 = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 20px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 22px;
    }
`
const header_4 = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 20px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 24px;
    }
`
const header_5 = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    color: $color;
    font-size: 18px;
    line-height: 120%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 22px;
    }
`
const paragraph = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_bold = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_italic = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-style: italic;
    font-size: 14px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const paragraph_capitalized = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 16px;
    }
`
const small = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 12px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`
const small_bold = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-weight: bold;
    font-size: 12px;
    line-height: 150%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`
const tiny_italic = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-style: italic;
    font-weight: 500;
    font-size: 11px;
    line-height: 110%;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 12px;
        line-height: 120%;
    }
`
const postTitle = `
    color: #101619;
    font-size: 2.2em;
    font-style: normal;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.2;
    text-transform: none;
    margin-bottom: .6rem;
    font-family: "adelle-sans",Helvetica,sans-serif;
    @media (min-width:${breakpoints.mobile}) {
        
    }
`
const postExcerpt = `
    
    
    margin-top: .6em;
    font-family: "adelle-sans",Helvetica,sans-serif;
    font-style: italic;
    font-weight: 400;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;
    font-size: 1.2em;
    color: #6A6A6A;
    margin-bottom: .6rem;
    @media (min-width:${breakpoints.mobile}) {
        
    }
`
const postContent = `
    color: #101619;
    font-size: 1.15em;
    line-height: 155%;
    margin: 1em 0;
    font-size: 18px;
    font-weight: 300;
    color:#424242;
`

const scratched = (color) =>`
    color: ${handleDefault(color,colors.text_onLight)};
    font-size: 12px;
    line-height: 150%;
    text-decoration-line: line-through;

    @media (min-width:${breakpoints.mobile}) {
        font-size: 14px;
    }
`

const typographies = {
    header0: header_0,
    header1: header_1,
    header2: header_2,
    header3: header_3,
    header4: header_4,
    header5: header_5,
    paragraph:paragraph,
    paragraphBold:paragraph_bold,
    paragraphCapitalized:paragraph_capitalized,
    paragraphItalic:paragraph_italic,
    small:small,
    smallBold:small_bold,
    smallScratched:scratched,
    tinyItalic:tiny_italic,
    postTitle:postTitle,
    postExcerpt:postExcerpt,
    postContent:postContent
}

export default typographies
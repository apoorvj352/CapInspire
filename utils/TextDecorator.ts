import { FontMapping } from "@/constants/font"
import { fontType } from "@/constants/font"
export const AsciiConverter=(char:string,style:fontType) =>{
    const fontLowerArray = Array.from(style.fontLower);
    const fontUpperArray = Array.from(style.fontUpper);
    // const fontDigitsArray = Array.from(style.fontDigits);
    // console.log(char,style.fontLower.length,style.fontUpper.length);
    if(char>='a' && char<='z'){
        const index=char.charCodeAt(0) - 'a'.charCodeAt(0);
        return fontLowerArray[index];
    }
    if(char>='A' && char<='Z'){
        const index=char.charCodeAt(0) - 'A'.charCodeAt(0);
        return fontUpperArray[index];
    }
    // if(char>='0' && char<='9'){
    //     const index=char.charCodeAt(0) - '0'.charCodeAt(0);
    //     return fontDigitsArray[index];
    // }
    
    return char;
}
export const TextDecorater=(text:string) =>{
    return FontMapping.map((style)=>{
        return text.split('').map(
            char => AsciiConverter(char,style)
        ).join('');
    });
}
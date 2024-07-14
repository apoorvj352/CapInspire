import { TextDecorater } from "./TextDecorator";

export const TopCaptionStyles = (text: string): string[] => {
    const decoratedText = TextDecorater(text);
    return Array.from({ length: 6 }, (_, index) => decoratedText[index]);
};
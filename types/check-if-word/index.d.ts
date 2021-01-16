declare module 'check-if-word' {
  export = checkWord;

  function checkWord(
    language: checkWord.LanguageOption
  ): LanguageObject;

  namespace checkWord {
    type LanguageOption = 'en' | 'es' | 'fr' | 'de';
  }

  interface LanguageObject {
    check: (x: string) => boolean;
    getValidWords: (x: string[]) => string[];
  }
}
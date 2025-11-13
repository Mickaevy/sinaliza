//este arquivo ensina o typeScript a entender importações de arquivos CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
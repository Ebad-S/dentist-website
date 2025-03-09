// tailwind.d.ts
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Add Tailwind CSS directives
interface CSSRule {
  '@tailwind': string;
  '@layer': string;
  '@apply': string;
} 
declare module '*.svg' {
  const url: string;
  export default url;
}

declare module '*.png' {
  const url: string;
  export default url;
}

declare module '*.jpg' {
  const url: string;
  export default url;
}

declare module '*.jpeg' {
  const url: string;
  export default url;
}

declare module '*.gif' {
  const url: string;
  export default url;
}

declare module '*.webp' {
  const url: string;
  export default url;
}

declare module '*.less' {
  const styles: Record<string, string>;
  export default styles;
}

declare module '*.scss' {
  const styles: Record<string, string>;
  export default styles;
}

declare module '*.css' {
  const styles: Record<string, string>;
  export default styles;
}

declare module '*.json' {
  const json: Record<string, string>;
  export default json;
}

declare module JSX {
    // Augmenting JSX.IntrinsicElements
    interface IntrinsicElements {
      'calendar-range': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        months?: string;
        min?: string;
        max?: string;
        children?: React.ReactNode;
      };
      'calendar-month': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        offset?: string;
      };
    }
  }
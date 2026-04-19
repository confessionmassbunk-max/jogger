declare namespace JSX {
  interface IntrinsicElements {
    'shopify-store': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'store-domain'?: string;
      'public-access-token'?: string;
      country?: string;
      language?: string;
    };
    'shopify-cart': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'shopify-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      type?: string;
      handle?: string;
      query?: string;
    };
    'shopify-list-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      type?: string;
      query?: string;
      first?: string | number;
    };
    'shopify-media': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      query?: string;
      width?: string | number;
      height?: string | number;
      aspectRatio?: string | number;
      layout?: string;
    };
    'shopify-data': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      query?: string;
    };
    'shopify-money': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      query?: string;
      format?: string;
    };
  }
}

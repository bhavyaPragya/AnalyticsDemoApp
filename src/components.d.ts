/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface CtaButton {
    'title': string;
    'toggle': boolean;
  }
  interface CtaButtonAttributes extends StencilHTMLAttributes {
    'onOnToggle'?: (event: CustomEvent) => void;
    'title'?: string;
    'toggle'?: boolean;
  }

  interface CtaLink {}
  interface CtaLinkAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'CtaButton': Components.CtaButton;
    'CtaLink': Components.CtaLink;
  }

  interface StencilIntrinsicElements {
    'cta-button': Components.CtaButtonAttributes;
    'cta-link': Components.CtaLinkAttributes;
  }


  interface HTMLCtaButtonElement extends Components.CtaButton, HTMLStencilElement {}
  var HTMLCtaButtonElement: {
    prototype: HTMLCtaButtonElement;
    new (): HTMLCtaButtonElement;
  };

  interface HTMLCtaLinkElement extends Components.CtaLink, HTMLStencilElement {}
  var HTMLCtaLinkElement: {
    prototype: HTMLCtaLinkElement;
    new (): HTMLCtaLinkElement;
  };

  interface HTMLElementTagNameMap {
    'cta-button': HTMLCtaButtonElement
    'cta-link': HTMLCtaLinkElement
  }

  interface ElementTagNameMap {
    'cta-button': HTMLCtaButtonElement;
    'cta-link': HTMLCtaLinkElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
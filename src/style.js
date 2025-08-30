/*
    μJSX, Micro JSX Library
    Open-Source, WTFPL License

    μJSX (aka. MicroJSX) is a library providing
    basic JSX support based on Esbuild. The only
    difference is being that there is no need for
    state management and many other features that
    React and many platforms provide.

    Copyright (C) 2025-20xx Neotesk.
*/

import CSSOM from "./cssom";
import { PlatformData } from "./platform";
import { sign } from "./util";

const globalDefinitions = [];

export class StyleRule extends CSSOM.CSSStyleDeclaration {
    constructor ( text = undefined, selector = undefined ) {
        super();
        this.selector = selector || ( '.neo-' + sign() );
        Object.entries( text ).forEach(
            ( [ key, val ] ) => {
                this[ key ] = val;
            }
        );
        globalDefinitions.push( this );
    }
    get className () {
        let d = this.selector.split( '.' )[ 1 ].split( /[\[\:]+/g )[ 0 ];
        return d;
    }
    get cssText () {
        let k = Object.getOwnPropertyDescriptor( Object.getPrototypeOf( Object.getPrototypeOf( this ) ), 'cssText' );
        return `${ this.selector } {${ k.get.call( this ) }}`;
    }
    static compileGlobals () {
        let compiled = globalDefinitions.map( e => e.cssText ).join( ' ' );
		if (
            PlatformData.IsCapableOf( 'constructable-stylesheet' ) &&
            PlatformData.IsCapableOf( 'adoptable-stylesheet' )
        ) {
            const sty = new CSSStyleSheet();
            sty.replaceSync( compiled );
            let idx = document.adoptedStyleSheets.push( sty );
            if ( StyleRule.compiled )
                delete document.adoptedStyleSheets[ StyleRule.compiled ];
            StyleRule.compiled = idx;
        } else {
            if ( !StyleRule.compiled ) {
                StyleRule.compiled = document.createElement( 'style' );
                StyleRule.compiled.blocking = true;
                StyleRule.compiled.setAttribute( 'blocking', true );
                document.head.appendChild( StyleRule.compiled );
            }
            StyleRule.compiled.innerHTML = compiled;
        }
		return compiled;
    }
}

export class MediaDefinition {
    constructor ( rule, type = "screen" ) {
        this.__ruleSelector = `@media ${ type } and (${ rule })`;
        this.styles = [];
        globalDefinitions.push( this );
    }
    __addStyle ( style ) {
        this.styles.push( style );
    }
    get cssText () {
        return `${ this.__ruleSelector }{${ this.styles.map( e => e.cssText ).join( ' ' ) }}`;
    }
}

export class MediaStyleRule extends CSSOM.CSSStyleDeclaration {
    constructor ( def, text = undefined, selector = undefined ) {
        super();
        this.selector = selector || ( '.neo-' + sign() );
        Object.entries( text ).forEach(
            ( [ key, val ] ) => {
                this[ key ] = val;
            }
        );
        def.__addStyle( this );
    }
    get className () {
        let d = this.selector.split( '.' )[ 1 ].split( /[\[\:]+/g )[ 0 ];
        return d;
    }
    get cssText() {
        let k = Object.getOwnPropertyDescriptor( Object.getPrototypeOf( Object.getPrototypeOf( this ) ), 'cssText' );
        return `${ this.selector } {${ k.get.call( this ) }}`;
    }
}
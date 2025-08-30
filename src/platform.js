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

class Platform {
    constructor () {
        if ( !navigator.platformContext ) {
            navigator.platformContext = {
                capabilities: [],
                possibleVendors: [],
                actualVendor: null,
                infrastructure: 'Unknown',
                os: null,
            };

            // It's party time :3
            const AppAgent = navigator.userAgent;
            if ( !!global.chrome && AppAgent.includes( 'Chrome' ) ) {
                navigator.platformContext.infrastructure = 'chromium';
                navigator.platformContext.possibleVendors.push( 'chrome' );
                navigator.platformContext.capabilities.push( 'hookable', 'console-css', 'console-css-extended', 'console-image', 'webkit', 'blink', 'cssom-overridable' );
            } else if ( AppAgent.includes( 'Seamonkey' ) ) {
                navigator.platformContext.infrastructure = 'gecko';
                navigator.platformContext.possibleVendors.push( 'seamonkey' );
            } else if ( AppAgent.includes( 'Firefox' ) ) {
                navigator.platformContext.infrastructure = 'gecko';
                navigator.platformContext.possibleVendors.push( 'firefox' );
                navigator.platformContext.capabilities.push( 'hookable', 'console-css', 'console-css-extended', 'console-image', 'cssom-overridable' );
            } else if ( AppAgent.includes( 'Safari' ) ) {
                navigator.platformContext.infrastructure = 'webkit';
                navigator.platformContext.possibleVendors.push( 'safari' );
                navigator.platformContext.capabilities.push( 'hookable', 'console-css', 'webkit' );
            } else if ( AppAgent.includes( 'Chromium' ) ) {
                navigator.platformContext.infrastructure = 'chromium';
                navigator.platformContext.possibleVendors.push( 'chromium' );
                navigator.platformContext.capabilities.push( 'hookable', 'console-css', 'console-css-extended', 'console-image', 'webkit', 'blink', 'cssom-overridable' );
            } else if ( AppAgent.includes( 'OPR' ) ) {
                navigator.platformContext.infrastructure = 'opera-blink';
                navigator.platformContext.possibleVendors.push( 'opera' );
                navigator.platformContext.capabilities.push( 'hookable', 'console-css', 'console-css-extended', 'console-image', 'blink' );
            } else if ( AppAgent.includes( 'Opera' ) ) {
                navigator.platformContext.infrastructure = 'opera-presto';
                navigator.platformContext.possibleVendors.push( 'opera' );
                navigator.platformContext.capabilities.push( 'hookable', 'cssom-overridable' );
            } else {
                navigator.platformContext.infrastructure = 'unknown';
                navigator.platformContext.possibleVendors.push( 'unknown' );
                navigator.platformContext.capabilities.push( 'hookable' );
            }
            navigator.platformContext.actualVendor = navigator.platformContext.possibleVendors[ 0 ];
            if ( navigator.userAgentData && navigator.userAgentData?.platform ) {
                navigator.platformContext.os = navigator.userAgentData?.platform;
            } else {
                navigator.platformContext.os = navigator.platform || 'Unknown';
            }
            if ( document.adoptedStyleSheets           ) navigator.platformContext.capabilities.push( 'shadow-css'      );
            if ( document.documentElement.attachShadow ) navigator.platformContext.capabilities.push( 'shadow-dom'      );
            if ( console.context                       ) navigator.platformContext.capabilities.push( 'console-context' );
            if ( ( () => {
                try {
                    new CSSStyleSheet( {} );
                    return true
                } catch ( e ) { return false }
            } )() ) navigator.platformContext.capabilities.push( 'constructable-stylesheet' );
            if ( ( () => {
                try {
                    return !!document.adoptedStyleSheets;
                } catch ( e ) { return false }
            } )() ) navigator.platformContext.capabilities.push( 'adoptable-stylesheet' );


        }
        this.Capabilities    = navigator.platformContext.capabilities;
        this.PossibleVendors = navigator.platformContext.possibleVendors;
        this.RealVendor      = navigator.platformContext.actualVendor;
        this.Infrastructure  = navigator.platformContext.infrastructure;
        this.OperatingSystem = navigator.platformContext.os;
    }
    IsCapableOf ( Capability ) {
        return this.Capabilities.includes( Capability );
    }
    GetVendor () {
        return this.RealVendor;
    }
    GetVendors () {
        return this.PossibleVendors;
    }
    IsPossibleVendor ( Vendor ) {
        return this.PossibleVendors.includes( Vendor );
    }
    GetInfrastructure () {
        return this.Infrastructure;
    }
    GetOperatingSystem () {
        return this.OperatingSystem;
    }
}

const PlatformData = new Platform();

export {
    Platform,
    PlatformData
}
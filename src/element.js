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

export default {
    createElement ( type, props, ...children ) {
        // Create the element first.
        let el = typeof type === 'function' ? type( { attributes: props, children } ) : document.createElement( type );

        // Is this a fragment? if so return it.
        if ( Array.isArray( el ) )
            return el;

        // If the value is null, skip the construction
        if ( el !== 0 && !el )
            return null;

        // Then we will check if class, classList or className exists.
        const classes = new Set();
        if ( props?.class ) {
            classes.add( props.class );
            delete props.class;
        }
        if ( props?.className ) {
            classes.add( props.className );
            delete props.className;
        }
        if ( props?.classList ) {
            props.classList.forEach( e => classes.add( e ) );
            delete props.classList;
        }
        el.classList.add( ...classes );

        // Now for the styleRule, our custom style
        // handling system.
        if ( props?.styleRule ) {
            el.classList.add( props.styleRule.className );
            delete props.styleRule;
        }

        // Now we need to check if the given type was a
        // function or a string. Depending on this situation
        // we will add attributes and ID.
        if ( typeof type === 'string' ) {
            // Let's add the ID.
            if ( props?.id ) {
                el.id = props.id;
                delete props.id;
            }

            // Now the other attributes.
            if ( props ) for ( const [ key, value ] of Object.entries( props ) )
                el.setAttribute( key, value );

            // Now we will add the children.
            for ( const item of children.flat( 1024 ) ) {
                if ( [ 'string', 'number' ].includes( typeof item ) )
                    // Create a text node and ship it.
                    el.appendChild( document.createTextNode( item ) );
                else if ( el )
                    // It's probably a valid HTML Element
                    el.appendChild( item );
            }
        }

        // After construction, return the element.
        return el;
    },
    Fragment ( attr ) {
        // Just return the children the system will do the rest.
        return attr.children;
    }
}
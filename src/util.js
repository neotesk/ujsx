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

let hrsigCount = 0;
const hrsigStart = Date.now();

export function sign () {
	hrsigCount++;
	return ( hrsigStart + hrsigCount ).toString( 32 );
}
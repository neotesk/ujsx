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

import element from "./element";
import { StyleRule, MediaDefinition, MediaStyleRule, AddDefinition } from "./style";

export const createElement = element.createElement
export const Fragment = element.Fragment

export const Percent = p => `${ p }%`;
export const Pixel = p => `${ p }px`;
export const ViewportWidth = p => `${ p }vw`;
export const ViewportHeight = p => `${ p }vh`;
export const DynamicViewportWidth = p => `${ p }dvw`;
export const DynamicViewportHeight = p => `${ p }dvh`;
export const Centimeters = p => `${ p }cm`;
export const Points = p => `${ p }pt`;

export {
    StyleRule,
    MediaDefinition,
    MediaStyleRule,
    AddDefinition
}

export default {
    createElement,
    Fragment,
    Pixel,
    Percent,
    ViewportWidth,
    ViewportHeight,
    DynamicViewportWidth,
    DynamicViewportHeight,
    Centimeters,
    Points,
    StyleRule,
    MediaDefinition,
    MediaStyleRule,
    AddDefinition
}
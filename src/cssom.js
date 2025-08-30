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

let CSSOM = {};

var allProperties = new Set([
    '-webkit-line-clamp',
    'accent-color',
    'align-content',
    'align-items',
    'align-self',
    'alignment-baseline',
    'all',
    'anchor-name',
    'anchor-scope',
    'animation',
    'animation-composition',
    'animation-delay',
    'animation-direction',
    'animation-duration',
    'animation-fill-mode',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-range',
    'animation-range-end',
    'animation-range-start',
    'animation-timeline',
    'animation-timing-function',
    'appearance',
    'aspect-ratio',
    'azimuth',
    'backface-visibility',
    'background',
    'background-attachment',
    'background-blend-mode',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'baseline-shift',
    'baseline-source',
    'block-ellipsis',
    'block-size',
    'bookmark-label',
    'bookmark-level',
    'bookmark-state',
    'border',
    'border-block',
    'border-block-color',
    'border-block-end',
    'border-block-end-color',
    'border-block-end-style',
    'border-block-end-width',
    'border-block-start',
    'border-block-start-color',
    'border-block-start-style',
    'border-block-start-width',
    'border-block-style',
    'border-block-width',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',
    'border-boundary',
    'border-collapse',
    'border-color',
    'border-end-end-radius',
    'border-end-start-radius',
    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',
    'border-inline',
    'border-inline-color',
    'border-inline-end',
    'border-inline-end-color',
    'border-inline-end-style',
    'border-inline-end-width',
    'border-inline-start',
    'border-inline-start-color',
    'border-inline-start-style',
    'border-inline-start-width',
    'border-inline-style',
    'border-inline-width',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-radius',
    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-spacing',
    'border-start-end-radius',
    'border-start-start-radius',
    'border-style',
    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',
    'border-width',
    'bottom',
    'box-decoration-break',
    'box-shadow',
    'box-sizing',
    'box-snap',
    'break-after',
    'break-before',
    'break-inside',
    'caption-side',
    'caret',
    'caret-color',
    'caret-shape',
    'clear',
    'clip',
    'clip-path',
    'clip-rule',
    'color',
    'color-adjust',
    'color-interpolation-filters',
    'color-scheme',
    'column-count',
    'column-fill',
    'column-gap',
    'column-rule',
    'column-rule-color',
    'column-rule-style',
    'column-rule-width',
    'column-span',
    'column-width',
    'columns',
    'contain',
    'contain-intrinsic-block-size',
    'contain-intrinsic-height',
    'contain-intrinsic-inline-size',
    'contain-intrinsic-size',
    'contain-intrinsic-width',
    'container',
    'container-name',
    'container-type',
    'content',
    'content-visibility',
    'continue',
    'counter-increment',
    'counter-reset',
    'counter-set',
    'cue',
    'cue-after',
    'cue-before',
    'cursor',
    'direction',
    'display',
    'dominant-baseline',
    'elevation',
    'empty-cells',
    'filter',
    'backdrop-filter',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'float',
    'flood-color',
    'flood-opacity',
    'flow-from',
    'flow-into',
    'font',
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-optical-sizing',
    'font-palette',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-synthesis',
    'font-synthesis-position',
    'font-synthesis-small-caps',
    'font-synthesis-style',
    'font-synthesis-weight',
    'font-variant',
    'font-variant-alternates',
    'font-variant-caps',
    'font-variant-east-asian',
    'font-variant-emoji',
    'font-variant-ligatures',
    'font-variant-numeric',
    'font-variant-position',
    'font-variation-settings',
    'font-weight',
    'font-width',
    'footnote-display',
    'footnote-policy',
    'forced-color-adjust',
    'gap',
    'glyph-orientation-vertical',
    'grid',
    'grid-area',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-auto-rows',
    'grid-column',
    'grid-column-end',
    'grid-column-start',
    'grid-row',
    'grid-row-end',
    'grid-row-start',
    'grid-template',
    'grid-template-areas',
    'grid-template-columns',
    'grid-template-rows',
    'hanging-punctuation',
    'height',
    'hyphenate-character',
    'hyphenate-limit-chars',
    'hyphenate-limit-last',
    'hyphenate-limit-lines',
    'hyphenate-limit-zone',
    'hyphens',
    'image-orientation',
    'image-rendering',
    'image-resolution',
    'initial-letter',
    'initial-letter-align',
    'initial-letter-wrap',
    'inline-size',
    'inline-sizing',
    'inset',
    'inset-area',
    'inset-block',
    'inset-block-end',
    'inset-block-start',
    'inset-inline',
    'inset-inline-end',
    'inset-inline-start',
    'isolation',
    'justify-content',
    'justify-items',
    'justify-self',
    'left',
    'letter-spacing',
    'lighting-color',
    'line-break',
    'line-clamp',
    'line-fit-edge',
    'line-grid',
    'line-height',
    'line-padding',
    'line-snap',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'margin',
    'margin-block',
    'margin-block-end',
    'margin-block-start',
    'margin-bottom',
    'margin-inline',
    'margin-inline-end',
    'margin-inline-start',
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-trim',
    'marker-side',
    'mask',
    'mask-border',
    'mask-border-mode',
    'mask-border-outset',
    'mask-border-repeat',
    'mask-border-slice',
    'mask-border-source',
    'mask-border-width',
    'mask-clip',
    'mask-composite',
    'mask-image',
    'mask-mode',
    'mask-origin',
    'mask-position',
    'mask-repeat',
    'mask-size',
    'mask-type',
    'max-block-size',
    'max-height',
    'max-inline-size',
    'max-lines',
    'max-width',
    'min-block-size',
    'min-height',
    'min-inline-size',
    'min-intrinsic-sizing',
    'min-width',
    'mix-blend-mode',
    'nav-down',
    'nav-left',
    'nav-right',
    'nav-up',
    'object-fit',
    'object-position',
    'offset',
    'offset-anchor',
    'offset-distance',
    'offset-path',
    'offset-position',
    'offset-rotate',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',
    'overflow',
    'overflow-anchor',
    'overflow-block',
    'overflow-clip-margin',
    'overflow-clip-margin-block',
    'overflow-clip-margin-block-end',
    'overflow-clip-margin-block-start',
    'overflow-clip-margin-bottom',
    'overflow-clip-margin-inline',
    'overflow-clip-margin-inline-end',
    'overflow-clip-margin-inline-start',
    'overflow-clip-margin-left',
    'overflow-clip-margin-right',
    'overflow-clip-margin-top',
    'overflow-inline',
    'overflow-wrap',
    'overflow-x',
    'overflow-y',
    'padding',
    'padding-block',
    'padding-block-end',
    'padding-block-start',
    'padding-bottom',
    'padding-inline',
    'padding-inline-end',
    'padding-inline-start',
    'padding-left',
    'padding-right',
    'padding-top',
    'page',
    'page-break-after',
    'page-break-before',
    'page-break-inside',
    'pause',
    'pause-after',
    'pause-before',
    'perspective',
    'perspective-origin',
    'pitch',
    'pitch-range',
    'place-content',
    'place-items',
    'place-self',
    'play-during',
    'position',
    'position-anchor',
    'position-try',
    'position-try-options',
    'position-try-order',
    'print-color-adjust',
    'quotes',
    'region-fragment',
    'resize',
    'rest',
    'rest-after',
    'rest-before',
    'richness',
    'right',
    'rotate',
    'row-gap',
    'ruby-align',
    'ruby-merge',
    'ruby-overhang',
    'ruby-position',
    'running',
    'scale',
    'scroll-behavior',
    'scroll-margin',
    'scroll-margin-block',
    'scroll-margin-block-end',
    'scroll-margin-block-start',
    'scroll-margin-bottom',
    'scroll-margin-inline',
    'scroll-margin-inline-end',
    'scroll-margin-inline-start',
    'scroll-margin-left',
    'scroll-margin-right',
    'scroll-margin-top',
    'scroll-padding',
    'scroll-padding-block',
    'scroll-padding-block-end',
    'scroll-padding-block-start',
    'scroll-padding-bottom',
    'scroll-padding-inline',
    'scroll-padding-inline-end',
    'scroll-padding-inline-start',
    'scroll-padding-left',
    'scroll-padding-right',
    'scroll-padding-top',
    'scroll-snap-align',
    'scroll-snap-stop',
    'scroll-snap-type',
    'scroll-timeline',
    'scroll-timeline-axis',
    'scroll-timeline-name',
    'scrollbar-color',
    'scrollbar-gutter',
    'scrollbar-width',
    'shape-image-threshold',
    'shape-inside',
    'shape-margin',
    'shape-outside',
    'spatial-navigation-action',
    'spatial-navigation-contain',
    'spatial-navigation-function',
    'speak',
    'speak-as',
    'speak-header',
    'speak-numeral',
    'speak-punctuation',
    'speech-rate',
    'stress',
    'string-set',
    'tab-size',
    'table-layout',
    'text-align',
    'text-align-all',
    'text-align-last',
    'text-autospace',
    'text-box',
    'text-box-edge',
    'text-box-trim',
    'text-combine-upright',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-skip',
    'text-decoration-skip-box',
    'text-decoration-skip-ink',
    'text-decoration-skip-inset',
    'text-decoration-skip-self',
    'text-decoration-skip-spaces',
    'text-decoration-style',
    'text-decoration-thickness',
    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-position',
    'text-emphasis-skip',
    'text-emphasis-style',
    'text-group-align',
    'text-indent',
    'text-justify',
    'text-orientation',
    'text-overflow',
    'text-shadow',
    'text-spacing',
    'text-spacing-trim',
    'text-transform',
    'text-underline-offset',
    'text-underline-position',
    'text-wrap',
    'text-wrap-mode',
    'text-wrap-style',
    'timeline-scope',
    'top',
    'transform',
    'transform-box',
    'transform-origin',
    'transform-style',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'translate',
    'unicode-bidi',
    'user-select',
    'vertical-align',
    'view-timeline',
    'view-timeline-axis',
    'view-timeline-inset',
    'view-timeline-name',
    'view-transition-name',
    'visibility',
    'voice-balance',
    'voice-duration',
    'voice-family',
    'voice-pitch',
    'voice-range',
    'voice-rate',
    'voice-stress',
    'voice-volume',
    'volume',
    'white-space',
    'white-space-collapse',
    'white-space-trim',
    'widows',
    'width',
    'will-change',
    'word-break',
    'word-space-transform',
    'word-spacing',
    'word-wrap',
    'wrap-after',
    'wrap-before',
    'wrap-flow',
    'wrap-inside',
    'wrap-through',
    'writing-mode',
    'z-index',
]);

CSSOM.Properties = allProperties;
CSSOM.CSSStyleDeclaration = (
    function() {
        var allWebkitProperties = [
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'appearance',
            'aspect-ratio',
            'backface-visibility',
            'background-clip',
            'background-composite',
            'background-origin',
            'background-size',
            'border-after',
            'border-after-color',
            'border-after-style',
            'border-after-width',
            'border-before',
            'border-before-color',
            'border-before-style',
            'border-before-width',
            'border-end',
            'border-end-color',
            'border-end-style',
            'border-end-width',
            'border-fit',
            'border-horizontal-spacing',
            'border-image',
            'border-radius',
            'border-start',
            'border-start-color',
            'border-start-style',
            'border-start-width',
            'border-vertical-spacing',
            'box-align',
            'box-direction',
            'box-flex',
            'box-flex-group',
            'box-lines',
            'box-ordinal-group',
            'box-orient',
            'box-pack',
            'box-reflect',
            'box-shadow',
            'color-correction',
            'column-axis',
            'column-break-after',
            'column-break-before',
            'column-break-inside',
            'column-count',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'columns',
            'column-span',
            'column-width',
            'filter',
            'backdrop-filter',
            'flex-align',
            'flex-direction',
            'flex-flow',
            'flex-item-align',
            'flex-line-pack',
            'flex-order',
            'flex-pack',
            'flex-wrap',
            'flow-from',
            'flow-into',
            'font-feature-settings',
            'font-kerning',
            'font-size-delta',
            'font-smoothing',
            'font-variant-ligatures',
            'highlight',
            'hyphenate-character',
            'hyphenate-limit-after',
            'hyphenate-limit-before',
            'hyphenate-limit-lines',
            'hyphens',
            'line-align',
            'line-box-contain',
            'line-break',
            'line-clamp',
            'line-grid',
            'line-snap',
            'locale',
            'logical-height',
            'logical-width',
            'margin-after',
            'margin-after-collapse',
            'margin-before',
            'margin-before-collapse',
            'margin-bottom-collapse',
            'margin-collapse',
            'margin-end',
            'margin-start',
            'margin-top-collapse',
            'marquee',
            'marquee-direction',
            'marquee-increment',
            'marquee-repetition',
            'marquee-speed',
            'marquee-style',
            'mask',
            'mask-attachment',
            'mask-box-image',
            'mask-box-image-outset',
            'mask-box-image-repeat',
            'mask-box-image-slice',
            'mask-box-image-source',
            'mask-box-image-width',
            'mask-clip',
            'mask-composite',
            'mask-image',
            'mask-origin',
            'mask-position',
            'mask-position-x',
            'mask-position-y',
            'mask-repeat',
            'mask-repeat-x',
            'mask-repeat-y',
            'mask-size',
            'match-nearest-mail-blockquote-color',
            'max-logical-height',
            'max-logical-width',
            'min-logical-height',
            'min-logical-width',
            'nbsp-mode',
            'overflow-scrolling',
            'padding-after',
            'padding-before',
            'padding-end',
            'padding-start',
            'perspective',
            'perspective-origin',
            'perspective-origin-x',
            'perspective-origin-y',
            'print-color-adjust',
            'region-break-after',
            'region-break-before',
            'region-break-inside',
            'region-overflow',
            'rtl-ordering',
            'svg-shadow',
            'tap-highlight-color',
            'text-combine',
            'text-decorations-in-effect',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-fill-color',
            'text-orientation',
            'text-security',
            'text-size-adjust',
            'text-stroke',
            'text-stroke-color',
            'text-stroke-width',
            'transform',
            'transform-origin',
            'transform-origin-x',
            'transform-origin-y',
            'transform-origin-z',
            'transform-style',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'user-drag',
            'user-modify',
            'user-select',
            'wrap',
            'wrap-flow',
            'wrap-margin',
            'wrap-padding',
            'wrap-shape-inside',
            'wrap-shape-outside',
            'wrap-through',
            'writing-mode',
            'zoom',
        ].map((prop) => 'webkit-' + prop);
        var allExtraProperties = new Set(
            [
                'background-position-x',
                'background-position-y',
                'background-repeat-x',
                'background-repeat-y',
                'color-interpolation',
                'color-profile',
                'color-rendering',
                'css-float',
                'enable-background',
                'fill',
                'fill-opacity',
                'fill-rule',
                'glyph-orientation-horizontal',
                'image-rendering',
                'kerning',
                'marker',
                'marker-end',
                'marker-mid',
                'marker-offset',
                'marker-start',
                'marks',
                'pointer-events',
                'shape-rendering',
                'size',
                'src',
                'stop-color',
                'stop-opacity',
                'stroke',
                'stroke-dasharray',
                'stroke-dashoffset',
                'stroke-linecap',
                'stroke-linejoin',
                'stroke-miterlimit',
                'stroke-opacity',
                'stroke-width',
                'text-anchor',
                'text-line-through',
                'text-line-through-color',
                'text-line-through-mode',
                'text-line-through-style',
                'text-line-through-width',
                'text-overline',
                'text-overline-color',
                'text-overline-mode',
                'text-overline-style',
                'text-overline-width',
                'text-rendering',
                'text-underline',
                'text-underline-color',
                'text-underline-mode',
                'text-underline-style',
                'text-underline-width',
                'unicode-range',
                'vector-effect',
            ].concat(allWebkitProperties)
        );
        var implementedProperties = new Set([
            "azimuth",
            "background-attachment",
            "background-color",
            "background-image",
            "background-position",
            "background-repeat",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-spacing",
            "border-style",
            "border-top",
            "border-top-color",
            "border-top-style",
            "border-top-width",
            "border-width",
            "bottom",
            "clear",
            "clip",
            "color",
            "css-float",
            "flex",
            "flex-basis",
            "flex-grow",
            "flex-shrink",
            "float",
            "flood-color",
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-variant",
            "font-weight",
            "height",
            "left",
            "lighting-color",
            "line-height",
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "opacity",
            "outline-color",
            "padding",
            "padding-bottom",
            "padding-left",
            "padding-right",
            "padding-top",
            "right",
            "stop-color",
            "text-line-through-color",
            "text-overline-color",
            "text-underline-color",
            "top",
            "webkit-border-after-color",
            "webkit-border-before-color",
            "webkit-border-end-color",
            "webkit-border-start-color",
            "webkit-column-rule-color",
            "webkit-match-nearest-mail-blockquote-color",
            "webkit-tap-highlight-color",
            "webkit-text-emphasis-color",
            "webkit-text-fill-color",
            "webkit-text-stroke-color",
            "width"
        ]);

        var TYPES = {
            INTEGER: 1,
            NUMBER: 2,
            LENGTH: 3,
            PERCENT: 4,
            URL: 5,
            COLOR: 6,
            STRING: 7,
            ANGLE: 8,
            KEYWORD: 9,
            NULL_OR_EMPTY_STR: 10,
            CALC: 11,
        };

        const namedColors = [
            "aliceblue",
            "antiquewhite",
            "aqua",
            "aquamarine",
            "azure",
            "beige",
            "bisque",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "cornsilk",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkgrey",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkslategrey",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dimgrey",
            "dodgerblue",
            "firebrick",
            "floralwhite",
            "forestgreen",
            "fuchsia",
            "gainsboro",
            "ghostwhite",
            "gold",
            "goldenrod",
            "gray",
            "green",
            "greenyellow",
            "grey",
            "honeydew",
            "hotpink",
            "indianred",
            "indigo",
            "ivory",
            "khaki",
            "lavender",
            "lavenderblush",
            "lawngreen",
            "lemonchiffon",
            "lightblue",
            "lightcoral",
            "lightcyan",
            "lightgoldenrodyellow",
            "lightgray",
            "lightgreen",
            "lightgrey",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightskyblue",
            "lightslategray",
            "lightslategrey",
            "lightsteelblue",
            "lightyellow",
            "lime",
            "limegreen",
            "linen",
            "magenta",
            "maroon",
            "mediumaquamarine",
            "mediumblue",
            "mediumorchid",
            "mediumpurple",
            "mediumseagreen",
            "mediumslateblue",
            "mediumspringgreen",
            "mediumturquoise",
            "mediumvioletred",
            "midnightblue",
            "mintcream",
            "mistyrose",
            "moccasin",
            "navajowhite",
            "navy",
            "oldlace",
            "olive",
            "olivedrab",
            "orange",
            "orangered",
            "orchid",
            "palegoldenrod",
            "palegreen",
            "paleturquoise",
            "palevioletred",
            "papayawhip",
            "peachpuff",
            "peru",
            "pink",
            "plum",
            "powderblue",
            "purple",
            "rebeccapurple",
            "red",
            "rosybrown",
            "royalblue",
            "saddlebrown",
            "salmon",
            "sandybrown",
            "seagreen",
            "seashell",
            "sienna",
            "silver",
            "skyblue",
            "slateblue",
            "slategray",
            "slategrey",
            "snow",
            "springgreen",
            "steelblue",
            "tan",
            "teal",
            "thistle",
            "tomato",
            "turquoise",
            "violet",
            "wheat",
            "white",
            "whitesmoke",
            "yellow",
            "yellowgreen",
            "transparent",
            "currentcolor"
        ];

        const MAX_HUE = 360;
        const COLOR_NB = 12;
        const MAX_RGB_VALUE = 255;

        // https://www.w3.org/TR/css-color-4/#hsl-to-rgb
        const hslToRgb = (hue, sat, light) => {
            hue = hue % MAX_HUE;
            if (hue < 0) {
                hue += MAX_HUE;
            }

            function f(n) {
                const k = (n + hue / (MAX_HUE / COLOR_NB)) % COLOR_NB;
                const a = sat * Math.min(light, 1 - light);
                return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
            }
            return [f(0), f(8), f(4)].map((value) => Math.round(value * MAX_RGB_VALUE));
        };

        // rough regular expressions
        var integerRegEx = /^[-+]?[0-9]+$/;
        var numberRegEx = /^[-+]?[0-9]*\.?[0-9]+$/;
        var lengthRegEx = /^(0|[-+]?[0-9]*\.?[0-9]+(in|cm|em|mm|pt|pc|px|ex|rem|vh|vw|ch))$/;
        var percentRegEx = /^[-+]?[0-9]*\.?[0-9]+%$/;
        var urlRegEx = /^url\(\s*([^)]*)\s*\)$/;
        var stringRegEx = /^("[^"]*"|'[^']*')$/;
        var colorRegEx1 = /^#([0-9a-fA-F]{3,4}){1,2}$/;
        var colorRegEx2 = /^rgb\(([^)]*)\)$/;
        var colorRegEx3 = /^rgba\(([^)]*)\)$/;
        var calcRegEx = /^calc\(([^)]*)\)$/;
        var colorRegEx4 =
            /^hsla?\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*(,\s*(-?\d+|-?\d*.\d+)\s*)?\)/;
        var angleRegEx = /^([-+]?[0-9]*\.?[0-9]+)(deg|grad|rad)$/;

        const valueType = function valueType(val) {
            if (val === '' || val === null) {
                return TYPES.NULL_OR_EMPTY_STR;
            }
            if (typeof val === 'number') {
                val = val.toString();
            }

            if (typeof val !== 'string') {
                return undefined;
            }

            if (integerRegEx.test(val)) {
                return TYPES.INTEGER;
            }
            if (numberRegEx.test(val)) {
                return TYPES.NUMBER;
            }
            if (lengthRegEx.test(val)) {
                return TYPES.LENGTH;
            }
            if (percentRegEx.test(val)) {
                return TYPES.PERCENT;
            }
            if (urlRegEx.test(val)) {
                return TYPES.URL;
            }
            if (calcRegEx.test(val)) {
                return TYPES.CALC;
            }
            if (stringRegEx.test(val)) {
                return TYPES.STRING;
            }
            if (angleRegEx.test(val)) {
                return TYPES.ANGLE;
            }
            if (colorRegEx1.test(val)) {
                return TYPES.COLOR;
            }

            var res = colorRegEx2.exec(val);
            var parts;
            if (res !== null) {
                parts = res[1].split(/\s*,\s*/);
                if (parts.length !== 3) {
                    return undefined;
                }
                if (
                    parts.every(percentRegEx.test.bind(percentRegEx)) ||
                    parts.every(integerRegEx.test.bind(integerRegEx))
                ) {
                    return TYPES.COLOR;
                }
                return undefined;
            }
            res = colorRegEx3.exec(val);
            if (res !== null) {
                parts = res[1].split(/\s*,\s*/);
                if (parts.length !== 4) {
                    return undefined;
                }
                if (
                    parts.slice(0, 3).every(percentRegEx.test.bind(percentRegEx)) ||
                    parts.slice(0, 3).every(integerRegEx.test.bind(integerRegEx))
                ) {
                    if (numberRegEx.test(parts[3])) {
                        return TYPES.COLOR;
                    }
                }
                return undefined;
            }

            if (colorRegEx4.test(val)) {
                return TYPES.COLOR;
            }

            // could still be a color, one of the standard keyword colors
            val = val.toLowerCase();

            if (namedColors.includes(val)) {
                return TYPES.COLOR;
            }

            switch (val) {
                // the following are deprecated in CSS3
                case 'activeborder':
                case 'activecaption':
                case 'appworkspace':
                case 'background':
                case 'buttonface':
                case 'buttonhighlight':
                case 'buttonshadow':
                case 'buttontext':
                case 'captiontext':
                case 'graytext':
                case 'highlight':
                case 'highlighttext':
                case 'inactiveborder':
                case 'inactivecaption':
                case 'inactivecaptiontext':
                case 'infobackground':
                case 'infotext':
                case 'menu':
                case 'menutext':
                case 'scrollbar':
                case 'threeddarkshadow':
                case 'threedface':
                case 'threedhighlight':
                case 'threedlightshadow':
                case 'threedshadow':
                case 'window':
                case 'windowframe':
                case 'windowtext':
                    return TYPES.COLOR;
                default:
                    return TYPES.KEYWORD;
            }
        };

        const parseInteger = function parseInteger(val) {
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            if (type !== TYPES.INTEGER) {
                return undefined;
            }
            return String(parseInt(val, 10));
        };

        const parseNumber = function parseNumber(val) {
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            if (type !== TYPES.NUMBER && type !== TYPES.INTEGER) {
                return undefined;
            }
            return String(parseFloat(val));
        };

        const parsePercentibleNumber = function parsePercentibleNumber(val) {
            return parsePercent(val) || parseNumber(val);
        };

        const parseLength = function parseLength(val) {
            if (val === 0 || val === '0') {
                return '0px';
            }
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            if (type !== TYPES.LENGTH) {
                return undefined;
            }
            return val;
        };

        const parsePercent = function parsePercent(val) {
            if (val === 0 || val === '0') {
                return '0%';
            }
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            if (type !== TYPES.PERCENT) {
                return undefined;
            }
            return val;
        };

        // either a length or a percent
        const parseMeasurement = function parseMeasurement(val) {

            var type = valueType(val);
            if (type === TYPES.CALC || type === TYPES.KEYWORD) {
                return val;
            }

            var length = parseLength(val);
            if (length !== undefined) {
                return length;
            }
            return parsePercent(val);
        };

        const parseUrl = function parseUrl(val) {
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            var res = urlRegEx.exec(val);
            // does it match the regex?
            if (!res) {
                return undefined;
            }
            var str = res[1];
            // if it starts with single or double quotes, does it end with the same?
            if ((str[0] === '"' || str[0] === "'") && str[0] !== str[str.length - 1]) {
                return undefined;
            }
            if (str[0] === '"' || str[0] === "'") {
                str = str.substr(1, str.length - 2);
            }

            var i;
            for (i = 0; i < str.length; i++) {
                switch (str[i]) {
                    case '(':
                    case ')':
                    case ' ':
                    case '\t':
                    case '\n':
                    case "'":
                    case '"':
                        return undefined;
                    case '\\':
                        i++;
                        break;
                }
            }

            return 'url(' + str + ')';
        };

        const parseString = function parseString(val) {
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            if (type !== TYPES.STRING) {
                return undefined;
            }
            var i;
            for (i = 1; i < val.length - 1; i++) {
                switch (val[i]) {
                    case val[0]:
                        return undefined;
                    case '\\':
                        i++;
                        while (i < val.length - 1 && /[0-9A-Fa-f]/.test(val[i])) {
                            i++;
                        }
                        break;
                }
            }
            if (i >= val.length) {
                return undefined;
            }
            return val;
        };

        const parseColor = function parseColor(val) {
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            var red,
                green,
                blue,
                hue,
                saturation,
                lightness,
                alpha = 1;
            var parts;
            var res = colorRegEx1.exec(val);
            // is it #aaa, #ababab, #aaaa, #abababaa
            if (res) {
                var defaultHex = val.substr(1);
                var hex = val.substr(1);
                if (hex.length === 3 || hex.length === 4) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];

                    if (defaultHex.length === 4) {
                        hex = hex + defaultHex[3] + defaultHex[3];
                    }
                }
                red = parseInt(hex.substr(0, 2), 16);
                green = parseInt(hex.substr(2, 2), 16);
                blue = parseInt(hex.substr(4, 2), 16);
                if (hex.length === 8) {
                    var hexAlpha = hex.substr(6, 2);
                    var hexAlphaToRgbaAlpha = Number((parseInt(hexAlpha, 16) / 255).toFixed(3));

                    return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + hexAlphaToRgbaAlpha + ')';
                }
                return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
            }

            res = colorRegEx2.exec(val);
            if (res) {
                parts = res[1].split(/\s*,\s*/);
                if (parts.length !== 3) {
                    return undefined;
                }
                if (parts.every(percentRegEx.test.bind(percentRegEx))) {
                    red = Math.floor((parseFloat(parts[0].slice(0, -1)) * 255) / 100);
                    green = Math.floor((parseFloat(parts[1].slice(0, -1)) * 255) / 100);
                    blue = Math.floor((parseFloat(parts[2].slice(0, -1)) * 255) / 100);
                } else if (parts.every(integerRegEx.test.bind(integerRegEx))) {
                    red = parseInt(parts[0], 10);
                    green = parseInt(parts[1], 10);
                    blue = parseInt(parts[2], 10);
                } else {
                    return undefined;
                }
                red = Math.min(255, Math.max(0, red));
                green = Math.min(255, Math.max(0, green));
                blue = Math.min(255, Math.max(0, blue));
                return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
            }

            res = colorRegEx3.exec(val);
            if (res) {
                parts = res[1].split(/\s*,\s*/);
                if (parts.length !== 4) {
                    return undefined;
                }
                if (parts.slice(0, 3).every(percentRegEx.test.bind(percentRegEx))) {
                    red = Math.floor((parseFloat(parts[0].slice(0, -1)) * 255) / 100);
                    green = Math.floor((parseFloat(parts[1].slice(0, -1)) * 255) / 100);
                    blue = Math.floor((parseFloat(parts[2].slice(0, -1)) * 255) / 100);
                    alpha = parseFloat(parts[3]);
                } else if (parts.slice(0, 3).every(integerRegEx.test.bind(integerRegEx))) {
                    red = parseInt(parts[0], 10);
                    green = parseInt(parts[1], 10);
                    blue = parseInt(parts[2], 10);
                    alpha = parseFloat(parts[3]);
                } else {
                    return undefined;
                }
                if (isNaN(alpha)) {
                    alpha = 1;
                }
                red = Math.min(255, Math.max(0, red));
                green = Math.min(255, Math.max(0, green));
                blue = Math.min(255, Math.max(0, blue));
                alpha = Math.min(1, Math.max(0, alpha));
                if (alpha === 1) {
                    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
                }
                return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
            }

            res = colorRegEx4.exec(val);
            if (res) {
                const [, _hue, _saturation, _lightness, _alphaString = ''] = res;
                const _alpha = parseFloat(_alphaString.replace(',', '').trim());
                if (!_hue || !_saturation || !_lightness) {
                    return undefined;
                }
                hue = parseFloat(_hue);
                saturation = parseInt(_saturation, 10);
                lightness = parseInt(_lightness, 10);
                if (_alpha && numberRegEx.test(_alpha)) {
                    alpha = parseFloat(_alpha);
                }

                const [r, g, b] = hslToRgb(hue, saturation / 100, lightness / 100);
                if (!_alphaString || alpha === 1) {
                    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
                }
                return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
            }

            if (type === TYPES.COLOR) {
                return val;
            }
            return undefined;
        };

        const parseAngle = function parseAngle(val) {
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            if (type !== TYPES.ANGLE) {
                return undefined;
            }
            var res = angleRegEx.exec(val);
            var flt = parseFloat(res[1]);
            if (res[2] === 'rad') {
                flt *= 180 / Math.PI;
            } else if (res[2] === 'grad') {
                flt *= 360 / 400;
            }

            while (flt < 0) {
                flt += 360;
            }
            while (flt > 360) {
                flt -= 360;
            }
            return flt + 'deg';
        };

        const parseKeyword = function parseKeyword(val, valid_keywords) {
            var type = valueType(val);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                return val;
            }
            if (type !== TYPES.KEYWORD) {
                return undefined;
            }
            val = val.toString().toLowerCase();
            var i;
            for (i = 0; i < valid_keywords.length; i++) {
                if (valid_keywords[i].toLowerCase() === val) {
                    return valid_keywords[i];
                }
            }
            return undefined;
        };

        // utility to translate from border-width to borderWidth
        var dashedToCamelCase = function(dashed) {
            var i;
            var camel = '';
            var nextCap = false;
            for (i = 0; i < dashed.length; i++) {
                if (dashed[i] !== '-') {
                    camel += nextCap ? dashed[i].toUpperCase() : dashed[i];
                    nextCap = false;
                } else {
                    nextCap = true;
                }
            }
            return camel;
        };

        var is_space = /\s/;
        var opening_deliminators = ['"', "'", '('];
        var closing_deliminators = ['"', "'", ')'];
        // this splits on whitespace, but keeps quoted and parened parts together
        var getParts = function(str) {
            var deliminator_stack = [];
            var length = str.length;
            var i;
            var parts = [];
            var current_part = '';
            var opening_index;
            var closing_index;
            for (i = 0; i < length; i++) {
                opening_index = opening_deliminators.indexOf(str[i]);
                closing_index = closing_deliminators.indexOf(str[i]);
                if (is_space.test(str[i])) {
                    if (deliminator_stack.length === 0) {
                        if (current_part !== '') {
                            parts.push(current_part);
                        }
                        current_part = '';
                    } else {
                        current_part += str[i];
                    }
                } else {
                    if (str[i] === '\\') {
                        i++;
                        current_part += str[i];
                    } else {
                        current_part += str[i];
                        if (
                            closing_index !== -1 &&
                            closing_index === deliminator_stack[deliminator_stack.length - 1]
                        ) {
                            deliminator_stack.pop();
                        } else if (opening_index !== -1) {
                            deliminator_stack.push(opening_index);
                        }
                    }
                }
            }
            if (current_part !== '') {
                parts.push(current_part);
            }
            return parts;
        };

        /*
         * this either returns undefined meaning that it isn't valid
         * or returns an object where the keys are dashed short
         * hand properties and the values are the values to set
         * on them
         */
        const shorthandParser = function parse(v, shorthand_for) {
            var obj = {};
            var type = valueType(v);
            if (type === TYPES.NULL_OR_EMPTY_STR) {
                Object.keys(shorthand_for).forEach(function(property) {
                    obj[property] = '';
                });
                return obj;
            }

            if (typeof v === 'number') {
                v = v.toString();
            }

            if (typeof v !== 'string') {
                return undefined;
            }

            if (v.toLowerCase() === 'inherit') {
                return {};
            }
            var parts = getParts(v);
            var valid = true;
            parts.forEach(function(part, i) {
                var part_valid = false;
                Object.keys(shorthand_for).forEach(function(property) {
                    if (shorthand_for[property].isValid(part, i)) {
                        part_valid = true;
                        obj[property] = part;
                    }
                });
                valid = valid && part_valid;
            });
            if (!valid) {
                return undefined;
            }
            return obj;
        };

        const shorthandSetter = function(property, shorthand_for) {
            return function(v) {
                var obj = shorthandParser(v, shorthand_for);
                if (obj === undefined) {
                    return;
                }
                //console.log('shorthandSetter for:', property, 'obj:', obj);
                Object.keys(obj).forEach(function(subprop) {
                    // in case subprop is an implicit property, this will clear
                    // *its* subpropertiesX
                    var camel = dashedToCamelCase(subprop);
                    this[camel] = obj[subprop];
                    // in case it gets translated into something else (0 -> 0px)
                    obj[subprop] = this[camel];
                    this.removeProperty(subprop);
                    // don't add in empty properties
                    if (obj[subprop] !== '') {
                        this._values[subprop] = obj[subprop];
                    }
                }, this);
                Object.keys(shorthand_for).forEach(function(subprop) {
                    if (!obj.hasOwnProperty(subprop)) {
                        this.removeProperty(subprop);
                        delete this._values[subprop];
                    }
                }, this);
                // in case the value is something like 'none' that removes all values,
                // check that the generated one is not empty, first remove the property
                // if it already exists, then call the shorthandGetter, if it's an empty
                // string, don't set the property
                this.removeProperty(property);
                var calculated = shorthandGetter(property, shorthand_for).call(this);
                if (calculated !== '') {
                    this._setProperty(property, calculated);
                }
            };
        };

        const shorthandGetter = function(property, shorthand_for) {
            return function() {
                if (this._values[property] !== undefined) {
                    return this.getPropertyValue(property);
                }
                return Object.keys(shorthand_for)
                    .map(function(subprop) {
                        return this.getPropertyValue(subprop);
                    }, this)
                    .filter(function(value) {
                        return value !== '';
                    })
                    .join(' ');
            };
        };

        // isValid(){1,4} | inherit
        // if one, it applies to all
        // if two, the first applies to the top and bottom, and the second to left and right
        // if three, the first applies to the top, the second to left and right, the third bottom
        // if four, top, right, bottom, left
        const implicitSetter = function(property_before, property_after, isValid, parser) {
            property_after = property_after || '';
            if (property_after !== '') {
                property_after = '-' + property_after;
            }
            var part_names = ['top', 'right', 'bottom', 'left'];

            return function(v) {
                if (typeof v === 'number') {
                    v = v.toString();
                }
                if (typeof v !== 'string') {
                    return undefined;
                }
                var parts;
                if (v.toLowerCase() === 'inherit' || v === '') {
                    parts = [v];
                } else {
                    parts = getParts(v);
                }
                if (parts.length < 1 || parts.length > 4) {
                    return undefined;
                }

                if (!parts.every(isValid)) {
                    return undefined;
                }

                parts = parts.map(function(part) {
                    return parser(part);
                });
                this._setProperty(property_before + property_after, parts.join(' '));
                if (parts.length === 1) {
                    parts[1] = parts[0];
                }
                if (parts.length === 2) {
                    parts[2] = parts[0];
                }
                if (parts.length === 3) {
                    parts[3] = parts[1];
                }

                for (var i = 0; i < 4; i++) {
                    var property = property_before + '-' + part_names[i] + property_after;
                    this.removeProperty(property);
                    if (parts[i] !== '') {
                        this._values[property] = parts[i];
                    }
                }
                return v;
            };
        };

        //
        //  Companion to implicitSetter, but for the individual parts.
        //  This sets the individual value, and checks to see if all four
        //  sub-parts are set.  If so, it sets the shorthand version and removes
        //  the individual parts from the cssText.
        //
        const subImplicitSetter = function(prefix, part, isValid, parser) {
            var property = prefix + '-' + part;
            var subparts = [prefix + '-top', prefix + '-right', prefix + '-bottom', prefix + '-left'];

            return function(v) {
                if (typeof v === 'number') {
                    v = v.toString();
                }
                if (v === null) {
                    v = '';
                }
                if (typeof v !== 'string') {
                    return undefined;
                }
                if (!isValid(v)) {
                    return undefined;
                }
                v = parser(v);
                this._setProperty(property, v);

                var combinedPriority = this.getPropertyPriority(prefix);
                var parts = subparts.map((subpart) => this._values[subpart]);
                var priorities = subparts.map((subpart) => this.getPropertyPriority(subpart));
                // Combine into a single property if all values are set and have the same priority
                if (
                    parts.every((p) => p !== '' && p != null) &&
                    priorities.every((p) => p === priorities[0]) &&
                    priorities[0] === combinedPriority
                ) {
                    for (var i = 0; i < subparts.length; i++) {
                        this.removeProperty(subparts[i]);
                        this._values[subparts[i]] = parts[i];
                    }
                    this._setProperty(prefix, parts.join(' '), priorities[0]);
                } else {
                    this.removeProperty(prefix);
                    for (var j = 0; j < subparts.length; j++) {
                        // The property we're setting won't be important, the rest will either keep their priority or inherit it from the combined property
                        var priority = subparts[j] === property ? '' : priorities[j] || combinedPriority;
                        this._setProperty(subparts[j], parts[j], priority);
                    }
                }
                return v;
            };
        };

        var camel_to_dashed = /[A-Z]/g;
        var first_segment = /^\([^-]\)-/;
        var vendor_prefixes = ['o', 'moz', 'ms', 'webkit'];
        const camelToDashed = function(camel_case) {
            var match;
            var dashed = camel_case.replace(camel_to_dashed, '-$&').toLowerCase();
            match = dashed.match(first_segment);
            if (match && vendor_prefixes.indexOf(match[1]) !== -1) {
                dashed = '-' + dashed;
            }
            return dashed;
        };

        var getBasicPropertyDescriptor = function(name) {
            return {
                set: function(v) {
                    this._setProperty(name, v);
                },
                get: function() {
                    return this.getPropertyValue(name);
                },
                enumerable: true,
                configurable: true,
            };
        };
        /**
         * @constructor
         * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
         */
        var CSSStyleDeclaration = function CSSStyleDeclaration(onChangeCallback) {
            this._values = {};
            this._importants = {};
            this._length = 0;
            this._onChange = onChangeCallback;
            this._setInProgress = false;
        };
        CSSStyleDeclaration.prototype = {
            constructor: CSSStyleDeclaration,

            /**
             *
             * @param {string} name
             * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
             * @return {string} the value of the property if it has been explicitly set for this declaration block.
             * Returns the empty string if the property has not been set.
             */
            getPropertyValue: function(name) {
                if (!this._values.hasOwnProperty(name)) {
                    return '';
                }
                return this._values[name].toString();
            },

            /**
             *
             * @param {string} name
             * @param {string} value
             * @param {string} [priority=null] "important" or null
             * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
             */
            setProperty: function(name, value, priority) {
                if (value === undefined) {
                    return;
                }
                if (value === null || value === '') {
                    this.removeProperty(name);
                    return;
                }
                var isCustomProperty = name.indexOf('--') === 0;
                if (isCustomProperty) {
                    this._setProperty(name, value, priority);
                    return;
                }
                var lowercaseName = name.toLowerCase();
                if (!allProperties.has(lowercaseName) && !allExtraProperties.has(lowercaseName)) {
                    return;
                }

                this[lowercaseName] = value;
                this._importants[lowercaseName] = priority;
            },
            _setProperty: function(name, value, priority) {
                if (value === undefined) {
                    return;
                }
                if (value === null || value === '') {
                    this.removeProperty(name);
                    return;
                }

                var originalText;
                if (this._onChange) {
                    originalText = this.cssText;
                }

                if (this._values[name]) {
                    // Property already exist. Overwrite it.
                    var index = Array.prototype.indexOf.call(this, name);
                    if (index < 0) {
                        this[this._length] = name;
                        this._length++;
                    }
                } else {
                    // New property.
                    this[this._length] = name;
                    this._length++;
                }
                this._values[name] = value;
                this._importants[name] = priority;
                if (this._onChange && this.cssText !== originalText && !this._setInProgress) {
                    this._onChange(this.cssText);
                }
            },

            /**
             *
             * @param {string} name
             * @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
             * @return {string} the value of the property if it has been explicitly set for this declaration block.
             * Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
             */
            removeProperty: function(name) {
                if (!this._values.hasOwnProperty(name)) {
                    return '';
                }

                var prevValue = this._values[name];
                delete this._values[name];
                delete this._importants[name];

                var index = Array.prototype.indexOf.call(this, name);
                if (index < 0) {
                    return prevValue;
                }

                // That's what WebKit and Opera do
                Array.prototype.splice.call(this, index, 1);

                // That's what Firefox does
                //this[index] = ""

                if (this._onChange) {
                    this._onChange(this.cssText);
                }
                return prevValue;
            },

            /**
             *
             * @param {String} name
             */
            getPropertyPriority: function(name) {
                return this._importants[name] || '';
            },

            getPropertyCSSValue: function() {
                //FIXME
                return;
            },

            /**
             *   element.style.overflow = "auto"
             *   element.style.getPropertyShorthand("overflow-x")
             *   -> "overflow"
             */
            getPropertyShorthand: function() {
                //FIXME
                return;
            },

            isPropertyImplicit: function() {
                //FIXME
                return;
            },

            /**
             *   http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-item
             */
            item: function(index) {
                index = parseInt(index, 10);
                if (index < 0 || index >= this._length) {
                    return '';
                }
                return this[index];
            },
        };

        Object.defineProperties(CSSStyleDeclaration.prototype, {
            cssText: {
                get: function() {
                    var properties = [];
                    var i;
                    var name;
                    var value;
                    var priority;
                    for (i = 0; i < this._length; i++) {
                        name = this[i];
                        value = this.getPropertyValue(name);
                        priority = this.getPropertyPriority(name);
                        if (priority !== '') {
                            priority = ' !' + priority;
                        }
                        properties.push([name, ': ', value, priority, ';'].join(''));
                    }
                    return properties.join(' ');
                },
                set: function(value) {
                    var i;
                    this._values = {};
                    Array.prototype.splice.call(this, 0, this._length);
                    this._importants = {};
                    var dummyRule;
                    try {
                        dummyRule = CSSOM.parse('#bogus{' + value + '}').cssRules[0].style;
                    } catch (err) {
                        // malformed css, just return
                        return;
                    }
                    this._setInProgress = true;
                    var rule_length = dummyRule.length;
                    var name;
                    for (i = 0; i < rule_length; ++i) {
                        name = dummyRule[i];
                        this.setProperty(
                            dummyRule[i],
                            dummyRule.getPropertyValue(name),
                            dummyRule.getPropertyPriority(name)
                        );
                    }
                    this._setInProgress = false;
                    if (this._onChange) {
                        this._onChange(this.cssText);
                    }
                },
                enumerable: true,
                configurable: true,
            },
            parentRule: {
                get: function() {
                    return null;
                },
                enumerable: true,
                configurable: true,
            },
            length: {
                get: function() {
                    return this._length;
                },
                /**
                 * This deletes indices if the new length is less then the current
                 * length. If the new length is more, it does nothing, the new indices
                 * will be undefined until set.
                 **/
                set: function(value) {
                    var i;
                    for (i = value; i < this._length; i++) {
                        delete this[i];
                    }
                    this._length = value;
                },
                enumerable: true,
                configurable: true,
            },
        });

        'use strict';

        // autogenerated - 9/29/2024

        /*
         *
         * https://www.w3.org/Style/CSS/all-properties.en.html
         */

        var external_dependency_constants_1 = {
            POSITION_AT_SHORTHAND: {
                first: 0,
                second: 1,
            }
        };
        var azimuth_export_definition;
        azimuth_export_definition = {
            set: function(v) {
                var valueType = valueType(v);
                if (valueType === TYPES.ANGLE) {
                    return this._setProperty('azimuth', parseAngle(v));
                }
                if (valueType === TYPES.KEYWORD) {
                    var keywords = v.toLowerCase().trim().split(/\s+/);
                    var hasBehind = false;
                    if (keywords.length > 2) {
                        return;
                    }
                    var behindIndex = keywords.indexOf('behind');
                    hasBehind = behindIndex !== -1;
                    if (keywords.length === 2) {
                        if (!hasBehind) {
                            return;
                        }
                        keywords.splice(behindIndex, 1);
                    }
                    if (keywords[0] === 'leftwards' || keywords[0] === 'rightwards') {
                        if (hasBehind) {
                            return;
                        }
                        return this._setProperty('azimuth', keywords[0]);
                    }
                    if (keywords[0] === 'behind') {
                        return this._setProperty('azimuth', '180deg');
                    }
                    switch (keywords[0]) {
                        case 'left-side':
                            return this._setProperty('azimuth', '270deg');
                        case 'far-left':
                            return this._setProperty('azimuth', (hasBehind ? 240 : 300) + 'deg');
                        case 'left':
                            return this._setProperty('azimuth', (hasBehind ? 220 : 320) + 'deg');
                        case 'center-left':
                            return this._setProperty('azimuth', (hasBehind ? 200 : 340) + 'deg');
                        case 'center':
                            return this._setProperty('azimuth', (hasBehind ? 180 : 0) + 'deg');
                        case 'center-right':
                            return this._setProperty('azimuth', (hasBehind ? 160 : 20) + 'deg');
                        case 'right':
                            return this._setProperty('azimuth', (hasBehind ? 140 : 40) + 'deg');
                        case 'far-right':
                            return this._setProperty('azimuth', (hasBehind ? 120 : 60) + 'deg');
                        case 'right-side':
                            return this._setProperty('azimuth', '90deg');
                        default:
                            return;
                    }
                }
            },
            get: function() {
                return this.getPropertyValue('azimuth');
            },
            enumerable: true,
            configurable: true
        };
        var backgroundColor_export_isValid, backgroundColor_export_definition;
        var backgroundColor_local_var_parse = function parse(v) {
            var parsed = parseColor(v);
            if (parsed !== undefined) {
                return parsed;
            }
            if (valueType(v) === TYPES.KEYWORD && (v.toLowerCase() === 'transparent' || v.toLowerCase() === 'inherit')) {
                return v;
            }
            return v;
        };
        backgroundColor_export_isValid = function isValid(v) {
            return backgroundColor_local_var_parse(v) !== undefined;
        };
        backgroundColor_export_definition = {
            set: function(v) {
                var parsed = backgroundColor_local_var_parse(v);
                if (parsed === undefined) {
                    return;
                }
                this._setProperty('background-color', parsed);
            },
            get: function() {
                return this.getPropertyValue('background-color');
            },
            enumerable: true,
            configurable: true
        };
        var backgroundImage_export_isValid, backgroundImage_export_definition;
        var backgroundImage_local_var_parse = function parse(v) {
            return v;
        };
        backgroundImage_export_isValid = function isValid(v) {
            return backgroundImage_local_var_parse(v) !== undefined;
        };
        backgroundImage_export_definition = {
            set: function(v) {
                this._setProperty('background-image', backgroundImage_local_var_parse(v));
            },
            get: function() {
                return this.getPropertyValue('background-image');
            },
            enumerable: true,
            configurable: true
        };
        var backgroundRepeat_export_isValid, backgroundRepeat_export_definition;
        var backgroundRepeat_local_var_parse = function parse(v) {
            if (valueType(v) === TYPES.KEYWORD && (v.toLowerCase() === 'repeat' || v.toLowerCase() === 'repeat-x' || v.toLowerCase() === 'repeat-y' || v.toLowerCase() === 'no-repeat' || v.toLowerCase() === 'inherit')) {
                return v;
            }
            return undefined;
        };
        backgroundRepeat_export_isValid = function isValid(v) {
            return backgroundRepeat_local_var_parse(v) !== undefined;
        };
        backgroundRepeat_export_definition = {
            set: function(v) {
                this._setProperty('background-repeat', backgroundRepeat_local_var_parse(v));
            },
            get: function() {
                return this.getPropertyValue('background-repeat');
            },
            enumerable: true,
            configurable: true
        };
        var backgroundAttachment_export_isValid, backgroundAttachment_export_definition;
        var backgroundAttachment_local_var_isValid = backgroundAttachment_export_isValid = function isValid(v) {
            return valueType(v) === TYPES.KEYWORD && (v.toLowerCase() === 'scroll' || v.toLowerCase() === 'fixed' || v.toLowerCase() === 'inherit');
        };
        backgroundAttachment_export_definition = {
            set: function(v) {
                if (!backgroundAttachment_local_var_isValid(v)) {
                    return;
                }
                this._setProperty('background-attachment', v);
            },
            get: function() {
                return this.getPropertyValue('background-attachment');
            },
            enumerable: true,
            configurable: true
        };
        var backgroundPosition_export_isValid, backgroundPosition_export_definition;
        var backgroundPosition_local_var_valid_keywords = ['top', 'center', 'bottom', 'left', 'right'];
        var backgroundPosition_local_var_parse = function parse(v) {
            if (v === '' || v === null) {
                return undefined;
            }
            var parts = v.split(/\s+/);
            if (parts.length > 2 || parts.length < 1) {
                return undefined;
            }
            var types = [];
            parts.forEach(function(part, index) {
                types[index] = valueType(part);
            });
            if (parts.length === 1) {
                if (types[0] === TYPES.LENGTH || types[0] === TYPES.PERCENT) {
                    return v;
                }
                if (types[0] === TYPES.KEYWORD) {
                    if (backgroundPosition_local_var_valid_keywords.indexOf(v.toLowerCase()) !== -1 || v.toLowerCase() === 'inherit') {
                        return v;
                    }
                }
                return undefined;
            }
            if ((types[0] === TYPES.LENGTH || types[0] === TYPES.PERCENT) && (types[1] === TYPES.LENGTH || types[1] === TYPES.PERCENT)) {
                return v;
            }
            if (types[0] !== TYPES.KEYWORD || types[1] !== TYPES.KEYWORD) {
                return undefined;
            }
            if (backgroundPosition_local_var_valid_keywords.indexOf(parts[0]) !== -1 && backgroundPosition_local_var_valid_keywords.indexOf(parts[1]) !== -1) {
                return v;
            }
            return undefined;
        };
        backgroundPosition_export_isValid = function isValid(v) {
            return backgroundPosition_local_var_parse(v) !== undefined;
        };
        backgroundPosition_export_definition = {
            set: function(v) {
                this._setProperty('background-position', backgroundPosition_local_var_parse(v));
            },
            get: function() {
                return this.getPropertyValue('background-position');
            },
            enumerable: true,
            configurable: true
        };
        var background_export_definition;
        var background_local_var_shorthand_for = {
            'background-color': {
                isValid: backgroundColor_export_isValid,
                definition: backgroundColor_export_definition
            },
            'background-image': {
                isValid: backgroundImage_export_isValid,
                definition: backgroundImage_export_definition
            },
            'background-repeat': {
                isValid: backgroundRepeat_export_isValid,
                definition: backgroundRepeat_export_definition
            },
            'background-attachment': {
                isValid: backgroundAttachment_export_isValid,
                definition: backgroundAttachment_export_definition
            },
            'background-position': {
                isValid: backgroundPosition_export_isValid,
                definition: backgroundPosition_export_definition
            }
        };
        background_export_definition = {
            set: shorthandSetter('background', background_local_var_shorthand_for),
            get: shorthandGetter('background', background_local_var_shorthand_for),
            enumerable: true,
            configurable: true
        };
        var borderWidth_export_isValid, borderWidth_export_definition;
        // the valid border-widths:
        var borderWidth_local_var_widths = ['thin', 'medium', 'thick'];
        borderWidth_export_isValid = function parse(v) {
            var length = parseLength(v);
            if (length !== undefined) {
                return true;
            }
            if (typeof v !== 'string') {
                return false;
            }
            if (v === '') {
                return true;
            }
            v = v.toLowerCase();
            if (borderWidth_local_var_widths.indexOf(v) === -1) {
                return false;
            }
            return true;
        };
        var borderWidth_local_var_isValid = borderWidth_export_isValid;
        var borderWidth_local_var_parser = function(v) {
            var length = parseLength(v);
            if (length !== undefined) {
                return length;
            }
            if (borderWidth_local_var_isValid(v)) {
                return v.toLowerCase();
            }
            return undefined;
        };
        borderWidth_export_definition = {
            set: implicitSetter('border', 'width', borderWidth_local_var_isValid, borderWidth_local_var_parser),
            get: function() {
                return this.getPropertyValue('border-width');
            },
            enumerable: true,
            configurable: true
        };
        var borderStyle_export_isValid, borderStyle_export_definition;
        // the valid border-styles:
        var borderStyle_local_var_styles = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
        borderStyle_export_isValid = function parse(v) {
            return typeof v === 'string' && (v === '' || borderStyle_local_var_styles.indexOf(v) !== -1);
        };
        var borderStyle_local_var_isValid = borderStyle_export_isValid;
        var borderStyle_local_var_parser = function(v) {
            if (borderStyle_local_var_isValid(v)) {
                return v.toLowerCase();
            }
            return undefined;
        };
        borderStyle_export_definition = {
            set: implicitSetter('border', 'style', borderStyle_local_var_isValid, borderStyle_local_var_parser),
            get: function() {
                return this.getPropertyValue('border-style');
            },
            enumerable: true,
            configurable: true
        };
        var borderColor_export_isValid, borderColor_export_definition;
        borderColor_export_isValid = function parse(v) {
            if (typeof v !== 'string') {
                return false;
            }
            return v === '' || v.toLowerCase() === 'transparent' || valueType(v) === TYPES.COLOR;
        };
        var borderColor_local_var_isValid = borderColor_export_isValid;
        var borderColor_local_var_parser = function(v) {
            if (borderColor_local_var_isValid(v)) {
                return v.toLowerCase();
            }
            return undefined;
        };
        borderColor_export_definition = {
            set: implicitSetter('border', 'color', borderColor_local_var_isValid, borderColor_local_var_parser),
            get: function() {
                return this.getPropertyValue('border-color');
            },
            enumerable: true,
            configurable: true
        };
        var border_export_definition;
        var border_local_var_shorthand_for = {
            'border-width': {
                isValid: borderWidth_export_isValid,
                definition: borderWidth_export_definition
            },
            'border-style': {
                isValid: borderStyle_export_isValid,
                definition: borderStyle_export_definition
            },
            'border-color': {
                isValid: borderColor_export_isValid,
                definition: borderColor_export_definition
            }
        };
        var border_local_var_myShorthandSetter = shorthandSetter('border', border_local_var_shorthand_for);
        var border_local_var_myShorthandGetter = shorthandGetter('border', border_local_var_shorthand_for);
        border_export_definition = {
            set: function(v) {
                if (v.toString().toLowerCase() === 'none') {
                    v = '';
                }
                border_local_var_myShorthandSetter.call(this, v);
                this.removeProperty('border-top');
                this.removeProperty('border-left');
                this.removeProperty('border-right');
                this.removeProperty('border-bottom');
                this._values['border-top'] = this._values.border;
                this._values['border-left'] = this._values.border;
                this._values['border-right'] = this._values.border;
                this._values['border-bottom'] = this._values.border;
            },
            get: border_local_var_myShorthandGetter,
            enumerable: true,
            configurable: true
        };
        var borderBottomWidth_export_isValid, borderBottomWidth_export_definition;
        var borderBottomWidth_local_var_isValid = borderBottomWidth_export_isValid = borderWidth_export_isValid;
        borderBottomWidth_export_definition = {
            set: function(v) {
                if (borderBottomWidth_local_var_isValid(v)) {
                    this._setProperty('border-bottom-width', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-bottom-width');
            },
            enumerable: true,
            configurable: true
        };
        var borderBottomStyle_export_isValid, borderBottomStyle_export_definition;
        borderBottomStyle_export_isValid = borderStyle_export_isValid;
        borderBottomStyle_export_definition = {
            set: function(v) {
                if (borderStyle_export_isValid(v)) {
                    if (v.toLowerCase() === 'none') {
                        v = '';
                        this.removeProperty('border-bottom-width');
                    }
                    this._setProperty('border-bottom-style', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-bottom-style');
            },
            enumerable: true,
            configurable: true
        };
        var borderBottomColor_export_isValid, borderBottomColor_export_definition;
        var borderBottomColor_local_var_isValid = borderBottomColor_export_isValid = borderColor_export_isValid;
        borderBottomColor_export_definition = {
            set: function(v) {
                if (borderBottomColor_local_var_isValid(v)) {
                    this._setProperty('border-bottom-color', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-bottom-color');
            },
            enumerable: true,
            configurable: true
        };
        var borderBottom_export_definition;
        var borderBottom_local_var_shorthand_for = {
            'border-bottom-width': {
                isValid: borderBottomWidth_export_isValid,
                definition: borderBottomWidth_export_definition
            },
            'border-bottom-style': {
                isValid: borderBottomStyle_export_isValid,
                definition: borderBottomStyle_export_definition
            },
            'border-bottom-color': {
                isValid: borderBottomColor_export_isValid,
                definition: borderBottomColor_export_definition
            }
        };
        borderBottom_export_definition = {
            set: shorthandSetter('border-bottom', borderBottom_local_var_shorthand_for),
            get: shorthandGetter('border-bottom', borderBottom_local_var_shorthand_for),
            enumerable: true,
            configurable: true
        };
        var borderCollapse_export_definition;
        var borderCollapse_local_var_parse = function parse(v) {
            if (valueType(v) === TYPES.KEYWORD && (v.toLowerCase() === 'collapse' || v.toLowerCase() === 'separate' || v.toLowerCase() === 'inherit')) {
                return v;
            }
            return undefined;
        };
        borderCollapse_export_definition = {
            set: function(v) {
                this._setProperty('border-collapse', borderCollapse_local_var_parse(v));
            },
            get: function() {
                return this.getPropertyValue('border-collapse');
            },
            enumerable: true,
            configurable: true
        };
        var borderLeftWidth_export_isValid, borderLeftWidth_export_definition;
        var borderLeftWidth_local_var_isValid = borderLeftWidth_export_isValid = borderWidth_export_isValid;
        borderLeftWidth_export_definition = {
            set: function(v) {
                if (borderLeftWidth_local_var_isValid(v)) {
                    this._setProperty('border-left-width', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-left-width');
            },
            enumerable: true,
            configurable: true
        };
        var borderLeftStyle_export_isValid, borderLeftStyle_export_definition;
        borderLeftStyle_export_isValid = borderStyle_export_isValid;
        borderLeftStyle_export_definition = {
            set: function(v) {
                if (borderStyle_export_isValid(v)) {
                    if (v.toLowerCase() === 'none') {
                        v = '';
                        this.removeProperty('border-left-width');
                    }
                    this._setProperty('border-left-style', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-left-style');
            },
            enumerable: true,
            configurable: true
        };
        var borderLeftColor_export_isValid, borderLeftColor_export_definition;
        var borderLeftColor_local_var_isValid = borderLeftColor_export_isValid = borderColor_export_isValid;
        borderLeftColor_export_definition = {
            set: function(v) {
                if (borderLeftColor_local_var_isValid(v)) {
                    this._setProperty('border-left-color', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-left-color');
            },
            enumerable: true,
            configurable: true
        };
        var borderLeft_export_definition;
        var borderLeft_local_var_shorthand_for = {
            'border-left-width': {
                isValid: borderLeftWidth_export_isValid,
                definition: borderLeftWidth_export_definition
            },
            'border-left-style': {
                isValid: borderLeftStyle_export_isValid,
                definition: borderLeftStyle_export_definition
            },
            'border-left-color': {
                isValid: borderLeftColor_export_isValid,
                definition: borderLeftColor_export_definition
            }
        };
        borderLeft_export_definition = {
            set: shorthandSetter('border-left', borderLeft_local_var_shorthand_for),
            get: shorthandGetter('border-left', borderLeft_local_var_shorthand_for),
            enumerable: true,
            configurable: true
        };
        var borderRightWidth_export_isValid, borderRightWidth_export_definition;
        var borderRightWidth_local_var_isValid = borderRightWidth_export_isValid = borderWidth_export_isValid;
        borderRightWidth_export_definition = {
            set: function(v) {
                if (borderRightWidth_local_var_isValid(v)) {
                    this._setProperty('border-right-width', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-right-width');
            },
            enumerable: true,
            configurable: true
        };
        var borderRightStyle_export_isValid, borderRightStyle_export_definition;
        borderRightStyle_export_isValid = borderStyle_export_isValid;
        borderRightStyle_export_definition = {
            set: function(v) {
                if (borderStyle_export_isValid(v)) {
                    if (v.toLowerCase() === 'none') {
                        v = '';
                        this.removeProperty('border-right-width');
                    }
                    this._setProperty('border-right-style', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-right-style');
            },
            enumerable: true,
            configurable: true
        };
        var borderRightColor_export_isValid, borderRightColor_export_definition;
        var borderRightColor_local_var_isValid = borderRightColor_export_isValid = borderColor_export_isValid;
        borderRightColor_export_definition = {
            set: function(v) {
                if (borderRightColor_local_var_isValid(v)) {
                    this._setProperty('border-right-color', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-right-color');
            },
            enumerable: true,
            configurable: true
        };
        var borderRight_export_definition;
        var borderRight_local_var_shorthand_for = {
            'border-right-width': {
                isValid: borderRightWidth_export_isValid,
                definition: borderRightWidth_export_definition
            },
            'border-right-style': {
                isValid: borderRightStyle_export_isValid,
                definition: borderRightStyle_export_definition
            },
            'border-right-color': {
                isValid: borderRightColor_export_isValid,
                definition: borderRightColor_export_definition
            }
        };
        borderRight_export_definition = {
            set: shorthandSetter('border-right', borderRight_local_var_shorthand_for),
            get: shorthandGetter('border-right', borderRight_local_var_shorthand_for),
            enumerable: true,
            configurable: true
        };
        var borderSpacing_export_definition;
        // <length> <length>? | inherit
        // if one, it applies to both horizontal and verical spacing
        // if two, the first applies to the horizontal and the second applies to vertical spacing

        var borderSpacing_local_var_parse = function parse(v) {
            if (v === '' || v === null) {
                return undefined;
            }
            if (v === 0) {
                return '0px';
            }
            if (v.toLowerCase() === 'inherit') {
                return v;
            }
            var parts = v.split(/\s+/);
            if (parts.length !== 1 && parts.length !== 2) {
                return undefined;
            }
            parts.forEach(function(part) {
                if (valueType(part) !== TYPES.LENGTH) {
                    return undefined;
                }
            });
            return v;
        };
        borderSpacing_export_definition = {
            set: function(v) {
                this._setProperty('border-spacing', borderSpacing_local_var_parse(v));
            },
            get: function() {
                return this.getPropertyValue('border-spacing');
            },
            enumerable: true,
            configurable: true
        };
        var borderTopWidth_export_isValid, borderTopWidth_export_definition;
        borderTopWidth_export_isValid = borderWidth_export_isValid;
        borderTopWidth_export_definition = {
            set: function(v) {
                if (borderWidth_export_isValid(v)) {
                    this._setProperty('border-top-width', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-top-width');
            },
            enumerable: true,
            configurable: true
        };
        var borderTopStyle_export_isValid, borderTopStyle_export_definition;
        borderTopStyle_export_isValid = borderStyle_export_isValid;
        borderTopStyle_export_definition = {
            set: function(v) {
                if (borderStyle_export_isValid(v)) {
                    if (v.toLowerCase() === 'none') {
                        v = '';
                        this.removeProperty('border-top-width');
                    }
                    this._setProperty('border-top-style', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-top-style');
            },
            enumerable: true,
            configurable: true
        };
        var borderTopColor_export_isValid, borderTopColor_export_definition;
        var borderTopColor_local_var_isValid = borderTopColor_export_isValid = borderColor_export_isValid;
        borderTopColor_export_definition = {
            set: function(v) {
                if (borderTopColor_local_var_isValid(v)) {
                    this._setProperty('border-top-color', v);
                }
            },
            get: function() {
                return this.getPropertyValue('border-top-color');
            },
            enumerable: true,
            configurable: true
        };
        var borderTop_export_definition;
        var borderTop_local_var_shorthand_for = {
            'border-top-width': {
                isValid: borderTopWidth_export_isValid,
                definition: borderTopWidth_export_definition
            },
            'border-top-style': {
                isValid: borderTopStyle_export_isValid,
                definition: borderTopStyle_export_definition
            },
            'border-top-color': {
                isValid: borderTopColor_export_isValid,
                definition: borderTopColor_export_definition
            }
        };
        borderTop_export_definition = {
            set: shorthandSetter('border-top', borderTop_local_var_shorthand_for),
            get: shorthandGetter('border-top', borderTop_local_var_shorthand_for),
            enumerable: true,
            configurable: true
        };
        var bottom_export_definition;
        bottom_export_definition = {
            set: function(v) {
                this._setProperty('bottom', parseMeasurement(v));
            },
            get: function() {
                return this.getPropertyValue('bottom');
            },
            enumerable: true,
            configurable: true
        };
        var clear_export_definition;
        var clear_local_var_clear_keywords = ['none', 'left', 'right', 'both', 'inherit'];
        clear_export_definition = {
            set: function(v) {
                this._setProperty('clear', parseKeyword(v, clear_local_var_clear_keywords));
            },
            get: function() {
                return this.getPropertyValue('clear');
            },
            enumerable: true,
            configurable: true
        };
        var clip_export_definition;
        var clip_local_var_shape_regex = /^rect\((.*)\)$/i;
        var clip_local_var_parse = function(val) {
            if (val === '' || val === null) {
                return val;
            }
            if (typeof val !== 'string') {
                return undefined;
            }
            val = val.toLowerCase();
            if (val === 'auto' || val === 'inherit') {
                return val;
            }
            var matches = val.match(clip_local_var_shape_regex);
            if (!matches) {
                return undefined;
            }
            var parts = matches[1].split(/\s*,\s*/);
            if (parts.length !== 4) {
                return undefined;
            }
            var valid = parts.every(function(part, index) {
                var measurement = parseMeasurement(part);
                parts[index] = measurement;
                return measurement !== undefined;
            });
            if (!valid) {
                return undefined;
            }
            parts = parts.join(', ');
            return val.replace(matches[1], parts);
        };
        clip_export_definition = {
            set: function(v) {
                this._setProperty('clip', clip_local_var_parse(v));
            },
            get: function() {
                return this.getPropertyValue('clip');
            },
            enumerable: true,
            configurable: true
        };
        var color_export_definition;
        color_export_definition = {
            set: function(v) {
                this._setProperty('color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('color');
            },
            enumerable: true,
            configurable: true
        };
        var cssFloat_export_definition;
        cssFloat_export_definition = {
            set: function(v) {
                this._setProperty('float', v);
            },
            get: function() {
                return this.getPropertyValue('float');
            },
            enumerable: true,
            configurable: true
        };
        var flexGrow_export_isValid, flexGrow_export_definition;
        flexGrow_export_isValid = function isValid(v, positionAtFlexShorthand) {
            return parseNumber(v) !== undefined && positionAtFlexShorthand === external_dependency_constants_1.POSITION_AT_SHORTHAND.first;
        };
        flexGrow_export_definition = {
            set: function(v) {
                this._setProperty('flex-grow', parseNumber(v));
            },
            get: function() {
                return this.getPropertyValue('flex-grow');
            },
            enumerable: true,
            configurable: true
        };
        var flexShrink_export_isValid, flexShrink_export_definition;
        flexShrink_export_isValid = function isValid(v, positionAtFlexShorthand) {
            return parseNumber(v) !== undefined && positionAtFlexShorthand === external_dependency_constants_1.POSITION_AT_SHORTHAND.second;
        };
        flexShrink_export_definition = {
            set: function(v) {
                this._setProperty('flex-shrink', parseNumber(v));
            },
            get: function() {
                return this.getPropertyValue('flex-shrink');
            },
            enumerable: true,
            configurable: true
        };
        var flexBasis_export_isValid, flexBasis_export_definition;

        function flexBasis_local_fn_parse(v) {
            if (String(v).toLowerCase() === 'auto') {
                return 'auto';
            }
            if (String(v).toLowerCase() === 'inherit') {
                return 'inherit';
            }
            return parseMeasurement(v);
        }
        flexBasis_export_isValid = function isValid(v) {
            return flexBasis_local_fn_parse(v) !== undefined;
        };
        flexBasis_export_definition = {
            set: function(v) {
                this._setProperty('flex-basis', flexBasis_local_fn_parse(v));
            },
            get: function() {
                return this.getPropertyValue('flex-basis');
            },
            enumerable: true,
            configurable: true
        };
        var flex_export_isValid, flex_export_definition;
        var flex_local_var_shorthand_for = {
            'flex-grow': {
                isValid: flexGrow_export_isValid,
                definition: flexGrow_export_definition
            },
            'flex-shrink': {
                isValid: flexShrink_export_isValid,
                definition: flexShrink_export_definition
            },
            'flex-basis': {
                isValid: flexBasis_export_isValid,
                definition: flexBasis_export_definition
            }
        };
        var flex_local_var_myShorthandSetter = shorthandSetter('flex', flex_local_var_shorthand_for);
        flex_export_isValid = function isValid(v) {
            return shorthandParser(v, flex_local_var_shorthand_for) !== undefined;
        };
        flex_export_definition = {
            set: function(v) {
                var normalizedValue = String(v).trim().toLowerCase();
                if (normalizedValue === 'none') {
                    flex_local_var_myShorthandSetter.call(this, '0 0 auto');
                    return;
                }
                if (normalizedValue === 'initial') {
                    flex_local_var_myShorthandSetter.call(this, '0 1 auto');
                    return;
                }
                if (normalizedValue === 'auto') {
                    this.removeProperty('flex-grow');
                    this.removeProperty('flex-shrink');
                    this.setProperty('flex-basis', normalizedValue);
                    return;
                }
                flex_local_var_myShorthandSetter.call(this, v);
            },
            get: shorthandGetter('flex', flex_local_var_shorthand_for),
            enumerable: true,
            configurable: true
        };
        var float_export_definition;
        float_export_definition = {
            set: function(v) {
                this._setProperty('float', v);
            },
            get: function() {
                return this.getPropertyValue('float');
            },
            enumerable: true,
            configurable: true
        };
        var floodColor_export_definition;
        floodColor_export_definition = {
            set: function(v) {
                this._setProperty('flood-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('flood-color');
            },
            enumerable: true,
            configurable: true
        };
        var fontFamily_export_isValid, fontFamily_export_definition;
        var fontFamily_local_var_partsRegEx = /\s*,\s*/;
        fontFamily_export_isValid = function isValid(v) {
            if (v === '' || v === null) {
                return true;
            }
            var parts = v.split(fontFamily_local_var_partsRegEx);
            var len = parts.length;
            var i;
            var type;
            for (i = 0; i < len; i++) {
                type = valueType(parts[i]);
                if (type === TYPES.STRING || type === TYPES.KEYWORD) {
                    return true;
                }
            }
            return false;
        };
        fontFamily_export_definition = {
            set: function(v) {
                this._setProperty('font-family', v);
            },
            get: function() {
                return this.getPropertyValue('font-family');
            },
            enumerable: true,
            configurable: true
        };
        var fontSize_export_isValid, fontSize_export_definition;
        var fontSize_local_var_absoluteSizes = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
        var fontSize_local_var_relativeSizes = ['larger', 'smaller'];
        fontSize_export_isValid = function(v) {
            var type = valueType(v.toLowerCase());
            return type === TYPES.LENGTH || type === TYPES.PERCENT || type === TYPES.KEYWORD && fontSize_local_var_absoluteSizes.indexOf(v.toLowerCase()) !== -1 || type === TYPES.KEYWORD && fontSize_local_var_relativeSizes.indexOf(v.toLowerCase()) !== -1;
        };

        function fontSize_local_fn_parse(v) {
            const valueAsString = String(v).toLowerCase();
            const optionalArguments = fontSize_local_var_absoluteSizes.concat(fontSize_local_var_relativeSizes);
            const isOptionalArgument = optionalArguments.some(stringValue => stringValue.toLowerCase() === valueAsString);
            return isOptionalArgument ? valueAsString : parseMeasurement(v);
        }
        fontSize_export_definition = {
            set: function(v) {
                this._setProperty('font-size', fontSize_local_fn_parse(v));
            },
            get: function() {
                return this.getPropertyValue('font-size');
            },
            enumerable: true,
            configurable: true
        };
        var fontStyle_export_isValid, fontStyle_export_definition;
        var fontStyle_local_var_valid_styles = ['normal', 'italic', 'oblique', 'inherit'];
        fontStyle_export_isValid = function(v) {
            return fontStyle_local_var_valid_styles.indexOf(v.toLowerCase()) !== -1;
        };
        fontStyle_export_definition = {
            set: function(v) {
                this._setProperty('font-style', v);
            },
            get: function() {
                return this.getPropertyValue('font-style');
            },
            enumerable: true,
            configurable: true
        };
        var fontVariant_export_isValid, fontVariant_export_definition;
        var fontVariant_local_var_valid_variants = ['normal', 'small-caps', 'inherit'];
        fontVariant_export_isValid = function isValid(v) {
            return fontVariant_local_var_valid_variants.indexOf(v.toLowerCase()) !== -1;
        };
        fontVariant_export_definition = {
            set: function(v) {
                this._setProperty('font-variant', v);
            },
            get: function() {
                return this.getPropertyValue('font-variant');
            },
            enumerable: true,
            configurable: true
        };
        var fontWeight_export_isValid, fontWeight_export_definition;
        var fontWeight_local_var_valid_weights = ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'inherit'];
        fontWeight_export_isValid = function isValid(v) {
            return fontWeight_local_var_valid_weights.indexOf(v.toLowerCase()) !== -1;
        };
        fontWeight_export_definition = {
            set: function(v) {
                this._setProperty('font-weight', v);
            },
            get: function() {
                return this.getPropertyValue('font-weight');
            },
            enumerable: true,
            configurable: true
        };
        var lineHeight_export_isValid, lineHeight_export_definition;
        lineHeight_export_isValid = function isValid(v) {
            var type = valueType(v);
            return type === TYPES.KEYWORD && v.toLowerCase() === 'normal' || v.toLowerCase() === 'inherit' || type === TYPES.NUMBER || type === TYPES.LENGTH || type === TYPES.PERCENT;
        };
        lineHeight_export_definition = {
            set: function(v) {
                this._setProperty('line-height', v);
            },
            get: function() {
                return this.getPropertyValue('line-height');
            },
            enumerable: true,
            configurable: true
        };
        var font_export_definition;
        var font_local_var_shorthand_for = {
            'font-family': {
                isValid: fontFamily_export_isValid,
                definition: fontFamily_export_definition
            },
            'font-size': {
                isValid: fontSize_export_isValid,
                definition: fontSize_export_definition
            },
            'font-style': {
                isValid: fontStyle_export_isValid,
                definition: fontStyle_export_definition
            },
            'font-variant': {
                isValid: fontVariant_export_isValid,
                definition: fontVariant_export_definition
            },
            'font-weight': {
                isValid: fontWeight_export_isValid,
                definition: fontWeight_export_definition
            },
            'line-height': {
                isValid: lineHeight_export_isValid,
                definition: lineHeight_export_definition
            }
        };
        var font_local_var_static_fonts = ['caption', 'icon', 'menu', 'message-box', 'small-caption', 'status-bar', 'inherit'];
        var font_local_var_setter = shorthandSetter('font', font_local_var_shorthand_for);
        font_export_definition = {
            set: function(v) {
                var short = shorthandParser(v, font_local_var_shorthand_for);
                if (short !== undefined) {
                    return font_local_var_setter.call(this, v);
                }
                if (valueType(v) === TYPES.KEYWORD && font_local_var_static_fonts.indexOf(v.toLowerCase()) !== -1) {
                    this._setProperty('font', v);
                }
            },
            get: shorthandGetter('font', font_local_var_shorthand_for),
            enumerable: true,
            configurable: true
        };
        var height_export_definition;

        function height_local_fn_parse(v) {
            if (String(v).toLowerCase() === 'auto') {
                return 'auto';
            }
            if (String(v).toLowerCase() === 'inherit') {
                return 'inherit';
            }
            return parseMeasurement(v);
        }
        height_export_definition = {
            set: function(v) {
                this._setProperty('height', height_local_fn_parse(v));
            },
            get: function() {
                return this.getPropertyValue('height');
            },
            enumerable: true,
            configurable: true
        };
        var left_export_definition;
        left_export_definition = {
            set: function(v) {
                this._setProperty('left', parseMeasurement(v));
            },
            get: function() {
                return this.getPropertyValue('left');
            },
            enumerable: true,
            configurable: true
        };
        var lightingColor_export_definition;
        lightingColor_export_definition = {
            set: function(v) {
                this._setProperty('lighting-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('lighting-color');
            },
            enumerable: true,
            configurable: true
        };
        var margin_export_definition, margin_export_isValid, margin_export_parser;
        var margin_local_var_TYPES = TYPES;
        var margin_local_var_isValid = function(v) {
            if (v.toLowerCase() === 'auto') {
                return true;
            }
            var type = valueType(v);
            return type === margin_local_var_TYPES.NULL_OR_EMPTY_STR || type === margin_local_var_TYPES.LENGTH || type === margin_local_var_TYPES.PERCENT || type === margin_local_var_TYPES.CALC || type === margin_local_var_TYPES.INTEGER && (v === '0' || v === 0);
        };
        var margin_local_var_parser = function(v) {
            var V = v.toLowerCase();
            if (V === 'auto') {
                return V;
            }
            return parseMeasurement(v);
        };
        var margin_local_var_mySetter = implicitSetter('margin', '', margin_local_var_isValid, margin_local_var_parser);
        var margin_local_var_myGlobal = implicitSetter('margin', '', function() {
            return true;
        }, function(v) {
            return v;
        });
        margin_export_definition = {
            set: function(v) {
                if (typeof v === 'number') {
                    v = String(v);
                }
                if (v === null) {
                    v = '';
                }
                if (typeof v !== 'string') {
                    return;
                }
                var V = v.toLowerCase();
                switch (V) {
                    case 'inherit':
                    case 'initial':
                    case 'unset':
                    case '':
                        margin_local_var_myGlobal.call(this, V);
                        break;
                    default:
                        margin_local_var_mySetter.call(this, v);
                        break;
                }
            },
            get: function() {
                return this.getPropertyValue('margin');
            },
            enumerable: true,
            configurable: true
        };
        margin_export_isValid = margin_local_var_isValid;
        margin_export_parser = margin_local_var_parser;
        var marginBottom_export_definition;
        marginBottom_export_definition = {
            set: subImplicitSetter('margin', 'bottom', {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.isValid, {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('margin-bottom');
            },
            enumerable: true,
            configurable: true
        };
        var marginLeft_export_definition;
        marginLeft_export_definition = {
            set: subImplicitSetter('margin', 'left', {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.isValid, {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('margin-left');
            },
            enumerable: true,
            configurable: true
        };
        var marginRight_export_definition;
        marginRight_export_definition = {
            set: subImplicitSetter('margin', 'right', {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.isValid, {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('margin-right');
            },
            enumerable: true,
            configurable: true
        };
        var marginTop_export_definition;
        marginTop_export_definition = {
            set: subImplicitSetter('margin', 'top', {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.isValid, {
                definition: margin_export_definition,
                isValid: margin_export_isValid,
                parser: margin_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('margin-top');
            },
            enumerable: true,
            configurable: true
        };
        var opacity_export_definition;
        opacity_export_definition = {
            set: function(v) {
                this._setProperty('opacity', parsePercentibleNumber(v));
            },
            get: function() {
                return this.getPropertyValue('opacity');
            },
            enumerable: true,
            configurable: true
        };
        var outlineColor_export_definition;
        outlineColor_export_definition = {
            set: function(v) {
                this._setProperty('outline-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('outline-color');
            },
            enumerable: true,
            configurable: true
        };
        var padding_export_definition, padding_export_isValid, padding_export_parser;
        var padding_local_var_TYPES = TYPES;
        var padding_local_var_isValid = function(v) {
            var type = valueType(v);
            return type === padding_local_var_TYPES.NULL_OR_EMPTY_STR || type === padding_local_var_TYPES.LENGTH || type === padding_local_var_TYPES.PERCENT || type === padding_local_var_TYPES.CALC || type === padding_local_var_TYPES.INTEGER && (v === '0' || v === 0);
        };
        var padding_local_var_parser = function(v) {
            return parseMeasurement(v);
        };
        var padding_local_var_mySetter = implicitSetter('padding', '', padding_local_var_isValid, padding_local_var_parser);
        var padding_local_var_myGlobal = implicitSetter('padding', '', function() {
            return true;
        }, function(v) {
            return v;
        });
        padding_export_definition = {
            set: function(v) {
                if (typeof v === 'number') {
                    v = String(v);
                }
                if (v === null) {
                    v = '';
                }
                if (typeof v !== 'string') {
                    return;
                }
                var V = v.toLowerCase();
                switch (V) {
                    case 'inherit':
                    case 'initial':
                    case 'unset':
                    case '':
                        padding_local_var_myGlobal.call(this, V);
                        break;
                    default:
                        padding_local_var_mySetter.call(this, v);
                        break;
                }
            },
            get: function() {
                return this.getPropertyValue('padding');
            },
            enumerable: true,
            configurable: true
        };
        padding_export_isValid = padding_local_var_isValid;
        padding_export_parser = padding_local_var_parser;
        var paddingBottom_export_definition;
        paddingBottom_export_definition = {
            set: subImplicitSetter('padding', 'bottom', {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.isValid, {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('padding-bottom');
            },
            enumerable: true,
            configurable: true
        };
        var paddingLeft_export_definition;
        paddingLeft_export_definition = {
            set: subImplicitSetter('padding', 'left', {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.isValid, {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('padding-left');
            },
            enumerable: true,
            configurable: true
        };
        var paddingRight_export_definition;
        paddingRight_export_definition = {
            set: subImplicitSetter('padding', 'right', {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.isValid, {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('padding-right');
            },
            enumerable: true,
            configurable: true
        };
        var paddingTop_export_definition;
        paddingTop_export_definition = {
            set: subImplicitSetter('padding', 'top', {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.isValid, {
                definition: padding_export_definition,
                isValid: padding_export_isValid,
                parser: padding_export_parser
            }.parser),
            get: function() {
                return this.getPropertyValue('padding-top');
            },
            enumerable: true,
            configurable: true
        };
        var right_export_definition;
        right_export_definition = {
            set: function(v) {
                this._setProperty('right', parseMeasurement(v));
            },
            get: function() {
                return this.getPropertyValue('right');
            },
            enumerable: true,
            configurable: true
        };
        var stopColor_export_definition;
        stopColor_export_definition = {
            set: function(v) {
                this._setProperty('stop-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('stop-color');
            },
            enumerable: true,
            configurable: true
        };
        var textLineThroughColor_export_definition;
        textLineThroughColor_export_definition = {
            set: function(v) {
                this._setProperty('text-line-through-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('text-line-through-color');
            },
            enumerable: true,
            configurable: true
        };
        var textOverlineColor_export_definition;
        textOverlineColor_export_definition = {
            set: function(v) {
                this._setProperty('text-overline-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('text-overline-color');
            },
            enumerable: true,
            configurable: true
        };
        var textUnderlineColor_export_definition;
        textUnderlineColor_export_definition = {
            set: function(v) {
                this._setProperty('text-underline-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('text-underline-color');
            },
            enumerable: true,
            configurable: true
        };
        var top_export_definition;
        top_export_definition = {
            set: function(v) {
                this._setProperty('top', parseMeasurement(v));
            },
            get: function() {
                return this.getPropertyValue('top');
            },
            enumerable: true,
            configurable: true
        };
        var webkitBorderAfterColor_export_definition;
        webkitBorderAfterColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-border-after-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-border-after-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitBorderBeforeColor_export_definition;
        webkitBorderBeforeColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-border-before-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-border-before-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitBorderEndColor_export_definition;
        webkitBorderEndColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-border-end-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-border-end-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitBorderStartColor_export_definition;
        webkitBorderStartColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-border-start-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-border-start-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitColumnRuleColor_export_definition;
        webkitColumnRuleColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-column-rule-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-column-rule-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitMatchNearestMailBlockquoteColor_export_definition;
        webkitMatchNearestMailBlockquoteColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-match-nearest-mail-blockquote-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-match-nearest-mail-blockquote-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitTapHighlightColor_export_definition;
        webkitTapHighlightColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-tap-highlight-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-tap-highlight-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitTextEmphasisColor_export_definition;
        webkitTextEmphasisColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-text-emphasis-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-text-emphasis-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitTextFillColor_export_definition;
        webkitTextFillColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-text-fill-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-text-fill-color');
            },
            enumerable: true,
            configurable: true
        };
        var webkitTextStrokeColor_export_definition;
        webkitTextStrokeColor_export_definition = {
            set: function(v) {
                this._setProperty('-webkit-text-stroke-color', parseColor(v));
            },
            get: function() {
                return this.getPropertyValue('-webkit-text-stroke-color');
            },
            enumerable: true,
            configurable: true
        };
        var width_export_definition;

        function width_local_fn_parse(v) {
            if (String(v).toLowerCase() === 'auto') {
                return 'auto';
            }
            if (String(v).toLowerCase() === 'inherit') {
                return 'inherit';
            }
            return parseMeasurement(v);
        }
        width_export_definition = {
            set: function(v) {
                this._setProperty('width', width_local_fn_parse(v));
            },
            get: function() {
                return this.getPropertyValue('width');
            },
            enumerable: true,
            configurable: true
        };
        (function(prototype) {
            Object.defineProperties(prototype, {
                azimuth: azimuth_export_definition,
                backgroundColor: backgroundColor_export_definition,
                "background-color": backgroundColor_export_definition,
                backgroundImage: backgroundImage_export_definition,
                "background-image": backgroundImage_export_definition,
                backgroundRepeat: backgroundRepeat_export_definition,
                "background-repeat": backgroundRepeat_export_definition,
                backgroundAttachment: backgroundAttachment_export_definition,
                "background-attachment": backgroundAttachment_export_definition,
                backgroundPosition: backgroundPosition_export_definition,
                "background-position": backgroundPosition_export_definition,
                background: background_export_definition,
                borderWidth: borderWidth_export_definition,
                "border-width": borderWidth_export_definition,
                borderStyle: borderStyle_export_definition,
                "border-style": borderStyle_export_definition,
                borderColor: borderColor_export_definition,
                "border-color": borderColor_export_definition,
                border: border_export_definition,
                borderBottomWidth: borderBottomWidth_export_definition,
                "border-bottom-width": borderBottomWidth_export_definition,
                borderBottomStyle: borderBottomStyle_export_definition,
                "border-bottom-style": borderBottomStyle_export_definition,
                borderBottomColor: borderBottomColor_export_definition,
                "border-bottom-color": borderBottomColor_export_definition,
                borderBottom: borderBottom_export_definition,
                "border-bottom": borderBottom_export_definition,
                borderCollapse: borderCollapse_export_definition,
                "border-collapse": borderCollapse_export_definition,
                borderLeftWidth: borderLeftWidth_export_definition,
                "border-left-width": borderLeftWidth_export_definition,
                borderLeftStyle: borderLeftStyle_export_definition,
                "border-left-style": borderLeftStyle_export_definition,
                borderLeftColor: borderLeftColor_export_definition,
                "border-left-color": borderLeftColor_export_definition,
                borderLeft: borderLeft_export_definition,
                "border-left": borderLeft_export_definition,
                borderRightWidth: borderRightWidth_export_definition,
                "border-right-width": borderRightWidth_export_definition,
                borderRightStyle: borderRightStyle_export_definition,
                "border-right-style": borderRightStyle_export_definition,
                borderRightColor: borderRightColor_export_definition,
                "border-right-color": borderRightColor_export_definition,
                borderRight: borderRight_export_definition,
                "border-right": borderRight_export_definition,
                borderSpacing: borderSpacing_export_definition,
                "border-spacing": borderSpacing_export_definition,
                borderTopWidth: borderTopWidth_export_definition,
                "border-top-width": borderTopWidth_export_definition,
                borderTopStyle: borderTopStyle_export_definition,
                "border-top-style": borderTopStyle_export_definition,
                borderTopColor: borderTopColor_export_definition,
                "border-top-color": borderTopColor_export_definition,
                borderTop: borderTop_export_definition,
                "border-top": borderTop_export_definition,
                bottom: bottom_export_definition,
                clear: clear_export_definition,
                clip: clip_export_definition,
                color: color_export_definition,
                cssFloat: cssFloat_export_definition,
                "css-float": cssFloat_export_definition,
                flexGrow: flexGrow_export_definition,
                "flex-grow": flexGrow_export_definition,
                flexShrink: flexShrink_export_definition,
                "flex-shrink": flexShrink_export_definition,
                flexBasis: flexBasis_export_definition,
                "flex-basis": flexBasis_export_definition,
                flex: flex_export_definition,
                float: float_export_definition,
                floodColor: floodColor_export_definition,
                "flood-color": floodColor_export_definition,
                fontFamily: fontFamily_export_definition,
                "font-family": fontFamily_export_definition,
                fontSize: fontSize_export_definition,
                "font-size": fontSize_export_definition,
                fontStyle: fontStyle_export_definition,
                "font-style": fontStyle_export_definition,
                fontVariant: fontVariant_export_definition,
                "font-variant": fontVariant_export_definition,
                fontWeight: fontWeight_export_definition,
                "font-weight": fontWeight_export_definition,
                lineHeight: lineHeight_export_definition,
                "line-height": lineHeight_export_definition,
                font: font_export_definition,
                height: height_export_definition,
                left: left_export_definition,
                lightingColor: lightingColor_export_definition,
                "lighting-color": lightingColor_export_definition,
                margin: margin_export_definition,
                marginBottom: marginBottom_export_definition,
                "margin-bottom": marginBottom_export_definition,
                marginLeft: marginLeft_export_definition,
                "margin-left": marginLeft_export_definition,
                marginRight: marginRight_export_definition,
                "margin-right": marginRight_export_definition,
                marginTop: marginTop_export_definition,
                "margin-top": marginTop_export_definition,
                opacity: opacity_export_definition,
                outlineColor: outlineColor_export_definition,
                "outline-color": outlineColor_export_definition,
                padding: padding_export_definition,
                paddingBottom: paddingBottom_export_definition,
                "padding-bottom": paddingBottom_export_definition,
                paddingLeft: paddingLeft_export_definition,
                "padding-left": paddingLeft_export_definition,
                paddingRight: paddingRight_export_definition,
                "padding-right": paddingRight_export_definition,
                paddingTop: paddingTop_export_definition,
                "padding-top": paddingTop_export_definition,
                right: right_export_definition,
                stopColor: stopColor_export_definition,
                "stop-color": stopColor_export_definition,
                textLineThroughColor: textLineThroughColor_export_definition,
                "text-line-through-color": textLineThroughColor_export_definition,
                textOverlineColor: textOverlineColor_export_definition,
                "text-overline-color": textOverlineColor_export_definition,
                textUnderlineColor: textUnderlineColor_export_definition,
                "text-underline-color": textUnderlineColor_export_definition,
                top: top_export_definition,
                webkitBorderAfterColor: webkitBorderAfterColor_export_definition,
                "webkit-border-after-color": webkitBorderAfterColor_export_definition,
                webkitBorderBeforeColor: webkitBorderBeforeColor_export_definition,
                "webkit-border-before-color": webkitBorderBeforeColor_export_definition,
                webkitBorderEndColor: webkitBorderEndColor_export_definition,
                "webkit-border-end-color": webkitBorderEndColor_export_definition,
                webkitBorderStartColor: webkitBorderStartColor_export_definition,
                "webkit-border-start-color": webkitBorderStartColor_export_definition,
                webkitColumnRuleColor: webkitColumnRuleColor_export_definition,
                "webkit-column-rule-color": webkitColumnRuleColor_export_definition,
                webkitMatchNearestMailBlockquoteColor: webkitMatchNearestMailBlockquoteColor_export_definition,
                "webkit-match-nearest-mail-blockquote-color": webkitMatchNearestMailBlockquoteColor_export_definition,
                webkitTapHighlightColor: webkitTapHighlightColor_export_definition,
                "webkit-tap-highlight-color": webkitTapHighlightColor_export_definition,
                webkitTextEmphasisColor: webkitTextEmphasisColor_export_definition,
                "webkit-text-emphasis-color": webkitTextEmphasisColor_export_definition,
                webkitTextFillColor: webkitTextFillColor_export_definition,
                "webkit-text-fill-color": webkitTextFillColor_export_definition,
                webkitTextStrokeColor: webkitTextStrokeColor_export_definition,
                "webkit-text-stroke-color": webkitTextStrokeColor_export_definition,
                width: width_export_definition
            });
        })(CSSStyleDeclaration.prototype);


        allProperties.forEach(function(property) {
            if (!implementedProperties.has(property)) {
                var declaration = getBasicPropertyDescriptor(property);
                Object.defineProperty(CSSStyleDeclaration.prototype, property, declaration);
                Object.defineProperty(CSSStyleDeclaration.prototype, dashedToCamelCase(property), declaration);
            }
        });

        allExtraProperties.forEach(function(property) {
            if (!implementedProperties.has(property)) {
                var declaration = getBasicPropertyDescriptor(property);
                Object.defineProperty(CSSStyleDeclaration.prototype, property, declaration);
                Object.defineProperty(CSSStyleDeclaration.prototype, dashedToCamelCase(property), declaration);
            }
        });

        return CSSStyleDeclaration
    }
)();
CSSOM.CSSRule = function CSSRule() {
    this.parentRule = null;
    this.parentStyleSheet = null;
};
CSSOM.CSSRule.UNKNOWN_RULE = 0;
CSSOM.CSSRule.STYLE_RULE = 1;
CSSOM.CSSRule.CHARSET_RULE = 2;
CSSOM.CSSRule.IMPORT_RULE = 3;
CSSOM.CSSRule.MEDIA_RULE = 4;
CSSOM.CSSRule.FONT_FACE_RULE = 5;
CSSOM.CSSRule.PAGE_RULE = 6;
CSSOM.CSSRule.KEYFRAMES_RULE = 7;
CSSOM.CSSRule.KEYFRAME_RULE = 8;
CSSOM.CSSRule.MARGIN_RULE = 9;
CSSOM.CSSRule.NAMESPACE_RULE = 10;
CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
CSSOM.CSSRule.SUPPORTS_RULE = 12;
CSSOM.CSSRule.DOCUMENT_RULE = 13;
CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
CSSOM.CSSRule.VIEWPORT_RULE = 15;
CSSOM.CSSRule.REGION_STYLE_RULE = 16;
CSSOM.CSSRule.CONTAINER_RULE = 17;
CSSOM.CSSRule.STARTING_STYLE_RULE = 1002;
CSSOM.CSSRule.prototype = {
    constructor: CSSOM.CSSRule
};
CSSOM.CSSGroupingRule = function CSSGroupingRule() {
    CSSOM.CSSRule.call(this);
    this.cssRules = [];
};
CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;
CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
    if (index < 0 || index > this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
    }
    var cssRule = CSSOM.parse(rule)
        .cssRules[0];
    cssRule.parentRule = this;
    this.cssRules.splice(index, 0, cssRule);
    return index;
};
CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
    if (index < 0 || index >= this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
    }
    this.cssRules.splice(index, 1)[0].parentRule = null;
};
CSSOM.CSSConditionRule = function CSSConditionRule() {
    CSSOM.CSSGroupingRule.call(this);
    this.cssRules = [];
};
CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
CSSOM.CSSConditionRule.prototype.conditionText = ''
CSSOM.CSSConditionRule.prototype.cssText = ''
CSSOM.CSSStyleRule = function CSSStyleRule() {
    CSSOM.CSSRule.call(this);
    this.selectorText = "";
    this.style = new CSSOM.CSSStyleDeclaration();
    this.style.parentRule = this;
};
CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
CSSOM.CSSStyleRule.prototype.type = 1;
Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
    get: function() {
        var text;
        if (this.selectorText) {
            text = this.selectorText + " {" + this.style.cssText + "}";
        } else {
            text = "";
        }
        return text;
    },
    set: function(cssText) {
        var rule = CSSOM.CSSStyleRule.parse(cssText);
        this.style = rule.style;
        this.selectorText = rule.selectorText;
    }
});
CSSOM.CSSStyleRule.parse = function(ruleText) {
    var i = 0;
    var state = "selector";
    var index;
    var j = i;
    var buffer = "";
    var SIGNIFICANT_WHITESPACE = {
        "selector": true,
        "value": true
    };
    var styleRule = new CSSOM.CSSStyleRule();
    var name, priority = "";
    for (var character;
        (character = ruleText.charAt(i)); i++) {
        switch (character) {
            case " ":
            case "\t":
            case "\r":
            case "\n":
            case "\f":
                if (SIGNIFICANT_WHITESPACE[state]) {
                    switch (ruleText.charAt(i - 1)) {
                        case " ":
                        case "\t":
                        case "\r":
                        case "\n":
                        case "\f":
                            break;
                        default:
                            buffer += " ";
                            break;
                    }
                }
                break;
            case '"':
                j = i + 1;
                index = ruleText.indexOf('"', j) + 1;
                if (!index) {
                    throw '" is missing';
                }
                buffer += ruleText.slice(i, index);
                i = index - 1;
                break;
            case "'":
                j = i + 1;
                index = ruleText.indexOf("'", j) + 1;
                if (!index) {
                    throw "' is missing";
                }
                buffer += ruleText.slice(i, index);
                i = index - 1;
                break;
            case "/":
                if (ruleText.charAt(i + 1) === "*") {
                    i += 2;
                    index = ruleText.indexOf("*/", i);
                    if (index === -1) {
                        throw new SyntaxError("Missing */");
                    } else {
                        i = index + 1;
                    }
                } else {
                    buffer += character;
                }
                break;
            case "{":
                if (state === "selector") {
                    styleRule.selectorText = buffer.trim();
                    buffer = "";
                    state = "name";
                }
                break;
            case ":":
                if (state === "name") {
                    name = buffer.trim();
                    buffer = "";
                    state = "value";
                } else {
                    buffer += character;
                }
                break;
            case "!":
                if (state === "value" && ruleText.indexOf("!important", i) === i) {
                    priority = "important";
                    i += "important".length;
                } else {
                    buffer += character;
                }
                break;
            case ";":
                if (state === "value") {
                    styleRule.style.setProperty(name, buffer.trim(), priority);
                    priority = "";
                    buffer = "";
                    state = "name";
                } else {
                    buffer += character;
                }
                break;
            case "}":
                if (state === "value") {
                    styleRule.style.setProperty(name, buffer.trim(), priority);
                    priority = "";
                    buffer = "";
                } else if (state === "name") {
                    break;
                } else {
                    buffer += character;
                }
                state = "selector";
                break;
            default:
                buffer += character;
                break;
        }
    }
    return styleRule;
};
CSSOM.MediaList = function MediaList() {
    this.length = 0;
};
CSSOM.MediaList.prototype = {
    constructor: CSSOM.MediaList,
    get mediaText() {
        return Array.prototype.join.call(this, ", ");
    },
    set mediaText(value) {
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i = 0; i < length; i++) {
            this[i] = values[i].trim();
        }
    },
    appendMedium: function(medium) {
        if (Array.prototype.indexOf.call(this, medium) === -1) {
            this[this.length] = medium;
            this.length++;
        }
    },
    deleteMedium: function(medium) {
        var index = Array.prototype.indexOf.call(this, medium);
        if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
        }
    }
};
CSSOM.CSSMediaRule = function CSSMediaRule() {
    CSSOM.CSSConditionRule.call(this);
    this.media = new CSSOM.MediaList();
};
CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
CSSOM.CSSMediaRule.prototype.type = 4;
Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
    "conditionText": {
        get: function() {
            return this.media.mediaText;
        },
        set: function(value) {
            this.media.mediaText = value;
        },
        configurable: true,
        enumerable: true
    },
    "cssText": {
        get: function() {
            var cssTexts = [];
            for (var i = 0, length = this.cssRules.length; i < length; i++) {
                cssTexts.push(this.cssRules[i].cssText);
            }
            return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
        },
        configurable: true,
        enumerable: true
    }
});
CSSOM.CSSContainerRule = function CSSContainerRule() {
    CSSOM.CSSConditionRule.call(this);
};
CSSOM.CSSContainerRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSContainerRule.prototype.constructor = CSSOM.CSSContainerRule;
CSSOM.CSSContainerRule.prototype.type = 17;
Object.defineProperties(CSSOM.CSSContainerRule.prototype, {
    "conditionText": {
        get: function() {
            return this.containerText;
        },
        set: function(value) {
            this.containerText = value;
        },
        configurable: true,
        enumerable: true
    },
    "cssText": {
        get: function() {
            var cssTexts = [];
            for (var i = 0, length = this.cssRules.length; i < length; i++) {
                cssTexts.push(this.cssRules[i].cssText);
            }
            return "@container " + this.containerText + " {" + cssTexts.join("") + "}";
        },
        configurable: true,
        enumerable: true
    }
});
CSSOM.CSSSupportsRule = function CSSSupportsRule() {
    CSSOM.CSSConditionRule.call(this);
};
CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
CSSOM.CSSSupportsRule.prototype.type = 12;
Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", {
    get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
        }
        return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
    }
});
CSSOM.CSSImportRule = function CSSImportRule() {
    CSSOM.CSSRule.call(this);
    this.href = "";
    this.media = new CSSOM.MediaList();
    this.styleSheet = new CSSOM.CSSStyleSheet();
};
CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
CSSOM.CSSImportRule.prototype.type = 3;
Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
    get: function() {
        var mediaText = this.media.mediaText;
        return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
    },
    set: function(cssText) {
        var i = 0;
        var state = '';
        var buffer = '';
        var index;
        for (var character;
            (character = cssText.charAt(i)); i++) {
            switch (character) {
                case ' ':
                case '\t':
                case '\r':
                case '\n':
                case '\f':
                    if (state === 'after-import') {
                        state = 'url';
                    } else {
                        buffer += character;
                    }
                    break;
                case '@':
                    if (!state && cssText.indexOf('@import', i) === i) {
                        state = 'after-import';
                        i += 'import'.length;
                        buffer = '';
                    }
                    break;
                case 'u':
                    if (state === 'url' && cssText.indexOf('url(', i) === i) {
                        index = cssText.indexOf(')', i + 1);
                        if (index === -1) {
                            throw i + ': ")" not found';
                        }
                        i += 'url('.length;
                        var url = cssText.slice(i, index);
                        if (url[0] === url[url.length - 1]) {
                            if (url[0] === '"' || url[0] === "'") {
                                url = url.slice(1, -1);
                            }
                        }
                        this.href = url;
                        i = index;
                        state = 'media';
                    }
                    break;
                case '"':
                    if (state === 'url') {
                        index = cssText.indexOf('"', i + 1);
                        if (!index) {
                            throw i + ": '\"' not found";
                        }
                        this.href = cssText.slice(i + 1, index);
                        i = index;
                        state = 'media';
                    }
                    break;
                case "'":
                    if (state === 'url') {
                        index = cssText.indexOf("'", i + 1);
                        if (!index) {
                            throw i + ': "\'" not found';
                        }
                        this.href = cssText.slice(i + 1, index);
                        i = index;
                        state = 'media';
                    }
                    break;
                case ';':
                    if (state === 'media') {
                        if (buffer) {
                            this.media.mediaText = buffer.trim();
                        }
                    }
                    break;
                default:
                    if (state === 'media') {
                        buffer += character;
                    }
                    break;
            }
        }
    }
});
CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
    CSSOM.CSSRule.call(this);
    this.style = new CSSOM.CSSStyleDeclaration();
    this.style.parentRule = this;
};
CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
CSSOM.CSSFontFaceRule.prototype.type = 5;
Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", {
    get: function() {
        return "@font-face {" + this.style.cssText + "}";
    }
});
CSSOM.CSSHostRule = function CSSHostRule() {
    CSSOM.CSSRule.call(this);
    this.cssRules = [];
};
CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
CSSOM.CSSHostRule.prototype.type = 1001;
Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", {
    get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
        }
        return "@host {" + cssTexts.join("") + "}";
    }
});
CSSOM.CSSStartingStyleRule = function CSSStartingStyleRule() {
    CSSOM.CSSRule.call(this);
    this.cssRules = [];
};
CSSOM.CSSStartingStyleRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSStartingStyleRule.prototype.constructor = CSSOM.CSSStartingStyleRule;
CSSOM.CSSStartingStyleRule.prototype.type = 1002;
Object.defineProperty(CSSOM.CSSStartingStyleRule.prototype, "cssText", {
    get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
        }
        return "@starting-style {" + cssTexts.join("") + "}";
    }
});
CSSOM.StyleSheet = function StyleSheet() {
    this.parentStyleSheet = null;
};
CSSOM.CSSStyleSheet = function CSSStyleSheet() {
    CSSOM.StyleSheet.call(this);
    this.cssRules = [];
};
CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;
CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
    if (index < 0 || index > this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
    }
    var cssRule = CSSOM.parse(rule)
        .cssRules[0];
    cssRule.parentStyleSheet = this;
    this.cssRules.splice(index, 0, cssRule);
    return index;
};
CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
    if (index < 0 || index >= this.cssRules.length) {
        throw new RangeError("INDEX_SIZE_ERR");
    }
    this.cssRules.splice(index, 1);
};
CSSOM.CSSStyleSheet.prototype.toString = function() {
    var result = "";
    var rules = this.cssRules;
    for (var i = 0; i < rules.length; i++) {
        result += rules[i].cssText + "\n";
    }
    return result;
};
CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
    CSSOM.CSSRule.call(this);
    this.name = '';
    this.cssRules = [];
};
CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
CSSOM.CSSKeyframesRule.prototype.type = 7;
Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", {
    get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push("  " + this.cssRules[i].cssText);
        }
        return "@" + (this._vendorPrefix || '') + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
    }
});
CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
    CSSOM.CSSRule.call(this);
    this.keyText = '';
    this.style = new CSSOM.CSSStyleDeclaration();
    this.style.parentRule = this;
};
CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
CSSOM.CSSKeyframeRule.prototype.type = 8;
Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", {
    get: function() {
        return this.keyText + " {" + this.style.cssText + "} ";
    }
});
CSSOM.MatcherList = function MatcherList() {
    this.length = 0;
};
CSSOM.MatcherList.prototype = {
    constructor: CSSOM.MatcherList,
    get matcherText() {
        return Array.prototype.join.call(this, ", ");
    },
    set matcherText(value) {
        var values = value.split(",");
        var length = this.length = values.length;
        for (var i = 0; i < length; i++) {
            this[i] = values[i].trim();
        }
    },
    appendMatcher: function(matcher) {
        if (Array.prototype.indexOf.call(this, matcher) === -1) {
            this[this.length] = matcher;
            this.length++;
        }
    },
    deleteMatcher: function(matcher) {
        var index = Array.prototype.indexOf.call(this, matcher);
        if (index !== -1) {
            Array.prototype.splice.call(this, index, 1);
        }
    }
};
CSSOM.CSSDocumentRule = function CSSDocumentRule() {
    CSSOM.CSSRule.call(this);
    this.matcher = new CSSOM.MatcherList();
    this.cssRules = [];
};
CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
CSSOM.CSSDocumentRule.prototype.type = 10;
Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", {
    get: function() {
        var cssTexts = [];
        for (var i = 0, length = this.cssRules.length; i < length; i++) {
            cssTexts.push(this.cssRules[i].cssText);
        }
        return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
    }
});
CSSOM.CSSValue = function CSSValue() {};
CSSOM.CSSValue.prototype = {
    constructor: CSSOM.CSSValue,
    set cssText(text) {
        var name = this._getConstructorName();
        throw new Error('DOMException: property "cssText" of "' + name + '" is readonly and can not be replaced with "' + text + '"!');
    },
    get cssText() {
        var name = this._getConstructorName();
        throw new Error('getter "cssText" of "' + name + '" is not implemented!');
    },
    _getConstructorName: function() {
        var s = this.constructor.toString(),
            c = s.match(/function\s([^\(]+)/),
            name = c[1];
        return name;
    }
};
CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
    this._token = token;
    this._idx = idx;
};
CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;
CSSOM.CSSValueExpression.prototype.parse = function() {
    var token = this._token,
        idx = this._idx;
    var character = '',
        expression = '',
        error = '',
        info,
        paren = [];
    for (;; ++idx) {
        character = token.charAt(idx);
        if (character === '') {
            error = 'css expression error: unfinished expression!';
            break;
        }
        switch (character) {
            case '(':
                paren.push(character);
                expression += character;
                break;
            case ')':
                paren.pop(character);
                expression += character;
                break;
            case '/':
                if ((info = this._parseJSComment(token, idx))) {
                    if (info.error) {
                        error = 'css expression error: unfinished comment in expression!';
                    } else {
                        idx = info.idx;
                    }
                } else if ((info = this._parseJSRexExp(token, idx))) {
                    idx = info.idx;
                    expression += info.text;
                } else {
                    expression += character;
                }
                break;
            case "'":
            case '"':
                info = this._parseJSString(token, idx, character);
                if (info) {
                    idx = info.idx;
                    expression += info.text;
                } else {
                    expression += character;
                }
                break;
            default:
                expression += character;
                break;
        }
        if (error) {
            break;
        }
        if (paren.length === 0) {
            break;
        }
    }
    var ret;
    if (error) {
        ret = {
            error: error
        };
    } else {
        ret = {
            idx: idx,
            expression: expression
        };
    }
    return ret;
};
CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
    var nextChar = token.charAt(idx + 1),
        text;
    if (nextChar === '/' || nextChar === '*') {
        var startIdx = idx,
            endIdx,
            commentEndChar;
        if (nextChar === '/') {
            commentEndChar = '\n';
        } else if (nextChar === '*') {
            commentEndChar = '*/';
        }
        endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
        if (endIdx !== -1) {
            endIdx = endIdx + commentEndChar.length - 1;
            text = token.substring(idx, endIdx + 1);
            return {
                idx: endIdx,
                text: text
            };
        } else {
            var error = 'css expression error: unfinished comment in expression!';
            return {
                error: error
            };
        }
    } else {
        return false;
    }
};
CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
    var endIdx = this._findMatchedIdx(token, idx, sep),
        text;
    if (endIdx === -1) {
        return false;
    } else {
        text = token.substring(idx, endIdx + sep.length);
        return {
            idx: endIdx,
            text: text
        };
    }
};
CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
    var before = token.substring(0, idx)
        .replace(/\s+$/, ""),
        legalRegx = [/^$/, /\($/, /\[$/, /\!$/, /\+$/, /\-$/, /\*$/, /\/\s+/, /\%$/, /\=$/, /\>$/, /<$/, /\&$/, /\|$/, /\^$/, /\~$/, /\?$/, /\,$/, /delete$/, /in$/, /instanceof$/, /new$/, /typeof$/, /void$/];
    var isLegal = legalRegx.some(function(reg) {
        return reg.test(before);
    });
    if (!isLegal) {
        return false;
    } else {
        var sep = '/';
        return this._parseJSString(token, idx, sep);
    }
};
CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
    var startIdx = idx,
        endIdx;
    var NOT_FOUND = -1;
    while (true) {
        endIdx = token.indexOf(sep, startIdx + 1);
        if (endIdx === -1) {
            endIdx = NOT_FOUND;
            break;
        } else {
            var text = token.substring(idx + 1, endIdx),
                matched = text.match(/\\+$/);
            if (!matched || matched[0] % 2 === 0) {
                break;
            } else {
                startIdx = endIdx;
            }
        }
    }
    var nextNewLineIdx = token.indexOf('\n', idx + 1);
    if (nextNewLineIdx < endIdx) {
        endIdx = NOT_FOUND;
    }
    return endIdx;
};
CSSOM.parse = function parse(token) {
    var i = 0;
    var state = "before-selector";
    var index;
    var buffer = "";
    var valueParenthesisDepth = 0;
    var SIGNIFICANT_WHITESPACE = {
        "selector": true,
        "value": true,
        "value-parenthesis": true,
        "atRule": true,
        "importRule-begin": true,
        "importRule": true,
        "atBlock": true,
        "containerBlock": true,
        "conditionBlock": true,
        'documentRule-begin': true
    };
    var styleSheet = new CSSOM.CSSStyleSheet();
    var currentScope = styleSheet;
    var parentRule;
    var ancestorRules = [];
    var hasAncestors = false;
    var prevScope;
    var name, priority = "",
        styleRule, mediaRule, containerRule, supportsRule,
        importRule, fontFaceRule, keyframesRule, documentRule,
        hostRule, startingStyleRule;
    var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;
    var parseError = function(message) {
        var lines = token.substring(0, i)
            .split('\n');
        var lineCount = lines.length;
        var charCount = lines.pop()
            .length + 1;
        var error = new Error(message + ' (line ' + lineCount + ', char ' + charCount + ')');
        error.line = lineCount;
        error['char'] = charCount;
        error.styleSheet = styleSheet;
        throw error;
    };
    for (var character;
        (character = token.charAt(i)); i++) {
        switch (character) {
            case " ":
            case "\t":
            case "\r":
            case "\n":
            case "\f":
                if (SIGNIFICANT_WHITESPACE[state]) {
                    buffer += character;
                }
                break;
            case '"':
                index = i + 1;
                do {
                    index = token.indexOf('"', index) + 1;
                    if (!index) {
                        parseError('Unmatched "');
                    }
                } while (token[index - 2] === '\\');
                buffer += token.slice(i, index);
                i = index - 1;
                switch (state) {
                    case 'before-value':
                        state = 'value';
                        break;
                    case 'importRule-begin':
                        state = 'importRule';
                        break;
                }
                break;
            case "'":
                index = i + 1;
                do {
                    index = token.indexOf("'", index) + 1;
                    if (!index) {
                        parseError("Unmatched '");
                    }
                } while (token[index - 2] === '\\');
                buffer += token.slice(i, index);
                i = index - 1;
                switch (state) {
                    case 'before-value':
                        state = 'value';
                        break;
                    case 'importRule-begin':
                        state = 'importRule';
                        break;
                }
                break;
            case "/":
                if (token.charAt(i + 1) === "*") {
                    i += 2;
                    index = token.indexOf("*/", i);
                    if (index === -1) {
                        parseError("Missing */");
                    } else {
                        i = index + 1;
                    }
                } else {
                    buffer += character;
                }
                if (state === "importRule-begin") {
                    buffer += " ";
                    state = "importRule";
                }
                break;
            case "@":
                if (token.indexOf("@-moz-document", i) === i) {
                    state = "documentRule-begin";
                    documentRule = new CSSOM.CSSDocumentRule();
                    documentRule.__starts = i;
                    i += "-moz-document".length;
                    buffer = "";
                    break;
                } else if (token.indexOf("@media", i) === i) {
                    state = "atBlock";
                    mediaRule = new CSSOM.CSSMediaRule();
                    mediaRule.__starts = i;
                    i += "media".length;
                    buffer = "";
                    break;
                } else if (token.indexOf("@container", i) === i) {
                    state = "containerBlock";
                    containerRule = new CSSOM.CSSContainerRule();
                    containerRule.__starts = i;
                    i += "container".length;
                    buffer = "";
                    break;
                } else if (token.indexOf("@supports", i) === i) {
                    state = "conditionBlock";
                    supportsRule = new CSSOM.CSSSupportsRule();
                    supportsRule.__starts = i;
                    i += "supports".length;
                    buffer = "";
                    break;
                } else if (token.indexOf("@host", i) === i) {
                    state = "hostRule-begin";
                    i += "host".length;
                    hostRule = new CSSOM.CSSHostRule();
                    hostRule.__starts = i;
                    buffer = "";
                    break;
                } else if (token.indexOf("@starting-style", i) === i) {
                    state = "startingStyleRule-begin";
                    i += "starting-style".length;
                    startingStyleRule = new CSSOM.CSSStartingStyleRule();
                    startingStyleRule.__starts = i;
                    buffer = "";
                    break;
                } else if (token.indexOf("@import", i) === i) {
                    state = "importRule-begin";
                    i += "import".length;
                    buffer += "@import";
                    break;
                } else if (token.indexOf("@font-face", i) === i) {
                    state = "fontFaceRule-begin";
                    i += "font-face".length;
                    fontFaceRule = new CSSOM.CSSFontFaceRule();
                    fontFaceRule.__starts = i;
                    buffer = "";
                    break;
                } else {
                    atKeyframesRegExp.lastIndex = i;
                    var matchKeyframes = atKeyframesRegExp.exec(token);
                    if (matchKeyframes && matchKeyframes.index === i) {
                        state = "keyframesRule-begin";
                        keyframesRule = new CSSOM.CSSKeyframesRule();
                        keyframesRule.__starts = i;
                        keyframesRule._vendorPrefix = matchKeyframes[1];
                        i += matchKeyframes[0].length - 1;
                        buffer = "";
                        break;
                    } else if (state === "selector") {
                        state = "atRule";
                    }
                }
                buffer += character;
                break;
            case "{":
                if (state === "selector" || state === "atRule") {
                    styleRule.selectorText = buffer.trim();
                    styleRule.style.__starts = i;
                    buffer = "";
                    state = "before-name";
                } else if (state === "atBlock") {
                    mediaRule.media.mediaText = buffer.trim();
                    if (parentRule) {
                        ancestorRules.push(parentRule);
                    }
                    currentScope = parentRule = mediaRule;
                    mediaRule.parentStyleSheet = styleSheet;
                    buffer = "";
                    state = "before-selector";
                } else if (state === "containerBlock") {
                    containerRule.containerText = buffer.trim();
                    if (parentRule) {
                        ancestorRules.push(parentRule);
                    }
                    currentScope = parentRule = containerRule;
                    containerRule.parentStyleSheet = styleSheet;
                    buffer = "";
                    state = "before-selector";
                } else if (state === "conditionBlock") {
                    supportsRule.conditionText = buffer.trim();
                    if (parentRule) {
                        ancestorRules.push(parentRule);
                    }
                    currentScope = parentRule = supportsRule;
                    supportsRule.parentStyleSheet = styleSheet;
                    buffer = "";
                    state = "before-selector";
                } else if (state === "hostRule-begin") {
                    if (parentRule) {
                        ancestorRules.push(parentRule);
                    }
                    currentScope = parentRule = hostRule;
                    hostRule.parentStyleSheet = styleSheet;
                    buffer = "";
                    state = "before-selector";
                } else if (state === "startingStyleRule-begin") {
                    if (parentRule) {
                        ancestorRules.push(parentRule);
                    }
                    currentScope = parentRule = startingStyleRule;
                    startingStyleRule.parentStyleSheet = styleSheet;
                    buffer = "";
                    state = "before-selector";
                } else if (state === "fontFaceRule-begin") {
                    if (parentRule) {
                        fontFaceRule.parentRule = parentRule;
                    }
                    fontFaceRule.parentStyleSheet = styleSheet;
                    styleRule = fontFaceRule;
                    buffer = "";
                    state = "before-name";
                } else if (state === "keyframesRule-begin") {
                    keyframesRule.name = buffer.trim();
                    if (parentRule) {
                        ancestorRules.push(parentRule);
                        keyframesRule.parentRule = parentRule;
                    }
                    keyframesRule.parentStyleSheet = styleSheet;
                    currentScope = parentRule = keyframesRule;
                    buffer = "";
                    state = "keyframeRule-begin";
                } else if (state === "keyframeRule-begin") {
                    styleRule = new CSSOM.CSSKeyframeRule();
                    styleRule.keyText = buffer.trim();
                    styleRule.__starts = i;
                    buffer = "";
                    state = "before-name";
                } else if (state === "documentRule-begin") {
                    documentRule.matcher.matcherText = buffer.trim();
                    if (parentRule) {
                        ancestorRules.push(parentRule);
                        documentRule.parentRule = parentRule;
                    }
                    currentScope = parentRule = documentRule;
                    documentRule.parentStyleSheet = styleSheet;
                    buffer = "";
                    state = "before-selector";
                }
                break;
            case ":":
                if (state === "name") {
                    name = buffer.trim();
                    buffer = "";
                    state = "before-value";
                } else {
                    buffer += character;
                }
                break;
            case "(":
                if (state === 'value') {
                    if (buffer.trim() === 'expression') {
                        var info = (new CSSOM.CSSValueExpression(token, i))
                            .parse();
                        if (info.error) {
                            parseError(info.error);
                        } else {
                            buffer += info.expression;
                            i = info.idx;
                        }
                    } else {
                        state = 'value-parenthesis';
                        valueParenthesisDepth = 1;
                        buffer += character;
                    }
                } else if (state === 'value-parenthesis') {
                    valueParenthesisDepth++;
                    buffer += character;
                } else {
                    buffer += character;
                }
                break;
            case ")":
                if (state === 'value-parenthesis') {
                    valueParenthesisDepth--;
                    if (valueParenthesisDepth === 0) state = 'value';
                }
                buffer += character;
                break;
            case "!":
                if (state === "value" && token.indexOf("!important", i) === i) {
                    priority = "important";
                    i += "important".length;
                } else {
                    buffer += character;
                }
                break;
            case ";":
                switch (state) {
                    case "value":
                        styleRule.style.setProperty(name, buffer.trim(), priority);
                        priority = "";
                        buffer = "";
                        state = "before-name";
                        break;
                    case "atRule":
                        buffer = "";
                        state = "before-selector";
                        break;
                    case "importRule":
                        importRule = new CSSOM.CSSImportRule();
                        importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
                        importRule.cssText = buffer + character;
                        styleSheet.cssRules.push(importRule);
                        buffer = "";
                        state = "before-selector";
                        break;
                    default:
                        buffer += character;
                        break;
                }
                break;
            case "}":
                switch (state) {
                    case "value":
                        styleRule.style.setProperty(name, buffer.trim(), priority);
                        priority = "";
                    case "before-name":
                    case "name":
                        styleRule.__ends = i + 1;
                        if (parentRule) {
                            styleRule.parentRule = parentRule;
                        }
                        styleRule.parentStyleSheet = styleSheet;
                        currentScope.cssRules.push(styleRule);
                        buffer = "";
                        if (currentScope.constructor === CSSOM.CSSKeyframesRule) {
                            state = "keyframeRule-begin";
                        } else {
                            state = "before-selector";
                        }
                        break;
                    case "keyframeRule-begin":
                    case "before-selector":
                    case "selector":
                        if (!parentRule) {
                            parseError("Unexpected }");
                        }
                        hasAncestors = ancestorRules.length > 0;
                        while (ancestorRules.length > 0) {
                            parentRule = ancestorRules.pop();
                            if (parentRule.constructor.name === "CSSMediaRule" || parentRule.constructor.name === "CSSSupportsRule" || parentRule.constructor.name === "CSSContainerRule" || parentRule.constructor.name === "CSSStartingStyleRule") {
                                prevScope = currentScope;
                                currentScope = parentRule;
                                currentScope.cssRules.push(prevScope);
                                break;
                            }
                            if (ancestorRules.length === 0) {
                                hasAncestors = false;
                            }
                        }
                        if (!hasAncestors) {
                            currentScope.__ends = i + 1;
                            styleSheet.cssRules.push(currentScope);
                            currentScope = styleSheet;
                            parentRule = null;
                        }
                        buffer = "";
                        state = "before-selector";
                        break;
                }
                break;
            default:
                switch (state) {
                    case "before-selector":
                        state = "selector";
                        styleRule = new CSSOM.CSSStyleRule();
                        styleRule.__starts = i;
                        break;
                    case "before-name":
                        state = "name";
                        break;
                    case "before-value":
                        state = "value";
                        break;
                    case "importRule-begin":
                        state = "importRule";
                        break;
                }
                buffer += character;
                break;
        }
    }
    return styleSheet;
};
CSSOM.clone = function clone(stylesheet) {
    var cloned = new CSSOM.CSSStyleSheet();
    var rules = stylesheet.cssRules;
    if (!rules) {
        return cloned;
    }
    for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
        var rule = rules[i];
        var ruleClone = cloned.cssRules[i] = new rule.constructor();
        var style = rule.style;
        if (style) {
            var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
            for (var j = 0, styleLength = style.length; j < styleLength; j++) {
                var name = styleClone[j] = style[j];
                styleClone[name] = style[name];
                styleClone._importants[name] = style.getPropertyPriority(name);
            }
            styleClone.length = style.length;
        }
        if (rule.hasOwnProperty('keyText')) {
            ruleClone.keyText = rule.keyText;
        }
        if (rule.hasOwnProperty('selectorText')) {
            ruleClone.selectorText = rule.selectorText;
        }
        if (rule.hasOwnProperty('mediaText')) {
            ruleClone.mediaText = rule.mediaText;
        }
        if (rule.hasOwnProperty('conditionText')) {
            ruleClone.conditionText = rule.conditionText;
        }
        if (rule.hasOwnProperty('cssRules')) {
            ruleClone.cssRules = clone(rule)
                .cssRules;
        }
    }
    return cloned;
};

export default CSSOM;
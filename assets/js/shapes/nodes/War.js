module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><circle r="58.662094" cy="59.999958" cx="59.999985"/><path d="m 23.310056,35.747295 c 0.217981,-0.217865 0.943391,0.156486 1.626531,0.839691 l 19.564706,19.564739 c 0.683172,0.683156 1.057671,1.408599 0.839658,1.626563 -0.217997,0.217866 -0.943358,-0.156485 -1.626547,-0.83969 L 24.149698,37.373859 c -0.68314,-0.68314 -1.057671,-1.408583 -0.839658,-1.626564 z"/><path d="m 23.310056,57.778288 c 0.217981,0.217866 0.943391,-0.156485 1.626531,-0.83969 L 44.501293,37.373859 c 0.683172,-0.683156 1.057671,-1.408599 0.839658,-1.626564 -0.217997,-0.217865 -0.943358,0.156486 -1.626547,0.839691 L 24.149698,56.151725 c -0.68314,0.68314 -1.057671,1.408583 -0.839658,1.626563 z"/><path d="m 75.799956,35.747295 c 0.217981,-0.217865 0.943391,0.156486 1.626531,0.839691 l 19.564706,19.564739 c 0.683172,0.683156 1.057671,1.408599 0.839658,1.626563 -0.217997,0.217866 -0.943358,-0.156485 -1.626547,-0.83969 L 76.639598,37.373859 c -0.68314,-0.68314 -1.057671,-1.408583 -0.839658,-1.626564 z"/><path d="m 75.799956,57.778288 c 0.217981,0.217866 0.943391,-0.156485 1.626531,-0.83969 L 96.991193,37.373859 c 0.683172,-0.683156 1.057671,-1.408599 0.839658,-1.626564 -0.217997,-0.217865 -0.943358,0.156486 -1.626547,0.839691 L 76.639598,56.151725 c -0.68314,0.68314 -1.057671,1.408583 -0.839658,1.626563 z"/><path d="m 45.265107,96.408 c 1.15e-4,-0.3083 0.777737,-0.5564 1.743879,-0.5564 11.018038,-7.5396 19.870608,-5.9842 27.668701,0 0.966142,0 1.743912,0.2481 1.743879,0.5564 -1.13e-4,0.3082 -0.777704,0.5564 -1.743894,0.5564 -8.652975,-5.9842 -17.727741,-7.5396 -27.668686,0 -0.769765,0.5838 -1.743895,-0.2481 -1.743879,-0.5564 z"/></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.War',
        size: {
            width: 140,
            height: 112,
        },
        attrs: {
            circle: {
                fill: '#FFFFFF',
                stroke: '#1A1A1A',
            },
            path: {
                fill: '#FFFFFF',
                stroke: '#1A1A1A',
            },
            text: {
                fill: '#1A1A1A',
                'ref-x': '105%',
                'ref-y': '90%',
            },
            '.linkHandle circle': {
                'ref-x': '110%',
                'ref-y': '50%',
                fill: '#000000',
            },
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
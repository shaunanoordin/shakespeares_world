'use strict';

var svgPanZoom = require('svg-pan-zoom');

require('./transcribe.module.js')
    .directive('markingSurface', markingSurface);

/**
 * @ngInject
 */
function markingSurface(transcribeUtils) {
    var directive = {
        restrict: 'A',
        controller: markingSurfaceController,
        controllerAs: 'vm',
        link: markingSurfaceLink
    };
    return directive;

    function markingSurfaceController($scope, $element) {

        var vm = this;
        var svg = $element[0];

        var panZoom = svgPanZoom(svg, {
            fit: false,
            minZoom: 0.2,
            zoomScaleSensitivity: 0.05
        });

        vm.$centre = centre;
        vm.$rotate = rotate;

        function centre() {
            panZoom.updateBBox();
            panZoom.resize();
            panZoom.center();
            panZoom.fit();
        }

        // TODO: Fix so that centre and rotate work together normally - centre
        // doesn't work when rotated.
        function rotate(theta) {
            var container;
            var rotate;
            var transforms;
            var centre;

            container = svg.getElementsByClassName('rotate-container')[0];
            centre = {
                x: container.getBBox().width / 2,
                y: container.getBBox().height / 2
            };
            rotate = svg.createSVGTransform().setRotate(theta, centre.x, centre.y);
            transforms = container.transform.baseVal;
            transforms.appendItem(rotate);
        }

    }

    function markingSurfaceLink(scope, element, attr, vm) {

        scope.$on('centre', triggerCentre);
        scope.$on('rotate', triggerRotate);

        function triggerCentre(event, data) {
            vm.$centre();
        }

        function triggerRotate(event, data) {
            vm.$rotate(data);
        }

    }

}

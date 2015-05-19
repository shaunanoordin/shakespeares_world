'use strict';

var Hammer = require('hammerjs');

require('./annotations.module.js')
    .directive('imageAnnotation', imageAnnotation);

// @ngInject
function imageAnnotation($rootScope, Annotations) {
    var directive = {
        controller: ['$scope', imageAnnotationController],
        link: imageAnnotationLink,
        replace: true,
        restrict: 'A',
        scope: {
            data: '='
        },
        templateUrl: 'annotations/image.html',
    };
    return directive;

    // @ngInject
    function imageAnnotationController($scope) {
        var vm = this;
        vm.destroy = destroy;

        function destroy() {
            Annotations.destroy($scope.data);
        }
    }

    // @ngInject
    function imageAnnotationLink(scope, element, attrs, ctrl) {
        var hammer = new Hammer(element[0]);
        hammer.on('tap', openContextMenu);
        scope.$on('$destroy', destroy);

        function destroy() {
            hammer.destroy();
        }

        function openContextMenu(event) {
            var contextMenuData = {
                event: event,
                menuOptions: [{ name: 'Delete', action: ctrl.destroy }]
            };
            $rootScope.$broadcast('contextMenu:open', contextMenuData);
        }
    }

}

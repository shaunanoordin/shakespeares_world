'use strict';

require('./modals.module.js')
    .constant('ModalsConstants', {
        expired: {
            templateUrl: 'modals/expired.html',
            controller: 'ExpiredController',
            controllerAs: 'vm',
            size: 'md',
            windowClass: 'expired-modal'
        },
        next: {
            templateUrl: 'modals/transcribe-next.html',
            controller: 'TranscribeNextController',
            controllerAs: 'vm',
            size: 'md',
            backdrop: 'static',
            windowClass: 'next-modal'
        },
        signIn: {
            templateUrl: 'modals/sign-in.html',
            controller: 'SignInController',
            controllerAs: 'vm',
            size: 'md',
            backdrop: 'static',
            windowClass: 'signin-modal'
        },
        talk: {
            templateUrl: 'modals/talk.html',
            controller: 'TalkController',
            controllerAs: 'vm',
            size: 'md',
            windowClass: 'talk-modal'
        },
        tutorial: {
            templateUrl: 'modals/tutorial.html',
            controller: 'TutorialController',
            controllerAs: 'vm',
            size: 'md',
            windowClass: 'tutorial-modal'
        },
        variants: {
            templateUrl: 'modals/variants.html',
            controller: 'VariantsController',
            controllerAs: 'vm',
            size: 'md',
            windowClass: 'variants-modal'
        }
    });

/**
 *
 * config
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-09-30
 * @update 2014-09-30
 */

requirejs.config({
  'baseUrl': './VenomousGale',
  'paths': {
    'app': './PoisonSting'
  },
  'shim': {
    'jquery': ['jquery-2.1.1']
  }
});

requirejs(['PlagueWard/index']);
/**
 * Vue-CodeMirror
 * @author Surmon.me
 */

var CodeMirror = require('codemirror/lib/codemirror.js')
var CmComponent = require('./codemirror.vue')
if (typeof global.window != 'undefined') window.CodeMirror = CodeMirror
var Codemirror = {
  CodeMirror: CodeMirror,
  codemirror: CmComponent,
  install: function(Vue) {
    Vue.component('codemirror', CmComponent)
  }
}

module.exports = Codemirror

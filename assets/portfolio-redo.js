"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('portfolio-redo/app', ['exports', 'ember', 'portfolio-redo/resolver', 'ember-load-initializers', 'portfolio-redo/config/environment'], function (exports, _ember, _portfolioRedoResolver, _emberLoadInitializers, _portfolioRedoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _portfolioRedoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _portfolioRedoConfigEnvironment['default'].podModulePrefix,
    Resolver: _portfolioRedoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _portfolioRedoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("portfolio-redo/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define('portfolio-redo/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'portfolio-redo/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _portfolioRedoConfigEnvironment) {

  var name = _portfolioRedoConfigEnvironment['default'].APP.name;
  var version = _portfolioRedoConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('portfolio-redo/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('portfolio-redo/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('portfolio-redo/components/filter-tag', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',
    classNames: ['filter-tag'],
    classNameBindings: ['isActive:active'],
    currentlyActiveFilter: null,
    isActive: _ember['default'].computed('currentlyActiveFilter', function () {
      var currentActive = this.get('currentlyActiveFilter');
      return this === this.get('currentlyActiveFilter');
    }),
    click: function click() {
      this.sendAction('action', this);
    }
  });
});
define("portfolio-redo/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('portfolio-redo/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define("portfolio-redo/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("portfolio-redo/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("portfolio-redo/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("portfolio-redo/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("portfolio-redo/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("portfolio-redo/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("portfolio-redo/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('portfolio-redo/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("portfolio-redo/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("portfolio-redo/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('portfolio-redo/components/materialize-badge', ['exports', 'ember', 'portfolio-redo/components/md-badge'], function (exports, _ember, _portfolioRedoComponentsMdBadge) {
  exports['default'] = _portfolioRedoComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-button-submit', ['exports', 'ember', 'portfolio-redo/components/md-btn-submit'], function (exports, _ember, _portfolioRedoComponentsMdBtnSubmit) {
  exports['default'] = _portfolioRedoComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-button', ['exports', 'ember', 'portfolio-redo/components/md-btn'], function (exports, _ember, _portfolioRedoComponentsMdBtn) {
  exports['default'] = _portfolioRedoComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-card-action', ['exports', 'ember', 'portfolio-redo/components/md-card-action'], function (exports, _ember, _portfolioRedoComponentsMdCardAction) {
  exports['default'] = _portfolioRedoComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-card-content', ['exports', 'ember', 'portfolio-redo/components/md-card-content'], function (exports, _ember, _portfolioRedoComponentsMdCardContent) {
  exports['default'] = _portfolioRedoComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-card-panel', ['exports', 'ember', 'portfolio-redo/components/md-card-panel'], function (exports, _ember, _portfolioRedoComponentsMdCardPanel) {
  exports['default'] = _portfolioRedoComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-card-reveal', ['exports', 'ember', 'portfolio-redo/components/md-card-reveal'], function (exports, _ember, _portfolioRedoComponentsMdCardReveal) {
  exports['default'] = _portfolioRedoComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-card', ['exports', 'ember', 'portfolio-redo/components/md-card'], function (exports, _ember, _portfolioRedoComponentsMdCard) {
  exports['default'] = _portfolioRedoComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-checkbox', ['exports', 'ember', 'portfolio-redo/components/md-check'], function (exports, _ember, _portfolioRedoComponentsMdCheck) {
  exports['default'] = _portfolioRedoComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-checkboxes', ['exports', 'ember', 'portfolio-redo/components/md-checks'], function (exports, _ember, _portfolioRedoComponentsMdChecks) {
  exports['default'] = _portfolioRedoComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-collapsible-card', ['exports', 'ember', 'portfolio-redo/components/md-card-collapsible'], function (exports, _ember, _portfolioRedoComponentsMdCardCollapsible) {
  exports['default'] = _portfolioRedoComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-collapsible', ['exports', 'ember', 'portfolio-redo/components/md-collapsible'], function (exports, _ember, _portfolioRedoComponentsMdCollapsible) {
  exports['default'] = _portfolioRedoComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-copyright', ['exports', 'ember', 'portfolio-redo/components/md-copyright'], function (exports, _ember, _portfolioRedoComponentsMdCopyright) {
  exports['default'] = _portfolioRedoComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-date-input', ['exports', 'ember', 'portfolio-redo/components/md-input-date'], function (exports, _ember, _portfolioRedoComponentsMdInputDate) {
  exports['default'] = _portfolioRedoComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-input-field', ['exports', 'ember', 'portfolio-redo/components/md-input-field'], function (exports, _ember, _portfolioRedoComponentsMdInputField) {
  exports['default'] = _portfolioRedoComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-input', ['exports', 'ember', 'portfolio-redo/components/md-input'], function (exports, _ember, _portfolioRedoComponentsMdInput) {
  exports['default'] = _portfolioRedoComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-loader', ['exports', 'ember', 'portfolio-redo/components/md-loader'], function (exports, _ember, _portfolioRedoComponentsMdLoader) {
  exports['default'] = _portfolioRedoComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-modal', ['exports', 'ember', 'portfolio-redo/components/md-modal'], function (exports, _ember, _portfolioRedoComponentsMdModal) {
  exports['default'] = _portfolioRedoComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-navbar', ['exports', 'ember', 'portfolio-redo/components/md-navbar'], function (exports, _ember, _portfolioRedoComponentsMdNavbar) {
  exports['default'] = _portfolioRedoComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-pagination', ['exports', 'ember', 'portfolio-redo/components/md-pagination'], function (exports, _ember, _portfolioRedoComponentsMdPagination) {
  exports['default'] = _portfolioRedoComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-parallax', ['exports', 'ember', 'portfolio-redo/components/md-parallax'], function (exports, _ember, _portfolioRedoComponentsMdParallax) {
  exports['default'] = _portfolioRedoComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-radio', ['exports', 'ember', 'portfolio-redo/components/md-radio'], function (exports, _ember, _portfolioRedoComponentsMdRadio) {
  exports['default'] = _portfolioRedoComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-radios', ['exports', 'ember', 'portfolio-redo/components/md-radios'], function (exports, _ember, _portfolioRedoComponentsMdRadios) {
  exports['default'] = _portfolioRedoComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-range', ['exports', 'ember', 'portfolio-redo/components/md-range'], function (exports, _ember, _portfolioRedoComponentsMdRange) {
  exports['default'] = _portfolioRedoComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-select', ['exports', 'ember', 'portfolio-redo/components/md-select'], function (exports, _ember, _portfolioRedoComponentsMdSelect) {
  exports['default'] = _portfolioRedoComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-switch', ['exports', 'ember', 'portfolio-redo/components/md-switch'], function (exports, _ember, _portfolioRedoComponentsMdSwitch) {
  exports['default'] = _portfolioRedoComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-switches', ['exports', 'ember', 'portfolio-redo/components/md-switches'], function (exports, _ember, _portfolioRedoComponentsMdSwitches) {
  exports['default'] = _portfolioRedoComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-tabs-tab', ['exports', 'ember', 'portfolio-redo/components/md-tab'], function (exports, _ember, _portfolioRedoComponentsMdTab) {
  exports['default'] = _portfolioRedoComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-tabs', ['exports', 'ember', 'portfolio-redo/components/md-tabs'], function (exports, _ember, _portfolioRedoComponentsMdTabs) {
  exports['default'] = _portfolioRedoComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/materialize-textarea', ['exports', 'ember', 'portfolio-redo/components/md-textarea'], function (exports, _ember, _portfolioRedoComponentsMdTextarea) {
  exports['default'] = _portfolioRedoComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('portfolio-redo/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, _emberCliMaterializeComponentsMdBadge) {
  exports['default'] = _emberCliMaterializeComponentsMdBadge['default'];
});
define('portfolio-redo/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, _emberCliMaterializeComponentsMdBtnDropdown) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnDropdown['default'];
});
define('portfolio-redo/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, _emberCliMaterializeComponentsMdBtnSubmit) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnSubmit['default'];
});
define('portfolio-redo/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _emberCliMaterializeComponentsMdBtn) {
  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'];
});
define('portfolio-redo/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, _emberCliMaterializeComponentsMdCardAction) {
  exports['default'] = _emberCliMaterializeComponentsMdCardAction['default'];
});
define('portfolio-redo/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, _emberCliMaterializeComponentsMdCardCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCardCollapsible['default'];
});
define('portfolio-redo/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, _emberCliMaterializeComponentsMdCardContent) {
  exports['default'] = _emberCliMaterializeComponentsMdCardContent['default'];
});
define('portfolio-redo/components/md-card-extended', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _emberCliMaterializeComponentsMdCard) {
  //import layout from '/templates/components/md-card';

  exports['default'] = _emberCliMaterializeComponentsMdCard['default'].extend({
    classNames: ['md-card-extended'],
    mouseEnter: function mouseEnter(e) {
      e.target.click();
    },
    mouseLeave: function mouseLeave(e) {
      if (this.get('holdVeil') === undefined) {
        Ember.$(e.target).find('.activator').click();
      }
      return false;
    }
  });
});
define('portfolio-redo/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, _emberCliMaterializeComponentsMdCardPanel) {
  exports['default'] = _emberCliMaterializeComponentsMdCardPanel['default'];
});
define('portfolio-redo/components/md-card-reveal-extended', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _emberCliMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberCliMaterializeComponentsMdCardReveal['default'].extend({
    classNames: ['md-card-reveal-extended']
  });
});
define('portfolio-redo/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _emberCliMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberCliMaterializeComponentsMdCardReveal['default'];
});
define('portfolio-redo/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _emberCliMaterializeComponentsMdCard) {
  exports['default'] = _emberCliMaterializeComponentsMdCard['default'];
});
define('portfolio-redo/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, _emberCliMaterializeComponentsMdCheck) {
  exports['default'] = _emberCliMaterializeComponentsMdCheck['default'];
});
define('portfolio-redo/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, _emberCliMaterializeComponentsMdChecksCheck) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdChecksCheck['default'];
    }
  });
});
define('portfolio-redo/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, _emberCliMaterializeComponentsMdChecks) {
  exports['default'] = _emberCliMaterializeComponentsMdChecks['default'];
});
define('portfolio-redo/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, _emberCliMaterializeComponentsMdCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCollapsible['default'];
});
define('portfolio-redo/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, _emberCliMaterializeComponentsMdCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdCollection['default'];
    }
  });
});
define('portfolio-redo/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, _emberCliMaterializeComponentsMdCopyright) {
  exports['default'] = _emberCliMaterializeComponentsMdCopyright['default'];
});
define('portfolio-redo/components/md-default-collection-header', ['exports', 'ember-cli-materialize/components/md-default-collection-header'], function (exports, _emberCliMaterializeComponentsMdDefaultCollectionHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdDefaultCollectionHeader['default'];
    }
  });
});
define('portfolio-redo/components/md-default-column-header', ['exports', 'ember-cli-materialize/components/md-default-column-header'], function (exports, _emberCliMaterializeComponentsMdDefaultColumnHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdDefaultColumnHeader['default'];
    }
  });
});
define('portfolio-redo/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, _emberCliMaterializeComponentsMdFixedBtn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtn['default'];
    }
  });
});
define('portfolio-redo/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, _emberCliMaterializeComponentsMdFixedBtns) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtns['default'];
    }
  });
});
define('portfolio-redo/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, _emberCliMaterializeComponentsMdInputDate) {
  exports['default'] = _emberCliMaterializeComponentsMdInputDate['default'];
});
define('portfolio-redo/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, _emberCliMaterializeComponentsMdInputField) {
  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'];
});
define('portfolio-redo/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, _emberCliMaterializeComponentsMdInput) {
  exports['default'] = _emberCliMaterializeComponentsMdInput['default'];
});
define('portfolio-redo/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, _emberCliMaterializeComponentsMdLoader) {
  exports['default'] = _emberCliMaterializeComponentsMdLoader['default'];
});
define('portfolio-redo/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, _emberCliMaterializeComponentsMdModalContainer) {
  exports['default'] = _emberCliMaterializeComponentsMdModalContainer['default'];
});
define('portfolio-redo/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, _emberCliMaterializeComponentsMdModal) {
  exports['default'] = _emberCliMaterializeComponentsMdModal['default'];
});
define('portfolio-redo/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, _emberCliMaterializeComponentsMdNavbar) {
  exports['default'] = _emberCliMaterializeComponentsMdNavbar['default'];
});
define('portfolio-redo/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, _emberCliMaterializeComponentsMdPagination) {
  exports['default'] = _emberCliMaterializeComponentsMdPagination['default'];
});
define('portfolio-redo/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, _emberCliMaterializeComponentsMdParallax) {
  exports['default'] = _emberCliMaterializeComponentsMdParallax['default'];
});
define('portfolio-redo/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, _emberCliMaterializeComponentsMdRadio) {
  exports['default'] = _emberCliMaterializeComponentsMdRadio['default'];
});
define('portfolio-redo/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, _emberCliMaterializeComponentsMdRadiosRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdRadiosRadio['default'];
    }
  });
});
define('portfolio-redo/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, _emberCliMaterializeComponentsMdRadios) {
  exports['default'] = _emberCliMaterializeComponentsMdRadios['default'];
});
define('portfolio-redo/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, _emberCliMaterializeComponentsMdRange) {
  exports['default'] = _emberCliMaterializeComponentsMdRange['default'];
});
define('portfolio-redo/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, _emberCliMaterializeComponentsMdSelect) {
  exports['default'] = _emberCliMaterializeComponentsMdSelect['default'];
});
define('portfolio-redo/components/md-slider', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['slider', 'md-slider'],
    init: function init() {
      this._super.apply(this, arguments);
    },
    didInsertElement: function didInsertElement() {
      this.$().slider({ indicators: false, transition: 300, interval: 2000 });
    },
    click: function click() {
      this.$().slider('pause');
      this.$().slider('next');
    },
    doubleClick: function doubleClick() {
      this.$().slider('start');
    }
  });
});
define('portfolio-redo/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, _emberCliMaterializeComponentsMdSwitch) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitch['default'];
});
define('portfolio-redo/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, _emberCliMaterializeComponentsMdSwitchesSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdSwitchesSwitch['default'];
    }
  });
});
define('portfolio-redo/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, _emberCliMaterializeComponentsMdSwitches) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitches['default'];
});
define('portfolio-redo/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, _emberCliMaterializeComponentsMdTab) {
  exports['default'] = _emberCliMaterializeComponentsMdTab['default'];
});
define('portfolio-redo/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, _emberCliMaterializeComponentsMdTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTableCol['default'];
    }
  });
});
define('portfolio-redo/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, _emberCliMaterializeComponentsMdTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTable['default'];
    }
  });
});
define('portfolio-redo/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, _emberCliMaterializeComponentsMdTabs) {
  exports['default'] = _emberCliMaterializeComponentsMdTabs['default'];
});
define('portfolio-redo/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, _emberCliMaterializeComponentsMdTextarea) {
  exports['default'] = _emberCliMaterializeComponentsMdTextarea['default'];
});
define('portfolio-redo/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('portfolio-redo/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('portfolio-redo/components/nav-keyboard', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('portfolio-redo/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('portfolio-redo/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('portfolio-redo/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('portfolio-redo/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    notIndexRoute: _ember['default'].computed('currentRouteName', function () {
      var currentRoute = this.get('currentRouteName');
      return currentRoute !== 'index';
    })
  });
});
define('portfolio-redo/controllers/projects', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    queryParams: ['tech'],
    tech: null,

    activeFilter: null,

    filteredProjects: _ember['default'].computed('tech', 'model', function () {
      var tech = this.get('tech');
      var projects = this.get('model');
      var res = [];

      if (tech) {

        var filter = projects.filter(function (el, index) {
          var filterTech = el.tech.filterBy('name', tech);
          return filterTech.length > 0;
        });

        return filter;
      } else {

        return projects;
      }
    }),

    uniqueTechs: _ember['default'].computed('model', function () {
      var projects = this.get('model');
      var techStack = projects.mapBy('tech');
      var techList = [].concat.apply([], techStack);
      return techList.uniqBy('name');

      //console.log("tech: " + JSON.stringify(techList));
    }),

    actions: {
      changeFilter: function changeFilter(el) {

        this.set('activeFilter', el);
      },
      setFilter: function setFilter() {
        console.log("set filter in controller");
      }
    }
  });
});
define('portfolio-redo/controllers/talks', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  exports['default'] = _ember['default'].Controller.extend({
    talkItems: computed('model.[]', function () {
      var model = this.get('model');
      return model.map(function (talk) {
        if (talk.status === "upcoming") {
          talk.isUpcoming = true;
        }
        if (talk.type === "conference") {
          talk.isConference = true;
        }
        return talk;
      });
    }),
    talkSort: ['location:desc'],
    talks: computed.sort('talkItems', 'talkSort')
  });
});
define('portfolio-redo/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/bw-compat-icon', ['exports', 'ember-cli-materialize/helpers/bw-compat-icon'], function (exports, _emberCliMaterializeHelpersBwCompatIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeHelpersBwCompatIcon['default'];
    }
  });
  Object.defineProperty(exports, 'bwCompatIcon', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeHelpersBwCompatIcon.bwCompatIcon;
    }
  });
});
define('portfolio-redo/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('portfolio-redo/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('portfolio-redo/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('portfolio-redo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('portfolio-redo/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('portfolio-redo/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('portfolio-redo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'portfolio-redo/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _portfolioRedoConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_portfolioRedoConfigEnvironment['default'].APP.name, _portfolioRedoConfigEnvironment['default'].APP.version)
  };
});
define('portfolio-redo/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('portfolio-redo/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('portfolio-redo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('portfolio-redo/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardInitializersEmberKeyboardFirstResponderInputs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define('portfolio-redo/initializers/export-application-global', ['exports', 'ember', 'portfolio-redo/config/environment'], function (exports, _ember, _portfolioRedoConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_portfolioRedoConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _portfolioRedoConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_portfolioRedoConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('portfolio-redo/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("portfolio-redo/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('portfolio-redo/initializers/md-settings', ['exports', 'portfolio-redo/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _portfolioRedoConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize() {
    var materializeDefaults = _portfolioRedoConfigEnvironment['default'].materializeDefaults;

    var application = arguments[1] || arguments[0];

    if (window && window.validate_field) {
      window.validate_field = function () {};
    }

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});
define('portfolio-redo/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('portfolio-redo/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('portfolio-redo/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("portfolio-redo/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('portfolio-redo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('portfolio-redo/router', ['exports', 'ember', 'portfolio-redo/config/environment'], function (exports, _ember, _portfolioRedoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _portfolioRedoConfigEnvironment['default'].locationType,
    rootURL: _portfolioRedoConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('projects');
    this.route('linkedin');
    this.route('talks');
  });

  exports['default'] = Router;
});
define('portfolio-redo/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('portfolio-redo/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {}
  });
});
define('portfolio-redo/routes/linkedin', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("portfolio-redo/routes/projects", ["exports", "ember"], function (exports, _ember) {

  var mockModel = [{ "id": 1,
    "name": "Software Development @ Earlham Institute, Norwich (UK)",
    "param": "my",
    "imgUrl": "assets/hands.jpg",
    "desc": "Redesign and development of the project website based on Ghost CMS at biojs.net. Development of an user interface for exploring human SNP data using BioJS components, D3.js, Ember.js, Express.js and MongoDB. Organisation of JavaScript Workshops. Org Administration of the BioJS project in Google Summer of Code.",
    "slides": [{ "imgUrl": "/abc2.jpg",
      "alt": "Anita Borg Celebration JS Intro Snapshot",
      "caption": ""
    }, { "imgUrl": "/biojs.jpg",
      "alt": "BioJS Website Screenshot",
      "caption": ""
    }, { "imgUrl": "/abc2.jpg",
      "alt": "Anita Borg Celebration JS Intro Snapshot",
      "caption": ""
    }, { "imgUrl": "/tgac_outside.jpg",
      "alt": "Overview Earlham Insitute, Norwich, UK",
      "caption": ""
    }],
    "tech": [{ "name": "ember.js" }, { "name": "d3" }, { "name": "express.js" }, { "name": "mongodb" }, { "name": "ghostcms" }, { "name": "scss" }, { "name": "mentoring" }, { "name": "active" }]
  }, { "id": 2,
    "name": "Front End Development @ PickPete.com",
    "slides": [{ "imgUrl": "/pete1.jpg",
      "alt": "Pick Pete Website Screenshot",
      "caption": ""
    }],
    "desc": "User Interface Development of the Ember.js Web Application for pickpete.com.",
    "tech": [{ "name": "ember.js" }, { "name": "scss" }, { "name": "past" }]
  }, { "id": 3,
    "name": "Front End Development @ Voestalpine AG",
    "param": "my",
    "imgUrl": "assets/hands.jpg",
    "desc": "Development of an User Interface Addon for Ember.js Applications.",
    "tech": [{ "name": "ember.js" }, { "name": "scss" }, { "name": "past" }]
  }, { "id": 4,
    "name": "Front End Development & A/B Testing @ Mobility Media GmbH",
    "imgUrl": "assets/hands.jpg",
    "desc": "Development of user interface elements and landing pages for drivelog.de. A/B testing of new website features and conversion tracking. Content management in Liferay CMS.",
    "slides": [{ "imgUrl": "/dl2.png",
      "alt": "Screenshot Drivelog Landing Page B2B",
      "caption": ""
    }, { "imgUrl": "/dl1.png",
      "alt": "Screenshot Drivelog Main Page 2015",
      "caption": ""
    }],
    "tech": [{ "name": "jquery" }, { "name": "scss" }, { "name": "a/b" }, { "name": "past" }]
  }, { "id": 5,
    "name": "Front End Development @ Instinkte",
    "imgUrl": "assets/hands.jpg",
    "desc": "Development of user interface for instinkte.eu  based on Wordpress CMS.",
    "tech": [{ "name": "jquery" }, { "name": "wordpress" }, { "name": "less" }, { "name": "past" }]
  }, { "id": 6,
    "name": "Front End Development of Personal Web Comic Project 'Dusk'",
    "imgUrl": "assets/hands.jpg",
    "desc": "Development, Art and Design for my personal web comic project at www.dusk-comic.com",
    "slides": [{ "imgUrl": "/jugendkim-cut.jpg",
      "alt": "Character of Webcomic Dusk - Jugendstil",
      "caption": ""
    }, { "imgUrl": "/dancedemoex.001.png",
      "alt": "Demo Sketch Dusk Webcomic",
      "caption": ""
    }],
    "tech": [{ "name": "ember.js" }, { "name": "scss" }, { "name": "design" }, { "name": "art" }, { "name": "active" }]
  }, { "id": 7,
    "name": "Mentoring @ OpenTechSchool Berlin (Germany)",
    "imgUrl": "assets/hands.jpg",
    "desc": "Co-mentoring learners at weekly front end co-learning meetups.",
    "slides": [{ "imgUrl": "/ots.jpeg",
      "alt": "OpenTechSchool Berlin Colearning Snapshot",
      "caption": ""
    }],
    "tech": [{ "name": "mentoring" }, { "name": "scss" }, { "name": "past" }]
  }];
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return mockModel;
    }
  });
});
define("portfolio-redo/routes/talks", ["exports", "ember"], function (exports, _ember) {

  var mockModel = [{ "id": 1,
    "event": "EmberConf 2017",
    "type": "conference",
    "status": "done",
    "title": "Animate the Web with Ember.js",
    "date": "2017/03/28",
    "imgUrl": "batguy.png",
    "videoUrl": "https://www.youtube.com/watch?v=wFJPIjRTIVU",
    "slidesUrl": "https://jessica-jordan.github.io/animate-the-web-with-emberjs/#/",
    "desc": "Were you a fan of animated cartoons as a kid, and wondered if one day you could create your own? Here's the great news: you can! Using open web standards and Ember.js you're able to create frame-by-frame animations—and even to make them interactive! This talk will explain why open web standards are more important than ever for creating animated content. We'll see how we can leverage the power of HTML5 Canvas in Ember efficiently and how to make animations interactive with the support of actions.",
    "location": "Portland, OR, US"
  }, { "id": 2,
    "event": "jsDay 2017",
    "type": "conference",
    "status": "done",
    "title": "Animate the Web with Ember.js",
    "date": "2017/05/10",
    "imgUrl": "/90sinternet.gif",
    "slidesUrl": "https://jessica-jordan.github.io/animate-the-web-with-emberjs/#/",
    "desc": "Were you a fan of animated cartoons as a kid, and wondered if one day you could create your own? Here's the great news: you can! Using open web standards and Ember.js you're able to create frame-by-frame animations—and even to make them interactive! This talk will explain why open web standards are more important than ever for creating animated content. We'll see how we can leverage the power of HTML5 Canvas in Ember efficiently and how to make animations interactive with the support of actions.",
    "location": "Verona, Italy"
  }, { "id": 3,
    "event": "Front 2017",
    "title": "Animate the Web with Ember.js",
    "type": "conference",
    "status": "done",
    "date": "2017/06/24",
    "imgUrl": "/kim.gif",
    "videoUrl": "https://www.youtube.com/watch?v=n-z7En2O9mQ",
    "slidesUrl": "https://jessica-jordan.github.io/animate-the-web-with-emberjs/#/",
    "desc": "Were you a fan of animated cartoons as a kid, and wondered if one day you could create your own? Here's the great news: you can! Using open web standards and Ember.js you're able to create frame-by-frame animations—and even to make them interactive! This talk will explain why open web standards are more important than ever for creating animated content. We'll see how we can leverage the power of HTML5 Canvas in Ember efficiently and how to make animations interactive with the support of actions.",
    "location": "Madrid, Spain"
  }, { "id": 4,
    "event": "EmberCamp London 2017",
    "title": "The Modern State of Web Components - A Glimmer of Hope",
    "date": "2017/07/11",
    "type": "conference",
    "status": "done",
    "imgUrl": "/glimmerpic.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=OzFgDBJcWuU",
    "slidesUrl": "https://speakerdeck.com/jessicajordanjs/the-modern-state-of-web-components-a-glimmer-of-hope",
    "desc": "The browser support of web components has been getting increasingly better over the past few years and besides other component libraries, including Polymer or X-Tag, the Ember community presents its own new library - Glimmer.js - enabling you to create easy-to-use web components today. In this talk we will cover browser support, polyfilling and how Glimmer.js can help us to create reusable components for our web apps today. Alongside a component demo we will see how we can build and ship our Glimmer based web components and have a look at promising API developments for the future.",
    "location": "London, United Kingdom"
  }, { "id": 5,
    "event": "RuhrJS 2017",
    "title": "Animate the Web with Ember.js",
    "date": "2017/10/14",
    "type": "conference",
    "status": "upcoming",
    "imgUrl": "/horse.gif",
    "confUrl": "https://ruhrjs.de/speakers/jessica-jordan",
    "desc": "Were you a fan of animated cartoons as a kid, and wondered if one day you could create your own? Here's the great news: you can! Using open web standards and Ember.js you're able to create frame-by-frame animations—and even to make them interactive! This talk will explain why open web standards are more important than ever for creating animated content. We'll see how we can leverage the power of HTML5 Canvas in Ember efficiently and how to make animations interactive with the support of actions.",
    "location": "Bochum, Germany"
  }, { "id": 6,
    "event": "EmberFest 2017",
    "title": "Testing against Time - Meaningful testing when timing matters",
    "date": "2017/10/13",
    "type": "conference",
    "status": "upcoming",
    "confUrl": "https://emberfest.eu/schedule/#jessica-jordan",
    "imgUrl": "/athlete.gif",
    "location": "Berlin, Germany"
  }, { "id": 7,
    "event": "International JavaScript Conference 2017",
    "title": "A Glimmer of Hope - Creating Modern Web Components with Glimmer.js",
    "date": "2017/10/15",
    "type": "conference",
    "status": "upcoming",
    "confUrl": "https://javascript-conference.com/speaker/jessica-jordan/",
    "imgUrl": "/webcomponents.svg",
    "desc": "The browser support of web components has been getting increasingly better over the past few years and besides other component libraries, including Polymer or X-Tag, the Ember community presents its own new library - Glimmer.js - enabling you to create easy-to-use web components today. In this talk we will cover browser support, polyfilling and how Glimmer.js can help us to create reusable components for our web apps today. Alongside a component demo we will see how we can build and ship our Glimmer based web components and have a look at promising API developments for the future.",
    "location": "Munich, Germany"
  }, { "id": 8,
    "event": "Ember London Meetup November 2017",
    "title": "Leveraging HTML5 animations using CSS3, Ember.js and friends",
    "date": "2017/11/10",
    "type": "meetup",
    "status": "done",
    "imgUrl": "/jugendkim-cut.jpg",
    "videoUrl": "https://pusher.com/sessions/meetup/ember-london/leveraging-html5-animations-using-css3-emberjs-and-friends",
    "location": "London, United Kingdom"
  }];
  exports["default"] = _ember["default"].Route.extend({
    model: function model() {
      return mockModel;
    }
  });
});
define('portfolio-redo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('portfolio-redo/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _emberKeyboardServicesKeyboard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardServicesKeyboard['default'];
    }
  });
});
define("portfolio-redo/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('portfolio-redo/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, _emberCliMaterializeServicesMdSettings) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeServicesMdSettings['default'];
    }
  });
});
define('portfolio-redo/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define("portfolio-redo/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 10
            },
            "end": {
              "line": 5,
              "column": 71
            }
          },
          "moduleName": "portfolio-redo/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Jessica Jordan");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 8
              },
              "end": {
                "line": 11,
                "column": 8
              }
            },
            "moduleName": "portfolio-redo/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "material-icons  medium");
            var el2 = dom.createTextNode("keyboard_arrow_right");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 12,
              "column": 6
            }
          },
          "moduleName": "portfolio-redo/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["classNames", "default-text center back-navigation"], 0, null, ["loc", [null, [9, 8], [11, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 13
            },
            "end": {
              "line": 17,
              "column": 74
            }
          },
          "moduleName": "portfolio-redo/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Jessica Jordan");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 8
              },
              "end": {
                "line": 21,
                "column": 8
              }
            },
            "moduleName": "portfolio-redo/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1, "class", "material-icons  medium");
            var el2 = dom.createTextNode("keyboard_arrow_right");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 6
            },
            "end": {
              "line": 22,
              "column": 6
            }
          },
          "moduleName": "portfolio-redo/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["classNames", "default-text right back-navigation"], 0, null, ["loc", [null, [19, 8], [21, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container main-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row no-margin");
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("header");
        dom.setAttribute(el3, "class", "main-header hide-on-med-and-up");
        var el4 = dom.createTextNode("\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s12");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n     ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n     ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col center s12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("     ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n   \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("header");
        dom.setAttribute(el3, "class", "col s12 main-header desktop hide-on-small-only");
        var el4 = dom.createTextNode("\n         ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1, 1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element3, 0, 0);
        morphs[3] = dom.createMorphAt(element3, 2, 2);
        morphs[4] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["classNames", "default-text"], 0, null, ["loc", [null, [5, 10], [5, 83]]]], ["block", "if", [["get", "notIndexRoute", ["loc", [null, [8, 12], [8, 25]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [8, 6], [12, 13]]]], ["block", "link-to", ["index"], ["classNames", "default-text"], 2, null, ["loc", [null, [17, 13], [17, 86]]]], ["block", "if", [["get", "notIndexRoute", ["loc", [null, [18, 12], [18, 25]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [18, 6], [22, 13]]]], ["content", "liquid-outlet", ["loc", [null, [26, 0], [26, 17]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("portfolio-redo/templates/components/filter-tag", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/components/filter-tag.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("portfolio-redo/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/components/labeled-radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [1, 0], [9, 17]]], 0, 0], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("portfolio-redo/templates/components/md-card-extended", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "portfolio-redo/templates/components/md-card-extended.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element2, 'class');
          morphs[1] = dom.createAttrMorph(element3, 'src');
          morphs[2] = dom.createAttrMorph(element3, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["card-image ", ["subexpr", "if", [["get", "activator", ["loc", [null, [2, 30], [2, 39]]], 0, 0, 0, 0], "waves-effect"], [], ["loc", [null, [2, 25], [2, 56]]], 0, 0], " ", ["subexpr", "if", [["get", "activator", ["loc", [null, [2, 62], [2, 71]]], 0, 0, 0, 0], "waves-block"], [], ["loc", [null, [2, 57], [2, 87]]], 0, 0], " ", ["subexpr", "if", [["get", "activator", ["loc", [null, [2, 93], [2, 102]]], 0, 0, 0, 0], "waves-light"], [], ["loc", [null, [2, 88], [2, 118]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "image", ["loc", [null, [3, 16], [3, 21]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "activator", ["loc", [null, [3, 37], [3, 46]]], 0, 0, 0, 0], "activator"], [], ["loc", [null, [3, 32], [3, 60]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "portfolio-redo/templates/components/md-card-extended.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("i");
          dom.setAttribute(el3, "class", "material-icons large");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'class');
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["card-image center ", ["subexpr", "if", [["get", "activator", ["loc", [null, [7, 37], [7, 46]]], 0, 0, 0, 0], "waves-effect"], [], ["loc", [null, [7, 32], [7, 63]]], 0, 0], " ", ["subexpr", "if", [["get", "activator", ["loc", [null, [7, 69], [7, 78]]], 0, 0, 0, 0], "waves-block"], [], ["loc", [null, [7, 64], [7, 94]]], 0, 0], " ", ["subexpr", "if", [["get", "activator", ["loc", [null, [7, 100], [7, 109]]], 0, 0, 0, 0], "waves-light"], [], ["loc", [null, [7, 95], [7, 125]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "class", ["concat", ["icon-tile ", ["subexpr", "if", [["get", "activator", ["loc", [null, [8, 31], [8, 40]]], 0, 0, 0, 0], "activator"], [], ["loc", [null, [8, 26], [8, 54]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "icon", ["loc", [null, [9, 38], [9, 46]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/components/md-card-extended.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "image", ["loc", [null, [1, 6], [1, 11]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "if", [["get", "icon", ["loc", [null, [6, 6], [6, 10]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [6, 0], [12, 7]]]], ["content", "yield", ["loc", [null, [13, 0], [13, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("portfolio-redo/templates/components/md-card-reveal-extended", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 115
            }
          },
          "moduleName": "portfolio-redo/templates/components/md-card-reveal-extended.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "parentView.title", ["loc", [null, [5, 95], [5, 115]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/components/md-card-reveal-extended.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createTextNode("\n ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "material-icons right");
        var el3 = dom.createTextNode("close");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "card-main-title card-title");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [4]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        morphs[2] = dom.createAttrMorph(element1, 'class');
        morphs[3] = dom.createMorphAt(element1, 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["card-title ", ["subexpr", "if", [["get", "parentView.textColor", ["loc", [null, [1, 29], [1, 49]]], 0, 0, 0, 0], ["get", "parentView.textColor", ["loc", [null, [1, 50], [1, 70]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 24], [1, 72]]], 0, 0], " ", ["subexpr", "if", [["get", "activator", ["loc", [null, [1, 78], [1, 87]]], 0, 0, 0, 0], "activator"], [], ["loc", [null, [1, 73], [1, 101]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "link-to", [["get", "parentView.titleLink", ["loc", [null, [5, 14], [5, 34]]], 0, 0, 0, 0]], ["classNames", ["subexpr", "if", [["get", "parentView.textColor", ["loc", [null, [5, 50], [5, 70]]], 0, 0, 0, 0], ["get", "parentView.textColor", ["loc", [null, [5, 71], [5, 91]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 46], [5, 92]]], 0, 0]], 0, null, ["loc", [null, [5, 2], [5, 127]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "parentView.textColor", ["loc", [null, [7, 15], [7, 35]]], 0, 0, 0, 0], ["get", "textColor", ["loc", [null, [7, 36], [7, 45]]], 0, 0, 0, 0]], [], ["loc", [null, [7, 10], [7, 47]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [7, 49], [7, 58]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("portfolio-redo/templates/components/md-slider", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 8,
                "column": 4
              }
            },
            "moduleName": "portfolio-redo/templates/components/md-slider.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h3");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "slide.caption", ["loc", [null, [7, 10], [7, 27]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "portfolio-redo/templates/components/md-slider.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "caption center-align");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          morphs[1] = dom.createAttrMorph(element1, 'alt');
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          return morphs;
        },
        statements: [["attribute", "src", ["get", "slide.imgUrl", ["loc", [null, [4, 15], [4, 27]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "alt", ["get", "slide.alt", ["loc", [null, [4, 36], [4, 45]]], 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "slide.caption", ["loc", [null, [6, 10], [6, 23]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [6, 4], [8, 11]]]]],
        locals: ["slide"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/components/md-slider.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "slides");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "slides", ["loc", [null, [2, 8], [2, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [11, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('portfolio-redo/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("portfolio-redo/templates/components/nav-keyboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 3,
              "column": 74
            }
          },
          "moduleName": "portfolio-redo/templates/components/nav-keyboard.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 79
            }
          },
          "moduleName": "portfolio-redo/templates/components/nav-keyboard.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 77
            }
          },
          "moduleName": "portfolio-redo/templates/components/nav-keyboard.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/components/nav-keyboard.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "main-nav center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "nav-item-list");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["classNames", "nav-item home-item", "title", "Home Page"], 0, null, ["loc", [null, [3, 4], [3, 86]]]], ["block", "link-to", ["projects"], ["classNames", "nav-item project-item", "title", "Projects"], 1, null, ["loc", [null, [4, 4], [4, 91]]]], ["block", "link-to", ["linkedin"], ["classNames", "nav-item cv", "title", "Curriculum Vitae"], 2, null, ["loc", [null, [5, 4], [5, 89]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("portfolio-redo/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "portfolio-redo/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]], 0, 0, 0, 0], "checked"], [], ["loc", [null, [2, 35], [2, 59]]], 0, 0], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]], 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]], 0, 0, 0, 0]], [], [], 0, 0], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]], 0, 0], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "portfolio-redo/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]], 0, 0, 0, 0]], [], [], 0, 0], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/components/radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('portfolio-redo/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("portfolio-redo/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 10
              },
              "end": {
                "line": 16,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              I am a very simple card. I am good at containing\n              small bits of information. I am convenient because\n              I require little markup to use effectively.\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 10
              },
              "end": {
                "line": 20,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 6
            },
            "end": {
              "line": 22,
              "column": 6
            }
          },
          "moduleName": "portfolio-redo/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "md-card-content", [], [], 0, null, ["loc", [null, [12, 10], [16, 30]]]], ["block", "md-card-reveal-extended", [], ["classNames", "punk"], 1, null, ["loc", [null, [18, 10], [20, 38]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 10
              },
              "end": {
                "line": 39,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 6
            },
            "end": {
              "line": 43,
              "column": 6
            }
          },
          "moduleName": "portfolio-redo/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "md-card-reveal-extended", [], ["classNames", "what"], 0, null, ["loc", [null, [37, 10], [39, 38]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 55,
                "column": 10
              },
              "end": {
                "line": 57,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 59,
                "column": 10
              },
              "end": {
                "line": 61,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("               ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.setAttribute(el1, "class", "white-text");
            var el2 = dom.createTextNode("Past and upcoming talks.");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 6
            },
            "end": {
              "line": 63,
              "column": 6
            }
          },
          "moduleName": "portfolio-redo/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "md-card-content", [], [], 0, null, ["loc", [null, [55, 10], [57, 30]]]], ["block", "md-card-reveal-extended", [], ["classNames", "dark-punk"], 1, null, ["loc", [null, [59, 10], [61, 38]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 10
              },
              "end": {
                "line": 88,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "row contact");
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "col s2 offset-s3 center");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "href", "https://www.twitter.com/jjordan_dev");
            var el4 = dom.createElement("img");
            dom.setAttribute(el4, "class", "social-icon");
            dom.setAttribute(el4, "src", "/twitter.svg");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "col s2 center");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "href", "mailto:me@jessicajordan.de");
            var el4 = dom.createElement("i");
            dom.setAttribute(el4, "class", "material-icons mail-icon white-text");
            var el5 = dom.createTextNode("mail");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "col s2 center");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3, "href", "https://uk.linkedin.com/in/jessicajordanfedev");
            var el4 = dom.createElement("img");
            dom.setAttribute(el4, "class", "social-icon linkedin");
            dom.setAttribute(el4, "src", "/linkedin.png");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n              ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 66,
              "column": 6
            },
            "end": {
              "line": 90,
              "column": 6
            }
          },
          "moduleName": "portfolio-redo/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "md-card-reveal-extended", [], ["classNames", "lilac"], 0, null, ["loc", [null, [76, 10], [88, 38]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 96,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row no-margin");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 l6");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 l6");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row no-margin");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s6");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s6");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s12");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        morphs[4] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["block", "md-card-extended", [], ["title", "Projects", "titleClass", "orange-text", "titleLink", "projects", "image", "/hands-framed.jpg", "id", "card-reveal", "classNames", "height-84", "activator", true, "textColor", "white-text"], 0, null, ["loc", [null, [3, 6], [22, 27]]]], ["block", "md-card-extended", [], ["title", "CV", "titleClass", "orange-text", "titleLink", "linkedin", "icon", "class", "id", "image-card-2", "activator", true, "classNames", "height-42", "textColor", "grey-text"], 1, null, ["loc", [null, [27, 6], [43, 27]]]], ["block", "md-card-extended", [], ["title", "Talks", "titleClass", "white-text", "titleLink", "talks", "image", "/hands-framed-flat.jpg", "id", "image-card-3", "classNames", "height-42", "activator", true, "textColor", "white-text"], 2, null, ["loc", [null, [46, 6], [63, 27]]]], ["block", "md-card-extended", [], ["title", "Contact", "titleClass", "orange-text", "image", "/dancing.gif", "id", "image-card-4", "classNames", "height-42 gif-tile", "activator", true, "holdVeil", true, "textColor", "white-text"], 3, null, ["loc", [null, [66, 6], [90, 27]]]], ["content", "outlet", ["loc", [null, [95, 0], [95, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("portfolio-redo/templates/linkedin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/linkedin.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "row mt-2");
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 center");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "center");
        dom.setAttribute(el3, "href", "https://uk.linkedin.com/in/jessicajordanfedev");
        dom.setAttribute(el3, "target", "lin");
        dom.setAttribute(el3, "title", "Read Curriculum Vitae on Linkedin");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "social-icon linkedin");
        dom.setAttribute(el4, "src", "/linkedin.png");
        dom.setAttribute(el4, "alt", "Find Jessica Jordan's CV on Linkedin (external link).");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n              ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [8, 0], [8, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("portfolio-redo/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container text-center center");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Loading....");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "/jack.gif");
        dom.setAttribute(el2, "alt", "Jack AT");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("portfolio-redo/templates/projects", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 12
                },
                "end": {
                  "line": 7,
                  "column": 109
                }
              },
              "moduleName": "portfolio-redo/templates/projects.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "tech.name", ["loc", [null, [7, 96], [7, 109]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 10
              },
              "end": {
                "line": 8,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/projects.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "link-to", ["projects", ["subexpr", "query-params", [], ["tech", ["get", "tech.name", ["loc", [null, [7, 53], [7, 62]]], 0, 0, 0, 0]], ["loc", [null, [7, 34], [7, 63]]], 0, 0]], ["classNames", "sort-link desktop"], 0, null, ["loc", [null, [7, 12], [7, 121]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 8
            }
          },
          "moduleName": "portfolio-redo/templates/projects.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "filter-tag", [], ["classNames", "right", "currentlyActiveFilter", ["subexpr", "@mut", [["get", "activeFilter", ["loc", [null, [6, 65], [6, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "action", "changeFilter"], 0, null, ["loc", [null, [6, 10], [8, 25]]]]],
        locals: ["tech"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 17,
                  "column": 12
                },
                "end": {
                  "line": 17,
                  "column": 101
                }
              },
              "moduleName": "portfolio-redo/templates/projects.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "tech.name", ["loc", [null, [17, 88], [17, 101]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 10
              },
              "end": {
                "line": 18,
                "column": 10
              }
            },
            "moduleName": "portfolio-redo/templates/projects.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "link-to", ["projects", ["subexpr", "query-params", [], ["tech", ["get", "tech.name", ["loc", [null, [17, 53], [17, 62]]], 0, 0, 0, 0]], ["loc", [null, [17, 34], [17, 63]]], 0, 0]], ["classNames", "sort-link"], 0, null, ["loc", [null, [17, 12], [17, 113]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 9
            },
            "end": {
              "line": 19,
              "column": 8
            }
          },
          "moduleName": "portfolio-redo/templates/projects.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "filter-tag", [], ["currentlyActiveFilter", ["subexpr", "@mut", [["get", "activeFilter", ["loc", [null, [16, 46], [16, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "action", "changeFilter"], 0, null, ["loc", [null, [16, 10], [18, 25]]]]],
        locals: ["tech"],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 12
              },
              "end": {
                "line": 30,
                "column": 12
              }
            },
            "moduleName": "portfolio-redo/templates/projects.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "md-slider", [], ["slides", ["subexpr", "@mut", [["get", "project.slides", ["loc", [null, [29, 33], [29, 47]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [29, 14], [29, 49]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 36,
                  "column": 16
                },
                "end": {
                  "line": 38,
                  "column": 16
                }
              },
              "moduleName": "portfolio-redo/templates/projects.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "project.desc", ["loc", [null, [37, 20], [37, 36]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              var child0 = (function () {
                return {
                  meta: {
                    "revision": "Ember@2.7.3",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 42,
                        "column": 24
                      },
                      "end": {
                        "line": 42,
                        "column": 109
                      }
                    },
                    "moduleName": "portfolio-redo/templates/projects.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment("");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                  },
                  statements: [["content", "tech.name", ["loc", [null, [42, 96], [42, 109]]], 0, 0, 0, 0]],
                  locals: [],
                  templates: []
                };
              })();
              return {
                meta: {
                  "revision": "Ember@2.7.3",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 41,
                      "column": 20
                    },
                    "end": {
                      "line": 43,
                      "column": 20
                    }
                  },
                  "moduleName": "portfolio-redo/templates/projects.hbs"
                },
                isEmpty: false,
                arity: 1,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                        ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                  return morphs;
                },
                statements: [["block", "link-to", ["projects", ["subexpr", "query-params", [], ["tech", ["get", "tech.name", ["loc", [null, [42, 65], [42, 74]]], 0, 0, 0, 0]], ["loc", [null, [42, 46], [42, 75]]], 0, 0]], ["action", "setFilter"], 0, null, ["loc", [null, [42, 24], [42, 121]]]]],
                locals: ["tech"],
                templates: [child0]
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 40,
                    "column": 16
                  },
                  "end": {
                    "line": 44,
                    "column": 16
                  }
                },
                "moduleName": "portfolio-redo/templates/projects.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["block", "each", [["get", "project.tech", ["loc", [null, [41, 28], [41, 40]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [41, 20], [43, 29]]]]],
              locals: [],
              templates: [child0]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 39,
                  "column": 16
                },
                "end": {
                  "line": 45,
                  "column": 16
                }
              },
              "moduleName": "portfolio-redo/templates/projects.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "project.tech", ["loc", [null, [40, 22], [40, 34]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [40, 16], [44, 23]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 12
              },
              "end": {
                "line": 46,
                "column": 12
              }
            },
            "moduleName": "portfolio-redo/templates/projects.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "md-card-content", [], [], 0, null, ["loc", [null, [36, 16], [38, 36]]]], ["block", "md-card-action", [], [], 1, null, ["loc", [null, [39, 16], [45, 35]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 2
            },
            "end": {
              "line": 52,
              "column": 2
            }
          },
          "moduleName": "portfolio-redo/templates/projects.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          dom.setAttribute(el1, "class", "row mt-2 mb-5");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col s12");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col s12");
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("          ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col s12");
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("          ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["get", "project.slides", ["loc", [null, [28, 18], [28, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [28, 12], [30, 19]]]], ["block", "md-card", [], ["title", ["subexpr", "@mut", [["get", "project.name", ["loc", [null, [35, 29], [35, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "project.name", ["loc", [null, [35, 45], [35, 57]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ["loc", [null, [35, 12], [46, 24]]]]],
        locals: ["project"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 54,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/projects.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "row main-header desktop hide-on-small-only");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "col s12 m6");
        var el3 = dom.createTextNode("Projects");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col s12 pull-right sorter hide-on-small-only");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "row main-header mobile hide-on-med-and-up");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "col s12 m6");
        var el3 = dom.createTextNode("Projects");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "sorter hide-on-med-and-up col s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "center");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Projects");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "uniqueTechs", ["loc", [null, [5, 16], [5, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [5, 8], [9, 17]]]], ["block", "each", [["get", "uniqueTechs", ["loc", [null, [15, 17], [15, 28]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [15, 9], [19, 17]]]], ["content", "filteredProjects.length", ["loc", [null, [21, 24], [21, 51]]], 0, 0, 0, 0], ["block", "each", [["get", "filteredProjects", ["loc", [null, [23, 10], [23, 26]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [23, 2], [52, 11]]]], ["content", "outlet", ["loc", [null, [53, 2], [53, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("portfolio-redo/templates/talks", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 12,
                  "column": 4
                },
                "end": {
                  "line": 14,
                  "column": 4
                }
              },
              "moduleName": "portfolio-redo/templates/talks.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" - ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" @");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
              return morphs;
            },
            statements: [["content", "talk.title", ["loc", [null, [13, 8], [13, 22]]], 0, 0, 0, 0], ["content", "talk.date", ["loc", [null, [13, 25], [13, 38]]], 0, 0, 0, 0], ["content", "talk.location", ["loc", [null, [13, 40], [13, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.3",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 18,
                      "column": 8
                    },
                    "end": {
                      "line": 18,
                      "column": 80
                    }
                  },
                  "moduleName": "portfolio-redo/templates/talks.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createElement("a");
                  dom.setAttribute(el1, "target", "video");
                  var el2 = dom.createTextNode("Video");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element3 = dom.childAt(fragment, [0]);
                  var morphs = new Array(1);
                  morphs[0] = dom.createAttrMorph(element3, 'href');
                  return morphs;
                },
                statements: [["attribute", "href", ["get", "talk.videoUrl", ["loc", [null, [18, 40], [18, 53]]], 0, 0, 0, 0], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child1 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.3",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 19,
                      "column": 8
                    },
                    "end": {
                      "line": 19,
                      "column": 83
                    }
                  },
                  "moduleName": "portfolio-redo/templates/talks.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createElement("a");
                  dom.setAttribute(el1, "target", "slides");
                  var el2 = dom.createTextNode("Slides");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element2 = dom.childAt(fragment, [0]);
                  var morphs = new Array(1);
                  morphs[0] = dom.createAttrMorph(element2, 'href');
                  return morphs;
                },
                statements: [["attribute", "href", ["get", "talk.slidesUrl", ["loc", [null, [19, 40], [19, 54]]], 0, 0, 0, 0], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child2 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.7.3",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 20,
                      "column": 8
                    },
                    "end": {
                      "line": 20,
                      "column": 80
                    }
                  },
                  "moduleName": "portfolio-redo/templates/talks.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createElement("a");
                  dom.setAttribute(el1, "target", "blog");
                  var el2 = dom.createTextNode("Blog Post");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element1 = dom.childAt(fragment, [0]);
                  var morphs = new Array(1);
                  morphs[0] = dom.createAttrMorph(element1, 'href');
                  return morphs;
                },
                statements: [["attribute", "href", ["get", "talk.blogUrl", ["loc", [null, [20, 38], [20, 50]]], 0, 0, 0, 0], 0, 0, 0, 0]],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.7.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 17,
                    "column": 6
                  },
                  "end": {
                    "line": 21,
                    "column": 6
                  }
                },
                "moduleName": "portfolio-redo/templates/talks.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
                return morphs;
              },
              statements: [["block", "if", [["get", "talk.videoUrl", ["loc", [null, [18, 14], [18, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [18, 8], [18, 87]]]], ["block", "if", [["get", "talk.slidesUrl", ["loc", [null, [19, 14], [19, 28]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [19, 8], [19, 90]]]], ["block", "if", [["get", "talk.blogUrl", ["loc", [null, [20, 14], [20, 26]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [20, 8], [20, 87]]]]],
              locals: [],
              templates: [child0, child1, child2]
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.7.3",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 6
                  },
                  "end": {
                    "line": 23,
                    "column": 6
                  }
                },
                "moduleName": "portfolio-redo/templates/talks.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("         ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                var el2 = dom.createTextNode("Upcoming (Abtract)");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element0, 'href');
                morphs[1] = dom.createAttrMorph(element0, 'target');
                return morphs;
              },
              statements: [["attribute", "href", ["get", "talk.confUrl", ["loc", [null, [22, 19], [22, 31]]], 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "target", ["get", "talk.event", ["loc", [null, [22, 43], [22, 53]]], 0, 0, 0, 0], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.7.3",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 4
                },
                "end": {
                  "line": 24,
                  "column": 4
                }
              },
              "moduleName": "portfolio-redo/templates/talks.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "unless", [["get", "talk.isUpcoming", ["loc", [null, [17, 16], [17, 31]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [17, 6], [23, 17]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.7.3",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 26,
                "column": 2
              }
            },
            "moduleName": "portfolio-redo/templates/talks.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "md-card-content", [], [], 0, null, ["loc", [null, [12, 4], [14, 24]]]], ["block", "md-card-action", [], [], 1, null, ["loc", [null, [16, 4], [24, 23]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.7.3",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "portfolio-redo/templates/talks.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col talk-col");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "md-card", [], ["title", ["subexpr", "@mut", [["get", "talk.event", ["loc", [null, [7, 19], [7, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "titleClass", ["subexpr", "if", [["get", "talk.isUpcoming", ["loc", [null, [8, 19], [8, 34]]], 0, 0, 0, 0], "dark-gray-text", "white-text"], [], ["loc", [null, [8, 15], [8, 65]]], 0, 0], "image", ["subexpr", "@mut", [["get", "talk.imgUrl", ["loc", [null, [9, 10], [9, 21]]], 0, 0, 0, 0]], [], [], 0, 0], "class", ["subexpr", "if", [["get", "talk.isUpcoming", ["loc", [null, [10, 14], [10, 29]]], 0, 0, 0, 0], "talk--upcoming", "talk--done dark-punk white-text"], [], ["loc", [null, [10, 10], [10, 81]]], 0, 0]], 0, null, ["loc", [null, [7, 2], [26, 14]]]]],
        locals: ["talk"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 0
          }
        },
        "moduleName": "portfolio-redo/templates/talks.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "row main-header mobile hide-on-med-and-up");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "col s12 m6");
        var el3 = dom.createTextNode("Talks");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("        \n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row talk-row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "talks", ["loc", [null, [5, 8], [5, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [5, 0], [28, 9]]]], ["content", "outlet", ["loc", [null, [30, 0], [30, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('portfolio-redo/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.fromRoute('index'), this.toRoute('linkedin'), this.use('toLeft'), this.reverse('toRight'));
    this.transition(this.fromRoute('index'), this.toRoute('projects'), this.use('toRight'), this.reverse('toLeft'));
    this.transition(this.fromRoute('index'), this.toRoute('talks'), this.use('toRight'), this.reverse('toLeft'));
    this.transition(this.fromRoute('linkedin'), this.toRoute('projects'), this.use('toUp'), this.reverse('toDown'));
  };

  ;
});
define('portfolio-redo/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('portfolio-redo/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('portfolio-redo/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('portfolio-redo/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('portfolio-redo/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('portfolio-redo/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('portfolio-redo/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('portfolio-redo/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('portfolio-redo/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('portfolio-redo/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('portfolio-redo/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('portfolio-redo/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('portfolio-redo/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('portfolio-redo/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('portfolio-redo/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _emberKeyboardUtilsListenerName) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardUtilsListenerName['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('portfolio-redo/config/environment', ['ember'], function(Ember) {
  var prefix = 'portfolio-redo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("portfolio-redo/app")["default"].create({"name":"portfolio-redo","version":"0.0.0+2c96f60f"});
}

/* jshint ignore:end */
//# sourceMappingURL=portfolio-redo.map

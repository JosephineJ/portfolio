import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-card-reveal-extended', 'Integration | Component | md card reveal extended', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{md-card-reveal-extended}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#md-card-reveal-extended}}
      template block text
    {{/md-card-reveal-extended}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

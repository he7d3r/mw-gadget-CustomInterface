/**
 * Allow the use of a CSS3 selector such as "html:not(.mw) " to define an interface customization which may be disable/enabled by one click
 *
 * @see: [[User:Helder.wiki/vector.css]] for examples
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/CustomInterface.js]] ([[File:User:Helder.wiki/Tools/CustomInterface.js]])
 */
/*jshint browser: true, camelcase: true, curly: true, eqeqeq: true, immed: true, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: true, undef: true, unused: true, strict: true, trailing: true, maxlen: 120, evil: true, onevar: true */
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';

function addInterfaceLink() {
	var label = {
		'true': 'Restaurar a interface',
		'false': 'Personalizar a interface'
	};
	$( mw.util.addPortletLink(
		'p-cactions',
		'#',
		label[ !$('html').hasClass('mw') ],
		'ca-interface',
		'Alternar entre a interface personalizada e o padrão do MediaWiki'
	) ).click( function (e) {
		e.preventDefault(); // prevent '#' from appearing in URL bar
		$(this).find('a').text( label[ $('html').hasClass('mw') ] );
		$('html').toggleClass('mw');
	} );
}

$( addInterfaceLink );

}( mediaWiki, jQuery ) );
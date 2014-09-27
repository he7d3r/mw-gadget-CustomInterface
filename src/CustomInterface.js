/**
 * Allow the use of a CSS3 selector such as "html:not(.mw) " to define an interface customization which may be disable/enabled by one click
 *
 * @see: [[m:User:He7d3r/global.css]] for examples
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
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

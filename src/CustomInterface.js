/**
 * Allow the use of a CSS3 selector such as "html:not(.mw) " to define an interface customization which may be disable/enabled by one click
 *
 * @see: [[User:Helder.wiki/Tools/Global.css]] for examples
 * @traking: [[Special:GlobalUsage/User:Helder.wiki/Tools/CustomInterface.js]] ([[File:User:Helder.wiki/Tools/CustomInterface.js]])
 */
$(function () {
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
});
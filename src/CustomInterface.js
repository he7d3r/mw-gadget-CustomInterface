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
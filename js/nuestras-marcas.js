jQuery(document).ready(function($){
	console.log('nuestras-marcas')
	// TABS
	$('body').on("click", ".tab-selector", function(){
		tabClicked = this.getAttribute('data')
		$(this).parent().find("[class*='tab-selector-selected']").removeClass('tab-selector-selected')
		$('.tab-selector[data="' + tabClicked + '"]').addClass('tab-selector-selected')
		console.log('click: ' + tabClicked)
		showHideTabs(tabClicked)
	})
	//
	function showHideTabs(tabClicked) {
		console.log('showHideTabs: ' + tabClicked)
		$('.tab:visible').each(function(){
			$(this).fadeOut('fast', function(){
				$('#' + tabClicked).fadeIn()
			})
		})
	}
});
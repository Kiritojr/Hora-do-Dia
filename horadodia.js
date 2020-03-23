function carregar() {
	var msg = window.document.getElementById('msg');
	var img = window.document.getElementById('imagem');
	var cmpnt = window.document.getElementById('cmpnt');
	var data = new Date();
	var hora = data.getHours();
	msg.innerHTML = 'Agora são '+hora+' horas.'

	if (hora >= 0 && hora < 12) {
		//BOM DIA!
		img.src ='manha.png'
		cmpnt.innerHTML = 'BOM DIA!'
		document.body.style.background = '#836FFF' 

	} else if (hora >= 12 && hora < 18) {
		//BOA TARDE!
		img.src ='tarde.png'
		cmpnt.innerHTML = 'BOA TARDE!'
		document.body.style.background = '#FF8C00'

	} else {
		//BOA NOITE!
		img.src ='noite.png'
		cmpnt.innerHTML = 'BOA NOITE!'
		document.body.style.background = '#778899'
				
	}
}

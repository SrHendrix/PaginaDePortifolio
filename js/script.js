function openTab(projeto){
    let projeto1 = document.getElementById('projeto 1')
    let projeto2 = document.getElementById('projeto 2')
    let projeto3 = document.getElementById('projeto 3')

    let p = projeto

    if(p == 'projeto 1'){
        projeto1.classList.add('show');
        projeto2.classList.remove('show');
        projeto3.classList.remove('show');
    }
    else if(p == 'projeto 2'){
        projeto1.classList.remove('show')
        projeto2.classList.add('show')
        projeto3.classList.remove('show');
    }
    else if(p == 'projeto 3'){
        projeto1.classList.remove('show');
        projeto2.classList.remove('show');
        projeto3.classList.add('show');
    }
}
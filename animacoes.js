

const meuObservador = new IntersectionObserver ((observar) =>{  
    observar.forEach( (entry) =>{
        if(entry.isIntersecting ){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove ('show')
        }
    })
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach((elementos) =>meuObservador.observe(elementos))
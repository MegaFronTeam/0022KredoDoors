document.addEventListener('DOMContentLoaded', ()=>{
    document.addEventListener('click', function(event){
        let target = event.target.closest('.js-favorite-item-btn');
        if (!target) return;
        target.closest('.sGoods__col').remove()
    })

});
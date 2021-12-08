const btn = document.querySelector('.btn');
const close_btn = document.querySelector('.close');
const modal = document.querySelector('.modal');

btn.addEventListener( 'click',  function (event)
{
    modal.classList.add('.showed');

}
);


close_btn.addEventListener( 'click',  function (event)
{
    modal.classList.remove('.showed');

}
);
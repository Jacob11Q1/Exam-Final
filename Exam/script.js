/* ---------- To Change The BackgrougColor Of The Button ----------*/
function changeBG(){
    var change = document.querySelector("#changeBG-Cover");
    change.style.backgroungColor = '#3b4598';
}

function colorBGChange(){
    var changeBGColor = document.querySelector("#changeBG-Cover");
    changeBGColor.style.backgroungColor = '#263179';
} 

/* ---------- To Change The Elements In The Second Section ----------*/
function switchItems(){
    const h1 = document.querySelector('#switch-title');
    const p = document.querySelector('#switch-desc');
    const img = document.querySelector('#switch-img');
    const button = document.querySelector('#switch-btn');

    if(h1.innerText === 'Who we are'){
        h1.innerText = 'What We Do';
        p.innerText = 'At our company, innovation drives everything we do. We specialize in leveraging cutting-edge technologies and strategic expertise to empower businesses to grow smarter and faster. From enhancing digital experiences and optimizing internal workflows to unlocking new revenue opportunities.';
        button.innerText = 'Change Back';
        img.src = './Images/alt-features.png';
    }else {
        h1.innerText = 'Who we are';
        p.innerText = 'We are a forward-thinking company dedicated to providing innovative solutions that fuel business growth. With a focus on modern technologies and strategic insights, we help businesses streamline their operations, enhance customer experiences, and scale efficiently. Whether you are looking to improve your digital presence,optimize processes, or drive new revenue streams.';
        button.innerText = 'Make A Change';
        img.src = './Images/about.jpg';
    }
}
/*

1) when site opens the button just be on the right side
3) changing the button changes the dark/light mode

*/
const root=document.querySelector('html');

// 0) check for local storage and set it
if(localStorage.getItem('theme')=='dark'){
    root.style.setProperty('--state','dark');
    root.style.setProperty('--bg','var(--dark-bg)');
    root.style.setProperty('--text-color','var(--dark-text2)');
    root.style.setProperty('--text-color2','var(--dark-text1)');
    root.style.setProperty('--card-bg','var(--dark-card-bg)');
    root.style.setProperty('--card-hover','var(--dark-card-hover)');
    root.style.setProperty('--text-bg','var(--light-bg)');
    root.style.setProperty('--toggle','var(--light-bg)');
    root.style.setProperty('--toggle-bg','linear-gradient(225deg,var(--toggle-bg-start) 0%,var(--toggle-bg-end) 98.02%)');
    root.style.setProperty('--toggle-button','var(--dark-bg)');

    document.getElementById('dark').checked=true;
}
else if(localStorage.getItem('theme')=='light'){
    root.style.setProperty('--state','light');
    root.style.setProperty('--bg','var(--light-bg)');
    root.style.setProperty('--text-color','var(--light-text2)');
    root.style.setProperty('--text-color2','var(--light-text1)');
    root.style.setProperty('--card-bg','var(--light-card-bg)');
    root.style.setProperty('--card-hover','var(--light-card-hover)');
    root.style.setProperty('--text-bg','var(--dark-bg)');
    root.style.setProperty('--toggle','var(--toggle-light)');
    root.style.setProperty('--toggle-bg','var(--toggle-bg-light)');
    root.style.setProperty('--toggle-button','hsl(228,46%,96%)');

    document.getElementById('light').checked=true;
}

// 1)

const styles=getComputedStyle(root);

const state=styles.getPropertyValue('--state');

// deals with the intial light/dark
if(state=='dark'){
    document.getElementById('dark').checked=true;
}
else{
    document.getElementById('light').checked=true;
}

// 2) ignore this part for now


// 3)
const darkRadio=document.getElementById('dark');
const lightRadio=document.getElementById('light');

darkRadio.addEventListener('click',function(){
    // i gotta change the css variables
    root.style.setProperty('--state','dark');
    root.style.setProperty('--bg','var(--dark-bg)');
    root.style.setProperty('--text-color','var(--dark-text2)');
    root.style.setProperty('--text-color2','var(--dark-text1)');
    root.style.setProperty('--card-bg','var(--dark-card-bg)');
    root.style.setProperty('--card-hover','var(--dark-card-hover)');
    root.style.setProperty('--text-bg','var(--light-bg)');
    root.style.setProperty('--toggle','var(--light-bg)');
    root.style.setProperty('--toggle-bg','linear-gradient(225deg,var(--toggle-bg-start) 0%,var(--toggle-bg-end) 98.02%)');
    root.style.setProperty('--toggle-button','var(--dark-bg)');

    localStorage.setItem('theme','dark');
});

lightRadio.addEventListener('click',function(){
    root.style.setProperty('--state','light');
    root.style.setProperty('--bg','var(--light-bg)');
    root.style.setProperty('--text-color','var(--light-text2)');
    root.style.setProperty('--text-color2','var(--light-text1)');
    root.style.setProperty('--card-bg','var(--light-card-bg)');
    root.style.setProperty('--card-hover','var(--light-card-hover)');
    root.style.setProperty('--text-bg','var(--dark-bg)');
    root.style.setProperty('--toggle','var(--toggle-light)');
    root.style.setProperty('--toggle-bg','var(--toggle-bg-light)');
    root.style.setProperty('--toggle-button','hsl(228,46%,96%)');

    localStorage.setItem('theme','light');

});



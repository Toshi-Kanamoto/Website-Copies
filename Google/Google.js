var bg_cycle = 0
let ele = document.querySelector(':root');
function menu_button() {
    switch (bg_cycle) {
        case 0:
            ele.style.setProperty('--text-color', '#E8E9EB');
            ele.style.setProperty('--inv-text-color', '#746D69');
            bg_cycle += 1;
            break;
        case 1:
            ele.style.setProperty('--text-color', '#56B6C4');
            ele.style.setProperty('--inv-text-color', '#76A787');
            bg_cycle += 1
            break;
            
        case 2:
            ele.style.setProperty('--text-color', '#FC7869');
            ele.style.setProperty('--inv-text-color', '#A478BB');
            bg_cycle += 1;
            break;
        case 3:
            ele.style.setProperty('--text-color', '#746D69');
            ele.style.setProperty('--inv-text-color', '#E8E9EB');
            bg_cycle = 0;
            break;
    }
}
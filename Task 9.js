// let m;
// let km = m / 1000;

function a(m) {
let km = m / 1000;

    if (m == 0) {
        console.log(m, 'метрів це', km, 'кілометрів')
    } else if (km > 0 && km < 1) {
        if (m.toString().endsWith('11') || m.toString().endsWith('12') || m.toString().endsWith('13') || m.toString().endsWith('14')) {
            console.log(m, 'метрів це', km, 'кілометра')
        }
        else if (m.toString().endsWith('1')) {
            console.log(m, 'метр це', km, 'кілометра')
        } else if (m.toString().endsWith('2') || m.toString().endsWith('3') || m.toString().endsWith('4')) {
            console.log(m, 'метри це', km, 'кілометра')
        } else {
            console.log(m, 'метрів це', km, 'кілометра')
        }
    } else if (m.toString().endsWith('11') || m.toString().endsWith('12') || m.toString().endsWith('13') || m.toString().endsWith('14')) {
        console.log(m, 'метрів це', km, 'кілометрів')
    } else if (km == 1) {
        console.log(m, 'метрів це', km, 'кілометр')
    }
    else if (m.toString().endsWith('1')) {
        console.log(m, 'метр це', km, 'кілометр')
    } else if (m.toString().endsWith('2') || m.toString().endsWith('3') || m.toString().endsWith('4')) {
        console.log(m, 'метри це', km, 'кілометри')
    } else {
        console.log(m, 'метрів це', km, 'кілометрів')
    }

for(let i = 0; i <= 2222; i++){
    a(i)
}


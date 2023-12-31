function redirectToLevels(){
    window.location.href = "../pages/levels_page.html";
}

function redirectTo1Level() {
    if (localStorage.getItem('currentLvl') === null) {
        localStorage.setItem('currentLvl', '1');
    }
    localStorage.setItem('maze', '1');
    window.location.href = "level_page.html";
}
function redirectTo2Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 2) {
        localStorage.setItem('maze', '2');
        window.location.href = "level_page.html";
    }
}
function redirectTo3Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 3) {
        localStorage.setItem('maze', '3');
        window.location.href = "level_page.html";
    }
}
function redirectTo4Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 4) {
        localStorage.setItem('maze', '4');
        window.location.href = "level_page.html";
    }
}
function redirectTo5Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 5) {
        localStorage.setItem('maze', '5');
        window.location.href = "level_page.html";
    }
}
function redirectTo6Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 6) {
        localStorage.setItem('maze', '6');
        window.location.href = "level_page.html";
    }
}
function redirectTo7Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 7) {
        localStorage.setItem('maze', '7');
        window.location.href = "level_page.html";
    }
}
function redirectTo8Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 8) {
        localStorage.setItem('maze', '8');
        window.location.href = "level_page.html";
    }
}
function redirectTo9Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 9) {
        localStorage.setItem('maze', '9');
        window.location.href = "level_page.html";
    }
}
function redirectTo10Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 10) {
        localStorage.setItem('maze', '10');
        window.location.href = "level_page.html";
    }
}
function redirectTo11Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 11) {
        localStorage.setItem('maze', '11');
        window.location.href = "level_page.html";
    }
}
function redirectTo12Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 12) {
        localStorage.setItem('maze', '12');
        window.location.href = "level_page.html";
    }
}
function redirectTo13Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 13) {
        localStorage.setItem('maze', '13');
        window.location.href = "level_page.html";
    }
}
function redirectTo14Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 14) {
        localStorage.setItem('maze', '14');
        window.location.href = "level_page.html";
    }
}
function redirectTo15Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 15) {
        localStorage.setItem('maze', '15');
        window.location.href = "level_page.html";
    }
}
function redirectTo16Level() {
    if (parseInt(localStorage.getItem('currentLvl')) >= 16) {
        localStorage.setItem('maze', '16');
        window.location.href = "level_page.html";
    }
}

window.addEventListener('load', function() {
    var eyeless = document.getElementById('eyeless');
    const maze = localStorage.getItem('maze');
    const mazeContainer = document.getElementById('maze');

    try {
        LockImage();
    } catch (error) {
        console.log("Помилка виникла:", error.message);
    }

    try {
        mazeContainer.style.gridTemplateRows = 'repeat(15, 50px)';
        mazeContainer.style.gridTemplateColumns = 'repeat(20, 50px)';
        if (maze === '1') {
            const mazeMatrix = [
                [1, 0, 2, 2, 2, 1, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 2, 0, 2, 2, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
                [1, 2, 1, 0, 1, 2, 0, 2, 0, 1],
                [1, 0, 2, 0, 2, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 2, 2, 0, 2, 3, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})

            mazeContainer.style.gridTemplateRows = 'repeat(10, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(10, 50px)';
    
            console.log(localStorage.getItem('currentLvl'));
            createMaze(mazeMatrix, '5px', '95px', '-1210px', '-710px');

            
            var imgKeyboard = document.createElement("img");
            imgKeyboard.src = '../image/keyboard.png';
            imgKeyboard.style.height = "150px";
            var keyboard = document.getElementById('keyboard');
            var guide = document.getElementById('guide');
            keyboard.appendChild(imgKeyboard);
            keyboard.style.marginTop = "-170px";
            guide.style.marginTop = "-120px";
            guide.style.fontSize = "28px";
            guide.style.fontStyle = "normal";
            guide.style.color = "#137a74";
            guide.style.display = "block";
        }
        else if (maze === '2') {
            const mazeMatrix = [
                [1, 2, 2, 1, 2, 2, 1, 2, 3, 2, 2, 1],
                [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 2, 0, 2, 2, 2, 2, 2, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 2, 2, 0, 2, 2, 2, 1, 0, 1, 2, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 2, 2, 1, 0, 2, 2, 2, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 1, 0, 2, 2, 1, 0, 1, 0, 1],
                [1, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(12, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(12, 50px)';
            console.log(localStorage.getItem('currentLvl'));
            createMaze(mazeMatrix, '355px', '195px', '-910px', '-660px');
        }
        else if (maze === '3') {
            const mazeMatrix = [
                [1, 2, 2, 1, 0, 2, 2, 1, 2, 1],
                [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 2, 0, 1, 0, 2, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 2, 0, 1, 2, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 1, 2, 2, 2, 1, 0, 1],
                [1, 0, 0, 1, 0, 0, 0, 2, 0, 1],
                [1, 2, 2, 2, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
                [1, 0, 2, 2, 2, 2, 2, 2, 3, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(15, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(10, 50px)';
            console.log(localStorage.getItem('currentLvl'));
            createMaze(mazeMatrix, '5px', '245px', '-1340px', '-565px');
        }
        else if (maze === '4') {
            const mazeMatrix = [
                [1, 2, 2, 1, 2, 2, 2, 1, 2, 3, 2, 1, 2, 2, 1],
                [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 2, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 1],
                [1, 2, 2, 0, 1, 2, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 2, 1],
                [1, 0, 1, 2, 2, 2, 2, 2, 0, 1, 0, 2, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 2, 0, 2, 2, 2, 1, 0, 2, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(12, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(15, 50px)';
            createMaze(mazeMatrix, '55px', '95px', '-1210px', '-835px');
        }
        else if (maze === '5') {
            const mazeMatrix = [
                [1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 1],
                [1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 1, 2, 2, 2, 0, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 0, 1],
                [1, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 0, 1],
                [2, 0, 2, 2, 0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 1, 2, 0, 1, 1, 0, 0, 2, 0, 2, 2, 1, 2, 0, 1],
                [1, 2, 0, 1, 2, 2, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 0, 1, 1],
                [1, 1, 0, 1, 0, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 2, 2, 2, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 1, 2, 2, 1],
                [1, 0, 0, 0, 0, 1, 1, 2, 0, 2, 0, 0, 2, 2, 1, 2, 1, 0, 0, 1],
                [1, 0, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(15, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(20, 50px)';
            createMaze(mazeMatrix, '305px', '45px', '-1040px', '-1010px');
        }
        else if (maze === '6') {
            const mazeMatrix = [
                [1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1],
                [1, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 1, 1],
                [1, 0, 1, 0, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 1],
                [1, 2, 2, 0, 1, 2, 0, 1, 0, 0, 0, 1, 0, 2, 1],
                [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 2, 0, 0, 1],
                [1, 0, 2, 2, 2, 2, 2, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 1, 2, 1],
                [1, 2, 2, 2, 0, 1, 2, 2, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 2, 0, 1],
                [1, 0, 1, 2, 0, 2, 0, 1, 2, 2, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(15, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(15, 50px)';
            createMaze(mazeMatrix, '655px', '95px', '-690px', '-840px');
        }
        else if (maze === '7') {
            const mazeMatrix = [
                [1, 2, 2, 1, 3, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1],
                [1, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 1, 2, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0, 2, 2, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 2, 2, 1, 2, 0, 1, 2, 1, 0, 1, 0, 2, 0, 2, 2, 2, 1],
                [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 2, 2, 2, 2, 2, 0, 1, 0, 1, 0, 1, 2, 2, 0, 2, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 2, 2, 2, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 2, 2, 2, 0, 1, 2, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 2, 2, 2, 0, 1, 2, 2, 0, 1, 2, 2, 2, 2, 0, 2, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(17, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(19, 50px)';
            createMaze(mazeMatrix, '55px', '145px', '-1330px', '-885px');
        }
        else if (maze === '8') {
            const mazeMatrix = [
                [1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 1, 0, 2, 0, 2, 2, 0, 2, 1, 2, 1, 0, 2, 0, 1, 0, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
                [1, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 2, 1, 0, 2, 0, 1],
                [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 1, 0, 2, 0, 1, 0, 2, 2, 1, 0, 1, 0, 2, 2, 2],
                [1, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                [1, 0, 0, 2, 0, 1, 2, 2, 0, 2, 2, 1, 0, 1, 0, 2, 0, 1, 2, 1],
                [1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 1],
                [1, 3, 2, 2, 0, 0, 0, 1, 2, 2, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1],
                [1, 2, 2, 2, 0, 1, 0, 1, 2, 0, 1, 2, 0, 2, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 1],
                [1, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 2, 1, 0, 0, 0, 2, 0, 1],
                [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(17, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(20, 50px)';
            createMaze(mazeMatrix, '355px', '995px', '-1030px', '-65px');
        }
        else if (maze === '9') {
            const mazeMatrix = [
                [1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
                [1, 0, 2, 1, 0, 1, 0, 2, 2, 2, 2, 2, 2, 1, 0, 2, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 0, 1],
                [1, 2, 0, 0, 0, 2, 0, 1, 0, 1, 0, 1, 0, 2, 2, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 2, 0, 1],
                [1, 0, 1, 1, 0, 1, 0, 2, 2, 1, 0, 2, 2, 1, 0, 1, 0, 1, 2, 0, 0, 1],
                [1, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 2, 1, 0, 0, 2, 1],
                [1, 0, 0, 2, 0, 1, 2, 2, 0, 1, 1, 1, 0, 1, 0, 1, 0, 2, 2, 0, 0, 1],
                [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 1, 0, 2, 0, 0, 0, 0, 1, 1],
                [1, 2, 0, 2, 2, 1, 0, 1, 2, 2, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 2, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 1],
                [1, 2, 2, 1, 0, 1, 2, 1, 0, 2, 1, 2, 0, 2, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 1, 0, 2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 2, 2, 1],
                [1, 2, 0, 2, 0, 0, 0, 2, 0, 1, 2, 0, 2, 1, 0, 1, 0, 2, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(17, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(22, 50px)';
            createMaze(mazeMatrix, '5px', '595px', '-1385px', '-515px');
        }
        else if (maze === '10') {
            const mazeMatrix = [
                [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1],
                [1, 0, 2, 1, 0, 0, 0, 1, 2, 0, 2, 1, 0, 1, 0, 2, 2, 1, 0, 0, 0, 1, 1, 0, 1],
                [1, 0, 0, 1, 0, 1, 2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 2, 0, 1, 2, 2, 0, 1],
                [1, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 2, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1],
                [1, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 2, 0, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 2, 2, 0, 1, 0, 2, 2, 1],
                [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 3, 1, 0, 1],
                [1, 2, 0, 1, 0, 1, 0, 1, 2, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 2, 0, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 1],
                [1, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(17, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(25, 50px)';
            createMaze(mazeMatrix, '55px', '645px', '-1335px', '-535px');
        }
        else if (maze === '11') {
            const mazeMatrix = [
                [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 2, 2, 1, 0, 2, 0, 1, 0, 1, 2, 1, 0, 0, 0, 1, 0, 1, 0, 2, 1],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2, 2, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 1, 0, 2, 2, 2, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 2, 2, 0, 1, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 3, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 1],
                [1, 0, 2, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 2, 1, 0, 1, 0, 2, 0, 2, 2, 2, 1],
                [1, 0, 1, 0, 2, 2, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 1, 0, 2, 2, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 0, 2, 2, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 2, 2, 2, 1, 0, 2, 0, 2, 0, 1, 0, 0, 0, 1, 2, 2, 0, 2, 2, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 2, 2, 2, 0, 2, 2, 1, 2, 2, 0, 1, 0, 2, 2, 2, 0, 1, 0, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
              ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(13, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(23, 50px)';
            createMaze(mazeMatrix, '155px', '645px', '-1240px', '-490px');
        }
        else if (maze === '12') {
            const mazeMatrix = [
                [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1],
                [1, 3, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 2, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 1, 2, 0, 1, 1, 0, 1, 0, 1],
                [1, 0, 2, 0, 0, 0, 2, 0, 1, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 1, 2, 0, 2, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
              ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(10, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(25, 50px)';

            eyeless.style.width = '4000px';
            createMaze(mazeMatrix, '55px', '95px', '-1670px', '-1580px');
        }
        else if (maze === '13') {
            const mazeMatrix = [
                [1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 2, 1, 0, 2, 0, 2, 0, 1, 2, 2, 2, 1, 0, 2, 0, 0, 1, 2, 1, 0, 2, 2, 0, 2, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 0, 2, 0, 0, 1, 2, 0, 2, 2, 0, 1],
                [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 1, 0, 2, 0, 1, 0, 2, 1, 0, 1, 0, 1, 2, 2, 0, 1, 0, 1, 0, 0, 2, 1],
                [1, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 1, 0, 0, 1],
                [1, 0, 0, 2, 0, 2, 2, 2, 0, 2, 1, 0, 1, 0, 1, 0, 2, 2, 1, 2, 2, 0, 0, 1, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 0, 1],
                [1, 2, 2, 2, 2, 2, 0, 1, 2, 0, 2, 0, 1, 0, 2, 2, 1, 0, 0, 0, 1, 0, 1, 3, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(13, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(27, 50px)';

            eyeless.style.width = '4000px';
            createMaze(mazeMatrix, '55px', '95px', '-1740px', '-1635px');
        }
        else if (maze === '14') {
            const mazeMatrix = [
                [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 2, 2, 2, 0, 2, 1, 2, 2, 0, 1, 2, 2, 0, 2, 2, 2, 2, 0, 1, 2, 2, 2, 0, 2, 0, 1, 0, 2, 0, 2, 2, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 2, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 2, 1, 2, 2, 2, 2, 2, 0, 1, 2, 2, 2, 0, 2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 2, 0, 2, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 2, 0, 2, 2, 2, 0, 1, 2, 2, 2, 2, 0, 2, 2, 1, 0, 2, 2, 2, 0, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0, 2, 2, 1],
                [1, 2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 1, 3, 2, 2, 2, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(14, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(33, 50px)';
            
            eyeless.style.width = '4000px';
            createMaze(mazeMatrix, '55px', '795px', '-1760px', '-1080px');
        }
        else if (maze === '15') {
            const mazeMatrix = [
                [1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 1, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 1, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 0, 2, 2, 1],
                [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 3, 1, 0, 2, 2, 1, 0, 1],
                [1, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
                [1, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 2, 1, 0, 2, 2, 2, 1, 2, 2, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 2, 2, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(16, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(34, 50px)';
            
            eyeless.style.width = '4000px';
            createMaze(mazeMatrix, '355px', '395px', '-1510px', '-1510px');
        }
        else if (maze === '16') {
            const mazeMatrix = [
                [1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 2, 2, 0, 2, 2, 1, 0, 1, 2, 1, 0, 2, 2, 1, 0, 1, 2, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 0, 1, 2, 0, 2, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 1],
                [1, 2, 2, 0, 1, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 2, 0, 1, 2, 2, 0, 1, 2, 2, 0, 2, 0, 0, 1, 2, 1, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 1, 0, 2, 2, 2, 1, 0, 1, 2, 1, 0, 1, 2, 2, 0, 2, 2, 2, 2, 0, 1, 0, 2, 2, 2, 0, 2, 1, 2, 2, 0, 2, 2, 1, 2, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1],
                [1, 0, 2, 1, 2, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 2, 2, 2, 1, 0, 1, 0, 2, 2, 2, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2, 1],
                [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 0, 1],
                [1, 2, 2, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 2, 0, 1, 0, 2, 2, 1, 0, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 2, 2, 2, 0, 1, 2, 2, 0, 0, 0, 2, 2, 1, 2, 2, 2, 1, 2, 0, 1, 0, 2, 1, 2, 2, 2, 2, 0, 1, 2, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 2, 0, 1],
                [1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 1, 0, 2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 1, 2, 0, 0, 0, 1],
                [1, 4, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];

            const matrix = { matrix: mazeMatrix };
            localStorage.setItem('mazeMatrix', JSON.stringify(matrix), {encoding: 'utf8', flag: 'w'})
            
            mazeContainer.style.gridTemplateRows = 'repeat(17, 50px)';
            mazeContainer.style.gridTemplateColumns = 'repeat(39, 50px)';
            
            eyeless.style.width = '4000px';
            createMaze(mazeMatrix, '55px', '95px', '-1840px', '-1940px');
        }
    } catch (error) {
        console.log("Помилка виникла:", error.message);
    }
});

function LockImage(){
    const currentLvl = localStorage.getItem('currentLvl');
    const lvl2 = document.getElementById('lvl2');
    const lvl3 = document.getElementById('lvl3');
    const lvl4 = document.getElementById('lvl4');
    const lvl5 = document.getElementById('lvl5');
    const lvl6 = document.getElementById('lvl6');
    const lvl7 = document.getElementById('lvl7');
    const lvl8 = document.getElementById('lvl8');
    const lvl9 = document.getElementById('lvl9');
    const lvl10 = document.getElementById('lvl10');
    const lvl11 = document.getElementById('lvl11');
    const lvl12 = document.getElementById('lvl12');
    const lvl13 = document.getElementById('lvl13');
    const lvl14 = document.getElementById('lvl14');
    const lvl15 = document.getElementById('lvl15');
    const lvl16 = document.getElementById('lvl16');

    if (currentLvl < 2){
        lvl2.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 3){
        lvl3.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 4){
        lvl4.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 5){
        lvl5.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 6){
        lvl6.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 7){
        lvl7.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 8){
        lvl8.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 9){
        lvl9.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 10){
        lvl10.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 11){
        lvl11.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 12){
        lvl12.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 13){
        lvl13.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 14){
        lvl14.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 15){
        lvl15.style.backgroundImage= "url('../image/lock.jpg')";
    }
    if (currentLvl < 16){
        lvl16.style.backgroundImage= "url('../image/lock.jpg')";
    }
}

function createMaze(mazeMatrix, top, left, top2, left2) {
    var player = document.getElementById('player');
    var eyeless = document.getElementById('eyeless');
    const mazeContainer = document.getElementById('maze');

    mazeMatrix.forEach((row) => {
        row.forEach((cell) => {
            const mazeCell = document.createElement('div');
            mazeCell.classList.add('cell');
            if (cell === 0) {
                mazeCell.classList.add('road');
            } else if ( cell === 1) {
                mazeCell.classList.add('wall-top');
            } else if ( cell === 2) {
                mazeCell.classList.add('wall-side');
            } else if ( cell === 3) {
                mazeCell.classList.add('door');
            } else if ( cell === 4) {
                mazeCell.classList.add('crystal');
            }
            mazeContainer.appendChild(mazeCell);
        });
    });

    player.style.top = top;
    player.style.left = left;
    eyeless.style.top = top2;
    eyeless.style.left = left2;
}

//мій варіант + бот
function movePlayer(keyCode) {
    var player = document.getElementById('player');
    var eyeless = document.getElementById('eyeless');
    var mazeContainer = document.getElementById('maze');
    var currentTop = parseInt(player.style.top) || 0;
    var currentLeft = parseInt(player.style.left) || 0;
    var eyelessTop = parseInt(eyeless.style.top) || 0;
    var eyelessLeft = parseInt(eyeless.style.left) || 0;
    var matrix = JSON.parse(localStorage.getItem('mazeMatrix'));
    var mazeMatrix = matrix.matrix;

    var data = {
        currentTop: currentTop,
        currentLeft: currentLeft,
        eyelessTop: eyelessTop,
        eyelessLeft: eyelessLeft,
        mazeMatrix: mazeMatrix,
        mazeContainer: mazeContainer
    };

    switch(keyCode) {
        case "ArrowUp":
            data.currentTop -= 50;
            data.eyelessTop -= 50;
            if (getCellClass(data) === 'cell road') {
                if (player.classList != 'move-top') {
                    player.classList.add('move-top');
                    eyeless.classList.add('move-top');
                }
                setTimeout( function () {
                    player.classList.remove('move-top');
                    eyeless.classList.remove('move-top');
                    player.style.top = data.currentTop + 'px';
                    eyeless.style.top = data.eyelessTop + 'px';
                }, 100);
            }
            break;
        case "ArrowDown":
            data.currentTop += 50;
            data.eyelessTop += 50;
            if (getCellClass(data) === 'cell road') {
                if (player.classList != 'move-down') {
                    player.classList.add('move-down');
                    eyeless.classList.add('move-down');
                }
                setTimeout( function () {
                    player.classList.remove('move-down');
                    eyeless.classList.remove('move-down');
                    player.style.top = data.currentTop + 'px';
                    eyeless.style.top = data.eyelessTop + 'px';
                }, 100);
            }
            break;
        case "ArrowLeft":
            data.currentLeft -= 50;
            data.eyelessLeft -= 50;
            if (getCellClass(data) === 'cell road') {
                if (player.classList != 'move-left') {
                    player.classList.add('move-left');
                    eyeless.classList.add('move-left');
                }
                setTimeout( function () {
                    player.classList.remove('move-left');
                    eyeless.classList.remove('move-left');
                    player.style.left = data.currentLeft + 'px';
                    eyeless.style.left = data.eyelessLeft + 'px';
                }, 100);
            }
            break;
        case "ArrowRight":
            data.currentLeft += 50;
            data.eyelessLeft += 50;
            if (getCellClass(data) === 'cell road') {
                if (player.classList != 'move-right') {
                    player.classList.add('move-right');
                    eyeless.classList.add('move-right');
                }
                setTimeout( function () {
                    player.classList.remove('move-right');
                    eyeless.classList.remove('move-right');
                    player.style.left = data.currentLeft + 'px';
                    eyeless.style.left = data.eyelessLeft + 'px';
                }, 100);
            }
            break;
    }
}

// Визначення координат клітинки
function getPoint(data) {
    var precent = getPercent(data);
    var row = Math.floor(precent.top / (100 / data.mazeMatrix.length));
    var col = Math.floor(precent.left / (100 / data.mazeMatrix[0].length));
    const point = {
        row: row,
        col: col
    };
    return point;
}

// ??????
function getPercent(data) {
    var playerTopPercent = (data.currentTop / data.mazeContainer.clientHeight) * 100;
    var playerLeftPercent = (data.currentLeft / data.mazeContainer.clientWidth) * 100;
    const precent = {
        top: playerTopPercent,
        left: playerLeftPercent
    };
    return precent;
}

// Визначення класу клітинки
function getCellClass(data) {
    const maze = localStorage.getItem('maze');
    var point = getPoint(data)
    var index = point.row * data.mazeMatrix[0].length + point.col;
    var cellElement = data.mazeContainer.children[index];
    console.log(localStorage.getItem('currentLvl'));
    console.log(localStorage.getItem(maze));
    if (cellElement.classList.value === 'cell door' || cellElement.classList.value === 'cell crystal') {
        if (parseInt(maze) >= parseInt(localStorage.getItem('currentLvl'))) {
            localStorage.setItem('currentLvl' , String(parseInt(maze)+1));
        }
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
    }
    return cellElement.classList.value;
}

document.addEventListener('keydown', function (event) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        movePlayer(event.key);
    }
});

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
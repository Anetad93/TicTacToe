let tictactoe = {
    areaOfGame: 5,
    numberOfCellsToWin: 4,
    cells: $('#area .cell'),
    circleClass: 'is-circle',
    crossClass: 'is-cross',
    multiplayer: false,
    isCircle: false,
    endGame: false,

    _init: function () {
        this.registeredEvents()
    },

    registeredEvents: function () {
        tictactoe.popUp()
        $('#winner').on('click', 'button#playAgain' ,tictactoe.playAgain)
    },

    popUp: function () {

        // $('#sighsToWin').on('change',function(){
        //     let optionText = $("#sighsToWin option:selected").text();
        //     alert("Selected Option Text: "+optionText);
        // });

        $('#startGame').click(this.startGame)
        $('#clearArea').click(this.getClearArea)
    },

    startGame: function () {
        tictactoe.creatingAreaGame(tictactoe.areaOfGame, tictactoe.areaOfGame)
        $('#area .cell').on('click', tictactoe.onAreaClick)
        $('#startGame').remove()

        $('.popup').removeClass('active')
    },

    creatingAreaGame: function (areaOfGameRows, areaOfGameColumns) {
        for (let i = 1; i <= areaOfGameRows; i++) {
            for (let j = 1; j <= areaOfGameColumns; j++) {
                $("#area").append(`
                <div class="cell" data-row="` + i + `" data-column="` + j + `"></div>
                `)
            }
        }
    },

    onAreaClick: function () {
        if (tictactoe.endGame) {
            return
        }
        let playAgainButton = '<button id="playAgain" class="gameButtons">Play again</button>'

        if (!tictactoe.multiplayer) {
            if (tictactoe.isCircle) {
                $(this).addClass('is-circle')
                $('#nameOfActualPlayer').text("Teraz gra gracz: Krzyżyki")

                for (let x = 1; x <= tictactoe.areaOfGame; x++) {
                    for (let y = 1; y <= tictactoe.areaOfGame; y++) {
                        if (tictactoe.checkWinTime(x, y, tictactoe.circleClass) === tictactoe.numberOfCellsToWin) {
                            $('#winner').text("Wygrały kółka")
                                .append(playAgainButton)
                            tictactoe.endGame = true
                            break
                        }
                    }
                }

                tictactoe.isCircle = false
            } else {
                $(this).addClass('is-cross')
                $('#nameOfActualPlayer').text("Teraz gra gracz: Kółka")

                for (let x = 1; x <= tictactoe.areaOfGame; x++) {
                    for (let y = 1; y <= tictactoe.areaOfGame; y++) {
                        if (tictactoe.checkWinTime(x, y, tictactoe.crossClass) === tictactoe.numberOfCellsToWin) {
                            $('#winner').text("Wygrały krzyżyki")
                                .append(playAgainButton)
                            tictactoe.endGame = true
                            break
                        }
                    }
                }
            tictactoe.isCircle = true
            }
        }
    },

    checkWinTime: function (i, j, typeOfClass) {
        let firstLength = 1
        let secondLength = 1
        let thirdLength = 1
        let fourthLength = 1
        let fifthLength = 1
        let sixthLength = 1
        let seventhLength = 1
        let eighthLength = 1

        if (tictactoe.getCell(i, j).hasClass(typeOfClass)) {
            if (tictactoe.getCell(i + 1, j).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i + k, j).hasClass(typeOfClass) && tictactoe.getCell(i + k + 1, j).hasClass(typeOfClass)) {
                        firstLength++
                    }
                }
            }
            if (tictactoe.getCell(i, j + 1).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i, j + k).hasClass(typeOfClass) && tictactoe.getCell(i, j + k + 1).hasClass(typeOfClass)) {
                        secondLength++
                    }
                }
            }
            if (tictactoe.getCell(i + 1, j - 1).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i + k, j - k).hasClass(typeOfClass) && tictactoe.getCell(i + k + 1, j - k - 1).hasClass(typeOfClass)) {
                        thirdLength++
                    }
                }
            }
            if (tictactoe.getCell(i, j - 1).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i, j - k).hasClass(typeOfClass) && tictactoe.getCell(i, j - k - 1).hasClass(typeOfClass)) {
                        fourthLength++
                    }
                }
            }
            if (tictactoe.getCell(i - 1, j).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i - k, j).hasClass(typeOfClass) && tictactoe.getCell(i - k - 1, j).hasClass(typeOfClass)) {
                        fifthLength++
                    }
                }
            }
            if (tictactoe.getCell(i - 1, j - 1).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i - k, j - k).hasClass(typeOfClass) && tictactoe.getCell(i - k - 1, j - k - 1).hasClass(typeOfClass)) {
                        sixthLength++
                    }
                }
            }
            if (tictactoe.getCell(i - 1, j + 1).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i - k, j + k).hasClass(typeOfClass) && tictactoe.getCell(i - k - 1, j + k + 1).hasClass(typeOfClass)) {
                        seventhLength++
                    }
                }
            }
            if (tictactoe.getCell(i + 1, j + 1).hasClass(typeOfClass)) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i + k, j + k).hasClass(typeOfClass) && tictactoe.getCell(i + k + 1, j + k + 1).hasClass(typeOfClass)) {
                        eighthLength++
                    }
                }
            }
            let win = tictactoe.numberOfCellsToWin

            if (firstLength === win || secondLength === win || thirdLength === win || fourthLength === win || fifthLength === win || sixthLength === win || seventhLength === win || eighthLength === win) {
                return win
            }
            // console.log(firstLength, secondLength, thirdLength, fourthLength, fifthLength, sixthLength, seventhLength, eighthLength,i,j)
        }
    },

    getCell: function (row, column) {
        return $('#area .cell[data-row="' + row + '"][data-column=' + column + ']');
    },

    getClearArea: function () {
        $('.cell').removeClass("is-cross")
    },

    playAgain: function () {
        location.reload()
    }
}

tictactoe._init()
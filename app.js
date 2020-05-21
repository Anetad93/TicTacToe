let tictactoe = {
    areaOfGame: 5,
    numberOfCellsToWin: 3,
    cells: $('#area .cell'),
    theLongestLine: 0,

    _init: function () {
        this.registeredEvents()
    },

    registeredEvents: function () {
        this.creatingAreaGame(this.areaOfGame, this.areaOfGame)
        $('#area .cell').on('click', this.onAreaClick)
        $('#clearArea').click(this.getClearArea)
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
        $(this).addClass('is-cross')

        for (let x = 1; x <= tictactoe.areaOfGame; x++) {
            for (let y = 1; y <= tictactoe.areaOfGame; y++) {
                if (tictactoe.isCrossAround(x, y) === tictactoe.numberOfCellsToWin) {
                    alert("wygrana")
                    console.log(x,y)
                    console.log("here")
                    break
                }
            }
        }
    },

    isCrossAround: function (i, j) {
        let firstLength = 1
        let secondLength = 1
        let thirdLength = 1
        let fourthLength = 1
        let fifthLength = 1
        let sixthLength = 1
        let seventhLength = 1
        let eighthLength = 1

        if (tictactoe.getCell(i, j).hasClass('is-cross')) {
            if (tictactoe.getCell(i + 1, j).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i + k, j).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j).hasClass('is-cross')) {
                        firstLength++
                    }
                }
            }
            if (tictactoe.getCell(i, j + 1).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i, j + k).hasClass('is-cross') && tictactoe.getCell(i, j + k + 1).hasClass('is-cross')) {
                        secondLength++
                    }
                }
            }
            if (tictactoe.getCell(i + 1, j - 1).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i + k, j - k).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j - k - 1).hasClass('is-cross')) {
                        thirdLength++
                    }
                }
            }
            if (tictactoe.getCell(i, j - 1).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i, j - k).hasClass('is-cross') && tictactoe.getCell(i, j - k - 1).hasClass('is-cross')) {
                        fourthLength++
                    }
                }
            }
            if (tictactoe.getCell(i - 1, j).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i - k, j).hasClass('is-cross') && tictactoe.getCell(i - k - 1, j).hasClass('is-cross')) {
                        fifthLength++
                    }
                }
            }
            if (tictactoe.getCell(i - 1, j - 1).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i - k, j - k).hasClass('is-cross') && tictactoe.getCell(i - k - 1, j - k - 1).hasClass('is-cross')) {
                        sixthLength++
                    }
                }
            }
            if (tictactoe.getCell(i - 1, j + 1).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i - k, j + k).hasClass('is-cross') && tictactoe.getCell(i - k - 1, j + k + 1).hasClass('is-cross')) {
                        seventhLength++
                    }
                }
            }
            if (tictactoe.getCell(i + 1, j + 1).hasClass('is-cross')) {
                for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
                    if (tictactoe.getCell(i + k, j + k).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j + k + 1).hasClass('is-cross')) {
                        eighthLength++
                    }
                }
            }
            let win = tictactoe.numberOfCellsToWin

            if  (firstLength === win || secondLength === win || thirdLength === win || fourthLength === win || fifthLength === win || sixthLength === win || seventhLength === win || eighthLength === win){
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
}

tictactoe._init()
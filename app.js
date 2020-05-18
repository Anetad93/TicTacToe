let tictactoe = {
    areaOfGame: 5,
    cells: $('#area .cell'),
    arr: [],


    _init: function () {
        this.registeredEvents()
    },

    registeredEvents: function () {
        this.creatingAreaGame(this.areaOfGame, this.areaOfGame)
        $('#area .cell').on('click', this.onAreaClick)
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

        let cellRowAndColumnNumber = []
        cellRowAndColumnNumber.push($(this).data('row'))
        cellRowAndColumnNumber.push($(this).data('column'))
        tictactoe.arr.push(cellRowAndColumnNumber)
        tictactoe.checkWin(tictactoe.arr)
    },

    checkWin: function (arr) {
        console.log(arr)
        let winLengthRow = 1
        let winLengthColumn = 1

        if (arr.length < 3) {
        } else {
            for (let i = 0; i < arr.length; i++) {
                console.log("Komórka z numerem " + arr[i])
                if (arr[i][0] === arr[i + 1][0] && (Math.abs(arr[i][1] - arr[i + 1][1]) === 1)) {
                    console.log("Wygrana wiersze")
                    winLengthRow++
                    console.log(winLengthRow + '-wiersze ' + winLengthColumn + '-kolumny')
                } else if (arr[i][1] === arr[i + 1][1] && (Math.abs(arr[i][0] - arr[i + 1][0]) === 1)) {
                    console.log("Wygrana kolumny")
                    winLengthColumn++
                    console.log(winLengthRow + '-wiersze ' + winLengthColumn + '-kolumny')
                }
            }
        }
    },
}

tictactoe._init()
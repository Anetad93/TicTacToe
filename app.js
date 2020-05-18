let tictactoe = {
    areaOfGame: 5,
    cells: $('#area .cell'),

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
        tictactoe.isCrossAround($(this).data('row'), $(this).data('column'))

    },

    isCrossAround: function (row, column) {
        let length = 1
        console.log(row, column)
        if (tictactoe.getCell(row + 1, column).hasClass('is-cross')) {
            length++
            console.log("row +1")
        } else if (tictactoe.getCell(row, column + 1).hasClass('is-cross')) {
            length++
            console.log("column +1")
        } else if (tictactoe.getCell(row + 1, column - 1).hasClass('is-cross') && $('.cell').data('column', column + 1).hasClass('is-cross')) {
            length++
            console.log("row+1 + column-1")
        } else if (tictactoe.getCell(row, column - 1).hasClass('is-cross')) {
            length++
            console.log("row + column-1")
        } else if (tictactoe.getCell(row - 1, column).hasClass('is-cross')) {
            length++
            console.log("row -1 + column")
        } else if (tictactoe.getCell(row - 1, column - 1).hasClass('is-cross')) {
            length++
            console.log("column -1 + column -1")
        } else if (tictactoe.getCell(row - 1, column + 1).hasClass('is-cross')) {
            length++
            console.log("column -1 + column +1")
        } else if (tictactoe.getCell(row + 1, column + 1).hasClass('is-cross')) {
            length++
            console.log("column +1 + column +1")
        }
        console.log("Długość to " + length)
    },

    getCell: function (row, column) {
        return $('#area .cell[data-row="' + row + '"][data-column=' + column + ']');
    }
}

tictactoe._init()
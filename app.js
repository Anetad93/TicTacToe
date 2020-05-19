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
        tictactoe.checkArea()
        // tictactoe.isCrossAround($(this).data('row'), $(this).data('column'))
        // if (tictactoe.isCrossAround(1, 1) >= tictactoe.numberOfCellsToWin) {
        //     alert("wygrana")
        // }


    },

    isCrossAround: function (i, j) {
        if (tictactoe.getCell(i - 1, j - 1 || i - 1, j || i - 1, j + 1 || i, j - 1 || i, j + 1 || i + 1, j - 1 || i + 1, j || i + 1, j + 1).hasClass('is-cross')) {
            return true
        }

        // let length = 1
        //
        // for (let i = x; i <= tictactoe.areaOfGame; i++) {
        //     for (let j = y; j <= tictactoe.areaOfGame; j++) {
        //         if (tictactoe.getCell(i - 1, j - 1 || i -1, j || i -1, j+1 || i, j -1 || i, j+1 || i + 1, j - 1 || i +1, j || i+1, j+1).hasClass('is-cross')) {
        //             length++
        //             if (length === tictactoe.numberOfCellsToWin) return length
        //         }

        // if (tictactoe.getCell(i, j).hasClass('is-cross')) {
        //     if (tictactoe.getCell(i + 1, j).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i + k, j).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("row +1" + length)
        //         }
        //     } else if (tictactoe.getCell(i, j + 1).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i, j + k).hasClass('is-cross') && tictactoe.getCell(i, j + k + 1).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("column +1" + length)
        //         }
        //     } else if (tictactoe.getCell(i + 1, j - 1).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i + k, j - k).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j - k -1).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("row+1 + column-1" + length)
        //         }
        //     } else if (tictactoe.getCell(i, j - 1).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i, j - k).hasClass('is-cross') && tictactoe.getCell(i, j - k -1).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("row + column-1" + length)
        //         }
        //     } else if (tictactoe.getCell(i - 1, j).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i - k, j).hasClass('is-cross') && tictactoe.getCell(i - k -1, j).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("row -1 + column")
        //         }
        //     } else if (tictactoe.getCell(i - 1, j - 1).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i - k, j - k).hasClass('is-cross') && tictactoe.getCell(i - k- 1, j - k - 1).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("column -1 + column -1" + length)
        //         }
        //     } else if (tictactoe.getCell(i - 1, j + 1).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i - k, j + k).hasClass('is-cross') && tictactoe.getCell(i - k - 1, j + k + 1).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("column -1 + column +1" + length)
        //         }
        //     } else if (tictactoe.getCell(i + 1, j + 1).hasClass('is-cross')) {
        //         for (let k = 1; k < tictactoe.numberOfCellsToWin; k++) {
        //             if (tictactoe.getCell(i + k, j + k).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j + k + 1).hasClass('is-cross')) {
        //                 length++
        //                 if (length === 3) return length
        //             }
        //             console.log("column +1 + column +1" + length)
        //         }
        //     }
        // }
        //     }
        // }

        // if (tictactoe.getCell(row + 1, column).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row + i, column).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("row +1")
        // } else if (tictactoe.getCell(row, column + 1).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row, column + i).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("column +1")
        // } else if (tictactoe.getCell(row + 1, column - 1).hasClass('is-cross') && $('.cell').data('column', column + 1).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row + i, column - i).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("row+1 + column-1")
        // } else if (tictactoe.getCell(row, column - 1).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row, column - i).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("row + column-1")
        // } else if (tictactoe.getCell(row - 1, column).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row - i, column).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("row -1 + column")
        // } else if (tictactoe.getCell(row - 1, column - 1).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row - i, column - i).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("column -1 + column -1")
        // } else if (tictactoe.getCell(row - 1, column + 1).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row - i, column + i).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("column -1 + column +1")
        // } else if (tictactoe.getCell(row + 1, column + 1).hasClass('is-cross')) {
        //     length++
        //     for (let i = 2; i <= tictactoe.numberOfCellsToWin; i++) {
        //         if (tictactoe.getCell(row + i, column + i).hasClass('is-cross')) {
        //             length++
        //         }
        //     }
        //     console.log("column +1 + column +1")
        // }

    },

    checkArea: function () {

        for (let i = 1; i < tictactoe.areaOfGame; i++) {
            for (let j = 1; j < tictactoe.areaOfGame; j++) {
                if (tictactoe.isCrossAround(i, j) === true) {
                    tictactoe.theLongestLine++
                    let direction = tictactoe.getDirection(i,j)

                }
            }
        }
    },

    getDirection: function (i, j) {
        if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i + 1, j).hasClass('is-cross')) {
            return [1, 0]
        } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i - 1, j).hasClass('is-cross')) {
            return [-1, 0]
        } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i, j - 1).hasClass('is-cross')) {
            return [0, -1]
        } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i, j + 1).hasClass('is-cross')) {
            return [0, 1]
        } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i - 1, j + 1).hasClass('is-cross')) {
            return [-1, 1]
        } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i + 1, j + 1).hasClass('is-cross')) {
            return [1, 1]
        } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i - 1, j - 1).hasClass('is-cross')) {
            return [-1, -1]
        } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i + 1, j - 1).hasClass('is-cross')) {
            return [1, -1]
        }
    },

    getCell: function (row, column) {
        return $('#area .cell[data-row="' + row + '"][data-column=' + column + ']');
    }
}

tictactoe._init()
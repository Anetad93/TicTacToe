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
        if (tictactoe.isCrossAround(1, 1) === tictactoe.numberOfCellsToWin) {
            alert("wygrana")
        }
    },

    isCrossAround: function (i, j) {
        if (i > tictactoe.areaOfGame) {
            i = 1
            j = j + 1
        }

        if (j > tictactoe.areaOfGame) {
            j = 1
            i = i + 1
        }

        if (i === tictactoe.areaOfGame && j === tictactoe.areaOfGame) {
            return
        }
        // console.log(i, j)
        let firstLength = 1
        let secondLength = 1
        let thirdLength = 1
        let fourthLength = 1
        let fifthLength = 1
        let sixthLength = 1
        let seventhLength = 1
        let eighthLength = 1

        // if (tictactoe.getCell(i, j).hasClass('is-cross')) {
        //     for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
        //         if (tictactoe.getCell(i + 1, j).hasClass('is-cross')) {
        //             if (tictactoe.getCell(i + k, j).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j).hasClass('is-cross')) {
        //                 length++
        //                 console.log(length + " i + 1, j ")
        //                 if (length === tictactoe.numberOfCellsToWin) return length
        //             } else {
        //                 length = 1
        //                 if (tictactoe.getCell(i, j + 1).hasClass('is-cross')) {
        //
        //                 }
        //             }
        //
        //         } else break
        //         if (tictactoe.getCell(i, j + 1).hasClass('is-cross')) {
        //             if (length === tictactoe.numberOfCellsToWin) return length
        //             else {
        //                 if (tictactoe.getCell(i, j + k).hasClass('is-cross') && tictactoe.getCell(i, j + k + 1).hasClass('is-cross')) {
        //                     length++
        //                     console.log(length + " i, j + 1 ")
        //                 }
        //             }
        //         } else break
        //         if (tictactoe.getCell(i + 1, j - 1).hasClass('is-cross')) {
        //             for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
        //                 let length = 1
        //                 if (tictactoe.getCell(i + k, j - k).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j - k - 1).hasClass('is-cross')) {
        //                     length++
        //                     if (length === tictactoe.numberOfCellsToWin) return length
        //                 } else break
        //             }
        //         }
        //         if (tictactoe.getCell(i, j - 1).hasClass('is-cross')) {
        //             for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
        //                 let length = 1
        //                 if (tictactoe.getCell(i, j - k).hasClass('is-cross') && tictactoe.getCell(i, j - k - 1).hasClass('is-cross')) {
        //                     length++
        //                     if (length === tictactoe.numberOfCellsToWin) return length
        //                 } else break
        //             }
        //         }
        //         if (tictactoe.getCell(i - 1, j).hasClass('is-cross')) {
        //             for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
        //                 let length = 1
        //                 if (tictactoe.getCell(i - k, j).hasClass('is-cross') && tictactoe.getCell(i - k - 1, j).hasClass('is-cross')) {
        //                     length++
        //                     if (length === tictactoe.numberOfCellsToWin) return length
        //                 } else break
        //             }
        //         }
        //         if (tictactoe.getCell(i - 1, j - 1).hasClass('is-cross')) {
        //             for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
        //                 let length = 1
        //                 if (tictactoe.getCell(i - k, j - k).hasClass('is-cross') && tictactoe.getCell(i - k - 1, j - k - 1).hasClass('is-cross')) {
        //                     length++
        //                     if (length === tictactoe.numberOfCellsToWin) return length
        //                 } else break
        //             }
        //         }
        //         if (tictactoe.getCell(i - 1, j + 1).hasClass('is-cross')) {
        //             for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
        //                 let length = 1
        //                 if (tictactoe.getCell(i - k, j + k).hasClass('is-cross') && tictactoe.getCell(i - k - 1, j + k + 1).hasClass('is-cross')) {
        //                     length++
        //                     if (length === tictactoe.numberOfCellsToWin) return length
        //                 } else break
        //             }
        //         }
        //         if (tictactoe.getCell(i + 1, j + 1).hasClass('is-cross')) {
        //             for (let k = 0; k < tictactoe.numberOfCellsToWin; k++) {
        //                 let length = 1
        //                 if (tictactoe.getCell(i + k, j + k).hasClass('is-cross') && tictactoe.getCell(i + k + 1, j + k + 1).hasClass('is-cross')) {
        //                     length++
        //                     if (length === tictactoe.numberOfCellsToWin) return length
        //                 } else break
        //             }
        //         }
        //     }
        // }

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
            console.log(win)

            if (firstLength < win || secondLength < win || thirdLength < win || fourthLength < win || fifthLength < win ||sixthLength < win || seventhLength < win || eighthLength < win ) {
                tictactoe.isCrossAround(i + 1, j)
            }  else return win
            console.log(firstLength, secondLength, thirdLength, fourthLength, fifthLength, sixthLength, seventhLength, eighthLength )

        } else {
            tictactoe.isCrossAround(i + 1, j)
        }

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

    }
    ,

    // getDirection: function (i, j) {
    //     if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i + 1, j).hasClass('is-cross')) {
    //         return [1, 0]
    //     } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i - 1, j).hasClass('is-cross')) {
    //         return [-1, 0]
    //     } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i, j - 1).hasClass('is-cross')) {
    //         return [0, -1]
    //     } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i, j + 1).hasClass('is-cross')) {
    //         return [0, 1]
    //     } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i - 1, j + 1).hasClass('is-cross')) {
    //         return [-1, 1]
    //     } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i + 1, j + 1).hasClass('is-cross')) {
    //         return [1, 1]
    //     } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i - 1, j - 1).hasClass('is-cross')) {
    //         return [-1, -1]
    //     } else if (tictactoe.getCell(i, j).hasClass('is-cross') && tictactoe.getCell(i + 1, j - 1).hasClass('is-cross')) {
    //         return [1, -1]
    //     }
    // },

    getCell: function (row, column) {
        return $('#area .cell[data-row="' + row + '"][data-column=' + column + ']');
    }
}

tictactoe._init()
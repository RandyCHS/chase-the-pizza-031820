sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
    info.startCountdown(2)
})
let pizza: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 3 8 3 8 3 8 . . . . 
. . . . . 8 3 3 3 3 3 8 . . . . 
. . . . . 8 3 3 7 3 3 8 . . . . 
. . . . . 8 3 3 3 3 3 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 . . 9 . . 8 . . . . 
. . . . . 8 . 8 9 8 . 8 . . . . 
. . . . . 8 . 8 . 8 . 8 . . . . 
. . . . . 8 . 8 . 8 . 8 . . . . 
. . . . . . . 8 . 8 . . . . . . 
. . . . . . . 8 . 8 . . . . . . 
. . . . . . . 8 . 8 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
pizza = sprites.create(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 3 3 3 3 2 e . . . . 
. . . 2 3 d 1 1 d d 3 2 e . . . 
. . 2 3 1 d 7 3 7 d d 3 e . . . 
. 2 3 1 3 3 3 7 3 d 1 3 b e . . 
. 2 1 d 7 7 3 3 d 7 7 1 3 b b . 
2 3 1 d 7 7 1 1 3 7 7 1 3 4 b b 
2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
2 d 3 7 3 1 1 3 3 7 3 1 b 4 4 e 
e d 3 3 7 7 7 7 7 3 d d b 4 4 e 
e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
e 3 d 3 3 1 d d 3 d 1 b b e e . 
. e 3 1 1 d d 1 1 1 b b e e e . 
. . e 3 3 3 3 3 3 b e e e e . . 
. . . e e e e e e e e e e . . . 
`, SpriteKind.Food)

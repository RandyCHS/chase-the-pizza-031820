def on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    pizza.setPosition(randint(10, 150), randint(10, 110))
    info.start_countdown(2)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)
pizza: Sprite = None
scene.set_background_color(7)
mySprite = sprites.create(img("""
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
"""), SpriteKind.player)
controller.move_sprite(mySprite, 200, 200)
pizza = sprites.create(img("""
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
"""), SpriteKind.food)
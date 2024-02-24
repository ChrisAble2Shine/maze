namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hops_and_paws.vy == 0) {
        hops_and_paws.vy = -190
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 1 1 1 f 1 1 1 f . . . . . 
        . . f 1 1 1 f 1 1 1 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 5 5 5 5 f 5 5 f . . . . . 
        . . f 5 5 5 5 f 5 5 f . . . . . 
        . . f 5 5 5 5 f 5 5 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 5 5 f 5 5 f . . . . . 
        . . . f 5 5 5 f 5 5 f . . . . . 
        . . . f 5 5 5 f 5 5 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 1 1 1 f 1 1 1 f . . . . . 
        . . f 1 1 1 f 1 1 1 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 5 5 5 5 f 5 5 f . . . . . 
        . . f 5 5 5 5 f 5 5 f . . . . . 
        . . f 5 5 5 5 f 5 5 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(hops_and_paws.x + 80, hops_and_paws.y - 80)
    bee.follow(hops_and_paws)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    current_level += 1
    startLevel()
})
function startLevel () {
    hops_and_paws = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . . f f f . 
        . . . . . . . . . . . . f f 5 f 
        f f f f f f f f f f f f f f f f 
        . . . . f f f f f f f f f f . . 
        . . . . f f f f f f f f f . . . 
        . . . . f . f . . . f . f . . . 
        . . . . f . f . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(hops_and_paws, 100, 0)
    if (current_level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (false) {
        tiles.setCurrentTilemap(tilemap`level5`)
    } else {
        tiles.setCurrentTilemap(tilemap`level6`)
    }
    tiles.placeOnRandomTile(hops_and_paws, assets.tile`myTile5`)
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    hops_and_paws.ay = 350
    scene.cameraFollowSprite(hops_and_paws)
    info.setLife(9)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a . . . a . . . . . . 
            . . . . . 3 4 5 4 3 . . . . . . 
            . . . . . . a 3 a . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . 7 7 7 7 7 7 7 7 7 7 . . . . 
            . . 6 7 7 7 7 7 7 7 7 6 . . . . 
            . . 6 7 7 7 7 7 7 7 6 . . . . . 
            . . . . 7 7 7 7 7 . . . . . . . 
            . . . . . 6 7 7 6 . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            `, SpriteKind.flower)
        tiles.placeOnTile(flower, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    if (hops_and_paws.y < otherSprite.y) {
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
})
let flower: Sprite = null
let coin: Sprite = null
let bee: Sprite = null
let hops_and_paws: Sprite = null
let current_level = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999911111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999911111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999911111111111111111111111111111111199999999999999999999999999999911111111111111111111111999999999999999999999999999999999999999999999999999999999999
    9999999999999911111111111111111111111111111111999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999999999999999999999999
    9999999999999911111111111111111111111111111111999999999999999999999999911111111111111111111111111111111111119999999999999999999999999999999999999999999999999999
    9999999999999911111111111111111111111111111111999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999
    9999999999999911111111111111111111111111111999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999
    9999999999999911111111111111111111111111199999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999
    9999999999999999111111111111111111111199999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999
    9999999999999999999911111111111999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111199999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999111111111111119999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999966699999999999999999999999999999999999999999999999999966666699999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999966666699999999999999999999999999999999999999999999999966666666666999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999996666666669999999999999999999999999999999999999999999996666666666666699999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999666666666669999999999999999999999999999999999999999999666666666666666669999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999996666666666669999999999999999999999999999999999999999666666666666666666666999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999966666666666666999999999999999999999999999999999999996666666666666666666666999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999996666666666666666999999999999999999999999999999999999666666666666666666666666699999999999999999999999999999999999999999999
    9999999999999999999999999999999999999966666666666666666699999999999999999999999999999999996666666666666666666666666699999999999999999999999999999999999999999999
    9999999999999999999999999999999999999666666666666666666699999999999999999999999999999999996666666666666666666666666669999999999999999999999999999999999999999999
    9999999999999999999999999999999999996666666666666666666699999999999999999999999999999999966666666666666666666666666669999999999999999999999999999999999999999999
    9999999999999999999999999999999999966666666666666666666699999999999999999999999999999999666666666666666666666666666669999999999999999999999999999999999999999999
    9999999999999999999999999999999999966666666666666666666699999999999999999999999999999999666666666666666666666666666669999999999999999999999999999999999999999999
    9999999999999999999999999999999999666666666666666666666699999999999999999999999999999999666666666666666666666666666669999999999999999999999999999999999999999999
    9999999999999999999999999999999996666666666666666666666699999999999999999999999999999996666666666666666666666666666669999999999999999999999999999999999999999999
    9999999999999999999999999999999966666666666666666666666699999999999999999999999999999996666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999999999666666666666666666666666699999999999999999999999999999966666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999999999666666666666666666666666699999999999999999999999999999966666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999999996666666666666666666666666699999999999999999999999999999666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999999966666666666666666666666666669999999999999999999999999999666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999999666666666666666666666666666669999999999999999999999999999666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999996666666666666666666666666666669999999999999999999999999999666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999966666666666666666666666666666669999999999999999999999999996666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999966666666666666666666666666666669999999999999999999999999996666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999999666666666666666666666666666666669999999999999999999999999966666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666666666666666666999999999999999999999999966666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666666666666666666999999999999999999999999966666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999966666666666666666666666666666666666999999999999999999999999666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999966666666666666666666666666666666666699999999999999999999999666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999666666666666666666666666666666666666699999999999999999999999666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999999666666666666666666666666666666666666699999999999999999999996666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999996666666666666666666666666666666666666669999999999999999999996666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999996666666666666666666666666666666666666669999999999999999999996666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999966666666666666666666666666666666666666669999999999999999999996666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999966666666666666666666666666666666666666666999999999999999999966666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999666666666666666666666666666666666666666666999999999999999999966666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999999666666666666666666666666666666666666666666999999999999999999966666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999996666666666666666666666666666666666666666666699999999999999999666666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999996666666666666666666666666666666666666666666699999999999999999666666666666666666666666666666666666666999999999999999999999999999999999999999999
    9999999999999999966666666666666666666666666666666666666666666699999999999999999666666666666666666666666666666666666666699999999999999999999999999999999999999999
    9999999999999999966666666666666666666666666666666666666666666699999999999999999666666666666666666666666666666666666666699999999999999999999999999999999999999999
    9999999999999999966666666666666666666666666666666666666666666669999999999999996666666666666666666666666666666666666666699999999999999999999999999999999999999999
    9999999999999999666666666666666666666666666666666666666666666669999999999999996666666666666666666666666666666666666666699999999999999999999999999999999999999999
    9999999999999996666666666666666666666666666666666666666666666669999999999999996666666666666666666666666666666666666666699999999999999999999999999999999999999999
    9999999999999996666666666666666666666666666666666666666666666669999999999999996666666666666666666666666666666666666666699999999999999999999999999999999999999999
    9999999999999996666666666666666666666666666666666666666666666666999999999999996666666666666666666666666666666666666666699999999999999999999999999999999999999999
    9999999999999966666666666666666666666666666666666666666666666666999999999999966666666666666666666666666666666666666666669999999999999999999999999999999999999999
    9999999999999666666666666666666666666666666666666666666666666666999999999999966666666666666666666666666666666666666666669999999999999999999999999999999999999999
    9999999999999666666666666666666666666666666666666666666666666666999999999999966666666666666666666666666666666666666666669999999999999999999999999999999999999999
    9999999999996666666666666666666666666666666666666666666666666666699999999999966666666666666666666666666666666666666666669999999999999999999999999999999999999999
    9999999999996666666666666666666666666666666666666666666666666666699999999999966666666666666666666666666666666666666666669999999999999999999999999999999999999999
    9999999999996666666666666666666666666666666666666666666666666666699999999999666666666666666666666666666666666666666666666999999999999999999999999999999999999999
    9999999999966666666666666666666666666666666666666666666666666666699999999999666666666666666666666666666666666666666666666999999999999999999999999999999999999999
    9999999999666666666666666666666666666666666666666666666666666666669999999999666666666666666666666666666666666666666666666999999999999999999999999999999999999999
    9999999999666666666666666666666666666666666666666666666666666666669999999999666666666666666666666666666666666666666666666699999999999999999999999999999999999999
    9999999999666666666666666666666666666666666666666666666666666666669999999999666666666666666666666666666666666666666666666699999999999999999999999999999999999999
    9999999996666666666666666666666666666666666666666666666666666666666999999999666666666666666666666666666666666666666666666699999999999999999999999999999999999999
    9999999996666666666666666666666666666666666666666666666666666666666999999999666666666666666666666666666666666666666666666669999999999999999999999999999999999999
    9999999966666666666666666666666666666666666666666666666666666666666999999996666666666666666666666666666666666666666666666669999999999999999999999999999999999999
    9999999966666666666666666666666666666666666666666666666666666666666699999996666666666666666666666666666666666666666666666666999999999999999999999999999999999999
    9999999666666666666666666666666666666666666666666666666666666666666699999996666666666666666666666666666666666666666666666666999999999999999999999999999999999999
    9999999666666666666666666666666666666666666666666666666666666666666699999996666666666666666666666666666666666666666666666666699999999999999999999999999999999999
    9999996666666666666666666666666666666666666666666666666666666666666669999996666666666666666666666666666666666666666666666666699999999999999999999999999999999999
    9999996666666666666666666666666666666666666666666666666666666666666669999996666666666666666666666666666666666666666666666666669999999999999999999999999999999999
    9999996666666666666666666666666666666666666666666666666666666666666666999996666666666666666666666666666666666666666666666666666999999999999999999999999999999999
    9999966666666666666666666666666666666666666666666666666666666666666666999996666666666666666666666666666666666666666666666666666999999999999999999999999999999999
    9999966666666666666666666666666666666666666666666666666666666666666666699996666666666666666666666666666666666666666666666666666699999999999999999999999999999999
    9999666666666666666666666666666666666666666666666666666666666666666666699996666666666666666666666666666666666666666666666666666669999999999999999999999999999999
    9996666666666666666666666666666666666666666666666666666666666666666666669996666666666666666666666666666666666666666666666666666666999999999999999999999999999999
    9996666666666666666666666666666666666666666666666666666666666666666666669996666666666666666666666666666666666666666666666666666666999999999999999999999999999999
    9966666666666666666666666666666666666666666666666666666666666666666666666996666666666666666666666666666666666666666666666666666666669999999999999999999999999999
    9666666666666666666666666666666666666666666666666666666666666666666666666966666666666666666666666666666666666666666666666666666666666999999999999999999999999999
    9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999
    `)
current_level = 0
startLevel()
game.onUpdate(function () {
    hops_and_paws.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . . f f f . 
        . . . . . . . . . . . . f f 5 f 
        f f f f f f f f f f f f f f f f 
        . . . . f f f f f f f f f f . . 
        . . . . f f f f f f f f f . . . 
        . . . . f . f . . . f . f . . . 
        . . . . f . f . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (hops_and_paws.vx < 0) {
        hops_and_paws.image.flipX()
    }
})

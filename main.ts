namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.setGameOverEffect(false, effects.melt)
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
    bee.setPosition(hops_and_paws.x + 80, hops_and_paws.y + 80)
    bee.follow(hops_and_paws)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
})
let bee: Sprite = null
let flower: Sprite = null
let coin: Sprite = null
let hops_and_paws: Sprite = null
scene.setBackgroundColor(9)
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
tiles.setCurrentTilemap(tilemap`level1`)
hops_and_paws.ay = 350
scene.cameraFollowSprite(hops_and_paws)
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

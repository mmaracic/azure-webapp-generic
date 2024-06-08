import { Engine, Scene } from "react-babylonjs"

function Game(children: Readonly<JSX.Element>) {
  return (
    <div style={{ flex: 1, display: 'flex' }}>
      <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
        <Scene>{children}</Scene>
      </Engine>
    </div>
  )

}

export default Game
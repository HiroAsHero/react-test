import React from 'react'
import AFRAME from 'aframe'

export default function ShopPage() {
  return (
    <>
        <div>ShopPage</div>
            {/* 背景音楽を再生する */}
            <a-scene sound="src: #background-music; on: click; loop: true; volume: 0.1; rolloffFactor: 0">
                {/* 利用素材の一覧 */}
                <a-assets timeout="10000">    {/* //タイムアウトを設定することで、読み込みが遅い場合にも表示できるようにする */}
                  <a-asset-item id="car_obj" src="images/IronMan.obj"></a-asset-item>
                  <a-asset-item id="car_mtl" src="images/IronMan.mtl"></a-asset-item>
                  <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"></img>
                  <audio id="background-music" src="sounds/nagagutsudeodekake.mp3" preload='auto'></audio>
                </a-assets>
            
                <a-light type="ambient" color="#445451"></a-light>
                <a-light type="point" intensity="2" position="2 4 4"></a-light>
                
                {/* 風景を設定 */}
                <a-sky src="images/puydesancy.jpg" rotation="0 -130 0"></a-sky>

                {/* テキストを設定 */}
                <a-text font="kelsonsans" value="Somewhere..." width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>

                {/* aframe内にIron Manの３Dモデルを表示する */}
                <a-entity 
                  obj-model="obj: #car_obj; mtl: #car_mtl" 
                  position="82.475 19.621 -294.911" 
                  scale="0.32 0.25 0.19" 
                  animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true" 
                  scale-on-mouseenter
                ></a-entity>

                {/* <a-box src="#boxTexture" position="0 2 -5" rotation="0 45 45" scale="2 2 2"
                  animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
                  scale-on-mouseenter onMouseEnter={hoge}></a-box> */}
              
                {/* 地面を設定する */}
                {/* <a-plane src="#groundTexture" rotation="-90 0 0" width="30" height="30" repeat="10 10"></a-plane> */}


                {/* カーソルをカメラ中央に設定する */}
                <a-camera>
                  <a-cursor></a-cursor>
                </a-camera>

          </a-scene>
    </>

  )
}


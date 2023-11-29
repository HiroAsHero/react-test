import React from 'react'
import Aframe from 'aframe'

export default function ShopPage() {
  return (
    <>
        <div>ShopPage</div>
          <a-scene>
            
                <a-sky src="images/puydesancy.jpg" rotation="0 -130 0"></a-sky>
                <a-text font="kelsonsans" value="Somewhere..." width="6" position="-2.5 0.25 -1.5"
                          rotation="0 15 0"></a-text>

                {/* aframe内にIron Manの３Dモデルを表示する */}
                <a-entity obj-model="obj: #car_obj; mtl: #car_mtl" position="0 0 -4" scale="0.5 0.5 0.5"></a-entity>
                <a-assets timeout="10000">
                <a-asset-item id="car_obj" src="images/IronMan.obj"></a-asset-item>
                <a-asset-item id="car_mtl" src="images/IronMan.mtl"></a-asset-item>
            </a-assets>
          </a-scene>


    </>

  )
}

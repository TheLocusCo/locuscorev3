import React from 'react'

import { currentHost } from 'utils/http'

/*
//Mount scene first and then pass it to all entities
let scene = new window.xeogl.Scene({
  canvas: document.getElementById("scene")
})
*/

class SolarSystem extends React.Component {
  componentDidMount() {
    let scene = new window.xeogl.Scene({
      canvas: document.getElementById("scene")
    })

    scene.lights.lights = [
      new window.xeogl.DirLight({
          id: "worldLight1",
          dir: [1.0, 0.0, 0.0],
          color: [1.0, 1.0, 1.0],
          intensity: 1.0,
          space: "world"
      }),
      new window.xeogl.DirLight({
          id: "fillLight",
          dir: [-1.0, 0.0, -0.0],
          color: [1.0, 1.0, 1.0],
          intensity: 1.0,
          space: "world"
      })
    ];

    new window.xeogl.Entity(scene,
      {
        geometry: new window.xeogl.Geometry(scene, { // Box-shaped geometry
            primitive: "triangles",
            positions: [
                1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, // v0-v1-v2-v3 front
                1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, // v0-v3-v4-v5 right
                1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, 1, // v0-v5-v6-v1 top
                -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, // v1-v6-v7-v2 left
                -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, // v7-v4-v3-v2 bottom
                1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1 // v4-v7-v6-v5 back
            ],
            uv: [
                0.5, 0.6666,
                0.25, 0.6666,
                0.25, 0.3333,
                0.5, 0.3333,
                0.5, 0.6666,
                0.5, 0.3333,
                0.75, 0.3333,
                0.75, 0.6666,
                0.5, 0.6666,
                0.5, 1,
                0.25, 1,
                0.25, 0.6666,
                0.25, 0.6666,
                0.0, 0.6666,
                0.0, 0.3333,
                0.25, 0.3333,
                0.25, 0,
                0.50, 0,
                0.50, 0.3333,
                0.25, 0.3333,
                0.75, 0.3333,
                1.0, 0.3333,
                1.0, 0.6666,
                0.75, 0.6666
            ],
            indices: [
                0, 1, 2,
                0, 2, 3,
                4, 5, 6,
                4, 6, 7,
                8, 9, 10,
                8, 10, 11,
                12, 13, 14,
                12, 14, 15,
                16, 17, 18,
                16, 18, 19,
                20, 21, 22,
                20, 22, 23
            ]
        }),
        transform: new window.xeogl.Scale(scene, { // Scale the box
            xyz: [5000, 5000, 5000]
        }),
        material: new window.xeogl.PhongMaterial(scene, { // Emissive map of sky, no diffuse, ambient or specular reflection
            ambient: [0, 0, 0],
            diffuse: [0, 0, 0],
            specular: [0, 0, 0],
            emissive: [1, 1, 1],
            emissiveMap: new window.xeogl.Texture(scene, {
                src: `${currentHost()}/images/textures/solar_system/milky_way.png`,
                flipY: true
            }),
            backfaces: true // Show interior faces of our skybox geometry
        }),
        stationary: true, // Locks position with respect to viewpoint
        pickable: false,
        collidable: false
    });

    new window.xeogl.Entity(scene,
      {
        geometry: new window.xeogl.SphereGeometry(scene, {
          center: [0,0,0],
          radius: 37,
          heightSegments: 60,
          widthSegments: 60
        }),
        material: new window.xeogl.SpecularMaterial(scene, {
          diffuse: [1.0, 1.0, 1.0],
          specular: [0.0, 0.0, 0.0],
          glossiness: 0.9,
          emissive: [0.0, 0.0, 0.0],
          alpha: 0.7,
          diffuseMap: new window.xeogl.Texture(scene, {
            src: `${currentHost()}/images/textures/solar_system/Sun.png`,
            flipY: true,
            encoding: "sRGB"
          })
        })
      }
    );

    new window.xeogl.Entity(scene,
      {
        geometry: new window.xeogl.SphereGeometry(scene, {
          center: [0,0,0],
          radius: 40,
          heightSegments: 60,
          widthSegments: 60
        }),
        material: new window.xeogl.SpecularMaterial(scene, {
          diffuse: [1.0, 1.0, 1.0],
          specular: [0.0, 0.0, 0.0],
          glossiness: 1.0,
          emissive: [0.0, 0.0, 0.0],
          alpha: 0.9,
          diffuseMap: new window.xeogl.Texture(scene, {
            src: `${currentHost()}/images/textures/solar_system/Sun.png`,
            flipY: true,
            encoding: "sRGB"
          })
        })
      }
    );

    // Move the camera back a bit
    scene.camera.zoom(120);
    // Orbit the eye position about the look position.
    scene.on("tick", function () {
                var camera = scene.camera;
                camera.orbitYaw(0.2);
                // camera.orbitPitch(0.1);
            });
    // Control camera with mouse and keyboard
    new window.xeogl.CameraControl(scene);
  }

  render() {
    return (
      <article className='portfolio-item' style={{textAlign: 'center'}}>
        <canvas id='scene' style={{width: '980px', height: '980px', zIndex: 20}}/>
      </article>
    )
  }
}

export default SolarSystem

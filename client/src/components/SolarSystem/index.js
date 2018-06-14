import React from 'react'

import { currentHost } from 'utils/http'

class SolarSystem extends React.Component {
  componentDidMount() {
    window.SceneJS.configure({
      pluginPath: `${currentHost()}/js/scenejs_plugins`
    });
    window.SceneJS.createScene({
        //type: "scene",
        id: "scene",
        canvasId: "scene",

        nodes: [

            {
                type:"cameras/orbitAround",
                id : "camera",
                pitch:-15,
                zoom:1050,
                zoomSensitivity:10.0,



                nodes: [
                    {
                        type: "lights",
                        id: "myLights",
                        lights:[
                            {
                                mode:                   "dir",
                                color:                  { r: 1.0, g: 1.0, b: 1.0 },
                                diffuse:                true,
                                specular:               true,
                                dir:                    { x: 1.0, y: 0.0, z: 0.0 },
                                space:                  "world"
                            },
                            {
                                mode:                   "dir",
                                color:                  { r: 1.0, g: 1.0, b: 1.0 },
                                diffuse:                true,
                                specular:               true,
                                dir:                    { x: -1.0, y: 0.0, z: 0.0 },
                                space:                  "world"
                            }
                        ],

                        nodes: [
                            {
                                type:"skyboxes/custom",
                                src: `${currentHost()}/images/textures/solar_system/milky_way.png`,
                                size:5000 // Box half-size on each axis - default is 5000
                            },
                            {
                                type:"objects/space/planets/sun"
                            },
                            {
                                //revolution speed of Mercury: 365/87.969 = 4.1492
                                type: "rotate",
                                id: "mercuryyaw",
                                y: 4.1492,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "mercurypitch",
                                        x: 4.1492,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -50,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type:"material",
                                                        specular:1.0,
                                                        emit:0,
                                                        alpha:1.0,

                                                        nodes: [
                                                            {
                                                                type: "texture",
                                                                layers: [
                                                                    {
                                                                        uri: `${currentHost()}/images/textures/solar_system/Mercury.jpg`,
                                                                        flipY: true
                                                                    }
                                                                ],
                                                                nodes: [
                                                                    {
                                                                        type: "prims/sphere",
                                                                        id: "Mercury",
                                                                        radius: 1
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                //revolution speed of Venus: 365/224.65 = 1.6247
                                type: "rotate",
                                id: "venusyaw",
                                y: 1.6247,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "venuspitch",
                                        x: 1.6247,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -100,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Venus.jpg`,
                                                                flipY: true
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Venus",
                                                                radius: 3
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                //revolution speed of Earth: 365/365 = 1.0
                                type: "rotate",
                                id: "earthyaw",
                                y: 1,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "earthpitch",
                                        x: 1,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -150,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Earth.jpg`,
                                                                flipY: false
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Earth",
                                                                radius: 3,
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: "rotate",
                                                        id: "moonyaw",
                                                        y: 1,
                                                        nodes: [
                                                            {
                                                                type: "rotate",
                                                                id: "moonpitch",
                                                                x: 1,
                                                                nodes: [
                                                                    {
                                                                        type: "translate",
                                                                        x: -5,
                                                                        y: 0,
                                                                        z: 0,
                                                                        nodes: [
                                                                            {
                                                                                type: "texture",
                                                                                layers: [
                                                                                    {
                                                                                        uri: `${currentHost()}/images/textures/solar_system/Moon.jpg`,
                                                                                        flipY: true
                                                                                    }
                                                                                ],
                                                                                nodes: [
                                                                                    {
                                                                                        type: "prims/sphere",
                                                                                        id: "Moon",
                                                                                        radius: 0.5
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                //revolution speed of Mars: 365/687 = 0.5313
                                type: "rotate",
                                id: "marsyaw",
                                y: 0.5313,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "marspitch",
                                        x: 0.5313,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -200,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Mars.jpg`,
                                                                flipY: true
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Mars",
                                                                radius: 1.5
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "rotate",
                                id: "jupiteryaw",
                                y: 0.0843,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "jupiterpitch",
                                        x: 0.0843,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -300,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Jupiter.jpg`,
                                                                flipY: true
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Jupiter",
                                                                radius: 12
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "rotate",
                                id: "saturnyaw",
                                y: 0.03390,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "saturnpitch",
                                        x: 0.03390,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -350,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Saturn.jpg`,
                                                                flipY: true
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Saturn",
                                                                radius: 9
                                                            },
                                                        ]
                                                    },

                                                    {
                                                        type: "rotate",
                                                        angle: 90.0,
                                                        x:1,
                                                        nodes: [
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.2, g: 0.2, b: 0.0 },
                                                                specularColor:  { r: 0.1, g: 0.1, b: 0.0 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         19,
                                                                        innerRadius:    18,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.5, g: 0.5, b: 0.0 },
                                                                specularColor:  { r: 0.4, g: 0.4, b: 0.0 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         17.7,
                                                                        innerRadius:    15.7,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.9, g: 0.9, b: 0.0 },
                                                                specularColor:  { r: 0.7, g: 0.7, b: 0.0 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         15.0,
                                                                        innerRadius:    12.7,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.5, g: 0.5, b: 0.0 },
                                                                specularColor:  { r: 0.4, g: 0.4, b: 0.0 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         12.3,
                                                                        innerRadius:    10.5,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "rotate",
                                id: "uranusyaw",
                                y: 0.01190,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "uranuspitch",
                                        x: 0.01190,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -400,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Uranus.jpg`,
                                                                flipY: true
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Uranus",
                                                                radius: 6
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: "rotate",
                                                        angle: 90.0,
                                                        y:1,
                                                        x:0.1,
                                                        nodes: [
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.9, g: 0.9, b: 0.9 },
                                                                specularColor:  { r: 0.4, g: 0.4, b: 0.4 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         11,
                                                                        innerRadius:    10.6,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.5, g: 0.7, b: 0.7 },
                                                                specularColor:  { r: 0.1, g: 0.4, b: 0.4 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         10.3,
                                                                        innerRadius:    9.6,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.5, g: 0.7, b: 0.7 },
                                                                specularColor:  { r: 0.1, g: 0.4, b: 0.4 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         9.4,
                                                                        innerRadius:    8.7,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.5, g: 0.5, b: 0.6 },
                                                                specularColor:  { r: 0.1, g: 0.3, b: 0.3 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         8.5,
                                                                        innerRadius:    7.8,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "rotate",
                                id: "neptuneyaw",
                                y: 0.006068,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "neptunepitch",
                                        x: 0.006068,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -450,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Neptune.jpg`,
                                                                flipY: true
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Neptune",
                                                                radius: 6
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        type: "rotate",
                                                        angle: 90.0,
                                                        y:1,
                                                        x:-0.5,
                                                        nodes: [
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.9, g: 0.9, b: 0.9 },
                                                                specularColor:  { r: 0.4, g: 0.4, b: 0.4 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         11,
                                                                        innerRadius:    10.9,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                type: "material",
                                                                baseColor:      { r: 0.9, g: 0.9, b: 0.9 },
                                                                specularColor:  { r: 0.4, g: 0.4, b: 0.4 },
                                                                nodes: [
                                                                    {
                                                                        type: "prims/torus",
                                                                        radius:         8,
                                                                        innerRadius:    7.9,
                                                                        height:         0.1,
                                                                        rings:          50
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "rotate",
                                id: "plutoyaw",
                                y: 0.004032,
                                nodes: [
                                    {
                                        type: "rotate",
                                        id: "plutopitch",
                                        x: 0.004032,
                                        nodes: [
                                            {
                                                type: "translate",
                                                x: -500,
                                                y: 0,
                                                z: 0,
                                                nodes: [
                                                    {
                                                        type: "texture",
                                                        layers: [
                                                            {
                                                                uri: `${currentHost()}/images/textures/solar_system/Pluto.jpg`,
                                                                flipY: true
                                                            }
                                                        ],
                                                        nodes: [
                                                            {
                                                                type: "prims/sphere",
                                                                id: "Pluto",
                                                                radius: 1
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: "rotate",
                                x: 1,
                                angle: 90,
                                nodes: [
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         50.2,
                                                innerRadius:    49.8,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:100,
                                                segmentsT:100
                                            }
                                        ]
                                    },
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         100.5,
                                                innerRadius:    99.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:100,
                                                segmentsT:100
                                            }
                                        ]
                                    },
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         150.5,
                                                innerRadius:    149.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:100,
                                                segmentsT:100
                                            }
                                        ]
                                    },
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         200.5,
                                                innerRadius:    199.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:100,
                                                segmentsT:100
                                            }
                                        ]
                                    },
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         300.5,
                                                innerRadius:    299.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:100,
                                                segmentsT:100
                                            }
                                        ]
                                    },
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         350.5,
                                                innerRadius:    349.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:100,
                                                segmentsT:100
                                            }
                                        ]
                                    },
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         400.5,
                                                innerRadius:    399.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:100,
                                                segmentsT:100
                                            }
                                        ]
                                    },
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         450.5,
                                                innerRadius:    449.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:150,
                                                segmentsT:150
                                            }
                                        ]
                                    },
                                    /*
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         500.5,
                                                innerRadius:    499.5,
                                                semiMajorAxis:  1.15,
                                                height:         0.1,
                                                rings:          90
                                            }
                                        ]
                                    },
                                    */
                                    {
                                        type: "material",
                                        baseColor:      { r: 0.2, g: 0.2, b: 0.2 },
                                        nodes: [
                                            {
                                                type: "prims/torus",
                                                radius:         500.5,
                                                innerRadius:    499.5,
                                                height:         0.1,
                                                tube:0.30,
                                                segmentsR:200,
                                                segmentsT:200
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });

    /*----------------------------------------------------------------------
     * Scene rendering loop and mouse & keyboard handler stuff follows
     *---------------------------------------------------------------------*/

    var scene = window.SceneJS.scene("scene");
    var camera = scene.getNode("camera");
    var time = 0;
    var mercuryyaw = 0;
    var mercurypitch = 0;
    var venusyaw = 0;
    var venuspitch = 0;
    var earthyaw = 0;
    var earthpitch = 0;
    var marsyaw = 0;
    var marspitch = 0;
    var moonyaw = 0;
    var moonpitch = 0;
    var jupiteryaw = 0;
    var jupiterpitch = 0;
    var saturnyaw = 0;
    var saturnpitch = 0;
    var uranusyaw = 0;
    var uranuspitch = 0;
    var neptuneyaw = 0;
    var neptunepitch = 0;
    var plutoyaw = 0;
    var plutopitch = 0;
    var amp = 0.0001;

    document.onkeydown = checkKeycode
    function checkKeycode(e) {
      var keycode;
      if (window.event) keycode = window.event.keyCode;
      else if (e) keycode = e.which;
      if (keycode === 83) { // S - incease amp
        amp *= 2;
      }
      if (keycode === 65) { // A - decrease amp
        amp *= 0.5;
      }
    }


    var lastTime = 0;
    function animate() {
        var timeNow = new Date().getTime();
        if (lastTime !== 0) {
          var elapsed = timeNow - lastTime;
          mercuryyaw += (amp * elapsed) * 4.1492;
          venusyaw += (amp * elapsed) * 1.6247;
          earthyaw += (amp * elapsed) * 1;
          moonyaw += (amp * elapsed) * 1;
          marsyaw += (amp * elapsed) * 0.5313;
          jupiteryaw += (amp * elapsed) * 0.0843;
          saturnyaw += (amp * elapsed) * 0.03390;
          uranusyaw += (amp * elapsed) * 0.01190;
          neptuneyaw += (amp * elapsed) * 0.006068;
          plutoyaw += (amp * elapsed) * 0.004032;
        }
        lastTime = timeNow;
    }
    /*
    var canvas = document.getElementById("#{@graphic.canvas_id}");

    canvas.addEventListener('mousedown', mouseDown, true);
    canvas.addEventListener('mousemove', mouseMove, true);
    canvas.addEventListener('mouseup', mouseUp, true);
    */
    scene.on("tick", function() {

      animate();
      if (camera) {
        camera.orbit();
      }
      scene.getNode("mercurypitch", function(mercuryPitch) {
        mercuryPitch.setAngle(mercurypitch);
      });
      scene.getNode("mercuryyaw", function(mercuryYaw) {
        mercuryYaw.setAngle(mercuryyaw);
      });
      scene.getNode("venuspitch", function(venusPitch) {
        venusPitch.setAngle(venuspitch);
      });
      scene.getNode("venusyaw", function(venusYaw) {
        venusYaw.setAngle(venusyaw);
      });
      scene.getNode("earthpitch", function(earthPitch) {
        earthPitch.setAngle(earthpitch);
      });
      scene.getNode("earthyaw", function(earthYaw) {
        earthYaw.setAngle(earthyaw);
      });
      scene.getNode("moonyaw", function(moonYaw) {
        moonYaw.setAngle(moonyaw);
      });
      scene.getNode("moonpitch", function(moonPitch) {
        moonPitch.setAngle(moonpitch);
      });
      scene.getNode("marspitch", function(marsPitch) {
        marsPitch.setAngle(marspitch);
      });
      scene.getNode("marsyaw", function(marsYaw) {
        marsYaw.setAngle(marsyaw);
      });
      scene.getNode("jupiterpitch", function(jupiterPitch) {
        jupiterPitch.setAngle(jupiterpitch);
      });
      scene.getNode("jupiteryaw", function(jupiterYaw) {
        jupiterYaw.setAngle(jupiteryaw);
      });
      scene.getNode("saturnpitch", function(saturnPitch) {
        saturnPitch.setAngle(saturnpitch);
      });
      scene.getNode("saturnyaw", function(saturnYaw) {
        saturnYaw.setAngle(saturnyaw);
      });
      scene.getNode("uranuspitch", function(uranusPitch) {
        uranusPitch.setAngle(uranuspitch);
      });
      scene.getNode("uranusyaw", function(uranusYaw) {
        uranusYaw.setAngle(uranusyaw);
      });
      scene.getNode("neptunepitch", function(neptunePitch) {
        neptunePitch.setAngle(neptunepitch);
      });
      scene.getNode("neptuneyaw", function(neptuneYaw) {
        neptuneYaw.setAngle(neptuneyaw);
      });
      scene.getNode("plutopitch", function(plutoPitch) {
        plutoPitch.setAngle(plutopitch);
      });
      scene.getNode("plutoyaw", function(plutoYaw) {
        plutoYaw.setAngle(plutoyaw);
      });
      scene.getNode("myShader", function(sunShader) {
        sunShader.setParams({
          time: time
        });
      });
      time += 0.1;
    });
  }

  render() {
    return (
      <article className='portfolio-item' style={{textAlign: 'center'}}>
        <canvas id='scene' style={{width: '980px', height: '980px'}}/>
      </article>
    )
  }
}

export default SolarSystem

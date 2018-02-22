SceneJS.Types.addType("objects/space/planets/sun", {

    init:function (params) {

        var texturePath = SceneJS.getConfigs("pluginPath") + "node/objects/space/planets/sun/";

        this.addNode(                 
            {
                type: "rotate",
                id: "sunInneryaw",
                y: 1,
                nodes: [
                    {
                        type: "translate",
                        x: 0,
                        y: 0,
                        z: 0,
                        nodes: [
                            {
                                type: "layer",
                                priority: -1,
                                nodes: [
                                    {
                                        type: "material",
                                        baseColor:      { r: 1.0, g: 0.6, b: 0.0 },
                                        specular:       0.0,
                                        shine:          10.0,
                                        emit:           3.0,
                                        nodes: [
                                            {
                                                type: "texture",
                                                layers: [
                                                    {
                                                        src: texturePath + 'Sun.png',
                                                        flipY: true,
                                                    }
                                                ],
                                                nodes: [
                                                    {
                                                        type: "prims/sphere",
                                                        radius: 37
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {   
                                type: "layer",
                                priority: 0,
                                nodes: [
                                    {
                                        type: "flags",
                                        flags: {
                                            transparent: true,
                                            backfaces: true
                                        },
                                        nodes: [
                                            {
                                                type: "material",
                                                baseColor:      { r: 1.0, g: 0.6, b: 0.0 },
                                                specular:       0.0,
                                                shine:          10.0,
                                                emit:           1.0,
                                                alpha:          0.90,
                                                nodes: [
                                                    {
                                                        type: "shader",
                                                        id: "myShader",

                                                        shaders: [

                                                            /* Vertex shader
                                                             */
                                                            {
                                                                stage:  "vertex",

                                                                /* A GLSL snippet containing a custom function.
                                                                 *
                                                                 * The snippet can be given as either a string or an array
                                                                 * of strings.
                                                                 */
                                                                code: [
                                                                    "uniform float time;",

                                                                    "vec4 myModelPosFunc(vec4 pos){",
                                                                    "   pos.x+=sin(pos.x*5.0+time+10.0)*0.9;",
                                                                    "   pos.y+=sin(pos.y*5.0+time+10.0)*0.0;",
                                                                    "   pos.z+=sin(pos.z*5.0+time+10.0)*0.9;",
                                                                    "   return pos;",
                                                                    "}"],

                                                                /* Bind our custom function to a SceneJS vertex shader hook
                                                                 */
                                                                hooks: {
                                                                    modelPos: "myModelPosFunc"
                                                                }
                                                            },
                                                        ],

                                                        /* Expose the time uniform as a parameter which we'll set
                                                         * on this shader node within the render loop.
                                                         *
                                                         * We can also set shader parameters using a child shaderParams
                                                         * node - see other custom shader examples for how.
                                                         */
                                                        params: {
                                                            time: 0.0
                                                        },

                                                        nodes: [
                                                            {
                                                                type: "texture",
                                                                layers: [
                                                                    {
                                                                        uri: texturePath + 'Sun.png',
                                                                        flipY: true
                                                                    }
                                                                ],
                                                                nodes: [
                                                                    {
                                                                        type: "prims/sphere",
                                                                        id: "Sol",
                                                                        radius: 40
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
            }
        );

        this._tick = this.getScene().on("tick",
            function () {
                this.getScene().getNode("myShader", function(sunShader) {
                    sunShader.setParams({
                        time: time
                    });
                    time += 0.1;
                });
            }
        );
    },
    destroy:function () {
        this.getScene().off(this._tick);
    }
});
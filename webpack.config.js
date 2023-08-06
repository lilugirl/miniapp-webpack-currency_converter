const path=require('path')
const CopyWebpackPlugin=require('copy-webpack-plugin')
const less=require('less')
const babel=require('@babel/core')

module.exports={
    mode:"development",
    watch:true,
    entry:"./src/app.js",
    output:{
        path:path.join(__dirname,'dist'),
       
    },
    plugins:[
        new CopyWebpackPlugin({
            patterns:[
                {
                    from:"**/*.wxml",
                    to:"./",
                    context:"./src"
                },{
                    from:"**/*.wxs",
                    to:"./",
                    context:"./src"
                },{
                    from: "**/*.png",
                    to:"./",
                    context:"./src"
                },{
                    from: "**/*.json",
                    to:"./",
                    context:"./src"
                },{
                    from:"**/*.less",
                    to:(pathData)=>{
                        return path.join('./',pathData.absoluteFilename.replace(pathData.context,'').replace('.less','.wxss'))
                    },
                    context:"./src",
                    transform:(content)=>{
                        return less.render(content.toString()).then(function(output){
                            return output.css;
                        })
                    }
                },{
                    from:"**/*.js",
                    to:"./",
                    globOptions:{
                        ignore:["*.test.js","*.spec.js"]
                    },
                    transform(content){
                        const newCode=babel.transformSync(content,{
                            babelrc:true,
                            presets:["@babel/env"]
                        }).code;
                        return Promise.resolve(newCode.toString());
                    },
                    context:"./src"
                }
            ]
        })
    ]
}
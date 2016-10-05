# wangEditorWithFormula
针对wangEditor适配Kity Formula公式编辑插件
#使用方法
直接部署在web环境下即可查看效果(直接打开index.html无法正常工作),生成的公式会以base64图片的形式插入到编辑器中。
[预览效果](https://zhangyanzt.github.io/wangEditorWithFormula/)
#注意事项
1.公式编辑器需要通过全局变量activeEditor来确定活动的编辑器，当页面中只有一个编辑器时，可以直接使用官方的js文件，只需在实例化编辑器(如:editor)之后,在之后添加:window.activeEditor = editor  
2.多个编辑器在同一页面之中，需要做以下修改,打开wangEditor.js,找到c.fn.bindEvent,在其下面 g = function(o) {}函数体内添加   window.activeEditor = i.editor,或者直接使用本项目中的wangEditor.min.js。  
3.不支持IE9以下浏览器。  
4.建议服务端在接受数据时，对base64数据进行转换并保存成图片文件，然后替换掉图片的src。  
#效果预览
![preview1](https://github.com/zhangyanzt/wangEditorWithFormula/raw/master/preview1.png "preview1")
![preview2](https://github.com/zhangyanzt/wangEditorWithFormula/raw/master/preview2.png "preview2")

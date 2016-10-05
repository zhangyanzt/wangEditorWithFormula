(function() {


    // 获取 wangEditor 构造函数和 jquery
    var E = window.wangEditor;
    var $ = window.jQuery;

    // 用 createMenu 方法创建菜单
    E.createMenu(function(check) {
        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'symbol';
        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }
        // this 指向 editor 对象自身
        var editor = this;
        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor, // 编辑器对象
            id: menuId, // 菜单id
            title: '插入公式', // 菜单标题

            // 正常状态和选中装下的dom对象，样式需要自定义
            $domNormal: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-sigma"></i></a>'),
            $domSelected: $('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-sigma"></i></a>')
        });
        // panel 内容
        var $container = $('<div></div>');

        // var buttons  = '<button class="kf-ok">确定</button><button class="kf-cancel">取消</button>';
        $container.append('<iframe class="kity-formula" src="kityformula/ed.html" frameborder="0" width="800" height="350"></iframe>');
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $container,
            width: 820
        });

        // 增加到editor对象中

        editor.menus[menuId] = menu;
    });

})();

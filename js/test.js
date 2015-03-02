extjsAlert = function() {
    Ext.MessageBox.alert('提示框', '这是一个提示框', function(){
        alert('提示框关闭了');
    })
}

extjsPrompt = function() {
    Ext.MessageBox.prompt('输入框', '请输入姓名', function(btn, txt){
        Ext.MessageBox.alert('结果', '您点击了'+ btn + '按钮, <br>输入内容为' + txt);
    }, this, 300);
}

extjsConfirm = function() {
    Ext.MessageBox.confirm('确认', '请点击下面的按钮做出选择', function(btn){
        Ext.Msg.alert('您点击的是'+ btn);
    });
}

//自定义弹出框
extjsCustom = function() {
    var config = {
        title: '自定义对话框',
        msg: '这是一个自定义对话框',
        width: 400,
        multiline: true,
        closable: false,
        buttons: Ext.MessageBox.YESNOCANCEL,
        icon: Ext.MessageBox.QUESTION,
        fn: function(btn, txt){
            Ext.MessageBox.alert('结果', '您点击了'+btn+'按钮, 输入的值是' + txt);
        }
    };
    Ext.MessageBox.show(config);
}

//进度条对话框
extjsProgress = function() {
    Ext.MessageBox.show({
        title: '请等待',
        msg: '正在加载项目...',
        progressText: '正在初始化...',
        width: '300',
        progress: true,
        closable: false
    });
    var f = function(v) {
        return function() {
            if (v==12) {
                Ext.MessageBox.hide();
                Ext.MessageBox.alert('完成', '所有项目加载完毕');
            } else {
                var i = v/11;
                Ext.MessageBox.updateProgress(i, Math.round(100 * i) + '% 已完成')
            }
        };
    };

    for(var i=1; i<13; i++) {
        setTimeout(f(i), i*500);
    }
}

//消息框飞出
extjsAnimal = function() {
    var config = {
        title: '飞出的消息框',
        msg: '这是一个自定义对话框，强势飞出',
        width: 400,
        multiline: true,
        closable: false,
        buttons: Ext.MessageBox.YESNOCANCEL,
        icon: Ext.MessageBox.QUESTION,
        animEl: 'fly'
    };
    Ext.MessageBox.show(config);
}
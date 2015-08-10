Ext.onReady(function() {
	Ext.QuickTips.init();
	
//	var mk = new Ext.LoadMask(document.body, {  
//		msg: '正在更新数据，请稍候！',  
//		removeMask: true //完成后移除  
//	});
	
	var win = new Ext.Window({
		id: 'test',
		title: '窗口1',
		width: 400,
		height: 300,
		buttonAlign: 'center',
		buttons: [{
			text: '打开遮罩',
			handler: function() {
				var mk = new Ext.LoadMask(win.el, {  
					msg: '正在更新数据，请稍候！',  
					removeMask: true //完成后移除  
				});
				mk.show();
				
				Ext.Ajax.request({
					url: '192.168.2.233:8280/dasserver/dasprocess/destination/OPC_test',
					method: 'POST',
					params: {
						opip: '192.168.2.233',
						opport:8201,
						opuser:'sis',
						oppassword:'1111'
					},
//					url: './json/test.json',
					success: function(response, options) {
						mk.hide();
						alert('success');
					},
					failure: function(response, options) {
						mk.hide();
						alert('failure');
					}
				});
			}
		}, {
			text: '关闭遮罩',
			handler: function() {
				var mk = new Ext.LoadMask(win.el, {  
					msg: '正在更新数据，请稍候！',  
					removeMask: true //完成后移除  
				});
				mk.hide();
			}
		}]
	});
	
	
	
	var centerPanel = new Ext.Panel({
		title: '测试',
		region: 'center',
		items: [{
			xtype: 'button',
			text: '打开一个window',
			handler: function() {
				win.show();
			}
		}]
	});
	
	new Ext.Viewport({
		id: 'Viewport',
		items: [centerPanel]
	});
	
});
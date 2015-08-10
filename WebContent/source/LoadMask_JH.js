Ext.onReady(function() {
	/**
	 * 简单的树节点数据
	 */
	var nodes = {
		text: '江苏省',
		expanded: true,
		leaf: false,
		children: [{
			id: 'NJ',
			text: '南京市',
			leaf: false,
			children:[{
				text: '鼓楼区',
				leaf: true
			}, {
				text: '江宁区',
				leaf: true
			}]
		}, {
			id: 'NT',
			text: '南通市',
			expanded: true,
			children: [{
				text: '如皋市',
				leaf: true
			}, {
				text: '海安县',
				leaf: true
			}, {
				text: '启东市',
				leaf: true
			}]
		}]
	}
	
	var leftTree = new Ext.tree.TreePanel({
		id: 'LeftTree',
		root: nodes,
		region: 'west',
		animate: true,
		autoScroll: true,
		rootVisible: true,
		width: 150
	});
	
	var panel = new Ext.Panel({
		title: '左侧面板',
		region: 'center',
		width: 200
	});
	
	var mask = null;
	
	var win = new Ext.Window({
		title: 'LoadMask',
		width: 400,
		height: 300,
		layout: 'border',
		items: [leftTree, panel],
		buttons: [{
			text: '刷新',
			handler: function() {
				if(!mask) {
					mask = new Ext.LoadMask(win.el, {
						msg: '正在加载...'
					});
//					mask = new Ext.LoadMask(leftTree.el, {
//						msg: '正在加载...'
//					});
				}
				mask.show();
			}
		}, {
			text: '停止',
			handler: function() {
				mask.hide();
			}
		}]
	});
	win.show();
});
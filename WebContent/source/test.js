var mk = new Ext.LoadMask(tree.id, {
	msg : '正在更新数据，请稍候！',
	removeMask : true
		// 完成后移除
	});
mk.show();

// 显示
// 第一个参数是某元素的id值,当加载的时候,id的元素变成灰色的不可用状态.
// mk.hide()// 销毁遮罩层
// 但笔者在实际使用发现，在使用ajax时，需要注意使用位置：
// 举例一：
function DetailCheckItemdatarowClicked() {
	var record = wzselgrid.getSelectionModel().getSelections();
	if (record.length == 0) {
	} else {
		var mk = new Ext.LoadMask(Ext.getBody(), {
					msg : '正在加载数据，请稍候！',
					removeMask : true
				});
		mk.show();
		var Searchdata = record[0].get("wzdm");
		addwzinfo.setTitle('物资名称:  <font color="red">'
				+ record[0].get("wzname") + '</font>  规格型号:<font color="red">'
				+ record[0].get("wztype") + "</font>");
		addwzdm.setValue(record[0].get("wzdm"));
		Ext.Ajax.request({
					url : "DetailCheckItemdata.asp",
					params : {
						wzdm : Searchdata,
						action : 0
					},
					success : function(response) {
						var Result = Ext.decode(response.responseText);
						if (num != 0) {
							AddCheckItemstore.removeAll();
							num = 0;
						}
						if (Result.Rows != 0) {
							var tmp = Ext.util.JSON
									.decode(Result.CheckItemsinfo);
							for (var i = 0; i < tmp.length; i++) {
								var p = new inpcRecord(tmp[i]);
								AddCheckItemstore.insert(num, p);
								num = num + 1;
							}
						}
						mk.hide();
					},
					failure : function(response) {
						mk.hide();
						Ext.Msg.alert("提示", "服务器请求错误,请稍后再试！");
					}
				})
	}
}

// ---------------------------------------------------------------------------------------------
// 举例二：
function DetailCheckItemdatarowClicked() {
	var record = wzselgrid.getSelectionModel().getSelections();
	if (record.length == 0) {
	} else {
		var mk = new Ext.LoadMask(Ext.getBody(), {
					msg : '正在加载数据，请稍候！',
					removeMask : true
				});
		mk.show();
		var Searchdata = record[0].get("wzdm");
		addwzinfo.setTitle('物资名称:  <font color="red">'
				+ record[0].get("wzname") + '</font>  规格型号:<font color="red">'
				+ record[0].get("wztype") + "</font>");
		addwzdm.setValue(record[0].get("wzdm"));
		Ext.Ajax.request({
					url : "DetailCheckItemdata.asp",
					params : {
						wzdm : Searchdata,
						action : 0
					},
					success : function(response) {
						var Result = Ext.decode(response.responseText);
						if (num != 0) {
							AddCheckItemstore.removeAll();
							num = 0;
						}
						if (Result.Rows != 0) {
							var tmp = Ext.util.JSON
									.decode(Result.CheckItemsinfo);
							for (var i = 0; i < tmp.length; i++) {
								var p = new inpcRecord(tmp[i]);
								AddCheckItemstore.insert(num, p);
								num = num + 1;
							}
						}
					},
					failure : function(response) {
						Ext.Msg.alert("提示", "服务器请求错误,请稍后再试！");
					}
				})
	}
	mk.hide();
}
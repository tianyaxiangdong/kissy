/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Apr 8 21:57
*/
KISSY.add("editor/plugin/image",function(e,j,q,r,s,n){function c(b){this.config=b||{}}var k=e.UA,o=KISSY.NodeList,g=e.all,p=e.Event,f=function(b){b=g(b);if("img"===b.nodeName()&&!/(^|\s+)ke_/.test(b[0].className))return b};e.augment(c,{pluginRenderUI:function(b){function h(a){n.useDialog(b,"image",c.config,a)}var c=this,i=b.get("prefixCls");b.addButton("image",{tooltip:"\u63d2\u5165\u56fe\u7247",listeners:{click:function(){h(null)}},mode:j.WYSIWYG_MODE});var l=[{content:"\u56fe\u7247\u5c5e\u6027",fn:function(){var a=f(this.get("editorSelectedEl"));
a&&(this.hide(),h(g(a)))}},{content:"\u63d2\u5165\u65b0\u884c",fn:function(){this.hide();var a=b.get("document")[0],d=new o(a.createElement("p"));k.ie||d._4e_appendBogus(void 0);a=new j.Range(a);a.setStartAfter(this.get("editorSelectedEl"));a.select();b.insertElement(d);a.moveToElementEditablePosition(d,1);a.select()}}],m=[];e.each(l,function(a){m.push({content:a.content})});b.addContextMenu("image",f,{width:120,children:m,listeners:{click:function(a){var b=this,c=a.target.get("content");e.each(l,function(a){a.content==
c&&a.fn.call(b)})}}});b.docReady(function(){p.on(b.get("document")[0],"dblclick",function(a){a.halt();a=g(a.target);f(a)&&h(a)})});b.addBubble("image",f,{listeners:{afterRenderUI:function(){var a=this,d=a.get("contentEl");d.html(e.substitute('<a class="{prefixCls}editor-bubble-url" target="_blank" href="#">\u5728\u65b0\u7a97\u53e3\u67e5\u770b</a>  |  <a class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-change" href="#">\u7f16\u8f91</a>  |  <a class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-remove" href="#">\u5220\u9664</a>',
{prefixCls:i}));var c=d.one("."+i+"editor-bubble-url"),f=d.one("."+i+"editor-bubble-change"),g=d.one("."+i+"editor-bubble-remove");j.Utils.preventFocus(d);f.on("click",function(b){h(a.get("editorSelectedEl"));b.halt()});g.on("click",function(d){if(k.webkit){var c=b.getSelection().getRanges();c&&c[0]&&(c[0].collapse(),c[0].select())}a.get("editorSelectedEl").remove();a.hide();b.notifySelectionChange();d.halt()});a.on("show",function(){var b=a.get("editorSelectedEl");b&&(b=b.attr("_ke_saved_src")||
b.attr("src"),c.attr("href",b))})}}})}});return c},{requires:["editor","./button","./bubble","./contextmenu","./dialog-loader"]});
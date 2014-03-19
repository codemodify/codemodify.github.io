
CentralWidget = function()
{
    this._name = "CentralWidget";

    this._layoutManager = new JsKit.Gui.HorizontalLayoutManager();
}

CentralWidget.prototype = new JsKit.Gui.Widget();

CentralWidget.prototype.buildContent = function()
{
    var nodeName    = "div";

    var node        = JsKit.Dom.createNodeInMemory( nodeName );

    this._domNode   = new JsKit.Dom.Node();
    this._domNode.fromExistingNode( node );

    this._layoutManager.appendWidget( new JsKit.Gui.Label(this._name) );
}

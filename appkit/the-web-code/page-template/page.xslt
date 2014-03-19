<?xml           version="1.0"   encoding="UTF-8"?>
<xsl:stylesheet version="1.0"   xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output     version="4.01"  method="html" encoding="UTF-8" indent="yes"
                doctype-system="http://www.w3.org/TR/html4/strict.dtd"
                doctype-public="-//W3C//DTD HTML 4.01//EN" />

    <!-- HTML -->
    <xsl:template match="page">
        <xsl:text></xsl:text>
        <html>
            <head>
                <!-- before of anything we add support for the Yahoo UI -->

                <!-- Choose the righ skining -->                
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/autocomplete.css' )"/>     </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/button.css' )"/>           </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/calendar.css' )"/>         </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/colorpicker.css' )"/>      </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/container.css' )"/>        </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/datatable.css' )"/>        </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/editor.css' )"/>           </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/imagecropper.css' )"/>     </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/layout.css' )"/>           </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/logger.css' )"/>           </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/menu.css' )"/>             </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/profilerviewer.css' )"/>   </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/resize.css' )"/>           </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/simpleeditor.css' )"/>     </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/skin.css' )"/>             </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/tabview.css' )"/>          </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/treeview.css' )"/>         </xsl:attribute> </link>
                <link rel="stylesheet" type="text/css"> <xsl:attribute name="href"> <xsl:value-of select="concat( 'the-web-code/backends/yui/build/assets/skins/', /page/skin, '/yuitest.css' )"/>          </xsl:attribute> </link>

                <!-- JavaScript Dependencies -->
                    <script type="text/javascript" src="the-web-code/backends/yui/build/yahoo-dom-event/yahoo-dom-event.js"></script>
                    <script type="text/javascript" src="the-web-code/backends/yui/build/container/container_core-min.js"></script>
                    <script type="text/javascript" src="the-web-code/backends/yui/build/element/element-beta-min.js"></script>

                <!-- OPTIONAL: Connection (required for dynamic loading of data) -->
                    <script type="text/javascript" src="the-web-code/backends/yui/build/connection/connection-min.js"></script>

                <!-- PushButton, Radio/RadioGroup, CheckBox, ComboBox -->
                    <script type="text/javascript" src="the-web-code/backends/yui/build/button/button-min.js"></script>

                <!-- ComboBox -->
                    <script type="text/javascript" src="the-web-code/backends/yui/build/menu/menu-min.js"></script>

                <!-- TextEdit -->
                    <script type="text/javascript" src="the-web-code/backends/yui/build/animation/animation-min.js"></script>
                    <script type="text/javascript" src="the-web-code/backends/yui/build/element/element-beta-min.js"></script>
                    <script type="text/javascript" src="the-web-code/backends/yui/build/container/container-min.js"></script>
                    <script type="text/javascript" src="the-web-code/backends/yui/build/editor/editor-beta-min.js"></script>

                <!-- DataGrid -->
                    <script type="text/javascript" src="the-web-code/backends/yui/build/utilities/utilities.js"></script>
                    <script type="text/javascript" src="the-web-code/backends/yui/build/datasource/datasource-beta-min.js"></script>
                    <script type="text/javascript" src="the-web-code/backends/yui/build/datatable/datatable-beta-min.js"></script>                

                <!-- TabView -->
                    <script type="text/javascript" src="the-web-code/backends/yui/build/tabview/tabview-min.js"></script>

                <xsl:apply-templates select="title"/>
                <xsl:apply-templates select="metaInfo"/>
                <xsl:apply-templates select="styleSheets"/>
                <xsl:apply-templates select="scripts"/>
            </head>
            <body>
                <xsl:apply-templates select="content"/>
            </body>
        </html>
    </xsl:template>


    <!-- TITLE -->
    <xsl:template match="title">
        <title> <xsl:value-of select="node()"/> </title>
    </xsl:template>
    
    <!-- META -->
    <xsl:template match="metaInfo">
        <xsl:for-each select="./*">
            <xsl:variable name="tagName" select="name()"/>
            <xsl:variable name="tagContent" select="node()"/>
            <xsl:choose>
                <xsl:when test="$tagName = 'http-equiv' ">
                    <meta>
                        <xsl:variable name="firstPartFromContent" select="substring-before($tagContent,'=')"/>
                        <xsl:variable name="secondPartFromContent" select="substring( $tagContent, string-length($firstPartFromContent)+3, string-length($tagContent)-string-length($firstPartFromContent)-3 )"/>
                        <xsl:attribute name="{$tagName}">   <xsl:value-of select="$firstPartFromContent"/>  </xsl:attribute>
                        <xsl:attribute name="content">      <xsl:value-of select="$secondPartFromContent"/> </xsl:attribute>               
                    </meta>             
                </xsl:when>
                <xsl:otherwise>
                    <meta>
                        <xsl:attribute name="name">     <xsl:value-of select="$tagName"/>       </xsl:attribute>
                        <xsl:attribute name="content">  <xsl:value-of select="$tagContent"/>    </xsl:attribute>
                    </meta>             
                </xsl:otherwise>
            </xsl:choose>
        </xsl:for-each>
    </xsl:template>

    <!-- CSS -->
    <xsl:template match="styleSheets">
        <xsl:for-each select="./*">
            <link rel="stylesheet" type="text/css">
                <xsl:attribute name="href"> <xsl:value-of select="node()"/> </xsl:attribute>
            </link>         
        </xsl:for-each>
    </xsl:template>

    <!-- JS-scripts -->
    <xsl:template match="scripts">
        <xsl:for-each select="./*">
            <script type="text/javascript">
                <xsl:attribute name="src"> <xsl:value-of select="node()" /> </xsl:attribute>
            </script>
        </xsl:for-each>
    </xsl:template>

    <!-- BODY -->
    <xsl:template match="content">
        <xsl:call-template name="addDecorations">
            <xsl:with-param name="additionalClassValue">
                <xsl:text>yui-skin-</xsl:text> <xsl:value-of select="/page/skin"/>
            </xsl:with-param>
        </xsl:call-template>
        <xsl:call-template name="parseChildren" />
    </xsl:template>

    <!-- TABLE -->
    <xsl:template match="grid">
        <div>
            <xsl:call-template name="addDecorations">
                <xsl:with-param name="additionalClassValue" select="'grid'"/>
            </xsl:call-template>
            <xsl:call-template name="parseChildren" />
        </div>
    </xsl:template>

    <!-- TABLE-ROW -->
    <xsl:template match="row">
        <div>
            <xsl:call-template name="addDecorations">
                <xsl:with-param name="additionalClassValue" select="'row'"/>
            </xsl:call-template>
            <xsl:call-template name="parseChildren" />
        </div>
    </xsl:template>

    <!-- TABLE-CELL -->
    <xsl:template match="cell">
        <div>
            <xsl:call-template name="addDecorations">
                <xsl:with-param name="additionalClassValue" select="'cell'"/>
            </xsl:call-template>
            <xsl:call-template name="parseChildren" />
        </div>
    </xsl:template>

    <!-- LINK -->
    <xsl:template match="hyperLink">
        <a>
            <xsl:attribute name="href"> <xsl:value-of select="@url"/> </xsl:attribute>
            <xsl:call-template name="addDecorations" />
            <xsl:call-template name="parseChildren" />
        </a>
    </xsl:template>
    
    <!-- TEXT -->
    <xsl:template match="text">
        <div>
            <xsl:call-template name="addDecorations">
                <xsl:with-param name="additionalClassValue" select="'cell'"/>
            </xsl:call-template>
            <xsl:value-of select="." />
        </div>
    </xsl:template>

    <!-- IMAGE -->
    <xsl:template match="image">
        <img alt="">
            <xsl:attribute name="src"> <xsl:value-of select="@url"/> </xsl:attribute>
            <xsl:call-template name="addDecorations" />
        </img>
    </xsl:template>

    <!-- NEW LINE -->
    <xsl:template match="newLine">
        <br/>
    </xsl:template>
    
    <!-- HORIZONTAL LINE -->
    <xsl:template match="horizontalLine">
        <hr/>
    </xsl:template>

    
                                                                                        <!--
    /***************************************************************************************
        UI widgets

    **************************************************************************************** -->
    
                                                                                        <!--
    /***************************************************************************************
        PushButton
        
        input attributes:
            - id
            - text
            - icon : FIXME: not implemented
            - onClick : FIXME: not implemented

    **************************************************************************************** -->
    <xsl:template match="pushButton">
        <span class="yui-button yui-push-button">
            <xsl:attribute name="id"><xsl:value-of select="@id"/> </xsl:attribute>
            <span class="first-child">
                <button type="button" >
                    <xsl:attribute name="name">pushButton_<xsl:value-of select="@id"/> </xsl:attribute>
                    <xsl:value-of select="@text"/>
                </button>
            </span>
        </span>
        <script type="text/javascript">
            <!-- here is the place to add this to a feature JS-Model -->
            var pushButton = new YAHOO.widget.Button
                ( 
                    <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text>
                );
        </script>
    </xsl:template>

                                                                                        <!--
    /***************************************************************************************
        CheckBox
        
        input attributes:
            - id
            - text

    **************************************************************************************** -->
    <xsl:template match="checkBox">
        <span class="yui-button yui-checkbox-button">
            <xsl:attribute name="id"> <xsl:value-of select="@id"/> </xsl:attribute>
            <span class="first-child">
                <button type="button" >
                    <xsl:attribute name="name">checkBox_<xsl:value-of select="@id"/> </xsl:attribute>
                    <xsl:value-of select="@text"/>
                </button>
            </span>
        </span>
        <script type="text/javascript">
            <!-- here is the place to add this to a feature JS-Model -->
            var checkBox = new YAHOO.widget.Button( 
                <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text>,
                { type:"checkbox", vlaue:"1" }
            );
        </script>
    </xsl:template>

                                                                                        <!--
    /***************************************************************************************
        RadioGroup
        
        input attributes:
            - id

    **************************************************************************************** -->
    <xsl:template match="radioGroup">
        <div class="yui-buttongroup">
            <xsl:attribute name="id"> <xsl:value-of select="@id"/> </xsl:attribute>
            <xsl:for-each select="./radio">
                <span class="yui-button yui-radio-button">
                    <xsl:attribute name="id"> <xsl:value-of select="@id"/> </xsl:attribute>
                    <span class="first-child">
                        <button type="button">
                            <xsl:attribute name="name"> <xsl:value-of select="@id"/> </xsl:attribute>
                            <xsl:attribute name="value"> <xsl:value-of select="@text"/> </xsl:attribute>
                            <xsl:value-of select="@text"/>
                        </button>
                    </span>
                </span>
            </xsl:for-each>
        </div>
        <script type="text/javascript">
            <!-- here is the place to add this to a feature JS-Model -->
            var radioGroup = new YAHOO.widget.ButtonGroup( <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text> );
        </script>
    </xsl:template>

                                                                                        <!--
    /***************************************************************************************
        ComboBox
        
        input attributes:
            - id

    **************************************************************************************** -->
    <xsl:template match="comboBox">
        <div>
            <xsl:attribute name="id"> <xsl:value-of select="@id"/> </xsl:attribute>
        </div>
        <script type="text/javascript">
            <!-- here is the place to add this to a feature JS-Model -->        
            function onMenuClick( p_sType, p_aArgs )
            {
                var oMenuItem = p_aArgs[1];
                if( oMenuItem )
                {
                    oButton.set( "label", (
                                            <xsl:text>"&lt;em&gt;"</xsl:text> +
                                            oMenuItem.cfg.getProperty("text") +
                                            <xsl:text>"&lt;/em&gt;"</xsl:text>
                                          )
                               );
                }
            }

            var aCategories =
            [
                <xsl:for-each select="./item">
                	<xsl:if test="position() != 1"> , </xsl:if>
                    {
                        text: <xsl:text>"</xsl:text> <xsl:value-of select="@text"/> <xsl:text>"</xsl:text>
                        ,
                        value: <xsl:text>"</xsl:text> <xsl:value-of select="@value"/> <xsl:text>"</xsl:text>
                    }
                </xsl:for-each>
            ];
            
            var oButton = new YAHOO.widget.Button
                                ({ 
                                    type: "menu", 
                                    id: "categorybutton", 
                                    label: <xsl:text>"&lt;em&gt;Select a Category&lt;/em&gt;"</xsl:text>, 
                                    menu: aCategories, 
                                    container: <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text>
                                });
                                
            oButton.on( 
                        "appendTo",
                        function(){ oButton.getMenu().subscribe("click",onMenuClick); }
                      );
        </script>
    </xsl:template>

                                                                                        <!--
    /***************************************************************************************
        TextEdit

    **************************************************************************************** -->
    <xsl:template match="textEdit">
        <textarea>
            <xsl:attribute name="id"> <xsl:value-of select="@id"/> </xsl:attribute>
            <xsl:value-of select="." />
        </textarea>
        
        <xsl:if test="@richText">
        <script type="text/javascript">  // here is the place to add this tab to a feature JS-Model
        (
            function()
            {
                // setup some private variables
                var Dom = YAHOO.util.Dom,
                Event = YAHOO.util.Event;

                // the Editor config
                var myConfig = 
                {
                    height: '300px',
                    width: '530px',
                    animate: true,
                    dompath: true,
                    focusAtStart: true
                };

                // now let's load the Editor..
                var myEditor = new YAHOO.widget.Editor( <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text>, myConfig );
                myEditor.render();
            }
        )();
        </script>
        </xsl:if>
    </xsl:template>

                                                                                        <!--
    /***************************************************************************************
        DataGrid

    **************************************************************************************** -->
    <xsl:template match="dataGrid">
        <div>
            <xsl:attribute name="id"> <xsl:value-of select="@id"/> </xsl:attribute>
        </div>

        <script type="text/javascript"> <!-- here is the place to add this tab to a feature JS-Model -->
        YAHOO.util.Event.addListener
        (	window, "load", 
	        function()
	        {
                var myColumnDefs = 
                [
                    <xsl:for-each select="./column">
                        <xsl:if test="position() != 1"> , </xsl:if>
                        {
                            <xsl:text>key:"</xsl:text>   <xsl:value-of select="@id"/>   <xsl:text>"</xsl:text>, 
                            <xsl:text>label:"</xsl:text> <xsl:value-of select="@text"/> <xsl:text>"</xsl:text>, width:100, resizeable:true, sortable:false
                        }
                    </xsl:for-each>
                ];
                
                var dataSource =
                [
                    <xsl:for-each select="./line">
                        <xsl:if test="position() != 1"> , </xsl:if>
                        {
                        <xsl:for-each select="./data">
                        	<xsl:if test="position() != 1"> , </xsl:if>
                            <xsl:variable name="currentCollumn" select="position()"/>
                            <xsl:for-each select="../../column">
                                <xsl:if test="position() = $currentCollumn"> <xsl:value-of select="@id"/> </xsl:if>
                            </xsl:for-each>
                            <xsl:text>:"</xsl:text> <xsl:value-of select="." /> <xsl:text>"</xsl:text>
                        </xsl:for-each>
                        }
                    </xsl:for-each>
                ];

                var myDataSource = new YAHOO.util.DataSource( dataSource );
                myDataSource.responseType = YAHOO.util.DataSource.TYPE_JSARRAY;
                myDataSource.responseSchema = 
                {
                    fields: 
                    [
                        <xsl:for-each select="./column">
                            <xsl:if test="position() != 1"> , </xsl:if>
                            <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text>
                        </xsl:for-each>
                    ]
                };

                var myConfigs =
                {
                    paginator: new YAHOO.widget.Paginator( { rowsPerPage: 100, dropdownOptions: [10,25,50,100], pageLinks: 5 } ),
                    scrollable:true, height:"25em"
                };

                myDataTable = new YAHOO.widget.DataTable( <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text>, myColumnDefs, myDataSource, myConfigs );
                myDataTable.subscribe("rowClickEvent",this.myDataTable.onEventSelectRow);
        	}
        );
        </script>
    </xsl:template>

                                                                                        <!--
    /***************************************************************************************
        TabView

    **************************************************************************************** -->
    <xsl:template match="tabView">
        <div>
            <xsl:attribute name="id">       <xsl:value-of select="@id"/>        </xsl:attribute>
            <xsl:attribute name="class">    <xsl:value-of select="'yui-navset'"/> </xsl:attribute>
            <ul>
                <xsl:attribute name="class"> <xsl:value-of select="'yui-nav'"/> </xsl:attribute>
                <xsl:variable name="tabCount" select="0" />
                <xsl:for-each select="./tab">
                    <li>
                    <xsl:variable name="index" select="position()"/>
                    <xsl:if test="$index = 1"> <xsl:attribute name="class">selected</xsl:attribute> </xsl:if>
                    <a>
                        <xsl:attribute name="href"> <xsl:value-of select="concat('#tab',position())"/> </xsl:attribute>
                        <em>    
                            <xsl:value-of select="@caption"/>
                        </em>
                    </a>
                    </li>
                </xsl:for-each>
            </ul>
            <div>
                <xsl:attribute name="class"> <xsl:value-of select="'yui-content'"/> </xsl:attribute>
                <xsl:for-each select="./tab">
                    <div><p> 
                        <xsl:call-template name="parseChildren" />
                    </p></div>
                </xsl:for-each>
            </div>
        </div>
        <script type="text/javascript"> <!-- here is the place to add this tab to a feature JS-Model -->
            var myTabs = new YAHOO.widget.TabView( <xsl:text>"</xsl:text> <xsl:value-of select="@id"/> <xsl:text>"</xsl:text> ); 
        </script>
    </xsl:template>
    
    
    
                                                                                        <!--
    /***************************************************************************************
        Helpers

    **************************************************************************************** -->


                                                                                        <!--
    /***************************************************************************************
        addDecorations( additionalClassValue )
        
            looks for a "decoration" attribute in the current node, and adds it 
            to the list of css's "class".
            
            "additionalClassValue" - the value for the css's "class" that is wanted to
                                    be added to the "class" value.

    *************************************************************************************** -->
    <xsl:template name="addDecorations">
        <xsl:param name="additionalClassValue" select="''"/>
        <!-- xsl:if test="@decoration" -->
            <xsl:attribute name="class">
                <xsl:value-of select="concat($additionalClassValue,' ',@decoration)"/>
            </xsl:attribute>
        <!-- /xsl:if -->
    </xsl:template>

                                                                                        <!--
    /***************************************************************************************
        parseChildren( parentClassValue )
        
            walks the children nodes and applies templaes transformation to them.

    **************************************************************************************** -->
    <xsl:template name="parseChildren">
        <xsl:apply-templates select="./*"/>
    </xsl:template>


</xsl:stylesheet>

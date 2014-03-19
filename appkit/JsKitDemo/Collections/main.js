
// app speciffic header files
include( "Collections/TopWidget.js"     );
include( "Collections/BottomWidget.js"  );
include( "Collections/CentralWidget.js" );
include( "Collections/LeftWidget.js"    );
include( "Collections/RightWidget.js"   );


// Show time in a threaded way
function ShowTime()
{    
    JsKit.Dom.setTagContentById( "Time", new Date() );
}

// define an entry point into the app
function main()
{
    var topWidget       = new TopWidget();
    var bottomWidget    = new BottomWidget();
    var centralWidget   = new CentralWidget();
    var leftWidget      = new LeftWidget();
    var rightWidget     = new RightWidget();

    var mainWindow = new JsKit.Gui.MainWindow();
        mainWindow.setDefaultLayoutManagers();
        mainWindow.setTitle( "JS Application" );
        mainWindow.getTopArea().    appendWidget( topWidget );
        mainWindow.getBottomArea(). appendWidget( bottomWidget );
        mainWindow.getCentralArea().appendWidget( centralWidget );
        mainWindow.getLeftArea().   appendWidget( leftWidget );
        mainWindow.getRightArea().  appendWidget( rightWidget );

    var thread = new JsKit.Core.Thread();
        thread.setThreadedCode( ShowTime );
        thread.start();
        
    var application = new JsKit.Core.Application();
        application.setMainWindow( mainWindow );
        application.run();
}

// run the app
main();

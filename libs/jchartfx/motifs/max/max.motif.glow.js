(function(){

var cfx = window.cfx;
var sfx = window.sfx;

cfx.motif = "glow";

var glowPictoGraph = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.43816</sys:String><sys:String x:Key="vertSpacingHive">-0.6</sys:String><sys:String x:Key="horzSpacingHive">0.2</sys:String></DataTemplate.Resources><Viewbox ViewWidth="10.516" ViewHeight="24"><Grid><Path Opacity="0.7" Fill="{Binding Class=Glow.fill}" Reuse="true" Data="M8.327,3.07c0,1.423-1.151,2.574-2.574,2.574c-1.419,0-2.57-1.151-2.57-2.574C3.183,1.651,4.333,0.5,5.752,0.5C7.175,0.5,8.327,1.651,8.327,3.07L8.327,3.07z M8.327,3.07M10.896,8.214c0,0,0-1.712-1.716-1.712H2.325c0,0-1.717,0-1.717,1.712v6.002c0,1.712,1.717,1.712,1.717,1.712V24.5H9.18v-8.572c0,0,1.716,0,1.716-1.712V8.214z M10.896,8.214z"><Path.BitmapEffect><BlurBitmapEffect Radius="1"/></Path.BitmapEffect></Path><Path Stroke="{Binding Path=Stroke}" Fill="{Binding Path=Fill}" Reuse="true" Data="M8.327,3.07c0,1.423-1.151,2.574-2.574,2.574c-1.419,0-2.57-1.151-2.57-2.574C3.183,1.651,4.333,0.5,5.752,0.5C7.175,0.5,8.327,1.651,8.327,3.07L8.327,3.07z M8.327,3.07M10.896,8.214c0,0,0-1.712-1.716-1.712H2.325c0,0-1.717,0-1.717,1.712v6.002c0,1.712,1.717,1.712,1.717,1.712V24.5H9.18v-8.572c0,0,1.716,0,1.716-1.712V8.214z M10.896,8.214z" /></Grid></Viewbox></DataTemplate>';

var gaugeTemplates = sfx["gauge.templates"];

if (gaugeTemplates != undefined) {
    gaugeTemplates.glowDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                      '</DataTemplate.Resources>' +
                          '<Border Background="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}">' +
                            '<Grid Margin="1">' +
                              '<Grid.RowDefinitions>' +
                                '<RowDefinition Height="Auto" MinHeight="20"/>' +
                                '<RowDefinition Height="*"/>' +
                              '</Grid.RowDefinitions>' +
                              '<TextBlock Margin="0,4,0,4" Text="{Binding Path=Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Normal" />' +
                              '<Canvas Grid.Row="1" x:Name="targetChart" Margin="8,8,8,8" />' +
                            '</Grid>' +
                        '</Border>' +
                '</DataTemplate>';

    gaugeTemplates.glowRadialDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
          '<Thickness x:Key="borderFactor">0.03</Thickness>' +
        '</DataTemplate.Resources>' +
        '<Viewbox ViewWidth="100" ViewHeight="100"><Canvas>' +
          '<Ellipse Width="100" Height="100" Fill="{Binding Path=Stroke}"/>' +
          '<Ellipse Canvas.Left="3" Canvas.Top="3" Width="94" Height="94" Fill="{Binding Path=Fill}"/>' +
        '</Canvas></Viewbox>' +
      '</DataTemplate>';

    gaugeTemplates.glowRadialIndicator = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                '<Canvas>' +
                  '<Rectangle Margin="-1.5" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                    '<Rectangle.BitmapEffect>' +
                      '<BlurBitmapEffect Radius="2" />' +
                    '</Rectangle.BitmapEffect>' +
                  '</Rectangle>' +
                  '<Rectangle Fill="{Binding Path=Fill}"/>' +
                '</Canvas>' +
              '</DataTemplate>';

    gaugeTemplates.glowRadialCap = "RadialCapPlain";

    gaugeTemplates.glowRadialGlare = '<DataTemplate/>';

    gaugeTemplates.glowRadialFiller = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                '<Canvas>' +
                  '<Path Data="{Binding Path=Geometry}" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                    '<Path.BitmapEffect>' +
                      '<BlurBitmapEffect Radius="2" OffsetY="2" OffsetX="2"/>' +
                    '</Path.BitmapEffect>' +
                  '</Path>' +
                  '<Path Data="{Binding Path=Geometry}" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                    '<Path.BitmapEffect>' +
                      '<BlurBitmapEffect Radius="2" OffsetY="-2" OffsetX="-2"/>' +
                    '</Path.BitmapEffect>' +
                  '</Path>' +
                  '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}"/>' +
                '</Canvas>' +
              '</DataTemplate>';

    gaugeTemplates.glowLinearDashBorder = '<DataTemplate/>';

    gaugeTemplates.glowLinearGlare = '<DataTemplate/>';

    gaugeTemplates.glowLinearFiller = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                '<Canvas>' +
                  '<Rectangle Margin="-1.5" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                    '<Rectangle.BitmapEffect>' +
                      '<BlurBitmapEffect Radius="2" />' +
                    '</Rectangle.BitmapEffect>' +
                  '</Rectangle>' +
                  '<Rectangle Fill="{Binding Path=Fill}"/>' +
                '</Canvas>' +
              '</DataTemplate>';

    gaugeTemplates.glowLinearBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas Margin="-6">' +
          '<Border Fill="{Binding Path=Fill}" Stroke="{x:Null}" CornerRadius="2" />' +
          '<Border Fill="{x:Null}" StrokeThickness="2" Stroke="#131616" StartCorner="3" Segments="2" CornerRadius="2" />' +
          '<Border Fill="{x:Null}" StrokeThickness="3" Stroke="#282A2B" StartCorner="1" Segments="2" CornerRadius="2" />' +
          '</Canvas>' +
        '</DataTemplate>';

    gaugeTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">10</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Margin="0,0,0,0" Stroke="{Binding Path=Stroke}" StrokeThickness="3" CornerRadius="7" CornerPercent="0.4" Canvas.Left="0" Canvas.Top="0" Fill="{Binding Path=Fill}"><Border.BitmapEffect><BlurBitmapEffect Radius="3"/></Border.BitmapEffect></Border><Border BorderBrush="#2a2a2a" BorderThickness="2" Background="{Binding Path=Fill}" Opacity="1" CornerPercent="0.4" CornerRadius="7" Padding="4,4,4,4"><DockPanel x:Name="container" Orientation="Vertical" Margin="0,3,0,0"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" Margin="3,0,3,0"/><Border Height="1" Stroke="{Binding Path=Foreground}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>';

    gaugeTemplates.glowPictoGraph = glowPictoGraph;

    var gaugePalette = new cfx.gauge.Palette();
    gaugePalette.setColors([
        "#DBDBD9",        // Dashboard Back
        "#252729",   // Dashboard Inside
        "#DBDBD9", // Border Back
        "#252729",   // Border Inside
        "#EE7323",   // Indicator
        "#B3571B",        // Indicator Border
        "#EE7323",   // Filler
        "#B3571B",        // Filler Border
        "#666666",   // Cap
        null,        // Cap Border
        "#666666", // Scale
        "#767778", // Bar Back
        "#767778",        // Bar Border
        null,        // Bar Alternate
        "#FF0B00",   // Section Back 0
        "#C00900",        // Section Border 0
        null,        // Section Alternate 0
        "#EBF928",   // Section Back 1
        "#B1BB1E",        // Section Border 1
        null,        // Section Alternate 1
        "#49EA22",   // Section Back 2
        "#37B01A",        // Section Border 2
        null,        // Section Alternate 2
        "#DBDBD9", // Tickmark
        "#DBDBD9", // Tickmark Inside
        "#929394",   // Title
        "#929394",   // Title Docked
        "#A0A0A0",   // Caption
        "#666666", // Trend
        "#FF0B00",   // Conditional Less
        "#EBF928",        // Conditional Equal
        "#49EA22",   // Conditional Greater
        "#666666",   // ToolTipText
        "#FFFFFF",   // ToolTipBack
        "#666666",    // ToolTipBorder
        "#620000",    // OffBack        
        "#AAAAAA",  // EmptyFill
        "#898989",  // EmptyBorder
        "#EE7323",   // Attribute0Fill       
        "#3083FD",  // Attribute1Fill
        "#F51EF5",  // Attribute2Fill
        "#49EA22",  // Attribute3Fill
        "#EBF928",  // Attribute4Fill
        "#B3571B",   // Attribute0Stroke
        "#2463BE",  // Attribute1Stroke
        "#B817B8",  // Attribute2Stroke
        "#37B01A",  // Attribute3Stroke
        "#B1BB1E"  // Attribute4Stroke
    ]);

    cfx.gauge.Palette.setDefaultPalette(gaugePalette);
}
    

var chartTemplates = sfx["vector.templates"];

if (chartTemplates != undefined) {
    chartTemplates["DashboardTitle.fill"] = "0,#929394";
    chartTemplates["DashboardTitle.font-family"] = "1,Arial";
    chartTemplates["Glow.fill"] = "0,#E0E0E0";
    chartTemplates["AxisY_Text.fill"] = "0,#666666";

    chartTemplates.glowBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                         '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
						 '<Thickness x:Key="uiMargin">6,6,0,0</Thickness>' +
                '</DataTemplate.Resources>' +
                    '<Border Background="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}">' +
                      '<Grid Margin="1">' +
                        '<Grid.RowDefinitions>' +
                          '<RowDefinition Height="Auto" MinHeight="20"/>' +
                          '<RowDefinition Height="*"/>' +
                        '</Grid.RowDefinitions>' +
                        '<TextBlock Margin="8" Text="{Binding Path=Title}" VerticalAlignment="Center" HorizontalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Normal" />' +
                        '<Canvas Grid.Row="1" x:Name="targetChart" Margin="8,0,8,8" />' +
                      '</Grid>' +
                  '</Border>' +
                '</DataTemplate>';

    chartTemplates.glowLine = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
        '<sys:Double x:Key="cfxDefStrokeThickness">3</sys:Double>' +
        '<MultiplyConverter x:Key="multConverter"/>' +
        '</DataTemplate.Resources>' +
        '<Canvas>' +
            '<Polyline Points="{Binding Path=Points}" Stroke="{Binding Class=Glow.fill}" Opacity="0.3" StrokeThickness="{Binding Path=StrokeThickness, Converter={StaticResource multConverter},ConverterParameter=1.6}" >' +
                '<Polyline.BitmapEffect>' +
                   '<BlurBitmapEffect Radius="2"/>' +
                '</Polyline.BitmapEffect>' +
            '</Polyline>' +
            '<Polyline Points="{Binding Path=Points}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}" />' +
        '</Canvas>' +
        '</DataTemplate>';

    chartTemplates.glowCurve = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                '<Path Data="{Binding Path=Geometry}" Stroke="{Binding Class=Glow.fill}" Opacity="0.5" StrokeThickness="{Binding Path=StrokeThickness}" Open="true">' +
                    '<Path.BitmapEffect>' +
                       '<BlurBitmapEffect Radius="3"/>' +
                    '</Path.BitmapEffect>' +
                '</Path>' +
                '<Path Data="{Binding Path=Geometry}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}" Open="true"/>' +
            '</Canvas>' +
        '</DataTemplate>';

    chartTemplates.glowArea = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:Double x:Key="cfxDefStrokeThickness">3</sys:Double>' +
                      '</DataTemplate.Resources>' +
                      '<Canvas>' +
                      '<Polygon Points="{Binding Path=PointsPolygon}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}" />' +
                      '<Polyline Canvas.Top="-2.5" Points="{Binding Path=PointsTop}" Stroke="{Binding Class=Glow.fill}" Opacity="0.5" StrokeThickness="{Binding Path=StrokeThickness}" >' +
                            '<Polyline.BitmapEffect>' +
                                '<BlurBitmapEffect Radius="2"/>' +
                            '</Polyline.BitmapEffect>' +
                        '</Polyline>' +
                        '</Canvas>' +
              '</DataTemplate>';

    chartTemplates.glowRose = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:Double x:Key="cfxDefStrokeThickness">3</sys:Double>' +
                      '</DataTemplate.Resources>' +
                      '<Canvas>' +
                      '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}" />' +
                      '<Path Data="{Binding Path=Geometry}" Stroke="{Binding Class=Glow.fill}" Opacity="0.3" StrokeThickness="4" >' +
                            '<Path.BitmapEffect>' +
                                '<BlurBitmapEffect Radius="2"/>' +
                            '</Path.BitmapEffect>' +
                        '</Path>' +
                        '</Canvas>' +
              '</DataTemplate>';

    chartTemplates.glowCurveArea = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
            '<Path Data="{Binding Path=Geometry}" Stroke="{Binding Class=Glow.fill}" Opacity="0.3" StrokeThickness="{Binding Path=StrokeThickness}">' +
                '<Path.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="3"/>' +
                '</Path.BitmapEffect>' +
            '</Path>' +
            '<Path Data="{Binding Path=Geometry}" Stroke="{Binding Path=Stroke}" Fill="{Binding Path=Fill}" StrokeThickness="{Binding Path=StrokeThickness}"/>' +
            '</Canvas>' +
            '</DataTemplate>';

    chartTemplates.glowBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                      '<Border Margin="-2.5" Width="{Binding Path=Width}" Height="{Binding Path=Height}" RenderTransform="{Binding Path=Transform}" Opacity="0.3" Background="{Binding Class=Glow.fill}"  >' +
                         '<Border.BitmapEffect>' +
                         '<BlurBitmapEffect Radius="2"/>' +
                         '</Border.BitmapEffect>' +
                      '</Border>' +
                      '<Border Width="{Binding Path=Width}" Height="{Binding Path=Height}" RenderTransform="{Binding Path=Transform}" Opacity="{Binding Path=Opacity}" Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}" BorderThickness="{Binding Path=StrokeThickness}">' +
                      '</Border>' +
            '</Canvas>' +
            '</DataTemplate>';

    chartTemplates.glowGantt = chartTemplates.glowBar;

    chartTemplates.glowEqualizer = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                    '<DataTemplate.Resources>' +
                        '<DataTemplate x:Key="off">' +
                            '<Border Opacity="{Binding Path=Opacity}" Background="{Binding Path=Fill}" />' +
                        '</DataTemplate>' +
                    '</DataTemplate.Resources>' +
                 '<Canvas>' +
                      '<Border Margin="-1.5" Width="{Binding Path=Width}" Height="{Binding Path=Height}" RenderTransform="{Binding Path=Transform}" Opacity="0.3" Background="{Binding Class=Glow.fill}"  >' +
                         '<Border.BitmapEffect>' +
                         '<BlurBitmapEffect Radius="1"/>' +
                         '</Border.BitmapEffect>' +
                      '</Border>' +
                      '<Border Opacity="{Binding Path=Opacity}" Background="{Binding Path=Fill}" />' +
            '</Canvas>' +
            '</DataTemplate>';

    chartTemplates.glowDoughnut = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                         '<Thickness x:Key="cfxBackgroundMargin">3</Thickness>' +
                         '<DataTemplate x:Key="cfxBackgroundFull">' +
                           '<Path Data="{Binding Path=Geometry}" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                         '<Path.BitmapEffect>' +
                         '<BlurBitmapEffect Radius="2"/>' +
                         '</Path.BitmapEffect>' +
                           '</Path>' +
                        '</DataTemplate>' +
                      '</DataTemplate.Resources>' +
            '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}"/>' +
          '</DataTemplate>';

    chartTemplates.glowPie = chartTemplates.glowDoughnut;

    chartTemplates.glowBubble = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
            '<Ellipse Margin="-2.5" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                '<Ellipse.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="2"/>' +
                '</Ellipse.BitmapEffect>' +
            '</Ellipse>' +
            '<Ellipse Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}"/>' +
            '</Canvas>' +
          '</DataTemplate>';

    chartTemplates.glowTreeMap = chartTemplates.glowBar;

    chartTemplates.glowFunnel = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas>' +
        '<Polygon Points="{Binding Path=PointsPolygon}" Fill="{Binding Class=Glow.fill}" Opacity="0.5" >' +
            '<Polygon.BitmapEffect>' +
                '<BlurBitmapEffect Radius="4"/>' +
            '</Polygon.BitmapEffect>' +
        '</Polygon>' +
        '<Polygon Points="{Binding Path=PointsPolygon}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
        '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.glowPyramid = chartTemplates.glowFunnel;

    chartTemplates.glowHeatMap = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                      '<Border Margin="-2.5" Width="{Binding Path=Width}" Height="{Binding Path=Height}" RenderTransform="{Binding Path=Transform}" Background="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                         '<Border.BitmapEffect>' +
                         '<BlurBitmapEffect Radius="2"/>' +
                         '</Border.BitmapEffect>' +
                      '</Border>' +
                      '<Border Margin="2" Width="{Binding Path=Width}" Height="{Binding Path=Height}" RenderTransform="{Binding Path=Transform}" Opacity="{Binding Path=Opacity}" Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}" BorderThickness="{Binding Path=StrokeThickness}">' +
                      '</Border>' +
            '</Canvas>' +
            '</DataTemplate>';

    chartTemplates.glowRadar = chartTemplates.glowLine;

    chartTemplates.glowHighLow = chartTemplates.glowLine;

    chartTemplates.glowOverlayBubble = chartTemplates.glowBubble;

    chartTemplates.glowSparklineLine = chartTemplates.glowLine;

    chartTemplates.glowSparklineBar = chartTemplates.glowBar;

    chartTemplates.glowSparklineArea = chartTemplates.glowArea;

    chartTemplates.glowSparklineCurve = chartTemplates.glowCurve;

    chartTemplates.glowSparklineCurveArea = chartTemplates.glowCurveArea;

    chartTemplates.glowBullet = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                    '<DataTemplate.Resources>' +
                      '<DataTemplate x:Key="templateLine">' +
                        '<Line X1="{Binding Path=X1}" X2="{Binding Path=X2}" Y1="{Binding Path=Y1}" Y2="{Binding Path=Y2}" Stroke="{Binding Path=Stroke}" StrokeThickness="3" />' +
                      '</DataTemplate>' +
                    '</DataTemplate.Resources>' +
                    '<Canvas>' +
                        '<Rectangle Margin="-2.5" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                             '<Rectangle.BitmapEffect>' +
                                '<BlurBitmapEffect Radius="2"/>' +
                             '</Rectangle.BitmapEffect>' +
                        '</Rectangle>' +
                        '<Rectangle Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
                    '</Canvas>' +
                '</DataTemplate>';

    chartTemplates.glowDensity = '<DataTemplate xmlns:x="a">' +
                    '<DataTemplate.Resources>' +
                        '<DataTemplate x:Key="background">' +
                            '<Border Margin="-1" Background="{Binding Class=Glow.fill}" Opacity="0.3">' +
                                '<Border.BitmapEffect>' +
                                    '<BlurBitmapEffect Radius="2"/>' +
                                '</Border.BitmapEffect>' +
                            '</Border>' +
                        '</DataTemplate>' +
                    '</DataTemplate.Resources>' +
                    '<Border Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}"/>' +
                '</DataTemplate>';

    chartTemplates.glowMarker1 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
            '<Canvas>' +
                '<Rectangle Margin="-1.5" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                    '<Rectangle.BitmapEffect>' +
                        '<BlurBitmapEffect Radius="1"/>' +
                    '</Rectangle.BitmapEffect>' +
                '</Rectangle>' +
                '<Rectangle Fill="{Binding Path=Fill}" />' +
            '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.glowMarker2 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas>' +
            '<Ellipse Margin="-1.5" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                '<Ellipse.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="1"/>' +
                '</Ellipse.BitmapEffect>' +
            '</Ellipse>' +
            '<Ellipse Fill="{Binding Path=Fill}" />' +
        '</Canvas>' +
  '</DataTemplate>';

    chartTemplates.glowMarker3 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
        '<sys:Double x:Key="cfxOSW">1</sys:Double>' +
    '</DataTemplate.Resources>' +
    '<Viewbox ViewWidth="25" ViewHeight="25">' +
        '<Canvas>' +
            '<Path Data="M12,0L24,24L0,24Z" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                '<Path.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="2"/>' +
                '</Path.BitmapEffect>' +
            '</Path>' +
            '<Path Data="M12,4L20,20L4,20Z" Fill="{Binding Path=Fill}" />' +
        '</Canvas>' +
    '</Viewbox>' +
'</DataTemplate>';

    chartTemplates.glowMarker4 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
        '<sys:Double x:Key="cfxOSW">1</sys:Double>' +
    '</DataTemplate.Resources>' +
    '<Viewbox ViewWidth="25" ViewHeight="25">' +
            '<Canvas>' +
                '<Path Data="M24,12L12,24L0,12L12,0Z" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                    '<Path.BitmapEffect>' +
                        '<BlurBitmapEffect Radius="2"/>' +
                    '</Path.BitmapEffect>' +
                '</Path>' +
            '<Path Data="M20,12L12,20L4,12L12,4Z" Fill="{Binding Path=Fill}"/>' +
        '</Canvas>' +
    '</Viewbox>' +
'</DataTemplate>';

    chartTemplates.glowMarker5 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas>' +
            '<Ellipse Margin="-1.5" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                '<Ellipse.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="1"/>' +
                '</Ellipse.BitmapEffect>' +
            '</Ellipse>' +
            '<Ellipse Fill="{Binding Path=Fill}" />' +
            '<Ellipse>' +
                '<Ellipse.Fill>' +
                    '<RadialGradientBrush>' +
                        '<GradientStop Color="#55FFFFFF" Offset="0"/>' +
                        '<GradientStop Color="#55333333" Offset="1"/>' +
                    '</RadialGradientBrush>' +
                '</Ellipse.Fill>' +
            '</Ellipse>' +
        '</Canvas>' +
  '</DataTemplate>';

    chartTemplates.glowMarker6 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
            '<sys:Double x:Key="cfxOSW">1</sys:Double>' +
        '</DataTemplate.Resources>' +
        '<Viewbox ViewWidth="25" ViewHeight="25">' +
            '<Canvas>' +
                '<Path Data="M24,10L0,10L0,14L24,14Z" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                    '<Path.BitmapEffect>' +
                        '<BlurBitmapEffect Radius="2"/>' +
                    '</Path.BitmapEffect>' +
                '</Path>' +
                '<Path Data="M22,11L2,11L2,13L22,13Z" Fill="{Binding Path=Fill}" />' +
            '</Canvas>' +
        '</Viewbox>' +
    '</DataTemplate>';

    chartTemplates.glowMarker7 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
        '<sys:Double x:Key="cfxOSW">1</sys:Double>' +
    '</DataTemplate.Resources>' +
    '<Viewbox ViewWidth="25" ViewHeight="25">' +
        '<Canvas>' +
            '<Path Data="M14,24L14,0L10,0L10,24Z" Fill="{Binding Class=Glow.fill}" Opacity="0.3" >' +
                '<Path.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="2"/>' +
                '</Path.BitmapEffect>' +
            '</Path>' +
            '<Path Data="M13,22L13,2L11,2L11,22Z" Fill="{Binding Path=Fill}" />' +
        '</Canvas>' +
    '</Viewbox>' +
'</DataTemplate>';

    chartTemplates.glowMarker8 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
        '<sys:Double x:Key="cfxOSW">1</sys:Double>' +
    '</DataTemplate.Resources>' +
    '<Viewbox ViewWidth="25" ViewHeight="25">' +
        '<Canvas>' +
            '<Path Data="M24,10L14,10L14,0L10,0L10,10L0,10L0,14L10,14L10,24L14,24L14,14L24,14Z" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                '<Path.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="2"/>' +
                '</Path.BitmapEffect>' +
            '</Path>' +
            '<Path Data="M22,11L13,11L13,2L11,2L11,11L2,11L2,13L11,13L11,22L13,22L13,13L22,13Z" Fill="{Binding Path=Fill}"/>' +
        '</Canvas>' +
    '</Viewbox>' +
'</DataTemplate>';

    chartTemplates.glowMarker9 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
        '<sys:Double x:Key="cfxOSW">1</sys:Double>' +
    '</DataTemplate.Resources>' +
    '<Viewbox ViewWidth="25" ViewHeight="25">' +
        '<Canvas>' +
            '<Path Data="M12,24L24,0L0,0L12,24" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                '<Path.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="2"/>' +
                '</Path.BitmapEffect>' +
            '</Path>' +
            '<Path Data="M12,20L20,4L4,4L12,20" Fill="{Binding Path=Fill}" />' +
        '</Canvas>' +
    '</Viewbox>' +
'</DataTemplate>';

    chartTemplates.glowMarker10 = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
            '<sys:Double x:Key="cfxOSW">1</sys:Double>' +
        '</DataTemplate.Resources>' +
        '<Viewbox ViewWidth="25" ViewHeight="25">' +
        '<Canvas>' +
            '<Path Data="M0,0L2,0L12,10L22,0L24,0L24,2L14,12L24,22L24,24L22,24L12,14L2,24L0,24L0,22L10,12L0,2Z" Fill="{Binding Class=Glow.fill}" Opacity="0.3">' +
                '<Path.BitmapEffect>' +
                    '<BlurBitmapEffect Radius="2"/>' +
                '</Path.BitmapEffect>' +
            '</Path>' +
            '<Path Data="M1,1L2,1L12,11L22,1L23,1L23,2L13,12L23,22L23,23L22,23L12,13L2,23L1,23L1,22L11,12L1,2L1,1M2,2L22,22Z" Fill="{Binding Path=Fill}" />' +
        '</Canvas>' +
        '</Viewbox>' +
    '</DataTemplate>';

    chartTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">10</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Margin="0,0,0,0" Stroke="{Binding Path=ItemFill}" StrokeThickness="3" CornerRadius="7" CornerPercent="0.4" Canvas.Left="0" Canvas.Top="0" Fill="{Binding Path=ItemFill}"><Border.BitmapEffect><BlurBitmapEffect Radius="3"/></Border.BitmapEffect></Border><Border BorderBrush="#2a2a2a" BorderThickness="2" Background="{Binding Path=ItemFill}" Opacity="1" CornerPercent="0.4" CornerRadius="7" Padding="4,4,4,4"><DockPanel x:Name="container" Orientation="Vertical" Margin="0,3,0,0"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" Margin="3,0,3,0" Foreground="{Binding Path=ItemLabel}"/><Border Height="1" Stroke="{Binding Path=ItemLabel}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>';
    chartTemplates["TipContentDefault"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,2,3,1"><TextBlock Text="{Binding Path=SeriesT}" Margin="0,0,12,0" Foreground="{Binding Path=ItemLabel}" /><Switch Property="{Binding Path=CurrSeries}"><TextBlock Text="{Binding Path=Value}" HorizontalAlignment="Right" FontWeight="Bold" Foreground="{Binding Path=ItemLabel}" Switch.Value="1" /><TextBlock Text="{Binding Path=Value}" Foreground="{Binding Path=ItemLabel}" HorizontalAlignment="Right" /></Switch></DockPanel></DataTemplate>';
    chartTemplates["TipContentPercent"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Vertical" Margin="3,0,3,3"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemLabel}" /><DockPanel Orientation="Horizontal"><TextBlock Text="{Binding Path=Macro%v out of %t}" Foreground="{Binding Path=ItemLabel}"/><TextBlock Margin="6,0,0,0" Text="{Binding Path=Macro(%p%%)}" FontWeight="Bold" HorizontalAlignment="Right" Foreground="{Binding Path=ItemLabel}"/></DockPanel></DockPanel></DataTemplate>';
    chartTemplates["TipContentDefaultX"] = '<DataTemplate xmlns:x="a"><Grid Margin="3,1,3,3"><Grid.ColumnDefinitions><ColumnDefinition Width="Auto"/><ColumnDefinition Width="Auto"/></Grid.ColumnDefinitions><Grid.RowDefinitions><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/></Grid.RowDefinitions><TextBlock Grid.Row="0" Grid.Column="0" Text="{Binding Path=SeriesTX}" Margin="0,0,12,0" Foreground="{Binding Path=ItemLabel}"/><TextBlock Grid.Row="0" Grid.Column="1" Text="{Binding Path=ValueX}" FontWeight="Bold" HorizontalAlignment="Right" Foreground="{Binding Path=ItemLabel}"/><TextBlock Grid.Row="1" Grid.Column="0" Text="{Binding Path=SeriesTY}" Margin="0,0,12,0" Foreground="{Binding Path=ItemLabel}"/><TextBlock Grid.Row="1" Grid.Column="1" Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right" Foreground="{Binding Path=ItemLabel}"/></Grid></DataTemplate>';

    chartTemplates.glowPictoGraph = glowPictoGraph;

    var chartPalette = new cfx.Palette();
    chartPalette.setColors([
        "#EE7323",   // Series 0
        "#3083FD",   // Series 1
        "#F51EF5",   // Series 2
        "#49EA22",   // Series 3
        "#EBF928",   // Series 4
        "#FF0B00",   // Series 5
        "#31BEF3",   // Series 6
        "#B75BE0",   // Series 7
        "#FC8D07",   // Series 8
        "#F7A7FE",   // Series 9
        "#FDFE86",   // Series 10
        "#D20000",   // Series 11
        "#FE9900",   // Series 12
        "#8B698A",   // Series 13
        "#CCCD67",   // Series 14
        "#66C226",   // Series 15
        "#592B0D",   // Label0
        "#12315F",   // Label1
        "#5C0B5C",   // Label2
        "#1B580D",   // Label3
        "#585D0F",   // Label4
        "#600400",   // Label5
        "#12475B",   // Label6
        "#452254",   // Label7
        "#5E3503",   // Label8
        "#5D3F5F",   // Label9
        "#5F5F32",   // Label10
        "#FF7777",   // Label11
        "#FFFF00",   // Label12
        "#E7AFE6",   // Label13
        "#4C4D27",   // Label14
        "#AAFF3F",   // Label15
        "#252729",   // Background
        "#252729",   // AlternateBackground
        "#00000000", // InsideBackground
        "#dbdbd9",   // Border
        "#dbdbd9",   // AxesAndGridlines
        "#f5f5ee",   // AxesAlternate
        "#3083FD",   // CustomGridLines
        "#404447",   // AxisSections
        "#666666",   // AxisLabels
        "#666666",   // PointLabels
        "#00000000", // MarkerBorder
        "#0296b1",   // TitlesFore
        "#00000000", // TitlesBack
        "#666666",   // LegendText
        "#00000000", // LegendBackground
        "#252729",   // DataBack
        "#666666",   // DataFore
        "#404447",   // DataBackAlternate
        "#dbdbd9",   // DataForeAlternate
        "#EE7323",   // DataTitlesBack
        "#252729",   // DataTitlesFore
        "#dbdbd9",   // DataGridlines
        "#252729",   // DataBackground
        "#666666",   // ToolTipText
        "#FFFFFF",   // ToolTipBack
        "#666666",   // ToolTipBorder
        "#666666",    // InsideLabels
        "#AAAAAA",  // EmptyFill
        "#898989"  // EmptyBorder
    ]);
    cfx.Chart.setDefaultPalette(chartPalette);
}


var glow = function glow()
{
}

cfx.motifs.glow = glow;

glow.getStyleInfo = function glow$global(args)
{
    var style = "";

    if (args !== undefined) {
        var t = args[0];
        if (t !== undefined) {
            style = t[0];
        }
    }

    var styleInfo = {};
    styleInfo.isGroup = false;
    styleInfo.name = style;
    styleInfo.isSingle = false;
    styleInfo.isBullet = false;
    styleInfo.sections = new Array();

    if (style != undefined) {
        style = style.toUpperCase();
        if (style.indexOf("SINGLE") >= 0) {
            styleInfo.isSingle = true;
            styleInfo.name = "";
        }

        if (style.indexOf("GROUP") >= 0) {
            styleInfo.isGroup = true;
            styleInfo.name = "";
            styleInfo.name = "";
        }

        if (style.indexOf("BULLET") >= 0) {
            styleInfo.isBullet = true;
            styleInfo.name = "";
        }

        if (style.indexOf("SECTIONS") >= 0) {
            var index, index2;
            var sections;

            index = style.indexOf("SECTIONS");
            index2 = style.indexOf(":", index);
            if (index2 > 0) {
                index = index2;
                index2 = style.indexOf("-", index);
                if (index2 >= 0)
                    sections = style.substring(index + 1, index2);
                else
                    sections = style.substring(index + 1, style.length);
                styleInfo.sections = sections.split(",", 100);
            }
            styleInfo.name = "";
        }
    }

    return styleInfo;
}

glow.global = function glow$global(gauge)
{
    gauge.setFont("8pt Arial");
 
    var scale = gauge.getMainScale();
    var ticks = scale.getTickmarks();

    ticks.getMedium().setVisible(false);
}

glow.radial = function glow$radial(gauge, args)
{
    glow.global(gauge);
    gauge.getDashboardBorder().setInsideGap(0.1);

    var styleInfo = glow.getStyleInfo(args);
 
    if (styleInfo.name != null) {
        gauge.setStyle(styleInfo.name);
 
        if (styleInfo.name == "progress") {
            var scale = gauge.getMainScale();
            var filler = gauge.getMainIndicator();
 
            scale.getBar().setVisible(true);
            filler.setTemplate(gaugeTemplates.glowRadialFiller);
        }
    }
}

glow.linear = function glow$linear(gauge, args)
{
    glow.global(gauge);
 
    var scale = gauge.getMainScale();
    var bar = scale.getBar();
    var indicator = scale.getMainIndicator();
 
    bar.setVisible(false);
    indicator.setSize(0.2);
    indicator.setPosition(0.35);

    var styleInfo = glow.getStyleInfo(args);
 
    if (styleInfo.isGroup) {
        gauge.getBorder().setTemplate("<DataTemplate/>");
        gauge.getDashboardBorder().setTemplate("<DataTemplate/>");
    }

    if (styleInfo.isBullet) {
        scale.setThickness(0.9);
        scale.setPosition(0);
        indicator.setSize(0.25);
        indicator.setPosition(0.375);
        indicator.setTitle("Current");
        var target = new cfx.gauge.Marker();
        target.setSize(0.4);
        target.setPosition(0.5);
        target.setTitle("Target");
        target.setTemplate("MarkerThinRectangle");
        scale.getIndicators().add(target);
        gauge.getDefaultAttributes().setSectionThickness(0.5);
        gauge.getDefaultAttributes().setSectionPosition(0.25);
    }

    if (styleInfo.sections.length > 0) {
        var section;
        var from = 0;
        var to;
        for (var i = 0; i < styleInfo.sections.length; i++) {
            to = styleInfo.sections[i];
            section = new cfx.gauge.ScaleSection();
            section.setFrom(from);
            section.setTo(to);
            gauge.getMainScale().getSections().add(section);
            from = to;
        }
        gauge.getMainScale().setMax(to);
    }

}

glow.vert = function glow$vert(gauge, args)
{
    glow.linear(gauge, args);
}

glow.horz = function glow$horz(gauge, args)
{
    glow.linear(gauge, args);
}

glow.map = function glow$map(map, args) {
    map.setShowAdditionalLayers(false);
    var mapLayer = new cfx.maps.MapLayer();
    mapLayer.setPath("@main");
    var shadow = mapLayer.getShadow();
    shadow.setXOffset(3);
    shadow.setYOffset(3);
    shadow.setColor("#4DE0E0E0");
    shadow.setBlur(3);
    map.getLayers().add(mapLayer);
}

glow.heatmap = function glow$heatmap(heatmap, args) {
    var gradients = heatmap.getGradientStops();
    gradients.getItem(0).setColor("#EE7323");
    gradients.getItem(1).setColor("#3083FD");
}

glow.equalizer = function glow$equalizer(equalizer, args) {
    var eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#49EA22");
    eqItem.setCount(2);
    equalizer.getTopItems().add(eqItem);
    eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#EBF928");
    eqItem.setCount(1);
    equalizer.getTopItems().add(eqItem);

    equalizer.setOffColor("#33DBDBD9");
}

glow.trend = function glow$trend(trend, args) {
    var trendType = "";

    if (args !== undefined) {
        var t = args[0];
        if (t !== undefined) {
            trendType = t[0];
        }
    }

    if (trendType != undefined) {
        if (trendType.toUpperCase().indexOf("SINGLE") >= 0) {
            trend.getDelta().setVisible(false);
            trend.getPercentChange().setVisible(false);
            trend.getIndicator().setVisible(false);
        }

        if (trendType.toUpperCase().indexOf("GROUP") >= 0) {
            trend.getBorder().setTemplate("<DataTemplate/>");
        }
    }

}

glow.chart = function glow$chart(chart, args)
{
    var gallery = "";

    if (args !== undefined) {
        var t = args[0];
        if (t !== undefined) {
            gallery = t[0];
        }
    }

    if (gallery != undefined) {
        gallery = gallery.toUpperCase();

        if (gallery == "GROUP") {
            chart.getBorder().setTemplate('<DataTemplate/>');
        }
    }

    var yGrids = chart.getAxisY().getGrids();
    yGrids.getMajor().setVisible(false);
    yGrids.getMajor().setTickMark(cfx.TickMark.None);
    yGrids.getMinor().setVisible(false);
    yGrids.getMinor().setTickMark(cfx.TickMark.None);

    yGrids = chart.getAxisY2().getGrids();
    yGrids.getMajor().setVisible(false);
    yGrids.getMajor().setTickMark(cfx.TickMark.None);
    yGrids.getMinor().setVisible(false);
    yGrids.getMinor().setTickMark(cfx.TickMark.None);
 
    chart.setForeColor('#80FFFFFF');
 
    chart.getAllSeries().setMarkerStyle(cfx.MarkerStyle.Filled);
    chart.getAxisX().getLine().setWidth(1);
}

})();

cfx.ToolTipAttributes.prototype.setLineMode = function ToolTipAttributes$setLineMode()
{
    var lineMode = new cfx.ToolTipLineAttributes();
    lineMode.setY(1);
    lineMode.setAlignment(0);
    lineMode.getLine().setStyle(0);
    lineMode.getLine().setWidth(1);
    lineMode.setBorderTemplate('<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">2</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Canvas.Left="-1" Canvas.Top="0" Fill="{Binding Class=Border.fill}" Opacity="0.95" Stroke="{x:Null}"><DockPanel x:Name="container" Orientation="Vertical" Margin="4,4,0,0"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=1}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" FontWeight="Normal" Margin="3,0,3,3" Foreground="{Binding Class=PointLabel.fill}"/></DockPanel></Border></Canvas></DataTemplate>');
    lineMode.setContentTemplate('<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,1,3,1"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}" Margin="0,0,10,0"/><TextBlock Text="{Binding Path=Value}" FontWeight="Normal" HorizontalAlignment="Right" Foreground="{Binding Class=PointLabel.fill}"/></DockPanel></DataTemplate>');

    if (this.getTriggerMode() == 0)
        this.setTriggerMode(1);
    this.setMode(lineMode);
}
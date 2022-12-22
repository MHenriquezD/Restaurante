/// <reference path="../Intellisense/cfx.visualStudio.js" />

(function(){

var cfx = window.cfx;
var sfx = window.sfx;

cfx.motif = "hook";

var hookPictoGraph = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.43478</sys:String><sys:String x:Key="vertSpacingHive">-0.6</sys:String><sys:String x:Key="horzSpacingHive">0.4</sys:String></DataTemplate.Resources><Viewbox ViewWidth="20" ViewHeight="46"><Grid><Path Stroke="{Binding Path=Stroke}" Fill="{Binding Path=Fill}" Reuse="true" Data="M5.5,0.5B6.5,0.5,8,8,0,360M20.458,14.547C20.137,11.08,17.832,9.5,15.031,9.5H5.969c-2.801,0-5.105,1.58-5.427,5.048C0.517,14.658,0.5,14.613,0.5,14.731v11.094c0,0.835,0.672,1.513,1.5,1.513S3.5,26.66,3.5,25.825V14.5h2v13.847v16.137C5.5,45.597,6.396,46.5,7.5,46.5s2-0.903,2-2.017V26.5h2v17.983C11.5,45.597,12.396,46.5,13.5,46.5s2-0.903,2-2.017V28.347V14.5h2v11.325c0,0.835,0.672,1.513,1.5,1.513S20.5,26.66,20.5,25.825V14.731C20.5,14.613,20.483,14.658,20.458,14.547z" ></Path></Grid></Viewbox></DataTemplate>';

var gaugeTemplates = sfx["gauge.templates"];

if (gaugeTemplates != undefined) {
    gaugeTemplates.hookDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                      '</DataTemplate.Resources>' +
                        '<Border Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}">' +
                            '<Grid>' +
                              '<Grid.RowDefinitions>' +
                                '<RowDefinition Height="32"/>' +
                                '<RowDefinition Height="*"/>' +
                              '</Grid.RowDefinitions>' +
                              '<Border>' +
                                '<Border.Background>' +
                                     '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1" >' +
                                        '<GradientStop Color="#99FDFDFD" Offset="0"/>' +
                                        '<GradientStop Color="#99F2F2F3" Offset="1"/>' +
                                      '</LinearGradientBrush>' +
                                '</Border.Background>' +
                                '<TextBlock Margin="8,0" Text="{Binding Path=Title}" VerticalAlignment="Center" HorizontalAlignment="Left" Foreground="{Binding Class=DashboardTitle.fill}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Bold"/>' +
                              '</Border>' +
                              '<Border Grid.Row="1" Background="{Binding Path=Fill}">' +
                              '<Canvas x:Name="targetChart" Margin="4"/>' +
                              '</Border>' +
                            '</Grid>' +
                        '</Border>' +
                '</DataTemplate>';

    gaugeTemplates.hookRadialDashBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
        '<sys:String x:Key="ratio">2</sys:String>' +
        '<sys:String x:Key="startLocation">205</sys:String>' +
        '<sys:String x:Key="endLocation">335</sys:String>' +
        '<sys:String x:Key="yCenter">1</sys:String>' +
    '</DataTemplate.Resources>' +
    '</DataTemplate>';

    gaugeTemplates.hookRadialIndicator = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
            '<sys:String x:Key="ratio">0.15</sys:String>' +
            '<sys:String x:Key="yPivot">0.135</sys:String>' +
        '</DataTemplate.Resources>' +
        '<Viewbox ViewWidth="13" ViewHeight="86">' +
            '<Grid>' +
                '<Path Fill="{Binding Path=Fill}" Data="M8.819,68.433V-5h-5v73.583C1.568,69.605,0,71.867,0,74.5c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5C13,71.728,11.262,69.368,8.819,68.433z"/>' +
            '</Grid>' +
        '</Viewbox>' +
        '</DataTemplate>';

    gaugeTemplates.hookRadialBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas Margin="0">' +
            '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" />' +
            '</Canvas>' +
      '</DataTemplate>';

    gaugeTemplates.hookRadialCap = "RadialCapDefault";

    gaugeTemplates.hookRadialGlare = '<DataTemplate/>';

    gaugeTemplates.hookLinearDashBorder = '<DataTemplate/>';

    gaugeTemplates.hookLinearGlare = '<DataTemplate/>';

    gaugeTemplates.hookLinearBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas Margin="0">' +
          '<Border Fill="{Binding Path=Fill}" Stroke="{x:Null}" />' +
          '</Canvas>' +
        '</DataTemplate>';

    gaugeTemplates.hookLinearFiller = "LinearFillerSimple";

    gaugeTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">10</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Margin="0,0,0,0" Stroke="#808080" StrokeThickness="1" CornerRadius="3" CornerPercent="0.4" Canvas.Left="2" Canvas.Top="2"><Border.BitmapEffect><BlurBitmapEffect Radius="1"/></Border.BitmapEffect></Border><Border BorderBrush="{Binding Path=Stroke}" BorderThickness="2" Background="{Binding Path=Fill}" Opacity="0.92" CornerPercent="0.4" CornerRadius="3" Padding="4,4,4,0"><DockPanel x:Name="container" Orientation="Vertical"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Right" FontWeight="Bold" Margin="3,0,3,0"/><Border Height="1" Stroke="{Binding Path=Foreground}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>';

    gaugeTemplates.hookPictoGraph = hookPictoGraph;

    var gaugePalette = new cfx.gauge.Palette();
    gaugePalette.setColors([
        "#C7C7C9",   // Dashboard Back
        "#FFFFFF",   // Dashboard Inside
        "#808080",   // Border Back
        "#F0F0F0",   // Border Inside
        "#4994D0",   // Indicator
        "#376F9C",   // Indicator Border
        "#4994D0",   // Filler
        "#376F9C",   // Filler Border
        "#4A4A4A",   // Cap
        "#4A4A4A",   // Cap Border
        "#4A4A4A",   // Scale
        "#CCCCCC",   // Bar Back
        "#A4A4A4",   // Bar Border
        null,        // Bar Alternate
        "#EB4F54",   // Section Back 0
        "#B13C3F",        // Section Border 0
        null,        // Section Alternate 0
        "#F6921E",   // Section Back 1
        "#B96E17",        // Section Border 1
        null,        // Section Alternate 1
        "#70B27C",   // Section Back 2
        "#54865D",        // Section Border 2
        null,        // Section Alternate 2
        "#4A4A4A",   // Tickmark
        "#4A4A4A",   // Tickmark Inside
        "#919395",   // Title
        "#919395",   // Title Docked
        "#808080",   // Caption
        "#4A4A4A",   // Trend
        "#EB4F54",   // Conditional Less
        "#F6921E",        // Conditional Equal
        "#70B27C",   // Conditional Greater
        "#586356",   // ToolTipText
        "#FEFEFE",   // ToolTipBack
        "#A3A3A3",    // ToolTipBorder
        "#000844",    // OffBack        
        "#BFBFBF",  // EmptyFill
        "#9B9B9B",  // EmptyBorder
        "#4994D0",   // Attribute0Fill       
        "#70B27C",  // Attribute1Fill
        "#F6921E",  // Attribute2Fill
        "#EB4F54",  // Attribute3Fill
        "#A962A6",  // Attribute4Fill
        "#376F9C",   // Attribute0Stroke
        "#54865D",  // Attribute1Stroke
        "#B96E17",  // Attribute2Stroke
        "#B13C3F",  // Attribute3Stroke
        "#7F4A7D"  // Attribute4Stroke
    ]);

    cfx.gauge.Palette.setDefaultPalette(gaugePalette);
}


var chartTemplates = sfx["vector.templates"];

if (chartTemplates != undefined) {
    chartTemplates["DashboardTitle.fill"] = "0,#919395";
    chartTemplates["DashboardTitle.font-family"] = "1,Arial,helvetica,sans-serif";
    chartTemplates["AxisY_Text.fill"] = "0,#4A4A4A";

    chartTemplates.hookBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                        '<sys:String x:Key="plotMargin">targetChart</sys:String>' +
                        '<Thickness x:Key="externalMargin">16</Thickness>' +
                        '<Thickness x:Key="internalRectMargin">2</Thickness>' +
						'<Thickness x:Key="uiMargin">4,4,0,0</Thickness>' +
                        '<DataTemplate x:Key="internalRect">' +
                          '<Border CornerRadius="6" Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}" CornerPercent="0.5" />' +
                        '</DataTemplate>' +
                        '<DataTemplate x:Key="internal">' +
                          '<Line Stroke="{Binding Path=Stroke}" X1="{Binding Path=X1}" X2="{Binding Path=X2}" Y1="{Binding Path=Y1}" Y2="{Binding Path=Y2}"/>' +
                        '</DataTemplate>' +
                      '</DataTemplate.Resources>' +
                        '<Border Background="{Binding Path=Fill}" BorderBrush="{Binding Path=Stroke}" >' +
                            '<Grid>' +
                              '<Grid.RowDefinitions>' +
                                '<RowDefinition Height="32" />' +
                                '<RowDefinition Height="*"/>' +
                              '</Grid.RowDefinitions>' +
                              '<Border>' +
                                '<Border.Background>' +
                                     '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1" >' +
										                  '<GradientStop Color="#99FDFDFD" Offset="0"/>' +
										                  '<GradientStop Color="#99F2F2F3" Offset="1"/>' +
									                   '</LinearGradientBrush>' +
                                '</Border.Background>' +
                                '<Grid>' +
                                  '<Grid.ColumnDefinitions>' +
                                    '<ColumnDefinition Width="Auto" />' +
                                    '<ColumnDefinition Width="*"/>' +
                                  '</Grid.ColumnDefinitions>' +
                                  '<Rectangle Visible="{Binding Path=UIVisible}" Width="{Binding Path=UISize}" Margin="0,0,4,0" Height="1" Fill="#FF0000" Stroke="#000000" />' +
                                  '<TextBlock Grid.Column="1" Margin="8,0" Text="{Binding Path=Title}" FontFamily="{Binding Class=DashboardTitle.font-family}" FontSize="11" FontWeight="Bold" VerticalAlignment="Center" Foreground="{Binding Class=DashboardTitle.fill}"/>' +
                                '</Grid>' +
                              '</Border>' +
                              '<Border Grid.Row="1" Background="{Binding Path=Fill}">' +
                              '<Canvas x:Name="targetChart" Margin="0,0,0,4"/>' +
                              '</Border>' +
                            '</Grid>' +
                        '</Border>' +
                '</DataTemplate>';

    chartTemplates.hookBar = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<Canvas Margin="0">' +
      '<Border Canvas.Top="2" Canvas.Left="2" Fill="#55AAAAAA" Stroke="{x:Null}" />' +
      '<Border Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
      '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.hookGantt = chartTemplates.hookBar;

    chartTemplates.hookEqualizer = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
            '<DataTemplate x:Key="off">' +
                '<Border Fill="{Binding Path=Fill}" />' +
            '</DataTemplate>' +
        '</DataTemplate.Resources>' +
        '<Canvas Margin="0">' +
            '<Border Canvas.Top="2" Canvas.Left="2" Fill="#55AAAAAA" />' +
            '<Border Fill="{Binding Path=Fill}" />' +
        '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.hookArea = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                          '<sys:Double x:Key="cfxDefStrokeThickness">3</sys:Double>' +
                          '<LinearGradientBrush x:Key="opacityMask" StartPoint="0,0" EndPoint="0,1">' +
                            '<GradientStop Offset="0" Color="#FFFFFFFF" />' +
                            '<GradientStop Offset="1" Color="#00FFFFFF" />' +
                          '</LinearGradientBrush>' +
                      '</DataTemplate.Resources>' +
                      '<Canvas>' +
                          '<Switch Property="{Binding Path=FillMode}">' +
                                '<Polygon Points="{Binding Path=PointsPolygon}" Switch.Value="0">' +
                                    '<Polygon.Fill>' +
                                    '<LinearGradientBrush EndPoint="0,1" StartPoint="0,0">' +
                                        '<GradientStop Color="{Binding Path=FillColor}" Opacity="0.3" Offset="0"/>' +
                                        '<GradientStop Color="{Binding Path=FillColor}" Opacity="0.3" Offset="1"/>' +
                                    '</LinearGradientBrush>' +
                                    '</Polygon.Fill>' +
                                '</Polygon>' +
                                '<Polygon Points="{Binding Path=PointsPolygon}" Fill="{Binding Path=Fill}" OpacityMask="{StaticResource opacityMask}"/>' +
                          '</Switch>' +
                          '<Polyline Points="{Binding Path=PointsTop}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}" />' +
                      '</Canvas>' +
              '</DataTemplate>';

    chartTemplates.hookLine = "LineDefault";

    chartTemplates.hookCurveArea = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                      '<DataTemplate.Resources>' +
                          '<sys:Double x:Key="cfxDefStrokeThickness">3</sys:Double>' +
                          '<LinearGradientBrush x:Key="opacityMask" StartPoint="0,0" EndPoint="0,1">' +
                            '<GradientStop Offset="0" Color="#FFFFFFFF" />' +
                            '<GradientStop Offset="1" Color="#00FFFFFF" />' +
                          '</LinearGradientBrush>' +
                      '</DataTemplate.Resources>' +
                      '<Canvas>' +
                          '<Switch Property="{Binding Path=FillMode}">' +
                                '<Path Data="{Binding Path=Geometry}" Switch.Value="0">' +
                                    '<Path.Fill>' +
                                    '<LinearGradientBrush EndPoint="0,1" StartPoint="0,0">' +
                                        '<GradientStop Color="{Binding Path=FillColor}" Opacity="0.3" Offset="0"/>' +
                                        '<GradientStop Color="{Binding Path=FillColor}" Opacity="0.3" Offset="1"/>' +
                                    '</LinearGradientBrush>' +
                                    '</Path.Fill>' +
                                '</Path>' +
                                '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" OpacityMask="{StaticResource opacityMask}"/>' +
                          '</Switch>' +
                          '<Path Data="{Binding Path=GeometryTop}" Stroke="{Binding Path=Stroke}" StrokeThickness="{Binding Path=StrokeThickness}" Open="true" />' +
                      '</Canvas>' +
              '</DataTemplate>';

    chartTemplates.hookCurve = "CurveDefault";

    chartTemplates.hookBubble = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                '<Canvas>' +
                    '<Ellipse Canvas.Top="2" Canvas.Left="2" Fill="#55AAAAAA" />' +
                    '<Ellipse Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
                '</Canvas>' +
          '</DataTemplate>';

    chartTemplates.hookDoughnut = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
      '<DataTemplate x:Key="cfxRay">' +
         '<Line X1="{Binding Path=X1}" Y1="{Binding Path=Y1}" X2="{Binding Path=X2}" Y2="{Binding Path=Y2}" Stroke="#FFFFFF" StrokeThickness="1"/>' +
      '</DataTemplate>' +
    '</DataTemplate.Resources>' +
    '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
    '</DataTemplate>';

    chartTemplates.hookPie = chartTemplates.hookDoughnut;

    chartTemplates.hookTreeMap = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<Canvas Margin="1">' +
      '<Border Margin="0,3,0,0" Fill="#66999999" />' +
      '<Border Margin="0,0,3,3" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
      '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.hookFunnel = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<Canvas>' +
            '<Polygon Canvas.Left="2" Canvas.Top="2" Points="{Binding Path=PointsPolygon}" Fill="#66999999" />' +
            '<Polygon Points="{Binding Path=PointsPolygon}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
        '</Canvas>' +
    '</DataTemplate>';

    chartTemplates.hookPyramid = chartTemplates.hookFunnel;

    chartTemplates.hookOverlayBubble = chartTemplates.hookBubble;

    chartTemplates.hookSparklineLine = chartTemplates.hookLine;

    chartTemplates.hookSparklineBar = chartTemplates.hookBar;

    chartTemplates.hookSparklineArea = chartTemplates.hookArea;

    chartTemplates.hookBullet = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                    '<DataTemplate.Resources>' +
                      '<DataTemplate x:Key="templateLine">' +
                        '<Line X1="{Binding Path=X1}" X2="{Binding Path=X2}" Y1="{Binding Path=Y1}" Y2="{Binding Path=Y2}" Stroke="{Binding Path=Stroke}" StrokeThickness="3" />' +
                      '</DataTemplate>' +
                    '</DataTemplate.Resources>' +
                    '<Canvas>' +
                    '<Rectangle Canvas.Top="2" Canvas.Left="2" Fill="#55AAAAAA" Stroke="{x:Null}" />' +
                    '<Rectangle Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
                    '</Canvas>' +
                    '</DataTemplate>';

    chartTemplates.hookRose = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
                        '<Canvas>' +
                            '<Path Canvas.Top="2" Canvas.Left="2" Data="{Binding Path=Geometry}" Fill="#55AAAAAA" />' +
                            '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" />' +
                        '</Canvas>' +
                    '</DataTemplate>';

    chartTemplates["TipBorderDefault"] = '<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">10</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Margin="0,0,0,0" Stroke="#808080" StrokeThickness="1" CornerRadius="3" CornerPercent="0.4" Canvas.Left="2" Canvas.Top="2"><Border.BitmapEffect><BlurBitmapEffect Radius="1"/></Border.BitmapEffect></Border><Border BorderBrush="{Binding Path=ItemFillS}" BorderThickness="2" Background="{Binding Path=Fill}" Opacity="0.92" CornerPercent="0.4" CornerRadius="3" Padding="4,4,4,0"><DockPanel x:Name="container" Orientation="Vertical"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" Margin="3,0,3,0"/><Border Height="1" Stroke="{Binding Class=AxisX_Major.stroke}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>';

    chartTemplates["TipContentDefault"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,2,3,1"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}" Margin="0,0,12,0"/><Switch Property="{Binding Path=CurrSeries}"><TextBlock Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right" Switch.Value="1" /><TextBlock Text="{Binding Path=Value}" HorizontalAlignment="Right"/></Switch></DockPanel></DataTemplate>';
    chartTemplates["TipContentPercent"] = '<DataTemplate xmlns:x="a"><DockPanel Orientation="Vertical" Margin="3,0,3,3"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}"/><DockPanel Orientation="Horizontal"><TextBlock Text="{Binding Path=Macro%v out of %t}"/><TextBlock Margin="6,0,0,0" Text="{Binding Path=Macro(%p%%)}" FontWeight="Bold" HorizontalAlignment="Right"/></DockPanel></DockPanel></DataTemplate>';
    chartTemplates["TipContentDefaultX"] = '<DataTemplate xmlns:x="a"><Grid Margin="3,0,3,3"><Grid.ColumnDefinitions><ColumnDefinition Width="Auto"/><ColumnDefinition Width="Auto"/></Grid.ColumnDefinitions><Grid.RowDefinitions><RowDefinition Height="Auto"/><RowDefinition Height="Auto"/></Grid.RowDefinitions><TextBlock Grid.Row="0" Grid.Column="0" Text="{Binding Path=SeriesTX}" Foreground="{Binding Path=ItemFill}" Margin="0,0,12,0"/><TextBlock Grid.Row="0" Grid.Column="1" Text="{Binding Path=ValueX}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock Grid.Row="1" Grid.Column="0" Text="{Binding Path=SeriesTY}" Foreground="{Binding Path=ItemFill}" Margin="0,0,12,0"/><TextBlock Grid.Row="1" Grid.Column="1" Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right"/></Grid></DataTemplate>';

    chartTemplates.hookPictoGraph = hookPictoGraph;

    var chartPalette = new cfx.Palette();
    chartPalette.setColors([
        "#4994D0",   // Series 0
        "#70B27C",   // Series 1
        "#F6921E",   // Series 2
        "#EB4F54",   // Series 3
        "#A962A6",   // Series 4
        "#986C41",   // Series 5
        "#CC527B",   // Series 6
        "#AAAAAA",   // Series 7
        "#A2BC26",   // Series 8
        "#75ADFE",   // Series 9
        "#EC922C",   // Series 10
        "#C3C3C3",   // Series 11
        "#E14D57",   // Series 12
        "#5290E9",   // Series 13
        "#04A48C",   // Series 14
        "#FBB617",   // Series 15
        "#1B374E",   // Label0
        "#2A432E",   // Label1
        "#5C370B",   // Label2
        "#581E1F",   // Label3
        "#3F253E",   // Label4
        "#FDB46C",   // Label5
        "#4C1F2E",   // Label6
        "#404040",   // Label7
        "#FFFF3F",   // Label8
        "#2C415F",   // Label9
        "#583710",   // Label10
        "#494949",   // Label11
        "#541D21",   // Label12
        "#1F3657",   // Label13
        "#06FFE9",   // Label14
        "#5E4409",   // Label15
        "#FFFFFF",   // Background
        "#F0F0F0",   // AlternateBackground
        "#00000000", // InsideBackground
        "#C7C7C9",   // Border
        "#E8E8E8",   // AxesAndGridlines
        "#F8F8F8",   // AxesAlternate
        "#EB4F54",   // CustomGridLines
        "#94C59D",   // AxisSections
        "#4A4A4A",   // AxisLabels
        "#666666",   // PointLabels
        "#00000000", // MarkerBorder
        "#A7A7A7",   // TitlesFore
        "#00000000", // TitlesBack
        "#6E6E6E",   // LegendText
        "#00000000", // LegendBackground
        "#FEFEFE",   // DataBack
        "#4A4A4A",   // DataFore
        "#F8F8F8",   // DataBackAlternate
        "#4A4A4A",   // DataForeAlternate
        "#F8F8F8",   // DataTitlesBack
        "#A9A9A9",   // DataTitlesFore
        "#ECECEC",   // DataGridlines
        "#ffffff",   // DataBackground
        "#586356",   // ToolTipText
        "#FEFEFE",   // ToolTipBack
        "#A3A3A3",   // ToolTipBorder
        "#666666",    // InsideLabels
        "#BFBFBF",  // EmptyFill
        "#9B9B9B"  // EmptyBorder
    ]);
    cfx.Chart.setDefaultPalette(chartPalette);
}


var hook = function hook()
{
}

cfx.motifs.hook = hook;

hook.getStyleInfo = function hook$global(args)
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

hook.global = function hook$global(gauge)
{
    gauge.setFont("8pt Arial");
}

hook.radial = function hook$radial(gauge, args)
{
    hook.global(gauge);
 
    var styleInfo = hook.getStyleInfo(args);
 
    if (styleInfo.name != null)
        gauge.setStyle(styleInfo.name);

    var mainScale = gauge.getMainScale();
    var bar = mainScale.getBar();

    bar.setTemplate(gaugeTemplates.hookRadialBar);
    if (styleInfo.name == "progress") {
        mainScale.setThickness(0.85);
    }
    else {
        mainScale.setThickness(1.3);
        mainScale.setPosition(-0.1);
        mainScale.getBar().setVisible(true);

        var cap = mainScale.getCap();
        cap.setSize(0.015);
        cap.setTemplate("RadialCapPlain");
        cap.setVisible(false);

        var mainIndicator = gauge.getMainIndicator();
        mainIndicator.setSize(0.8);
        mainIndicator.setPosition(0.05);

        var tickmarks = mainScale.getTickmarks();
        tickmarks.getMajor().setVisible(false);
        tickmarks.getMedium().setVisible(false);

        gauge.setFont("8pt Arial");

        var title = new cfx.gauge.Title();
        title.setText('');
        gauge.getTitles().add(title);
        title = new cfx.gauge.Title();
        title.setDock(cfx.gauge.DockArea.Bottom);
        title.setText("%v");
        title.setTag("TitleLarge");
        title.setFont("40pt Arial");
        gauge.getTitles().add(title);
    }
}

hook.linear = function hook$linear(gauge, args)
{
    hook.global(gauge);
    var scale = gauge.getMainScale();
    var bar = scale.getBar();

    bar.setVisible(true);
    bar.setTemplate(gaugeTemplates.hookLinearBar);
    var tickmarks = scale.getTickmarks();
    tickmarks.getMedium().setVisible(false);

    scale.setThickness(0.7);
    var mainIndicator = gauge.getMainIndicator();

    var styleInfo = hook.getStyleInfo(args);
 
    if (styleInfo.isGroup) {
        gauge.getBorder().setTemplate("<DataTemplate/>");
        gauge.getDashboardBorder().setTemplate("<DataTemplate/>");
    }

    if (styleInfo.isBullet) {
        scale.setThickness(0.9);
        scale.setPosition(0);
        mainIndicator.setSize(0.25);
        mainIndicator.setPosition(0.475);
        mainIndicator.setTitle("Current");
        var target = new cfx.gauge.Marker();
        target.setSize(0.4);
        target.setPosition(0.6);
        target.setTitle("Target");
        target.setTemplate("MarkerThinRectangle");
        scale.getIndicators().add(target);
        gauge.getDefaultAttributes().setSectionThickness(bar.getThickness());
        gauge.getDefaultAttributes().setSectionPosition(bar.getPosition());
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

hook.vert = function hook$vert(gauge, args)
{
    hook.linear(gauge, args);
}

hook.horz = function hook$horz(gauge, args)
{
    hook.linear(gauge, args);
 
    var styleInfo = hook.getStyleInfo(args);
    if (!styleInfo.isBullet)
        gauge.getMainScale().setThickness(0.5);
}

hook.chart = function hook$chart(chart, args)
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
 
    var xGrids = chart.getAxisX().getGrids();
    xGrids.getMinor().setTickMark(cfx.TickMark.None);
    xGrids.getMajor().setTickMark(cfx.TickMark.Outside);

    chart.getAllSeries().setMarkerStyle(cfx.MarkerStyle.Filled);
    chart.getAllSeries().getBorder().setUseForLines(false);

    chart.setAxesStyle(cfx.AxesStyle.Math);

    chart.setFont("8pt Arial");
}

hook.map = function hook$map(map, args) {
    map.setShowAdditionalLayers(false);
    var mapLayer = new cfx.maps.MapLayer();
    mapLayer.setPath("@main");
    var shadow = mapLayer.getShadow();
    shadow.setXOffset(3);
    shadow.setYOffset(3);
    shadow.setColor("#4C444444");
    shadow.setBlur(2);
    map.getLayers().add(mapLayer);
}

hook.heatmap = function hook$heatmap(heatmap, args) {
    var gradients = heatmap.getGradientStops();
    gradients.getItem(0).setColor("#4994D0");
    gradients.getItem(1).setColor("#70B27C");
}

hook.equalizer = function hook$equalizer(equalizer, args) {
    var eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#70B27C");
    eqItem.setCount(2);
    equalizer.getTopItems().add(eqItem);
    eqItem = new cfx.equalizer.EqualizerItem();
    eqItem.setColor("#F6921E");
    eqItem.setCount(1);
    equalizer.getTopItems().add(eqItem);

    equalizer.setOffColor("#33C8C8C8");
}
    
hook.trend = function hook$trend(trend, args)
{
    trend.getSecondaryValues().setAlphaForeground(1);
    trend.getDelta().setVisible(false);
    trend.getPercentChange().setVisible(false);
    trend.getReference().setVisible(true);
    trend.getPercentChange().setVisible(true);
    trend.getIndicator().setStyle(cfx.gauge.IndicatorStyle.TriangleVertical);
    trend.getIndicator().setPosition(cfx.gauge.IndicatorPosition.Primary);
    trend.getSecondaryValues().setSeparatorWidth(0);

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
            trend.getReference().setVisible(false);
        }

        if (trendType.toUpperCase().indexOf("GROUP") >= 0) {
            trend.getBorder().setTemplate("<DataTemplate/>");
        }
    }

}

hook.border = function hook$border(border, args)
{
}

})();

cfx.ToolTipAttributes.prototype.setLineMode = function ToolTipAttributes$setLineMode()
{
    var lineMode = new cfx.ToolTipLineAttributes();
    lineMode.getLine().setStyle(0);
    lineMode.setBorderTemplate('<DataTemplate xmlns:x="a"><DataTemplate.Resources><MultiplyConverter x:Key="multConverter"/><StringConverter x:Key="titleConverter"/><Thickness x:Key="padding">1</Thickness></DataTemplate.Resources><Canvas Padding="{Binding Path=Padding}"><Border Canvas.Left="-1" Canvas.Top="0" Fill="{Binding Class=Border.fill}" Opacity="0.95" Stroke="{Binding Class=AxisY_Line.stroke}"><DockPanel x:Name="container" Orientation="Vertical" Margin="0,4,0,0"><TextBlock Text="{Binding Path=Title, Converter={StaticResource titleConverter},ConverterParameter=%u}}" FontSize="{Binding Path=FontSize, Converter={StaticResource multConverter},ConverterParameter=0.8}" Visible="{Binding Path=TitleVisible}" HorizontalAlignment="Left" FontWeight="Normal" Margin="3,1,3,1" Foreground="{Binding Class=PointLabel.fill}"/><Border Height="1" Stroke="{Binding Class=AxisY_Line.stroke}" StrokeThickness="1" Margin="0,0,0,4" Visible="{Binding Path=TitleVisible}"/></DockPanel></Border></Canvas></DataTemplate>');
    lineMode.setContentTemplate('<DataTemplate xmlns:x="a"><DockPanel Orientation="Horizontal" Margin="3,1,3,1"><TextBlock Text="{Binding Path=SeriesT}" Foreground="{Binding Path=ItemFill}" Margin="0,0,10,0"/><Switch Property="{Binding Path=CurrSeries}"><TextBlock Text="{Binding Path=Value}" FontWeight="Bold" HorizontalAlignment="Right" Foreground="{Binding Class=PointLabel.fill}" Switch.Value="1" /><TextBlock Text="{Binding Path=Value}" FontWeight="Normal" HorizontalAlignment="Right" Foreground="{Binding Class=PointLabel.fill}"/></Switch></DockPanel></DataTemplate>');
    lineMode.setY(1);
    lineMode.setAlignment(0);
    lineMode.getLine().setWidth(2);

    if (this.getTriggerMode() == 0)
        this.setTriggerMode(1);
    this.setMode(lineMode);
}
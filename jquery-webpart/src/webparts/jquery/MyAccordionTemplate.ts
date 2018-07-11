export default class MyAccordionTemplate {
  public static templateHtml: string =  `
  <head>
  <style>
  #tabs-5{
    font-size: 14px;
    height:600px;
    width:400px;
  }
  .ui-widget-header {
     background:#b9cd6d;
     border: 1px solid #b9cd6d;
     color: #FFFFFF;
     font-weight: bold;
  }
</style>
</head>

<body>
  <div id = "tabs-5">
     <ul>
        <li><a href = "#tabs-6">Tab 1</a></li>
        <li><a href = "#tabs-7">Tab 2</a></li>
        <li><a href = "#tabs-8">Tab 3</a></li>
     </ul>
     <div id = "tabs-6">
        <iframe src="https://instawidget.net/v/user/netatwork_corp" id="link-3cc5f2196484f7b08e50f35826c3d72e2c8b256b4d213e27d153a4094141813e"
        scrolling="auto" frameborder="0" style="border:none; overflow:hidden; width:600px; height:430px; background: white; float:left;" -ms-zoom: 0.75;
                -moz-transform: scale(0.75);
                -moz-transform-origin: 0 0;
                -o-transform: scale(0.75);
                -o-transform-origin: 0 0;
                -webkit-transform: scale(0.75);
                -webkit-transform-origin: 0 0; allowTransparency="true">
        </iframe>
            
        
     </div>
     <div id = "tabs-7">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTestPage-139126046717319%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
     </div>
     <div id = "tabs-8">
        <p>
        <a class="twitter-timeline" href="https://twitter.com/doshidev?ref_src=twsrc%5Etfw">Tweets by doshidev</a> 
        
        
        </p>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat.
        </p>
     </div>
  </div>
  </body>
`;
}
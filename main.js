//var data=require('./data.json');


//console.log(data);



var pubs= 
// 
{
    "name": "Thing","feature":"true",
    "children": [
        {
            "name": "AttackerOS","feature":"true","children": [
                {"name": "KaliLinux","feature":"true"},
                {"name": "Windows8.1","feature":"true"},
                    
            
            ]},
        
            {"name": "Defense","children":[
                {"name": "AccessControl"},
                {"name": "Backup"},
                {"name": "EmissionSecurity"},
                {"name": "EncryptionCryptography"},
                {"name": "HoneyPot"},
                {"name": "KeyManagement"},
                {"name": "LoginSystem"},
                {"name": "MemoryProtection"},
                {"name": "MessageDigestChecksum"},
                {"name": "Monitoring"},
                {"name": "Sanitizer"},
                {"name": "SecurityHardware"},
                {"name": "SecurityNetworkCommunication"},
                {"name": "SourceCodeAnalysis"},
                {"name": "Standard"},
                {"name": "TechnologyMistakenlyUsedAsCounterMeasure"},
                {"name": "TrustManagement"},
                {"name": "VulnerabilityScanner"},
            ]},

            {"name": "Protocol","feature":"true","children":[
                {"name": "EmailProtocol","feature":"true"},
                {"name": "FTP","feature":"true"},
                {"name": "HTTP","feature":"true",children:[
                    {"name": "HttpRequest","feature":"true"},
                    {"name": "HttpResponse","feature":"true"},
                ]},
                {"name": "HTTPS","feature":"true"},
                {"name": "SMTP"},
                {"name": "SSH","feature":"true"},
                {"name": "TCP"},
                {"name": "Telnet"},
                {"name": "UDP"},
                
            ]},

            {"name": "RequestTypes","children":[
                {"name": "Connect"},
                {"name": "Delete"},
                {"name": "Get"},
                {"name": "Head"},
                {"name": "Option"},
                {"name": "Post"},
                {"name": "Put"},
                {"name": "Trace"},
                
                
            ]},

            {"name": "SeverityLevel","children":[
                {"name": "Critical"},
                {"name": "Low"},
                {"name": "Moderate"},     
            ]},

            {"name": "Technology","children":[
                {"name": "ASP"},
                {"name": "Java"},
                {"name": "PHP"},
                {"name": "Script"},
                {"name": "SQL"},     
            ]},

            {"name": "ToolsForAttack","feature":"true","children":[
                {"name": "Ares","feature":"true"},
                {"name": "DDoSSIM","feature":"true"},
                {"name": "DVWA","feature":"true"},
                {"name": "GoldenEye","feature":"true"},
                {"name": "Grum","feature":"true"},
                {"name": "HashCat","feature":"true"},
                {"name": "HashPump","feature":"true"},
                {"name": "Heartleech","feature":"true"},
                {"name": "HOIC","feature":"true"},
                {"name": "Hulk","feature":"true"},
                {"name": "Hydra","feature":"true"},
                {"name": "LOIC","feature":"true"},
                {"name": "Medusa","feature":"true"},
                {"name": "Metasploit","feature":"true"},
                {"name": "Ncrack","feature":"true"},
                {"name": "NmapScript","feature":"true"},
                {"name": "Patator","feature":"true"},
                {"name": "SAINT"},
                {"name": "Satan"},
                {"name": "Slowloris","feature":"true"},
                {"name": "Storm","feature":"true"},
                {"name": "Slowhttptest"},
                {"name": "Windigo","feature":"true"},
            ]},

            {"name": "TrafficFeatures","info":["Something"],"feature":"true","children":[
                {"name": "DestinationPort","feature":"true"},
                {"name": "Down/UpRatio","feature":"true"},
                {"name": "FlagFeatures","feature":"true",children:[
                    {"name": "ACKFlagCount","feature":"true"},
                    {"name": "BwdPSHFlags","feature":"true"},
                    {"name": "BwdURGFlags","feature":"true"},
                    {"name": "CWEFlagsCount","feature":"true"},
                    {"name": "ECEFlagCount","feature":"true"},
                    {"name": "FINFlagCount","feature":"true"},
                    {"name": "FwdPSHFlags","feature":"true"},
                    {"name": "FwdURGFlags","feature":"true"},
                    {"name": "PSHFlagCount","feature":"true"},
                    {"name": "RSTFlagCount","feature":"true"},
                    {"name": "SYNFlagCount","feature":"true"},
                    {"name": "URGFlagCount","feature":"true"},
                ]},
                {"name": "FlowFeatures","feature":"true",children:[
                    {"name": "ActiveMax","feature":"true"},
                    {"name": "ActiveMean","feature":"true"},
                    {"name": "ActiveMin","feature":"true"},
                    {"name": "ActiveStd","feature":"true"},
                    {"name": "FlowBytes/s","feature":"true"},
                    {"name": "FlowDuration","feature":"true"},
                    {"name": "FlowPackets/s","feature":"true"},
                    {"name": "IdleFeatures","feature":"true",children:[
                        {"name": "IdleMax","feature":"true"},
                        {"name": "IdleMean","feature":"true"},
                        {"name": "IdleMin","feature":"true"},
                        {"name": "IdleStd","feature":"true"},
                    ]},
                    {"name": "SubFlowFeatures","feature":"true",children:[
                        {"name": "SubflowBwdBytes","feature":"true"},
                        {"name": "SubflowBwdPackets","feature":"true"},
                        {"name": "SubflowFwdBytes","feature":"true"},
                        {"name": "SubflowFwdPackets","feature":"true"},
                    ]},
                ]},
                {"name": "HeaderFeatures","feature":"true",children:[
                        {"name": "BackwardHeaderFeatures","feature":"true",children:[
                            {"name": "BackwardHeaderLength","feature":"true"},
                        ]},
                        {"name": "ForwardHeaderFeatures","feature":"true",children:[
                            {"name": "ForwardHeaderLength","feature":"true"},
                            {"name": "ForwardHeaderLength.1","feature":"true"}
                        ]},
                ]},
                {"name": "IATFeatures","feature":"true",children:[
                        {"name": "BackwardIATFeatures","feature":"true",children:[
                            {"name": "BwdIATMax","feature":"true"},
                            {"name": "BwdIATMean","feature":"true"},
                            {"name": "BwdIATMin","feature":"true"},
                            {"name": "BwdIATStd","feature":"true"},
                            {"name": "BwdIATTotal","feature":"true"},
                        ]},
                        {"name": "FlowIATFeatures","feature":"true",children:[
                            {"name": "FlowIATMax","feature":"true"},
                            {"name": "FlowIATMean","feature":"true"},
                            {"name": "FlowIATMin","feature":"true"},
                            {"name": "FlowIATStd","feature":"true"},
                        ]},
                        {"name": "ForwardIATFeatures","feature":"true",children:[
                            {"name": "FwdIATMean","feature":"true"},
                            {"name": "FwdIATMin","feature":"true"},
                            {"name": "FwdIATStd","feature":"true"},
                            {"name": "FwdIATTotal","feature":"true"},
                        ]},
                ]},
                {"name": "PacketFeatures","feature":"true",children:[
                    {"name": "AveragePacketSize","feature":"true"},
                    {"name": "BackwardPacketFeatures","feature":"true",children:[
                        {"name": "BwdAvgBulkRate","feature":"true"},
                        {"name": "BwdAvgBytes/Bulk","feature":"true"},
                        {"name": "BwdAvgPackets/Bulk","feature":"true"},
                        {"name": "BwdPacketLengthMax","feature":"true"},
                        {"name": "BwdPacketLengthMean","feature":"true"},
                        {"name": "BwdPacketLengthMin","feature":"true"},
                        {"name": "BwdPacketLengthStd","feature":"true"},
                        {"name": "BwdPackets/s","feature":"true"},
                        {"name": "InitWinBytesBackward","feature":"true"},
                        {"name": "TotalBackwardPackets","feature":"true"},
                        {"name": "TotalLengthOfBwdPackets","feature":"true"},
                    ]},
                    {"name": "ForwardPacketFeatures","feature":"true",children:[
                        {"name": "ActDataPktFwd","feature":"true"},
                        {"name": "FwdAvgBulkRate","feature":"true"},
                        {"name": "FwdAvgBytes/Bulk","feature":"true"},
                        {"name": "FwdAvgPackets/Bulk","feature":"true"},
                        {"name": "FwdPacketLengthMax","feature":"true"},
                        {"name": "FwdPacketLengthMean","feature":"true"},
                        {"name": "FwdPacketLengthMin","feature":"true"},
                        {"name": "FwdPacketLengthStd","feature":"true"},
                        {"name": "FwdPackets/s","feature":"true"},
                        {"name": "InitWinBytesforward","feature":"true"},
                        {"name": "TotalFwdPackets","feature":"true"},
                        {"name": "TotalLengthOfFwdPackets","feature":"true"},
                    ]},
                    {"name": "MaxPacketLength","feature":"true"},
                    {"name": "MinPacketLength","feature":"true"},
                    {"name": "PacketLengthMean","feature":"true"},
                    {"name": "PacketLengthStd","feature":"true"},
                    {"name": "PacketLengthVariance","feature":"true"},
                ]},
                {"name": "SegmentFeatures","feature":"true",children:[
                    {"name": "AvgBwdSegmentSize","feature":"true"},
                    {"name": "AvgFwdSegmentSize","feature":"true"},
                    {"name": "MinSegSizeForward","feature":"true"},
                ]},
                
            ]},

            {"name": "TypesOfAttacks","feature":"true",children:[
                {"name": "Botnet","feature":"true"},
                {"name": "BruteForceAttack","feature":"true"},
                {"name": "DDoSAttack","feature":"true"},
                {"name": "DoSAttack","feature":"true",children:[
                    {"name": "Apache2"},
                    {"name": "Back"},
                    {"name": "Land"},
                    {"name": "Neptune"},
                    {"name": "Pod"},
                    {"name": "ProcessTable"},
                    {"name": "Smurf"},
                    {"name": "Teardrop"},
                    {"name": "Udpstorm"},
                    {"name": "Worm"},
                ]},
                {"name": "HearBleedAttack","feature":"true"},
                {"name": "InfiltrationAttack","feature":"true"},
                {"name": "Portscan","feature":"true"},
                {"name": "Probe",children:[
                    {"name": "Ipsweep",children:[
                        {"name": "ICMPEcho"},
                    ]},
                    {"name": "PortProbe"},
                    {"name": "Portscan"},
                ]},
                {"name": "R2L",children:[
                    {"name": "FtpWrite"},
                    {"name": "GuessPassword"},
                    {"name": "Httptunnel"},
                    {"name": "Imap"},
                    {"name": "Multihop"},
                    {"name": "Phf"},
                    {"name": "Sendmail"},
                    {"name": "Snmpgetattack"},
                    {"name": "Snmpguess"},
                    {"name": "Spy"},
                    {"name": "Warezclient"},
                    {"name": "Warezmaster"},
                    {"name": "Xlock"},
                    {"name": "Xsnoop"},
                ]},
                {"name": "U2R",children:[
                    {"name": "BufferOverflow"},
                    {"name": "LoadModule"},
                    {"name": "Perl"},
                    {"name": "Ps"},
                    {"name": "Rootkit"},
                    {"name": "SQLAttack"},
                    {"name": "Xterm"},
                ]},
                {"name": "WebAttack","feature":"true",children:[
                    {"name": "CrossSiteScriptingXSS","feature":"true"},
                    {"name": "SQLInjection","feature":"true"},
                ]},
            ]},

            {"name": "VictimFirewall","feature":"true",children:[
                {"name": "Fortinet","feature":"true"},
                
            ]},

            {"name": "VictimOS","feature":"true",children:[
                {"name": "Mac","feature":"true"},
                {"name": "Ubuntu","feature":"true",children:[
                    {"name": "Ubuntu16","feature":"true"},
                ]},
                {"name": "Windows","feature":"true",children:[
                    {"name": "Vista","feature":"true"},
                    {"name": "Windows1032Bit","feature":"true"},
                    {"name": "Windows1064Bit","feature":"true"},
                    {"name": "Windows7","feature":"true"},
                    {"name": "Windows8.1","feature":"true"},
                ]},
            ]},

            {"name": "Vulnerability",children:[
                {"name": "HumanError",children:[
                    {"name": "AuditingAndLogging"},
                    {"name": "Authentication"},
                    {"name": "Authorization"},
                    {"name": "ConfigurationManagement"},
                    {"name": "ExceptionManagement"},
                ]},
                {"name": "Logic",children:[
                    {"name": "WeaknessIntroducedDuringImplementation"},
                ]},
                {"name": "Physical"},
                {"name": "Technical"},
                    {"name": "WeaknessInOWASPTopTen"},
                    {"name": "WeaknessIntroducedDuringDesign"},
                    
            ]},
        
    
    ]};









// console.log(pubs);

var diameter = 1600;  //diameter:800

var margin = {top: 20, right: 200, bottom: 20, left: 200},  //top:20 bottom:20
    width = diameter,
    height = diameter;
    
var i = 0,
    duration = 350,  //duration:350
    root;

// Add tooltip div
var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 1e-6);    

var tree = d3.layout.tree()
    .size([360, diameter / 2 - 60])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 1) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svg = d3.select("body").append("svg")
    .attr("width", width )
    .attr("height", height )
    .append("g")
    .attr("transform", "translate(" + diameter/ 2 + "," + diameter/ 2  + ")");

root = pubs;
root.x0 = height/2;
root.y0 = 0;

//root.children.forEach(collapse); // start with all children collapsed
update(root);

d3.select(self.frameElement).style("height", "1600px");

//



//
function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root),
      links = tree.links(nodes);


      

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 120; });  //this opens graph , previous value 90

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
       .on("mouseover", mouseover)
       .on("mousemove", function(d){mousemove(d);})
       .on("mouseout", mouseout)
      .attr("r", 1e-6)
      .style("fill", function(d) 
      { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", 10)
      .attr("dy", ".90em")
      .attr("text-anchor", "start")
      //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

///

function getImagePath(s){
    return(s.toString().split(",")[0].toString().split(":")[1]);
}

function getDetail(s,i){
   switch(i){
       case 0:
        return (s.toString().split(",")[1].toString().split(":")[1]);  
        case 1:
            return (s.toString().split(",")[2].toString().split(":")[1]);
        case 2:
            return(s.toString().split(",")[3].toString().split(":")[1].split("}")[0]);
   }
}


      function mouseover(d) {
    //     var string = getImagePath(JSON.stringify(d.info));
    // console.log("F:\\RadialTree\\".concat(string.toString().substring(1,string.length-1)));
    //     console.log(string);
    //     div.text("some text");
    //     div.append("img")
    //                 .attr("src","https://www.verywellhealth.com/alopecia-areata-remedies-88328")
    //                 .attr("x", -8)
    //                 .attr("y", -8)
    //                 .attr("width","32px")                  
    //                 .attr("height","50px"); 
    //                 div.style("visibility", "visible");
        div.transition()
        .duration(300)
        .style("opacity", 1);
        
    }

    function mousemove(d) {
       // var string = "<img src= + "+ getImagePath(JSON.stringify(d.info)) +"+ />";
        div
        
               //  .html(string) //this will add the image on mouseover
                    // .style("left", (d3.event.pageX + 10) + "px")     
                    // .style("top", (d3.event.pageY + 50) + "px")
                    // .style("font-color", "white")
        .text(`Feature : ${d.name}
Label : ${(JSON.stringify(d.info),0)} 
Description : ${(JSON.stringify(d.info),1)} 
Description Source : ${(JSON.stringify(d.info),2)}`)
       // .style("text-align",left)
        .style("left", (d3.event.pageX ) + "px")
        .style("top", (d3.event.pageY) + "px");

    }

    function mouseout() {
        div.transition()
        .duration(300)
        .style("opacity", 1e-6);
    }

    ///



      

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });

      //Added new
  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) 
      { 
        //   return d.feature ? "yellow" : "#fff";

        if(d.feature){
            return "red";
        }

        else if(d._children){
            return "yellow";
        }

        else{
            return "#fff";
        }
        
        
        });
        


    // nodeUpdate.select("circle")
    //   .attr("r",4,5)
    //   .style("fill", function(d) 
    //   { return d._children ? "red" : "#fff"; });  ////color == ff0000

  nodeUpdate.select("text")
      .style("fill-opacity", 1.5)
      .attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50)  + ")"; });

  // TODO: appropriate transform
  var nodeExit = node.exit().transition()
      .duration(duration)
      //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
        .attr("class","link")
        .attr("stroke",function(d){
            if (d.source.depth === 0) {
                return "#ccc";
            }
            if (d.source.depth === 1) {
                return "#ccc";
            }  
             if (d.source.depth === 2) {
                return "#ccc";
            } else if (d.source.depth === 3) {
                return "#ccc";
            }
            else{
                return "#ccc";
            } 
        })
        .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });
      
      

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

   

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });


  


  //nodes.forEach(function(c){c._children.feature});
  

 

//   node.forEach(function(d){
//     features.forEach(element=>{
//       if(d.text.includes(element)){
//           nodeUpdate.select("circle")
//         .style("fill", "#ff0000" );  
//       }
//     });
   
  
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  
  update(d);
}

// Collapse nodes
function collapse(d) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
}

